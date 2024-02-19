import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";
import { toClippingPacked } from "./to-clipping-packed";

export const SEMICIRCLE_VERTEX_COUNT = 6;
export const SEMICIRCLE_INDEX_COUNT = 4;
export const SEMICIRCLE_WORLD_SIZE: [number, number] = [0, 0];
const SEMICIRCLE_WORK_POINT: Point = new Point();

export const buildSemicircleClipping = (clippings: Float32Array, voffset: number): void => {
	const c111 = toClippingPacked(1, 1, 1);
	const c011 = toClippingPacked(0, 1, 1);
	const c101 = toClippingPacked(1, 0, 1);
	const c001 = toClippingPacked(0, 0, 1);

	let ic = voffset - 1;
	clippings[++ic] = c111;
	clippings[++ic] = c011;
	clippings[++ic] = c111;
	clippings[++ic] = c101;
	clippings[++ic] = c001;
	clippings[++ic] = c101;
};

export const buildSemicircleIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	let ii = ioffset * 3 - 1;
	indices[++ii] = voffset;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 3;

	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 4;
	indices[++ii] = voffset + 3;

	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 4;

	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 4;
};

export const buildSemicircleVertex = (
	vertices: Float32Array,
	voffset: number,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	strokeAlign: number,
	strokeWidth: number,
	internalTransform: Matrix,
	worldSize: typeof SEMICIRCLE_WORLD_SIZE
): void => {
	// Calculate the transformed positions
	//
	//  0       1       2
	// |-------|-------|
	// |3      |4      |5
	// |-------|-------|
	//
	const work = SEMICIRCLE_WORK_POINT;
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	work.set(-sx + originX, -sy + originY);
	internalTransform.apply(work, work);
	const x0 = work.x;
	const y0 = work.y;
	work.set(0 + originX, -sy + originY);
	internalTransform.apply(work, work);
	const x1 = work.x;
	const y1 = work.y;
	const dx = x1 - x0;
	const dy = y1 - y0;
	work.set(originX, originY);
	internalTransform.apply(work, work);
	const x4 = work.x;
	const y4 = work.y;
	const x3 = x4 - dx;
	const y3 = y4 - dy;

	// Vertices
	let iv = voffset * 2 - 1;
	vertices[++iv] = x0;
	vertices[++iv] = y0;
	vertices[++iv] = x1;
	vertices[++iv] = y1;
	vertices[++iv] = x1 + dx;
	vertices[++iv] = y1 + dy;

	vertices[++iv] = x3;
	vertices[++iv] = y3;
	vertices[++iv] = x4;
	vertices[++iv] = y4;
	vertices[++iv] = x4 + dx;
	vertices[++iv] = y4 + dy;

	worldSize[0] = toLength(x0, y0, x1, y1);
	worldSize[1] = toLength(x0, y0, x3, y3);
};

export const buildSemicircleStep = (
	steps: Float32Array,
	voffset: number,
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle,
	worldSize: typeof SEMICIRCLE_WORLD_SIZE
): void => {
	const scaleInvariant = toScaleInvariant(strokeStyle);
	const ws0 = worldSize[0];
	const ws1 = worldSize[1];
	let is = voffset * 6 - 1;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ws0;
	steps[++is] = ws1;
	steps[++is] = 2;
	steps[++is] = 2;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ws0;
	steps[++is] = ws1;
	steps[++is] = 1;
	steps[++is] = 2;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ws0;
	steps[++is] = ws1;
	steps[++is] = 2;
	steps[++is] = 2;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ws0;
	steps[++is] = ws1;
	steps[++is] = 2;
	steps[++is] = 1;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ws0;
	steps[++is] = ws1;
	steps[++is] = 1;
	steps[++is] = 1;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ws0;
	steps[++is] = ws1;
	steps[++is] = 2;
	steps[++is] = 1;
};

export const buildSemicircleUv = (
	uvs: Float32Array,
	voffset: number,
	textureUvs: TextureUvs
): void => {
	const x0 = textureUvs.x0;
	const x1 = textureUvs.x1;
	const x2 = textureUvs.x2;
	const x3 = textureUvs.x3;
	const y0 = textureUvs.y0;
	const y1 = textureUvs.y1;
	const y2 = textureUvs.y2;
	const y3 = textureUvs.y3;

	// UVs
	let iuv = voffset * 2 - 1;
	uvs[++iuv] = x0;
	uvs[++iuv] = y0;
	uvs[++iuv] = 0.5 * (x0 + x1);
	uvs[++iuv] = 0.5 * (y0 + y1);
	uvs[++iuv] = x1;
	uvs[++iuv] = y1;

	uvs[++iuv] = 0.5 * (x0 + x3);
	uvs[++iuv] = 0.5 * (y0 + y3);
	uvs[++iuv] = 0.5 * (x0 + x2);
	uvs[++iuv] = 0.5 * (y0 + y2);
	uvs[++iuv] = 0.5 * (x1 + x2);
	uvs[++iuv] = 0.5 * (y1 + y2);
};
