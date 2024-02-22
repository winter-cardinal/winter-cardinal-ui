import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";
import { toClippingPacked } from "./to-clipping-packed";

export const RECTANGLE_VERTEX_COUNT = 16;
export const RECTANGLE_INDEX_COUNT = 8;
export const RECTANGLE_WORLD_SIZE: [number, number] = [0, 0];
const RECTANGLE_WORK_POINT: Point = new Point();

export const buildRectangleClipping = (clippings: Float32Array, voffset: number): void => {
	const c110 = toClippingPacked(1, 1, 0);
	const c010 = toClippingPacked(0, 1, 0);
	const c000 = toClippingPacked(0, 0, 0);
	const c100 = toClippingPacked(1, 0, 0);

	let ic = voffset - 1;
	clippings[++ic] = c110;
	clippings[++ic] = c010;
	clippings[++ic] = c010;
	clippings[++ic] = c110;

	clippings[++ic] = c100;
	clippings[++ic] = c000;
	clippings[++ic] = c000;
	clippings[++ic] = c100;

	clippings[++ic] = c100;
	clippings[++ic] = c000;
	clippings[++ic] = c000;
	clippings[++ic] = c100;

	clippings[++ic] = c110;
	clippings[++ic] = c010;
	clippings[++ic] = c010;
	clippings[++ic] = c110;
};

export const buildRectangleIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	let ii = ioffset * 3 - 1;
	indices[++ii] = voffset + 0;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 4;

	indices[++ii] = voffset + 4;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 5;

	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 3;
	indices[++ii] = voffset + 6;

	indices[++ii] = voffset + 6;
	indices[++ii] = voffset + 3;
	indices[++ii] = voffset + 7;

	indices[++ii] = voffset + 8;
	indices[++ii] = voffset + 9;
	indices[++ii] = voffset + 12;

	indices[++ii] = voffset + 12;
	indices[++ii] = voffset + 9;
	indices[++ii] = voffset + 13;

	indices[++ii] = voffset + 10;
	indices[++ii] = voffset + 11;
	indices[++ii] = voffset + 14;

	indices[++ii] = voffset + 14;
	indices[++ii] = voffset + 11;
	indices[++ii] = voffset + 15;
};

export const buildRectangleVertex = (
	vertices: Float32Array,
	voffset: number,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	strokeAlign: number,
	strokeWidth: number,
	internalTransform: Matrix,
	worldSize: typeof RECTANGLE_WORLD_SIZE
): void => {
	// b0              b1
	// |-------|-------|
	// |       |       |
	// |-------|-------|
	// |       |       |
	// |-------|-------|
	// b3              b2
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	const work = RECTANGLE_WORK_POINT;
	work.set(originX - sx, originY - sy);
	internalTransform.apply(work, work);
	const b0x = work.x;
	const b0y = work.y;
	work.set(originX + sx, originY - sy);
	internalTransform.apply(work, work);
	const b1x = work.x;
	const b1y = work.y;
	work.set(originX + sx, originY + sy);
	internalTransform.apply(work, work);
	const b2x = work.x;
	const b2y = work.y;
	const b3x = b0x + (b2x - b1x);
	const b3y = b0y + (b2y - b1y);

	const ax = toLength(b0x, b0y, b1x, b1y) * 0.5;
	const ay = toLength(b1x, b1y, b2x, b2y) * 0.5;
	worldSize[0] = ax;
	worldSize[1] = ay;

	// c0     c1   c2     c3
	//  |-----|     |-----|
	//  |     |     |     |
	//  |-----|     |-----|
	// c4     c5   c6     c7
	//
	// c8     c9   c10   c11
	//  |-----|     |-----|
	//  |     |     |     |
	//  |-----|     |-----|
	// c12   c13   c14   c15
	const d01x = (b1x - b0x) * 0.5;
	const d01y = (b1y - b0y) * 0.5;
	const d03x = (b3x - b0x) * 0.5;
	const d03y = (b3y - b0y) * 0.5;

	const c1x = b0x + d01x;
	const c1y = b0y + d01y;
	const c4x = b0x + d03x;
	const c4y = b0y + d03y;
	const c5x = c4x + d01x;
	const c5y = c4y + d01y;
	const c7x = b1x + d03x;
	const c7y = b1y + d03y;
	const c13x = b3x + d01x;
	const c13y = b3y + d01y;

	let iv = (voffset << 1) - 1;
	vertices[++iv] = b0x;
	vertices[++iv] = b0y;
	vertices[++iv] = c1x;
	vertices[++iv] = c1y;
	vertices[++iv] = c1x;
	vertices[++iv] = c1y;
	vertices[++iv] = b1x;
	vertices[++iv] = b1y;

	vertices[++iv] = c4x;
	vertices[++iv] = c4y;
	vertices[++iv] = c5x;
	vertices[++iv] = c5y;
	vertices[++iv] = c5x;
	vertices[++iv] = c5y;
	vertices[++iv] = c7x;
	vertices[++iv] = c7y;

	vertices[++iv] = c4x;
	vertices[++iv] = c4y;
	vertices[++iv] = c5x;
	vertices[++iv] = c5y;
	vertices[++iv] = c5x;
	vertices[++iv] = c5y;
	vertices[++iv] = c7x;
	vertices[++iv] = c7y;

	vertices[++iv] = b3x;
	vertices[++iv] = b3y;
	vertices[++iv] = c13x;
	vertices[++iv] = c13y;
	vertices[++iv] = c13x;
	vertices[++iv] = c13y;
	vertices[++iv] = b2x;
	vertices[++iv] = b2y;
};

