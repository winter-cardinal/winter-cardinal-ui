import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";
import { toClippingPacked } from "./to-clipping-packed";

export const TRIANGLE_VERTEX_COUNT = 7;
export const TRIANGLE_INDEX_COUNT = 3;
export const TRIANGLE_WORLD_SIZE: [number, number, number] = [0, 0, 0];
const TRIANGLE_WORK_POINT: Point = new Point();

export const buildTriangleClipping = (clippings: Float32Array, voffset: number): void => {
	const c000 = toClippingPacked(0, 0, 0);
	const c100 = toClippingPacked(1, 0, 0);
	const c010 = toClippingPacked(0, 1, 0);

	let iv = voffset - 1;
	clippings[++iv] = c000;
	clippings[++iv] = c100;
	clippings[++iv] = c100;
	clippings[++iv] = c010;
	clippings[++iv] = c010;
	clippings[++iv] = c100;
	clippings[++iv] = c100;
};

export const buildTriangleIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	// Indices
	let ii = ioffset * 3 - 1;
	indices[++ii] = voffset + 0;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 2;

	indices[++ii] = voffset + 0;
	indices[++ii] = voffset + 3;
	indices[++ii] = voffset + 4;

	indices[++ii] = voffset + 0;
	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 6;
};

export const buildTriangleVertex = (
	vertices: Float32Array,
	voffset: number,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	strokeAlign: number,
	strokeWidth: number,
	internalTransform: Matrix,
	worldSize: typeof TRIANGLE_WORLD_SIZE
): void => {
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	const sz = Math.sqrt(sx * sx + 4 * sy * sy);
	const sw = (2 * sx * sy) / (sx + sz);

	const work = TRIANGLE_WORK_POINT;
	work.set(originX, originY - sy);
	internalTransform.apply(work, work);
	const x0 = work.x;
	const y0 = work.y;
	work.set(originX, originY);
	internalTransform.apply(work, work);
	const tx = work.x;
	const ty = work.y;
	work.set(originX + sx, originY);
	internalTransform.apply(work, work);
	const dx = tx - x0;
	const dy = ty - y0;
	const x1 = work.x + dx;
	const y1 = work.y + dy;
	const x2 = tx + (tx - work.x) + dx;
	const y2 = ty + (ty - work.y) + dy;
	work.set(originX, originY + sy - sw); // Incenter of a triangle
	internalTransform.apply(work, work);
	const x3 = work.x;
	const y3 = work.y;

	// World size
	const xb = tx + dx;
	const yb = ty + dy;
	worldSize[0] = toLength(xb, yb, x3, y3);
	worldSize[1] = toLength(x1, y1, xb, yb);
	worldSize[2] = toLength(x0, y0, tx, ty);

	// Vertices
	let iv = (voffset << 1) - 1;
	vertices[++iv] = x3;
	vertices[++iv] = y3;

	vertices[++iv] = x0;
	vertices[++iv] = y0;
	vertices[++iv] = x1;
	vertices[++iv] = y1;

	vertices[++iv] = x1;
	vertices[++iv] = y1;
	vertices[++iv] = x2;
	vertices[++iv] = y2;

	vertices[++iv] = x2;
	vertices[++iv] = y2;
	vertices[++iv] = x0;
	vertices[++iv] = y0;
};

export const buildTriangleStep = (
	steps: Float32Array,
	voffset: number,
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle,
	worldSize: typeof TRIANGLE_WORLD_SIZE
): void => {
	const scaleInvariant = toScaleInvariant(strokeStyle);
	const s = worldSize[0];

	// 000
	let is = voffset * 6 - 1;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 1;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 2;
	steps[++is] = 1;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 2;
	steps[++is] = 1;

	// 010
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 2;

	// 010
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 2;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 2;
	steps[++is] = 1;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 2;
	steps[++is] = 1;
};

export const buildTriangleUv = (
	uvs: Float32Array,
	textureUvs: TextureUvs,
	voffset: number,
	worldSize: typeof TRIANGLE_WORLD_SIZE
): void => {
	const x0 = textureUvs.x0;
	const x1 = textureUvs.x1;
	const x2 = textureUvs.x2;
	const x3 = textureUvs.x3;
	const y0 = textureUvs.y0;
	const y1 = textureUvs.y1;
	const y2 = textureUvs.y2;
	const y3 = textureUvs.y3;

	const x4 = 0.5 * (x0 + x1);
	const y4 = 0.5 * (y0 + y1);

	const c = 1 - (0.5 * worldSize[0]) / worldSize[2];
	const x5 = x4 + c * (x3 - x0);
	const y5 = y4 + c * (y3 - y0);

	let iuv = (voffset << 1) - 1;
	uvs[++iuv] = x5;
	uvs[++iuv] = y5;

	uvs[++iuv] = x4;
	uvs[++iuv] = y4;
	uvs[++iuv] = x2;
	uvs[++iuv] = y2;

	uvs[++iuv] = x2;
	uvs[++iuv] = y2;
	uvs[++iuv] = x3;
	uvs[++iuv] = y3;

	uvs[++iuv] = x3;
	uvs[++iuv] = y3;
	uvs[++iuv] = x4;
	uvs[++iuv] = y4;
};
