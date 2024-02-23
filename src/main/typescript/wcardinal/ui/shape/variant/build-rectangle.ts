import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";
import { toPackedF2x1024, toPackedI4x64 } from "./to-packed";

export const RECTANGLE_VERTEX_COUNT = 16;
export const RECTANGLE_INDEX_COUNT = 8;
export const RECTANGLE_WORLD_SIZE: [number, number] = [0, 0];
const RECTANGLE_WORK_POINT: Point = new Point();

export const buildRectangleIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	// c0     c1   c4     c5
	//  |-----|     |-----|
	//  |     |     |     |
	//  |-----|     |-----|
	// c2     c3   c6     c7
	//
	// c8     c9   c12   c13
	//  |-----|     |-----|
	//  |     |     |     |
	//  |-----|     |-----|
	// c10   c11   c14   c15
	let ii = ioffset * 3 - 1;
	indices[++ii] = voffset + 0;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 3;

	indices[++ii] = voffset + 4;
	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 6;
	indices[++ii] = voffset + 6;
	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 7;

	indices[++ii] = voffset + 8;
	indices[++ii] = voffset + 9;
	indices[++ii] = voffset + 10;
	indices[++ii] = voffset + 10;
	indices[++ii] = voffset + 9;
	indices[++ii] = voffset + 11;

	indices[++ii] = voffset + 12;
	indices[++ii] = voffset + 13;
	indices[++ii] = voffset + 14;
	indices[++ii] = voffset + 14;
	indices[++ii] = voffset + 13;
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
	// b0      b1      b2
	// |-------|-------|
	// |       |       |
	// b3------b4------b5
	// |       |       |
	// |-------|-------|
	// b6      b7      b8
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	const work = RECTANGLE_WORK_POINT;
	work.set(originX - sx, originY - sy);
	internalTransform.apply(work, work);
	const b0x = work.x;
	const b0y = work.y;
	work.set(originX, originY - sy);
	internalTransform.apply(work, work);
	const b1x = work.x;
	const b1y = work.y;
	work.set(originX - sx, originY);
	internalTransform.apply(work, work);
	const b3x = work.x;
	const b3y = work.y;

	const d01x = b1x - b0x;
	const d01y = b1y - b0y;
	const d03x = b3x - b0x;
	const d03y = b3y - b0y;

	const b2x = b1x + d01x;
	const b2y = b1y + d01y;
	const b4x = b3x + d01x;
	const b4y = b3y + d01y;
	const b5x = b2x + d03x;
	const b5y = b2y + d03y;
	const b6x = b3x + d03x;
	const b6y = b3y + d03y;
	const b7x = b6x + d01x;
	const b7y = b6y + d01y;
	const b8x = b7x + d01x;
	const b8y = b7y + d01y;

	// c0     c1   c4     c5
	//  |-----|     |-----|
	//  |     |     |     |
	//  |-----|     |-----|
	// c2     c3   c6     c7
	//
	// c8     c9   c12   c13
	//  |-----|     |-----|
	//  |     |     |     |
	//  |-----|     |-----|
	// c10   c11   c14   c15
	let iv = (voffset << 1) - 1;
	vertices[++iv] = b0x;
	vertices[++iv] = b0y;
	vertices[++iv] = b1x;
	vertices[++iv] = b1y;
	vertices[++iv] = b3x;
	vertices[++iv] = b3y;
	vertices[++iv] = b4x;
	vertices[++iv] = b4y;

	vertices[++iv] = b1x;
	vertices[++iv] = b1y;
	vertices[++iv] = b2x;
	vertices[++iv] = b2y;
	vertices[++iv] = b4x;
	vertices[++iv] = b4y;
	vertices[++iv] = b5x;
	vertices[++iv] = b5y;

	vertices[++iv] = b3x;
	vertices[++iv] = b3y;
	vertices[++iv] = b4x;
	vertices[++iv] = b4y;
	vertices[++iv] = b6x;
	vertices[++iv] = b6y;
	vertices[++iv] = b7x;
	vertices[++iv] = b7y;

	vertices[++iv] = b4x;
	vertices[++iv] = b4y;
	vertices[++iv] = b5x;
	vertices[++iv] = b5y;
	vertices[++iv] = b7x;
	vertices[++iv] = b7y;
	vertices[++iv] = b8x;
	vertices[++iv] = b8y;

	// World size
	worldSize[0] = toLength(b0x, b0y, b1x, b1y);
	worldSize[1] = toLength(b0x, b0y, b3x, b3y);
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

	const elt = toPackedI4x64(0, scaleInvariant, wl, wt);
	const ert = toPackedI4x64(0, scaleInvariant, wr, wt);
	const elb = toPackedI4x64(0, scaleInvariant, wl, wb);
	const erb = toPackedI4x64(0, scaleInvariant, wr, wb);

	const c11 = toPackedF2x1024(1, 1);
	const c01 = toPackedF2x1024(0, 1);
	const c00 = toPackedF2x1024(0, 0);
	const c10 = toPackedF2x1024(1, 0);

	// c0     c1   c4     c5
	//  |-----|     |-----|
	//  |     |     |     |
	//  |-----|     |-----|
	// c2     c3   c6     c7
	//
	// c8     c9   c12   c13
	//  |-----|     |-----|
	//  |     |     |     |
	//  |-----|     |-----|
	// c10   c11   c14   c15
	let is = voffset * 5 - 1;
	steps[++is] = strokeWidth;
	steps[++is] = elt;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c11;

	steps[++is] = strokeWidth;
	steps[++is] = elt;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c01;

	steps[++is] = strokeWidth;
	steps[++is] = elt;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c10;

	steps[++is] = strokeWidth;
	steps[++is] = elt;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;

	//
	steps[++is] = strokeWidth;
	steps[++is] = ert;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c01;

	steps[++is] = strokeWidth;
	steps[++is] = ert;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c11;

	steps[++is] = strokeWidth;
	steps[++is] = ert;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;

	steps[++is] = strokeWidth;
	steps[++is] = ert;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c10;

	//
	steps[++is] = strokeWidth;
	steps[++is] = elb;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c10;

	steps[++is] = strokeWidth;
	steps[++is] = elb;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;

	steps[++is] = strokeWidth;
	steps[++is] = elb;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c11;

	steps[++is] = strokeWidth;
	steps[++is] = elb;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c01;

	//
	steps[++is] = strokeWidth;
	steps[++is] = erb;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;

	steps[++is] = strokeWidth;
	steps[++is] = erb;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c10;

	steps[++is] = strokeWidth;
	steps[++is] = erb;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c01;

	steps[++is] = strokeWidth;
	steps[++is] = erb;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c11;
};

