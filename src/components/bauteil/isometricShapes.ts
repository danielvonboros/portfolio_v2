/**
 * Isometrische Strichzeichnungen der drei Bauteile, als SVG-Pfade berechnet:
 * Raster = Oberfläche (Frontend), Schichten = Tiefe (Fullstack),
 * Volumen = das ganze Haus (Website).
 */

export type BauteilShape = "raster" | "schichten" | "volumen";

type Point3 = [number, number, number];

export interface BauteilDrawing {
  faces: { d: string; top: boolean }[];
  edges: string[];
  viewBox: string;
}

const SCALE = 19;
const COS30 = Math.cos(Math.PI / 6);
const PADDING = 4;

function project([x, y, z]: Point3): [number, number] {
  return [(x - y) * COS30 * SCALE, (x + y) * 0.5 * SCALE - z * SCALE];
}

function pathFrom(points: Point3[], closed = true): string {
  const d = points
    .map((p, i) => {
      const [px, py] = project(p);
      return `${i ? "L" : "M"}${px.toFixed(1)} ${py.toFixed(1)}`;
    })
    .join(" ");
  return closed ? `${d} Z` : d;
}

/** Sichtbare Flächen eines Quaders: oben, vorne links, vorne rechts. */
function box(x: number, y: number, z: number, w: number, d: number, h: number) {
  return {
    top: [[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]] as Point3[],
    left: [[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]] as Point3[],
    right: [[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]] as Point3[],
  };
}

function shapeParts(shape: BauteilShape) {
  const faces: { points: Point3[]; top: boolean }[] = [];
  const lines: Point3[][] = [];

  if (shape === "raster") {
    faces.push({ points: box(0, 0, 0, 3, 3, 0).top, top: true });
    for (const t of [1, 2]) {
      lines.push([[t, 0, 0], [t, 3, 0]], [[0, t, 0], [3, t, 0]]);
    }
  }
  if (shape === "schichten") {
    for (const z of [0, 0.8, 1.6]) {
      const plate = box(0, 0, z, 3, 3, 0.25);
      faces.push(
        { points: plate.left, top: false },
        { points: plate.right, top: false },
        { points: plate.top, top: true },
      );
    }
  }
  if (shape === "volumen") {
    const block = box(0.4, 0.4, 0, 2.2, 2.2, 2.6);
    faces.push(
      { points: block.left, top: false },
      { points: block.right, top: false },
      { points: block.top, top: true },
    );
    for (const z of [0.65, 1.3, 1.95]) {
      lines.push([[0.4, 2.6, z], [2.6, 2.6, z], [2.6, 0.4, z]]);
    }
  }
  return { faces, lines };
}

export function drawBauteil(shape: BauteilShape): BauteilDrawing {
  const { faces, lines } = shapeParts(shape);
  const projected = [...faces.flatMap((f) => f.points), ...lines.flat()].map(project);
  const xs = projected.map(([x]) => x);
  const ys = projected.map(([, y]) => y);
  const minX = Math.min(...xs) - PADDING;
  const minY = Math.min(...ys) - PADDING;
  const width = Math.max(...xs) - minX + PADDING;
  const height = Math.max(...ys) - minY + PADDING;

  return {
    faces: faces.map((f) => ({ d: pathFrom(f.points), top: f.top })),
    edges: [
      ...faces.map((f) => pathFrom(f.points)),
      ...lines.map((line) => pathFrom(line, false)),
    ],
    viewBox: `${minX.toFixed(1)} ${minY.toFixed(1)} ${width.toFixed(1)} ${height.toFixed(1)}`,
  };
}
