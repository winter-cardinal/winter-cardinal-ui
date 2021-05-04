/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toDash } from "./to-dash";
import { toScaleInvariant } from "./to-scale-invariant";

export const BAR_VERTEX_COUNT = 4;
export const BAR_INDEX_COUNT = 2;
const BAR_FMIN: number = 0.00001;
const BAR_WORK_POINT: Point = new Point();

export const buildBarClipping = (clippings: Float32Array, voffset: number): void => {
	const ic = voffset * 3;
	clippings[ic + 0] = 1;
	clippings[ic + 1] = 0;
	clippings[ic + 2] = 3;

	clippings[ic + 3] = 0;
	clippings[ic + 4] = 1;
	clippings[ic + 5] = 5;

	clippings[ic + 6] = 1;
	clippings[ic + 7] = 0;
	clippings[ic + 8] = 3;

	clippings[ic + 9] = 0;
	clippings[ic + 10] = 1;
	clippings[ic + 11] = 5;
};

export const buildBarIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	const ii = ioffset * 3;
	indices[ii + 0] = voffset + 0;
	indices[ii + 1] = voffset + 2;
	indices[ii + 2] = voffset + 1;

	indices[ii + 3] = voffset + 1;
	indices[ii + 4] = voffset + 2;
	indices[ii + 5] = voffset + 3;
};

export const buildBarVertexStepAndColorFill = (
	vertices: Float32Array,
	steps: Float32Array,
	colorFills: Float32Array,
	voffset: number,
	pointValues: number[],
	pointsSize: number,
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle,
	internalTransform: Matrix
): void => {
	// First point
	const a = internalTransform.a;
	const b = internalTransform.b;
	const c = internalTransform.c;
	const d = internalTransform.d;
	const tx = internalTransform.tx;
	const ty = internalTransform.ty;
	const pv0 = pointValues[0];
	const pv1 = pointValues[1];
	const p1x = a * pv0 + c * pv1 + tx;
	const p1y = b * pv0 + d * pv1 + ty;

	// Last point
	const pv2 = pointValues[2];
	const pv3 = pointValues[3];
	let p2x = a * pv2 + c * pv3 + tx;
	let p2y = b * pv2 + d * pv3 + ty;

	// Normal
	let dx = p2x - p1x;
	let dy = p2y - p1y;
	const distance = Math.sqrt(dx * dx + dy * dy);
	let l = distance;
	if (0 <= pointsSize && BAR_FMIN < distance) {
		const ratio = pointsSize / distance;
		dx *= ratio;
		dy *= ratio;
		p2x = p1x + dx;
		p2y = p1y + dy;
		l = pointsSize;
	}

	// Other points
	const p0x = p1x - dx;
	const p0y = p1y - dy;
	const p3x = p2x + dx;
	const p3y = p2y + dy;

	//
	const scaleInvariant = toScaleInvariant(strokeStyle);
	const iv = voffset << 1;
	const icf = voffset << 2;
	const is = voffset * 6;
	vertices[iv + 0] = p1x;
	vertices[iv + 1] = p1y;
	vertices[iv + 2] = p1x;
	vertices[iv + 3] = p1y;
	steps[is + 0] = strokeWidth;
	steps[is + 1] = scaleInvariant;
	steps[is + 2] = p0x;
	steps[is + 3] = p0y;
	steps[is + 4] = p2x;
	steps[is + 5] = p2y;
	steps[is + 6] = strokeWidth;
	steps[is + 7] = scaleInvariant;
	steps[is + 8] = p0x;
	steps[is + 9] = p0y;
	steps[is + 10] = p2x;
	steps[is + 11] = p2y;
	colorFills[icf + 0] = 0.0;
	colorFills[icf + 4] = 0.0;

	vertices[iv + 4] = p2x;
	vertices[iv + 5] = p2y;
	vertices[iv + 6] = p2x;
	vertices[iv + 7] = p2y;
	steps[is + 12] = strokeWidth;
	steps[is + 13] = scaleInvariant;
	steps[is + 14] = p1x;
	steps[is + 15] = p1y;
	steps[is + 16] = p3x;
	steps[is + 17] = p3y;
	steps[is + 18] = strokeWidth;
	steps[is + 19] = scaleInvariant;
	steps[is + 20] = p1x;
	steps[is + 21] = p1y;
	steps[is + 22] = p3x;
	steps[is + 23] = p3y;
	colorFills[icf + 8] = l;
	colorFills[icf + 12] = l;

	// Total length
	const dash = toDash(l, strokeWidth, strokeStyle, BAR_WORK_POINT);
	const dash0 = dash.x;
	const dash1 = dash.y;
	colorFills[icf + 1] = dash0;
	colorFills[icf + 2] = dash1;
	colorFills[icf + 3] = l;

	colorFills[icf + 5] = dash0;
	colorFills[icf + 6] = dash1;
	colorFills[icf + 7] = l;

	colorFills[icf + 9] = dash0;
	colorFills[icf + 10] = dash1;
	colorFills[icf + 11] = l;

	colorFills[icf + 13] = dash0;
	colorFills[icf + 14] = dash1;
	colorFills[icf + 15] = l;
};

export const buildBarUv = (uvs: Float32Array, voffset: number, textureUvs: TextureUvs): void => {
	const iuv = voffset << 1;
	uvs[iuv + 0] = textureUvs.x0;
	uvs[iuv + 1] = textureUvs.y0;
	uvs[iuv + 2] = textureUvs.x3;
	uvs[iuv + 3] = textureUvs.y3;

	uvs[iuv + 4] = textureUvs.x1;
	uvs[iuv + 5] = textureUvs.y1;
	uvs[iuv + 6] = textureUvs.x2;
	uvs[iuv + 7] = textureUvs.y2;
};