export const buildRectangleUv = (
	uvs: Float32Array,
	voffset: number,
	textureUvs: TextureUvs
): void => {
	// b0      b1      b2
	// |-------|-------|
	// |       |       |
	// b3------b4------b5
	// |       |       |
	// |-------|-------|
	// b6      b7      b8
	const b0x = textureUvs.x0;
	const b0y = textureUvs.y0;
	const b2x = textureUvs.x1;
	const b2y = textureUvs.y1;
	const b8x = textureUvs.x2;
	const b8y = textureUvs.y2;
	const b6x = textureUvs.x3;
	const b6y = textureUvs.y3;

	const b1x = (b0x + b2x) * 0.5;
	const b1y = (b0y + b2y) * 0.5;
	const b3x = (b0x + b6x) * 0.5;
	const b3y = (b0y + b6y) * 0.5;

	const d01x = b1x - b0x;
	const d01y = b1y - b0y;
	const d03x = b3x - b0x;
	const d03y = b3y - b0y;

	const b4x = b3x + d01x;
	const b4y = b3y + d01y;
	const b5x = b2x + d03x;
	const b5y = b2y + d03y;
	const b7x = b6x + d01x;
	const b7y = b6y + d01y;

	// c0     c1   c4     c5
	//  |-----|     |-----|
	//  |     |     |     |
	//  |-----|     |-----|
	// c2     c3   c6     c7
	//
	// c8     c9   c12   c13
	//  |-----|     |-----|
	//  |     |     |     |
	//  |-----|     |-----|
	// c10   c11   c14   c15
	let iuv = (voffset << 1) - 1;
	uvs[++iuv] = b0x;
	uvs[++iuv] = b0y;
	uvs[++iuv] = b1x;
	uvs[++iuv] = b1y;
	uvs[++iuv] = b3x;
	uvs[++iuv] = b3y;
	uvs[++iuv] = b4x;
	uvs[++iuv] = b4y;

	uvs[++iuv] = b1x;
	uvs[++iuv] = b1y;
	uvs[++iuv] = b2x;
	uvs[++iuv] = b2y;
	uvs[++iuv] = b4x;
	uvs[++iuv] = b4y;
	uvs[++iuv] = b5x;
	uvs[++iuv] = b5y;

	uvs[++iuv] = b3x;
	uvs[++iuv] = b3y;
	uvs[++iuv] = b4x;
	uvs[++iuv] = b4y;
	uvs[++iuv] = b6x;
	uvs[++iuv] = b6y;
	uvs[++iuv] = b7x;
	uvs[++iuv] = b7y;

	uvs[++iuv] = b4x;
	uvs[++iuv] = b4y;
	uvs[++iuv] = b5x;
	uvs[++iuv] = b5y;
	uvs[++iuv] = b7x;
	uvs[++iuv] = b7y;
	uvs[++iuv] = b8x;
	uvs[++iuv] = b8y;
};
