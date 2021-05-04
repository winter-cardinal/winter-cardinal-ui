/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point, TextureUvs } from "pixi.js";
import { toLength } from "./to-length";

export const IMAGE_SDF_VERTEX_COUNT = 9;
export const IMAGE_SDF_INDEX_COUNT = 8;
export const IMAGE_SDF_WORLD_SIZE: [number, number] = [0, 0];
const IMAGE_SDF_FMIN: number = 0.00001;
const IMAGE_SDF_SDF_WINDOW: number = 12;
const IMAGE_SDF_WORK_POINT: Point = new Point();

export const buildImageSdfClipping = (clippings: Float32Array, voffset: number): void => {
	for (let ic = voffset * 3, imax = (voffset + IMAGE_SDF_VERTEX_COUNT) * 3; ic < imax; ic += 3) {
		clippings[ic + 0] = 0;
		clippings[ic + 1] = 0;
		clippings[ic + 2] = 2;
	}
};

export const buildImageSdfIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	let ii = ioffset * 3;
	indices[ii + 0] = voffset + 0;
	indices[ii + 1] = voffset + 1;
	indices[ii + 2] = voffset + 3;
	indices[ii + 3] = voffset + 1;
	indices[ii + 4] = voffset + 4;
	indices[ii + 5] = voffset + 3;
	ii += 6;

	indices[ii + 0] = voffset + 1;
	indices[ii + 1] = voffset + 2;
	indices[ii + 2] = voffset + 4;
	indices[ii + 3] = voffset + 2;
	indices[ii + 4] = voffset + 5;
	indices[ii + 5] = voffset + 4;
	ii += 6;

	indices[ii + 0] = voffset + 3;
	indices[ii + 1] = voffset + 4;
	indices[ii + 2] = voffset + 6;
	indices[ii + 3] = voffset + 4;
	indices[ii + 4] = voffset + 7;
	indices[ii + 5] = voffset + 6;
	ii += 6;

	indices[ii + 0] = voffset + 4;
	indices[ii + 1] = voffset + 5;
	indices[ii + 2] = voffset + 7;
	indices[ii + 3] = voffset + 5;
	indices[ii + 4] = voffset + 8;
	indices[ii + 5] = voffset + 7;
};

