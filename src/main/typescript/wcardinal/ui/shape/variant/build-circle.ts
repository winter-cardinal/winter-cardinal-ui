import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";
import { toPackedF2x1024, toPackedI4x64 } from "./to-packed";
import { toDash } from "./to-dash";

export const CIRCLE_VERTEX_COUNT_OUTER = 9;
export const CIRCLE_VERTEX_COUNT_INNER = 8;
export const CIRCLE_VERTEX_COUNT = CIRCLE_VERTEX_COUNT_OUTER + CIRCLE_VERTEX_COUNT_INNER;
export const CIRCLE_INDEX_COUNT = 8;
export const CIRCLE_WORLD_SIZE: [number, number] = [0, 0];
const CIRCLE_WORK_POINT: Point = new Point();

export const buildCircleIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	let ii = ioffset * 3 - 1;
	for (let i = 0; i < CIRCLE_VERTEX_COUNT_OUTER - 1; ++i) {
		indices[++ii] = voffset + i;
		indices[++ii] = voffset + i + 1;
		indices[++ii] = voffset + i + CIRCLE_VERTEX_COUNT_OUTER;
	}
};

export const buildCircleVertex = (
	vertices: Float32Array,
	voffset: number,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	strokeAlign: number,
	strokeWidth: number,
	internalTransform: Matrix,
	worldSize: typeof CIRCLE_WORLD_SIZE
): void => {
	// Calculate the transformed positions
	//
	//  1       0 8       7
	//   |-------|-------|
	//   |    10 9 16    |
	// 2 |---11--|--15---| 6
	//   |    12 13 14   |
	//   |-------|-------|
	// 3         4        5
	//
	const work = CIRCLE_WORK_POINT;
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	work.set(originX + sx, originY);
	internalTransform.apply(work, work);
	const x6 = work.x;
	const y6 = work.y;
	work.set(0 + originX, -sy + originY);
	internalTransform.apply(work, work);
	const x0 = work.x;
	const y0 = work.y;
	work.set(originX, originY);
	internalTransform.apply(work, work);
	const x8 = work.x;
	const y8 = work.y;

	const hx = x6 - x8;
	const hy = y6 - y8;
	const vx = x0 - x8;
	const vy = y0 - y8;

	// Outer Vertices
	let iv = voffset * 2 - 1;
	vertices[++iv] = x0;
	vertices[++iv] = y0;
	vertices[++iv] = x0 - hx;
	vertices[++iv] = y0 - hy;
	vertices[++iv] = x8 - hx;
	vertices[++iv] = y8 - hy;
	vertices[++iv] = x8 - hx - vx;
	vertices[++iv] = y8 - hy - vy;
	vertices[++iv] = x8 - vx;
	vertices[++iv] = y8 - vy;
	vertices[++iv] = x8 + hx - vx;
	vertices[++iv] = y8 + hy - vy;
	vertices[++iv] = x6;
	vertices[++iv] = y6;
	vertices[++iv] = x6 + vx;
	vertices[++iv] = y6 + vy;
	vertices[++iv] = x0;
	vertices[++iv] = y0;

	// Inner Vertices
	for (let i = 0; i < CIRCLE_VERTEX_COUNT_INNER; ++i) {
		vertices[++iv] = x8;
		vertices[++iv] = y8;
	}

	// Lengthes
	worldSize[0] = toLength(x8, y8, x6, y6);
	worldSize[1] = toLength(x8, y8, x0, y0);
};

export const buildCircleStep = (
	steps: Float32Array,
	voffset: number,
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle,
	worldSize: typeof CIRCLE_WORLD_SIZE
): void => {
	const scaleInvariant = toScaleInvariant(strokeStyle);
	const ax = worldSize[0];
	const ay = worldSize[1];

	const dash = toDash(strokeStyle);
	const e = toPackedI4x64(1, scaleInvariant, 1, dash);

	const c11 = toPackedF2x1024(1, 1);
	const c01 = toPackedF2x1024(0, 1);
	const c10 = toPackedF2x1024(1, 0);
	const c00 = toPackedF2x1024(0, 0);

	// Outer Vertices
	let is = voffset * 6 - 1;
	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c01;
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c11;
	const l1 = toCircleLength(ax, ay, Math.PI * 0.25);
	steps[++is] = l1;

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c10;
	const l2 = toCircleLength(ax, ay, Math.PI * 0.5);
	steps[++is] = l2;

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c11;
	const l3 = toCircleLength(ax, ay, Math.PI * 0.75);
	steps[++is] = l3;

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c01;
	const l4 = toCircleLength(ax, ay, Math.PI);
	steps[++is] = l4;

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c11;
	const l5 = toCircleLength(ax, ay, Math.PI * 1.25);
	steps[++is] = l5;

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c10;
	const l6 = toCircleLength(ax, ay, Math.PI * 1.5);
	steps[++is] = l6;

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c11;
	const l7 = toCircleLength(ax, ay, Math.PI * 1.75);
	steps[++is] = l7;

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c01;
	const l8 = toCircleLength(ax, ay, Math.PI * 2);
	steps[++is] = l8;

	// Inner Vertices
	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;
	steps[++is] = 0.5 * (0 + l1);

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;
	steps[++is] = 0.5 * (l1 + l2);

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;
	steps[++is] = 0.5 * (l2 + l3);

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;
	steps[++is] = 0.5 * (l3 + l4);

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;
	steps[++is] = 0.5 * (l4 + l5);

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;
	steps[++is] = 0.5 * (l5 + l6);

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;
	steps[++is] = 0.5 * (l6 + l7);

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;
	steps[++is] = 0.5 * (l7 + l8);
};

