/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toPackedF2x1024, toPackedI4x64 } from "./to-packed";
import { toScaleInvariant } from "./to-scale-invariant";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { toDash } from "./to-dash";
import { EShapeFillDirection } from "../e-shape-fill-direction";

/**
 * Build index buffer for polygons.
 */
export const buildPolygonIndex = (
	indices: Uint16Array | Uint32Array,
	polygonIndices: number[],
	voffset: number,
	ioffset: number
): void => {
	let ii = ioffset * 3 - 1;
	for (let i = 0, n = polygonIndices.length; i < n; ++i) {
		indices[++ii] = voffset + polygonIndices[i];
	}
};

/**
 * Build vertices buffer for polygons.
 */
export const buildPolygonVertex = (
	vertices: Float32Array,
	polygonVertices: number[],
	voffset: number,
	internalTransform: Matrix
): void => {
	const a = internalTransform.a;
	const b = internalTransform.b;
	const c = internalTransform.c;
	const d = internalTransform.d;
	const tx = internalTransform.tx;
	const ty = internalTransform.ty;
	let iv = (voffset << 1) - 1;
	for (let i = 0, n = polygonVertices.length; i < n; i += 2) {
		const x = polygonVertices[i];
		const y = polygonVertices[i + 1];
		vertices[++iv] = a * x + c * y + tx;
		vertices[++iv] = b * x + d * y + ty;
	}
};

/**
 * Build step buffer for polygons.
 */
export const buildPolygonStep = (
	steps: Float32Array,
	polygonDistances: number[],
	polygonLengths: number[],
	polygonClippings: number[],
	polygonUvs: number[],
	voffset: number,
	vertexCount: number,
	sizeX: number,
	sizeY: number,
	fillDirection: EShapeFillDirection,
	fillPercent: number,
	strokeWidth: number,
	strokeSide: EShapeStrokeSide,
	strokeStyle: EShapeStrokeStyle
): void => {
	const scaleInvariant = toScaleInvariant(strokeStyle);
	const dash = toDash(strokeStyle);
	const w = (strokeSide & EShapeStrokeSide.ALL) === EShapeStrokeSide.ALL ? 1 : 0;
	const e = toPackedI4x64(7 + dash, scaleInvariant, w, 0);
	const fp = Math.max(0, Math.min(1, fillPercent));
	const ax = Math.abs(sizeX);
	const ay = Math.abs(sizeY);
	let is = voffset * 6 - 1;
	switch (fillDirection) {
		case EShapeFillDirection.TOP:
			for (let i = 0, j = 1; i < vertexCount; i += 1, j += 2) {
				steps[++is] = strokeWidth;
				steps[++is] = e;
				steps[++is] = polygonDistances[i];
				steps[++is] = ay * (fp - polygonUvs[j]);
				steps[++is] = toPackedF2x1024(polygonClippings[i], 0);
				steps[++is] = polygonLengths[i];
			}
			break;
		case EShapeFillDirection.RIGHT:
			for (let i = 0, j = 0; i < vertexCount; i += 1, j += 2) {
				steps[++is] = strokeWidth;
				steps[++is] = e;
				steps[++is] = polygonDistances[i];
				steps[++is] = ax * (fp - polygonUvs[j]);
				steps[++is] = toPackedF2x1024(polygonClippings[i], 0);
				steps[++is] = polygonLengths[i];
			}
			break;
		case EShapeFillDirection.BOTTOM:
			for (let i = 0, j = 1; i < vertexCount; i += 1, j += 2) {
				steps[++is] = strokeWidth;
				steps[++is] = e;
				steps[++is] = polygonDistances[i];
				steps[++is] = ay * (fp - (1 - polygonUvs[j]));
				steps[++is] = toPackedF2x1024(polygonClippings[i], 0);
				steps[++is] = polygonLengths[i];
			}
			break;
		case EShapeFillDirection.LEFT:
			for (let i = 0, j = 0; i < vertexCount; i += 1, j += 2) {
				steps[++is] = strokeWidth;
				steps[++is] = e;
				steps[++is] = polygonDistances[i];
				steps[++is] = ax * (fp - (1 - polygonUvs[j]));
				steps[++is] = toPackedF2x1024(polygonClippings[i], 0);
				steps[++is] = polygonLengths[i];
			}
			break;
	}
};

/**
 * Build UV buffer for polygons.
 */
export const buildPolygonUv = (
	uvs: Float32Array,
	polygonUvs: number[],
	voffset: number,
	textureUvs: TextureUvs
): void => {
	const x0 = textureUvs.x0;
	const x1 = textureUvs.x1;
	const y0 = textureUvs.y0;
	const y3 = textureUvs.y3;
	const dx = x1 - x0;
	const dy = y3 - y0;
	let iuv = (voffset << 1) - 1;
	for (let i = 0, n = polygonUvs.length; i < n; i += 2) {
		uvs[++iuv] = x0 + polygonUvs[i] * dx;
		uvs[++iuv] = y0 + polygonUvs[i + 1] * dy;
	}
};
