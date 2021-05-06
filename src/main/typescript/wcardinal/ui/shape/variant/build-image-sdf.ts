import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";

export const IMAGE_SDF_VERTEX_COUNT = 9;
export const IMAGE_SDF_INDEX_COUNT = 8;
export const IMAGE_SDF_WORLD_SIZE: [number, number] = [0, 0];
const IMAGE_SDF_WORK_POINT: Point = new Point();

export const buildImageSdfClipping = (clippings: Float32Array, voffset: number): void => {
	let ic = voffset * 3 - 1;
	const icmax = (voffset + IMAGE_SDF_VERTEX_COUNT) * 3 - 1;
	for (; ic < icmax; ) {
		clippings[++ic] = 0;
		clippings[++ic] = 0;
		clippings[++ic] = 2;
	}
};

export const buildImageSdfIndex = (
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

export const buildImageSdfStep = (
	steps: Float32Array,
	voffset: number,
	strokeAlign: number,
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle,
	textureWidth: number,
	textureHeight: number,
	worldSize: [number, number]
): void => {
	const scaleInvariant = toScaleInvariant(strokeStyle);

	const scaleX = textureWidth / worldSize[0];
	const scaleY = textureHeight / worldSize[1];
	const scaleZ = (scaleX + scaleY) * 0.5;
	const strokeWidthMax = 12;
	const position = -1 + strokeAlign;

	let is = voffset * 6 - 1;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = scaleZ;
	steps[++is] = strokeWidthMax;
	steps[++is] = position;
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = scaleY;
	steps[++is] = strokeWidthMax;
	steps[++is] = position;
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = scaleZ;
	steps[++is] = strokeWidthMax;
	steps[++is] = position;
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = scaleX;
	steps[++is] = strokeWidthMax;
	steps[++is] = position;
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = scaleZ;
	steps[++is] = strokeWidthMax;
	steps[++is] = position;
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = scaleX;
	steps[++is] = strokeWidthMax;
	steps[++is] = position;
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = scaleZ;
	steps[++is] = strokeWidthMax;
	steps[++is] = position;
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = scaleY;
	steps[++is] = strokeWidthMax;
	steps[++is] = position;
	steps[++is] = 0;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = scaleY;
	steps[++is] = strokeWidthMax;
	steps[++is] = position;
	steps[++is] = 0;
};

export const buildImageSdfVertex = (
	vertices: Float32Array,
	voffset: number,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	internalTransform: Matrix,
	worldSize: [number, number]
): void => {
	// Calculate the transformed positions
	//
	// 0       1       2
	// |-------|-------|
	// |       |       |
	// 3-------4-------5
	// |       |       |
	// |-------|-------|
	// 6       7       8
	//
	const work = IMAGE_SDF_WORK_POINT;
	const sx = sizeX * 0.5;
	const sy = sizeY * 0.5;
	work.set(originX - sx, originY - sy);
	internalTransform.apply(work, work);
	const x0 = work.x;
	const y0 = work.y;
	work.set(originX + sx, originY - sy);
	internalTransform.apply(work, work);
	const x2 = work.x;
	const y2 = work.y;
	work.set(originX + sx, originY + sy);
	internalTransform.apply(work, work);
	const x8 = work.x;
	const y8 = work.y;
	const x6 = x0 + (x8 - x2);
	const y6 = y0 + (y8 - y2);

	// Vertices
	let iv = (voffset << 1) - 1;
	vertices[++iv] = x0;
	vertices[++iv] = y0;
	vertices[++iv] = (x0 + x2) * 0.5;
	vertices[++iv] = (y0 + y2) * 0.5;
	vertices[++iv] = x2;
	vertices[++iv] = y2;

	vertices[++iv] = (x0 + x6) * 0.5;
	vertices[++iv] = (y0 + y6) * 0.5;
	vertices[++iv] = (x0 + x8) * 0.5;
	vertices[++iv] = (y0 + y8) * 0.5;
	vertices[++iv] = (x2 + x8) * 0.5;
	vertices[++iv] = (y2 + y8) * 0.5;

	vertices[++iv] = x6;
	vertices[++iv] = y6;
	vertices[++iv] = (x6 + x8) * 0.5;
	vertices[++iv] = (y6 + y8) * 0.5;
	vertices[++iv] = x8;
	vertices[++iv] = y8;

	worldSize[0] = toLength(x0, y0, x2, y2) * 0.5;
	worldSize[1] = toLength(x0, y0, x6, y6) * 0.5;
};

export const buildImageSdfUv = (
	uvs: Float32Array,
	voffset: number,
	textureUv: TextureUvs
): void => {
	const x0 = textureUv.x0;
	const y0 = textureUv.y0;
	const x1 = textureUv.x1;
	const y1 = textureUv.y1;
	const x2 = textureUv.x2;
	const y2 = textureUv.y2;
	const x3 = textureUv.x3;
	const y3 = textureUv.y3;

	let iv = (voffset << 1) - 1;
	uvs[++iv] = x0;
	uvs[++iv] = y0;
	uvs[++iv] = (x1 + x0) * 0.5;
	uvs[++iv] = (y1 + y0) * 0.5;
	uvs[++iv] = x1;
	uvs[++iv] = y1;

	uvs[++iv] = (x0 + x3) * 0.5;
	uvs[++iv] = (y0 + y3) * 0.5;
	uvs[++iv] = (x0 + x2) * 0.5;
	uvs[++iv] = (y0 + y2) * 0.5;
	uvs[++iv] = (x1 + x2) * 0.5;
	uvs[++iv] = (y1 + y2) * 0.5;

	uvs[++iv] = x3;
	uvs[++iv] = y3;
	uvs[++iv] = (x3 + x2) * 0.5;
	uvs[++iv] = (y3 + y2) * 0.5;
	uvs[++iv] = x2;
	uvs[++iv] = y2;
};