export const buildCircleUv = (uvs: Float32Array, voffset: number, textureUvs: TextureUvs): void => {
	const x0 = textureUvs.x0;
	const x1 = textureUvs.x1;
	const x2 = textureUvs.x2;
	const x3 = textureUvs.x3;
	const y0 = textureUvs.y0;
	const y1 = textureUvs.y1;
	const y2 = textureUvs.y2;
	const y3 = textureUvs.y3;

	const hx = 0.5 * (x1 - x0);
	const hy = 0.5 * (y1 - y0);
	const vx = 0.5 * (x0 - x3);
	const vy = 0.5 * (y0 - y3);

	// Outer Vertices
	let iuv = voffset * 2 - 1;
	uvs[++iuv] = x0 + hx;
	uvs[++iuv] = y0 + hy;
	uvs[++iuv] = x0;
	uvs[++iuv] = y0;
	uvs[++iuv] = x0 - vx;
	uvs[++iuv] = y0 - vy;
	uvs[++iuv] = x3;
	uvs[++iuv] = y3;
	uvs[++iuv] = x3 + hx;
	uvs[++iuv] = y3 + hy;
	uvs[++iuv] = x2;
	uvs[++iuv] = y2;
	uvs[++iuv] = x2 + vx;
	uvs[++iuv] = y2 + vy;
	uvs[++iuv] = x1;
	uvs[++iuv] = y1;
	uvs[++iuv] = x0 + hx;
	uvs[++iuv] = y0 + hy;

	// Inner Vertices
	const cx = x0 + hx - vx;
	const cy = y0 + hy - vy;
	for (let i = 0; i < CIRCLE_VERTEX_COUNT_INNER; ++i) {
		uvs[++iuv] = cx;
		uvs[++iuv] = cy;
	}
};

export const toCircleLength = (a: number, b: number, n: number): number => {
	if (a <= b) {
		return toCircleLength1(a, b, n);
	} else {
		return toCircleLength2(a, b, n);
	}
};

export const toCircleLength1 = (a: number, b: number, n: number): number => {
	const e2 = 1.0 - (a * a) / (b * b); // Square of eccentricity
	const e4 = e2 * e2;

	// The length of a quarter perimeter (90 degrees)
	const qn = 1.0 - 0.5625 * e2 + 0.046875 * e4;
	const qd = 1.0 - 0.3125 * e2 - 0.015625 * e4;
	const PI_2 = Math.PI * 0.5;
	const q = b * PI_2 * (qn / qd);

	// Fold the angle 'n' into the first quadrant (0 to PI_2)
	const nq = Math.floor(n / PI_2);
	const r = n % PI_2;
	const odd = nq % 2.0;
	const ra = r + odd * (PI_2 - 2.0 * r);

	// Pade approximation
	const s = Math.sin(ra);
	const x = e2 * s * s;
	const x2 = x * x;

	const rn = 1.0 - 0.375 * x + 0.0234375 * x2;
	const rd = 1.0 - 0.125 * x - 0.0078125 * x2;
	const rb = b * ra * (rn / rd);

	return nq * q + odd * (q - 2.0 * rb) + rb;
};

export const toCircleLength2 = (a: number, b: number, n: number): number => {
	const e2 = 1.0 - (b * b) / (a * a); // Square of eccentricity
	const e4 = e2 * e2;

	// The length of a quarter perimeter (90 degrees)
	const qn = 1.0 - 0.5625 * e2 + 0.046875 * e4;
	const qd = 1.0 - 0.3125 * e2 - 0.015625 * e4;
	const PI_2 = Math.PI * 0.5;
	const q = a * PI_2 * (qn / qd);

	// Fold the angle 'n' into the first quadrant (0 to PI_2)
	n = (n + PI_2) % (Math.PI * 2);
	const nq = Math.floor(n / PI_2);
	const r = n % PI_2;
	const odd = nq % 2.0; // 1.0 for odd quarters, 0.0 for even
	const ra = r + odd * (PI_2 - 2.0 * r);

	// Pade approximation
	const s = Math.sin(ra);
	const x = e2 * s * s;
	const x2 = x * x;

	const rn = 1.0 - 0.375 * x + 0.0234375 * x2;
	const rd = 1.0 - 0.125 * x - 0.0078125 * x2;
	const rb = a * ra * (rn / rd);

	return (nq * q + odd * (q - 2.0 * rb) + rb + 3 * q) % (4 * q);
};