export const buildImageSdfStep = (
	steps: Float32Array,
	voffset: number,
	strokeAlign: number,
	strokeWidth: number,
	textureWidth: number,
	textureHeight: number,
	antialiasWeight: number,
	worldSize: [number, number]
): void => {
	const scaleBase = (0.333 / IMAGE_SDF_SDF_WINDOW) * antialiasWeight;
	const scaleX = scaleBase * (textureWidth / worldSize[0]);
	const scaleY = scaleBase * (textureHeight / worldSize[1]);
	const scaleZ = (scaleX + scaleY) * 0.5;
	const outlineLimit = 0.4;
	const strokeWidthMax = (outlineLimit / 0.5) * IMAGE_SDF_SDF_WINDOW;
	const strokeWidthRatio = Math.max(0.0, Math.min(1.0, strokeWidth / strokeWidthMax));
	const outlineWidth = strokeWidthRatio * outlineLimit;
	const outlinePosition = -outlineWidth * (1 - strokeAlign);

	let is = voffset * 6;
	steps[is + 0] = scaleZ;
	steps[is + 1] = outlineWidth;
	steps[is + 2] = outlinePosition;
	steps[is + 3] = IMAGE_SDF_FMIN;
	steps[is + 4] = IMAGE_SDF_FMIN;
	steps[is + 5] = IMAGE_SDF_FMIN;
	is += 6;

	steps[is + 0] = scaleY;
	steps[is + 1] = outlineWidth;
	steps[is + 2] = outlinePosition;
	steps[is + 3] = IMAGE_SDF_FMIN;
	steps[is + 4] = IMAGE_SDF_FMIN;
	steps[is + 5] = IMAGE_SDF_FMIN;
	is += 6;

	steps[is + 0] = scaleZ;
	steps[is + 1] = outlineWidth;
	steps[is + 2] = outlinePosition;
	steps[is + 3] = IMAGE_SDF_FMIN;
	steps[is + 4] = IMAGE_SDF_FMIN;
	steps[is + 5] = IMAGE_SDF_FMIN;
	is += 6;

	steps[is + 0] = scaleX;
	steps[is + 1] = outlineWidth;
	steps[is + 2] = outlinePosition;
	steps[is + 3] = IMAGE_SDF_FMIN;
	steps[is + 4] = IMAGE_SDF_FMIN;
	steps[is + 5] = IMAGE_SDF_FMIN;
	is += 6;

	steps[is + 0] = scaleZ;
	steps[is + 1] = outlineWidth;
	steps[is + 2] = outlinePosition;
	steps[is + 3] = IMAGE_SDF_FMIN;
	steps[is + 4] = IMAGE_SDF_FMIN;
	steps[is + 5] = IMAGE_SDF_FMIN;
	is += 6;

	steps[is + 0] = scaleX;
	steps[is + 1] = outlineWidth;
	steps[is + 2] = outlinePosition;
	steps[is + 3] = IMAGE_SDF_FMIN;
	steps[is + 4] = IMAGE_SDF_FMIN;
	steps[is + 5] = IMAGE_SDF_FMIN;
	is += 6;

	steps[is + 0] = scaleZ;
	steps[is + 1] = outlineWidth;
	steps[is + 2] = outlinePosition;
	steps[is + 3] = IMAGE_SDF_FMIN;
	steps[is + 4] = IMAGE_SDF_FMIN;
	steps[is + 5] = IMAGE_SDF_FMIN;
	is += 6;

	steps[is + 0] = scaleY;
	steps[is + 1] = outlineWidth;
	steps[is + 2] = outlinePosition;
	steps[is + 3] = IMAGE_SDF_FMIN;
	steps[is + 4] = IMAGE_SDF_FMIN;
	steps[is + 5] = IMAGE_SDF_FMIN;
	is += 6;

	steps[is + 0] = scaleY;
	steps[is + 1] = outlineWidth;
	steps[is + 2] = outlinePosition;
	steps[is + 3] = IMAGE_SDF_FMIN;
	steps[is + 4] = IMAGE_SDF_FMIN;
	steps[is + 5] = IMAGE_SDF_FMIN;
	is += 6;
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
	let iv = voffset << 1;
	vertices[iv + 0] = x0;
	vertices[iv + 1] = y0;
	vertices[iv + 2] = (x0 + x2) * 0.5;
	vertices[iv + 3] = (y0 + y2) * 0.5;
	vertices[iv + 4] = x2;
	vertices[iv + 5] = y2;
	iv += 6;

	vertices[iv + 0] = (x0 + x6) * 0.5;
	vertices[iv + 1] = (y0 + y6) * 0.5;
	vertices[iv + 2] = (x0 + x8) * 0.5;
	vertices[iv + 3] = (y0 + y8) * 0.5;
	vertices[iv + 4] = (x2 + x8) * 0.5;
	vertices[iv + 5] = (y2 + y8) * 0.5;
	iv += 6;

	vertices[iv + 0] = x6;
	vertices[iv + 1] = y6;
	vertices[iv + 2] = (x6 + x8) * 0.5;
	vertices[iv + 3] = (y6 + y8) * 0.5;
	vertices[iv + 4] = x8;
	vertices[iv + 5] = y8;

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

	let iv = voffset << 1;
	uvs[iv + 0] = x0;
	uvs[iv + 1] = y0;
	uvs[iv + 2] = (x1 + x0) * 0.5;
	uvs[iv + 3] = (y1 + y0) * 0.5;
	uvs[iv + 4] = x1;
	uvs[iv + 5] = y1;
	iv += 6;

	uvs[iv + 0] = (x0 + x3) * 0.5;
	uvs[iv + 1] = (y0 + y3) * 0.5;
	uvs[iv + 2] = (x0 + x2) * 0.5;
	uvs[iv + 3] = (y0 + y2) * 0.5;
	uvs[iv + 4] = (x1 + x2) * 0.5;
	uvs[iv + 5] = (y1 + y2) * 0.5;
	iv += 6;

	uvs[iv + 0] = x3;
	uvs[iv + 1] = y3;
	uvs[iv + 2] = (x3 + x2) * 0.5;
	uvs[iv + 3] = (y3 + y2) * 0.5;
	uvs[iv + 4] = x2;
	uvs[iv + 5] = y2;
};
