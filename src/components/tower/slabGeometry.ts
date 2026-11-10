import { ExtrudeGeometry, Shape } from "three";

/** Maße einer Geschossplatte in Szeneneinheiten. */
const WIDTH = 2.4;
const DEPTH = 1.5;
const CORNER = 0.32;

/** Geschossplatte: abgerundetes Rechteck, flach extrudiert, mittig zentriert. */
export function createSlabGeometry(): ExtrudeGeometry {
  const w = WIDTH / 2;
  const d = DEPTH / 2;
  const r = CORNER;

  const shape = new Shape();
  shape.moveTo(-w + r, -d);
  shape.lineTo(w - r, -d);
  shape.quadraticCurveTo(w, -d, w, -d + r);
  shape.lineTo(w, d - r);
  shape.quadraticCurveTo(w, d, w - r, d);
  shape.lineTo(-w + r, d);
  shape.quadraticCurveTo(-w, d, -w, d - r);
  shape.lineTo(-w, -d + r);
  shape.quadraticCurveTo(-w, -d, -w + r, -d);

  const geometry = new ExtrudeGeometry(shape, {
    depth: 0.06,
    bevelEnabled: true,
    bevelSize: 0.04,
    bevelThickness: 0.04,
    bevelSegments: 4,
    curveSegments: 10,
  });
  geometry.rotateX(-Math.PI / 2);
  geometry.center();
  return geometry;
}
