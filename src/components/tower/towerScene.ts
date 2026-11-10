import {
  ACESFilmicToneMapping,
  CylinderGeometry,
  DirectionalLight,
  EdgesGeometry,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  PerspectiveCamera,
  PMREMGenerator,
  PointLight,
  Scene,
  WebGLRenderer,
} from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { createSlabGeometry } from "./slabGeometry";

export interface TowerColors {
  slab: number;
  emissive: number;
  edge: number;
  core: number;
}

export interface TowerScene {
  setColors: (colors: TowerColors) => void;
  dispose: () => void;
}

const FLOORS = 16;
const FLOOR_GAP = 0.3;
const BASE_TWIST = 0.1;
/** Wie weit die Geschosse beim Scrollen auseinanderrücken, als Anteil des Abstands. */
const SCROLL_SPREAD = 0.6;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Baut den Turm in ein Canvas: sechzehn Geschossplatten aus violettem Glas
 * um einen leuchtenden Kern. Beim Start fällt zuerst das Tragwerk als Linie
 * ein, dann schließt sich die Fassade. Danach dreht er sich, folgt der Maus
 * und verwindet sich beim Scrollen. Bei reduzierter Bewegung steht er fertig
 * und still. Die Schleife pausiert, solange das Canvas nicht sichtbar ist.
 */
export function createTowerScene(
  canvas: HTMLCanvasElement,
  { colors, reducedMotion }: { colors: TowerColors; reducedMotion: boolean },
): TowerScene {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = environment;

  const camera = new PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, -0.2, 12.5);

  const key = new DirectionalLight(0xffffff, 1.4);
  key.position.set(3, 5, 4);
  scene.add(key, new PointLight(0x9775fa, 8, 9, 1.6));

  const slabGeometry = createSlabGeometry();
  const edgeGeometry = new EdgesGeometry(slabGeometry, 25);
  const tower = new Group();
  scene.add(tower);

  const floors = Array.from({ length: FLOORS }, (_, i) => {
    const solid = new Mesh(
      slabGeometry,
      new MeshPhysicalMaterial({
        roughness: 0.14,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
        iridescence: 0.8,
        iridescenceIOR: 1.35,
        emissiveIntensity: 0.35,
        transparent: true,
        opacity: 0,
      }),
    );
    const edge = new LineSegments(
      edgeGeometry,
      new LineBasicMaterial({ transparent: true, opacity: 0 }),
    );
    const floor = new Group();
    floor.add(solid, edge);
    tower.add(floor);
    return { floor, solid, edge, y: (i - (FLOORS - 1) / 2) * FLOOR_GAP };
  });

  const coreGeometry = new CylinderGeometry(0.36, 0.36, FLOORS * FLOOR_GAP, 32);
  const core = new Mesh(
    coreGeometry,
    new MeshBasicMaterial({ transparent: true, opacity: 0 }),
  );
  tower.add(core);

  function setColors(next: TowerColors) {
    for (const { solid, edge } of floors) {
      solid.material.color.setHex(next.slab);
      solid.material.emissive.setHex(next.emissive);
      edge.material.color.setHex(next.edge);
    }
    core.material.color.setHex(next.core);
    requestFrame();
  }

  /** Bauablauf: erst Tragwerk, dann Fassade, zuletzt Licht im Kern. */
  function build(seconds: number, spread: number) {
    floors.forEach(({ floor, solid, edge, y }, i) => {
      const structure = easeOut(clamp01((seconds - i * 0.07) / 0.7));
      const facade = easeOut(clamp01((seconds - 1.3 - i * 0.05) / 0.6));
      floor.position.y = y * (1 + spread) + (1 - structure) * 1.2;
      edge.material.opacity = structure * (1 - 0.7 * facade);
      solid.material.opacity = facade * 0.88;
    });
    core.material.opacity = clamp01((seconds - 2.2) / 0.8) * 0.75;
    core.scale.y = 1 + spread;
  }

  const pointer = { x: 0, y: 0 };
  const smooth = { x: 0, y: 0, scroll: 0 };

  function draw(seconds: number) {
    const scroll = clamp01(window.scrollY / Math.max(canvas.clientHeight, 1));
    smooth.x += (pointer.x - smooth.x) * 0.06;
    smooth.y += (pointer.y - smooth.y) * 0.06;
    smooth.scroll += (scroll - smooth.scroll) * 0.1;
    // Beim Scrollen fächert sich der Turm auf: die Geschosse rücken auseinander.
    build(seconds, reducedMotion ? 0 : smooth.scroll * SCROLL_SPREAD);

    const twist = BASE_TWIST + smooth.scroll * 0.14;
    floors.forEach(({ floor }, i) => {
      floor.rotation.y = i * twist;
    });
    const idle = reducedMotion ? 0.6 : seconds * 0.12;
    tower.rotation.y = idle + smooth.x * 0.6 + smooth.scroll * 1.2;
    tower.rotation.x = smooth.y * 0.18;
    tower.rotation.z = -smooth.x * 0.06;
    tower.position.y = smooth.scroll * 0.9;
    renderer.render(scene, camera);
  }

  let running = false;
  let visible = true;
  let start: number | null = null;
  let frameId = 0;

  function loop(now: number) {
    if (start === null) start = now;
    draw((now - start) / 1000);
    if (visible) frameId = requestAnimationFrame(loop);
    else running = false;
  }

  function requestFrame() {
    if (reducedMotion) {
      draw(99);
      return;
    }
    if (!running && visible) {
      running = true;
      frameId = requestAnimationFrame(loop);
    }
  }

  function resize() {
    const { clientWidth: width, clientHeight: height } = canvas;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.position.z = Math.max(12.5, 7.5 / camera.aspect);
    camera.updateProjectionMatrix();
    requestFrame();
  }

  const onPointer = (event: PointerEvent) => {
    pointer.x = event.clientX / window.innerWidth - 0.5;
    pointer.y = event.clientY / window.innerHeight - 0.5;
  };
  const onScroll = () => requestFrame();

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    requestFrame();
  });
  visibilityObserver.observe(canvas);
  if (reducedMotion) window.addEventListener("scroll", onScroll, { passive: true });
  else window.addEventListener("pointermove", onPointer);

  setColors(colors);
  resize();

  return {
    setColors,
    dispose() {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      for (const { solid, edge } of floors) {
        solid.material.dispose();
        edge.material.dispose();
      }
      core.material.dispose();
      slabGeometry.dispose();
      edgeGeometry.dispose();
      coreGeometry.dispose();
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
    },
  };
}
