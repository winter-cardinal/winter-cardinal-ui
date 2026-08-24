import { Matrix, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";
import { toPackedClippings, toPackedI4x64 } from "./to-packed";

export const CIRCLE_LEGACY_VERTEX_COUNT = 9;
export const CIRCLE_LEGACY_INDEX_COUNT = 8;
export const CIRCLE_LEGACY_WORLD_SIZE: [number, number] = [0, 0];

export const buildCircleLegacyIndex = (
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

	indices[++ii] = voffset + 3;
	indices[++ii] = voffset + 4;
	indices[++ii] = voffset + 6;

	indices[++ii] = voffset + 4;
	indices[++ii] = voffset + 7;
	indices[++ii] = voffset + 6;

	indices[++ii] = voffset + 4;
	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 7;

	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 8;
	indices[++ii] = voffset + 7;
};

export const buildCircleLegacyVertex = (
	vertices: Float32Array,
	voffset: number,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	strokeAlign: number,
	strokeWidth: number,
	internalTransform: Matrix,
	worldSize: typeof CIRCLE_LEGACY_WORLD_SIZE
): void => {
	// Calculate the transformed positions
	//
	//  0       1       2
	// |-------|-------|
	// |3      |4      |5
	// |-------|-------|
	// |6      |7      |8
	// |-------|-------|
	//
	const a = internalTransform.a;
	const b = internalTransform.b;
	const c = internalTransform.c;
	const d = internalTransform.d;
	const tx = internalTransform.tx;
	const ty = internalTransform.ty;
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	const x0 = a * (-sx + originX) + c * (-sy + originY) + tx;
	const y0 = b * (-sx + originX) + d * (-sy + originY) + ty;
	const x1 = a * originX + c * (-sy + originY) + tx;
	const y1 = b * originX + d * (-sy + originY) + ty;
	const dx = x1 - x0;
	const dy = y1 - y0;
	const x4 = a * originX + c * originY + tx;
	const y4 = b * originX + d * originY + ty;
	const x7 = x4 + (x4 - x1);
	const y7 = y4 + (y4 - y1);
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

	vertices[++iv] = x7 - dx;
	vertices[++iv] = y7 - dy;
	vertices[++iv] = x7;
	vertices[++iv] = y7;
	vertices[++iv] = x7 + dx;
	vertices[++iv] = y7 + dy;

	worldSize[0] = toLength(x0, y0, x1, y1);
	worldSize[1] = toLength(x0, y0, x3, y3);
};

export const buildCircleLegacyStep = (
	steps: Float32Array,
	voffset: number,
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle,
	worldSize: typeof CIRCLE_LEGACY_WORLD_SIZE
): void => {
	const scaleInvariant = toScaleInvariant(strokeStyle);
	const ax = worldSize[0];
	const ay = worldSize[1];

	const e = toPackedI4x64(1, scaleInvariant, 1, 1);

	const c11 = toPackedClippings(1, 1);
	const c01 = toPackedClippings(0, 1);
	const c10 = toPackedClippings(1, 0);
	const c00 = toPackedClippings(0, 0);

	let is = voffset * 6 - 1;
	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c11;
	steps[++is] = 0;

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
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c10;
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c00;
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c10;
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = c11;
	steps[++is] = 0;

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
	steps[++is] = 0;
};

export const buildCircleLegacyUv = (
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

	uvs[++iuv] = x3;
	uvs[++iuv] = y3;
	uvs[++iuv] = 0.5 * (x3 + x2);
	uvs[++iuv] = 0.5 * (y3 + y2);
	uvs[++iuv] = x2;
	uvs[++iuv] = y2;
};