export const buildRectangleStep = (
	voffset: number,
	steps: Float32Array,
	strokeWidth: number,
	strokeSide: EShapeStrokeSide,
	strokeStyle: EShapeStrokeStyle,
	worldSize: typeof RECTANGLE_WORLD_SIZE
): void => {
	const scaleInvariant = toScaleInvariant(strokeStyle);
	const ax = worldSize[0];
	const ay = worldSize[1];
	const wt = strokeSide & EShapeStrokeSide.TOP ? 1 : 0;
	const wr = strokeSide & EShapeStrokeSide.RIGHT ? 1 : 0;
	const wb = strokeSide & EShapeStrokeSide.BOTTOM ? 1 : 0;
	const wl = strokeSide & EShapeStrokeSide.LEFT ? 1 : 0;

	// 0 1 2 3
	let is = (voffset - 1) * 6 - 1;
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wl, wt);
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wl, wt);
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wr, wt);
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wr, wt);

	// 4 5 6 7
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wl, wt);
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wl, wt);
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wr, wt);
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wr, wt);

	// 8 9 10 11
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wl, wb);
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wl, wb);
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wr, wb);
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wr, wb);

	// 12 13 14 15
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wl, wb);
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wl, wb);
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wr, wb);
	fillRectangleStep(steps, (is += 6), strokeWidth, scaleInvariant, ax, ay, wr, wb);
};

const fillRectangleStep = (
	steps: Float32Array,
	is: number,
	v0: number,
	v1: number,
	v2: number,
	v3: number,
	v4: number,
	v5: number
): void => {
	steps[++is] = v0;
	steps[++is] = v1;
	steps[++is] = v2;
	steps[++is] = v3;
	steps[++is] = v4;
	steps[++is] = v5;
};

export const buildRectangleUv = (
	uvs: Float32Array,
	voffset: number,
	textureUvs: TextureUvs
): void => {
	const b0x = textureUvs.x0;
	const b0y = textureUvs.y0;
	const b1y = textureUvs.y1;
	const b1x = textureUvs.x1;
	const b2y = textureUvs.y2;
	const b2x = textureUvs.x2;
	const b3y = textureUvs.y3;
	const b3x = textureUvs.x3;

	const d01x = (b1x - b0x) * 0.5;
	const d01y = (b1y - b0y) * 0.5;
	const d03x = (b3x - b0x) * 0.5;
	const d03y = (b3y - b0y) * 0.5;

	const c1x = b0x + d01x;
	const c1y = b0y + d01y;
	const c4x = b0x + d03x;
	const c4y = b0y + d03y;
	const c5x = c4x + d01x;
	const c5y = c4y + d01y;
	const c7x = b1x + d03x;
	const c7y = b1y + d03y;
	const c13x = b3x + d01x;
	const c13y = b3y + d01y;

	// UVs
	let iuv = (voffset << 1) - 1;
	uvs[++iuv] = b0x;
	uvs[++iuv] = b0y;
	uvs[++iuv] = c1x;
	uvs[++iuv] = c1y;
	uvs[++iuv] = c1x;
	uvs[++iuv] = c1y;
	uvs[++iuv] = b1x;
	uvs[++iuv] = b1y;

	uvs[++iuv] = c4x;
	uvs[++iuv] = c4y;
	uvs[++iuv] = c5x;
	uvs[++iuv] = c5y;
	uvs[++iuv] = c5x;
	uvs[++iuv] = c5y;
	uvs[++iuv] = c7x;
	uvs[++iuv] = c7y;

	uvs[++iuv] = c4x;
	uvs[++iuv] = c4y;
	uvs[++iuv] = c5x;
	uvs[++iuv] = c5y;
	uvs[++iuv] = c5x;
	uvs[++iuv] = c5y;
	uvs[++iuv] = c7x;
	uvs[++iuv] = c7y;

	uvs[++iuv] = b3x;
	uvs[++iuv] = b3y;
	uvs[++iuv] = c13x;
	uvs[++iuv] = c13y;
	uvs[++iuv] = c13x;
	uvs[++iuv] = c13y;
	uvs[++iuv] = b2x;
	uvs[++iuv] = b2y;
};
