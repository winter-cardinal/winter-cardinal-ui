/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toDash } from "./to-dash";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";

const POLYLINE_WORK_POINT = new Point();

export const toPolylineVertexCount = (pointCount: number, pointsClosed: boolean): number => {
	if (2 <= pointCount) {
		if (pointsClosed) {
			return (pointCount + 1) * 8;
		} else {
			return pointCount * 8;
		}
	}
	return 0;
};

export const toPolylineIndexCount = (pointCount: number, pointsClosed: boolean): number => {
	if (2 <= pointCount) {
		if (pointsClosed) {
			return pointCount * 12;
		} else {
			return (pointCount - 1) * 12;
		}
	}
	return 0;
};

const fillPolylineClipping = (
	ic: number,
	clippings: Float32Array | number[],
	type0: number,
	type1: number,
	type2: number,
	type3: number
): number => {
	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = type0;

	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = type1;

	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = type2;

	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = type3;
	return ic;
};

export const buildPolylineClipping = (
	clippings: Float32Array | number[],
	voffset: number,
	vcount: number,
	pointCount: number,
	pointsClosed: boolean
): void => {
	let ic = voffset * 3 - 1;
	if (2 <= pointCount) {
		for (let i = 0, imax = pointCount; i < imax; ++i) {
			ic = fillPolylineClipping(ic, clippings, 3, 4, 5, 6);
			ic = fillPolylineClipping(ic, clippings, 7, 8, 9, 10);
		}
		if (pointsClosed) {
			ic = fillPolylineClipping(ic, clippings, 3, 4, 5, 6);
			ic = fillPolylineClipping(ic, clippings, 3, 4, 5, 6);
		}
	}

	const icmax = (voffset + vcount) * 3 - 1;
	for (; ic < icmax; ) {
		clippings[++ic] = 0;
		clippings[++ic] = 0;
		clippings[++ic] = 3;
	}
};

const fillPolylineIndex = (
	ii: number,
	indices: Uint16Array | Uint32Array | number[],
	voffset: number
): number => {
	indices[++ii] = voffset + 0;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 4;

	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 4;

	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 5;

	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 6;
	indices[++ii] = voffset + 5;

	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 3;
	indices[++ii] = voffset + 6;

	indices[++ii] = voffset + 3;
	indices[++ii] = voffset + 7;
	indices[++ii] = voffset + 6;
	return ii;
};

export const buildPolylineIndex = (
	indices: Uint16Array | Uint32Array | number[],
	voffset: number,
	ioffset: number,
	icount: number
): void => {
	let ii = ioffset * 3 - 1;
	const iimax = (ioffset + icount) * 3 - 1;
	let io = voffset;
	for (; ii < iimax; io += 4) {
		ii = fillPolylineIndex(ii, indices, io);
	}
};

const fillPolylineColorStroke = (
	ic: number,
	colors: Float32Array | number[],
	r: number,
	g: number,
	b: number,
	a: number
): number => {
	colors[++ic] = 0.0;
	colors[++ic] = 0.0;
	colors[++ic] = 0.0;
	colors[++ic] = 0.0;

	colors[++ic] = r;
	colors[++ic] = g;
	colors[++ic] = b;
	colors[++ic] = a;

	colors[++ic] = r;
	colors[++ic] = g;
	colors[++ic] = b;
	colors[++ic] = a;

	colors[++ic] = 0.0;
	colors[++ic] = 0.0;
	colors[++ic] = 0.0;
	colors[++ic] = 0.0;
	return ic;
};

export const buildPolylineColorStroke = (
	color: number,
	alpha: number,
	voffset: number,
	vcount: number,
	colors: Float32Array
): void => {
	const r = (((color >> 16) & 0xff) / 255.0) * alpha;
	const g = (((color >> 8) & 0xff) / 255.0) * alpha;
	const b = (((color >> 0) & 0xff) / 255.0) * alpha;
	const a = alpha;

	let ic = (voffset << 2) - 1;
	const icmax = ((voffset + vcount) << 2) - 1;
	for (; ic < icmax; ) {
		ic = fillPolylineColorStroke(ic, colors, r, g, b, a);
	}
};

const fillPolylineUv = (
	iuv: number,
	uvs: Float32Array | number[],
	x0: number,
	y0: number,
	x3: number,
	y3: number,
	r: number,
	dx01: number,
	dy01: number,
	dx32: number,
	dy32: number
): number => {
	const u0 = x0 + r * dx01;
	const v0 = y0 + r * dy01;
	const u1 = x3 + r * dx32;
	const v1 = y3 + r * dy32;

	uvs[++iuv] = u0;
	uvs[++iuv] = v0;

	uvs[++iuv] = u0;
	uvs[++iuv] = v0;

	uvs[++iuv] = u1;
	uvs[++iuv] = v1;

	uvs[++iuv] = u1;
	uvs[++iuv] = v1;
	return iuv;
};

export const buildPolylineUv = (
	uvs: Float32Array | number[],
	colorFills: Float32Array | number[],
	voffset: number,
	vcount: number,
	pointCount: number,
	pointsClosed: boolean,
	textureUvs: TextureUvs,
	length: number
): void => {
	let iuv = (voffset << 1) - 1;
	if (2 <= pointCount) {
		const x0 = textureUvs.x0;
		const x1 = textureUvs.x1;
		const x2 = textureUvs.x2;
		const x3 = textureUvs.x3;
		const y0 = textureUvs.y0;
		const y1 = textureUvs.y1;
		const y2 = textureUvs.y2;
		const y3 = textureUvs.y3;

		const dx01 = x1 - x0;
		const dy01 = y1 - y0;
		const dx32 = x2 - x3;
		const dy32 = y2 - y3;

		// Uvs
		let icf = (voffset << 2) - 16;
		const lengthInverse = 1 / Math.max(0.00001, length);
		let r = 0;
		for (let i = 0, imax = pointCount + (pointsClosed ? 1 : 0); i < imax; ++i) {
			r = colorFills[(icf += 16)] * lengthInverse;
			iuv = fillPolylineUv(iuv, uvs, x0, y0, x3, y3, r, dx01, dy01, dx32, dy32);
			r = colorFills[(icf += 16)] * lengthInverse;
			iuv = fillPolylineUv(iuv, uvs, x0, y0, x3, y3, r, dx01, dy01, dx32, dy32);
		}
	}

	// Fill the rest
	const iuvmax = ((voffset + vcount) << 1) - 1;
	for (; iuv < iuvmax; ) {
		uvs[++iuv] = 0;
		uvs[++iuv] = 0;
	}
};

const fillPolylineVertexStepAndColorFill = (
	iv: number,
	vertices: Float32Array | number[],
	is: number,
	steps: Float32Array | number[],
	icf: number,
	colorFills: Float32Array | number[],
	px: number,
	py: number,
	strokeWidth0: number,
	strokeWidth1: number,
	scaleInvariant: number,
	pprevx: number,
	pprevy: number,
	pnextx: number,
	pnexty: number,
	llo: number
): void => {
	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth0;
	steps[++is] = scaleInvariant;
	steps[++is] = pprevx;
	steps[++is] = pprevy;
	steps[++is] = pnextx;
	steps[++is] = pnexty;
	colorFills[(icf += 1)] = llo;

	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth0;
	steps[++is] = scaleInvariant;
	steps[++is] = pprevx;
	steps[++is] = pprevy;
	steps[++is] = pnextx;
	steps[++is] = pnexty;
	colorFills[(icf += 4)] = llo;

	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth1;
	steps[++is] = scaleInvariant;
	steps[++is] = pprevx;
	steps[++is] = pprevy;
	steps[++is] = pnextx;
	steps[++is] = pnexty;
	colorFills[(icf += 4)] = llo;

	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth1;
	steps[++is] = scaleInvariant;
	steps[++is] = pprevx;
	steps[++is] = pprevy;
	steps[++is] = pnextx;
	steps[++is] = pnexty;
	colorFills[(icf += 4)] = llo;
};

export const buildPolylineVertexStepAndColorFill = (
	vertices: Float32Array | number[],
	steps: Float32Array | number[],
	colorFills: Float32Array | number[],
	voffset: number,
	vcount: number,
	polylineVertices: number[],
	polylineNormals: number[],
	polylineSegments: number[],
	polylineIsClosed: boolean,
	polylineVertexCount: number,
	strokeWidth: number,
	strokeAlign: number,
	strokeStyle: EShapeStrokeStyle
): number => {
	let lmax = 0;
	let lprev = 0;
	let ivertex = voffset;
	const polylineSegmentsLength = polylineSegments.length;
	if (0 < polylineSegmentsLength) {
		if (polylineIsClosed) {
			let iseg = 0;
			let iprevseg = polylineSegments[0];
			for (let i = 1; i < polylineSegmentsLength; ++i) {
				const iseg = polylineSegments[i];
				if (2 <= iseg - iprevseg) {
					lprev = buildPolylineSegmentOpenVertexStepAndColorFill(
						vertices,
						steps,
						colorFills,
						ivertex,
						polylineVertices,
						polylineNormals,
						iprevseg,
						iseg,
						polylineVertexCount,
						strokeWidth,
						strokeAlign,
						strokeStyle
					);
					lmax = Math.max(lmax, lprev);
					ivertex += (iseg - iprevseg) * 8;
				}
				iprevseg = iseg;
			}

			// Last
			iseg = polylineSegments[0] + polylineVertexCount;
			if (2 <= iseg - iprevseg) {
				lprev = buildPolylineSegmentOpenVertexStepAndColorFill(
					vertices,
					steps,
					colorFills,
					ivertex,
					polylineVertices,
					polylineNormals,
					iprevseg,
					iseg,
					polylineVertexCount,
					strokeWidth,
					strokeAlign,
					strokeStyle
				);
				lmax = Math.max(lmax, lprev);
				ivertex += (iseg - iprevseg) * 8;
			}
		} else {
			// First
			let iseg = polylineSegments[0];
			if (2 <= iseg) {
				lprev = buildPolylineSegmentOpenVertexStepAndColorFill(
					vertices,
					steps,
					colorFills,
					ivertex,
					polylineVertices,
					polylineNormals,
					0,
					iseg,
					polylineVertexCount,
					strokeWidth,
					strokeAlign,
					strokeStyle
				);
				lmax = Math.max(lmax, lprev);
				ivertex += iseg * 8;
			}

			// Middle
			let iprevseg = iseg;
			for (let i = 1; i < polylineSegmentsLength; ++i) {
				iseg = polylineSegments[1];
				if (2 <= iseg - iprevseg) {
					lprev = buildPolylineSegmentOpenVertexStepAndColorFill(
						vertices,
						steps,
						colorFills,
						ivertex,
						polylineVertices,
						polylineNormals,
						iprevseg,
						iseg,
						polylineVertexCount,
						strokeWidth,
						strokeAlign,
						strokeStyle
					);
					lmax = Math.max(lmax, lprev);
					ivertex += (iseg - iprevseg) * 8;
				}
				iprevseg = iseg;
			}

			// Last
			iseg = polylineVertexCount;
			if (2 <= iseg - iprevseg) {
				lprev = buildPolylineSegmentOpenVertexStepAndColorFill(
					vertices,
					steps,
					colorFills,
					ivertex,
					polylineVertices,
					polylineNormals,
					iprevseg,
					iseg,
					polylineVertexCount,
					strokeWidth,
					strokeAlign,
					strokeStyle
				);
				lmax = Math.max(lmax, lprev);
				ivertex += (iseg - iprevseg) * 8;
			}
		}
	} else {
		if (polylineIsClosed) {
			lprev = buildPolylineSegmentClosedVertexStepAndColorFill(
				vertices,
				steps,
				colorFills,
				ivertex,
				polylineVertices,
				polylineNormals,
				0,
				polylineVertexCount,
				polylineVertexCount,
				strokeWidth,
				strokeAlign,
				strokeStyle
			);
			lmax = Math.max(lmax, lprev);
			ivertex += (polylineVertexCount + 1) * 8;
		} else {
			lprev = buildPolylineSegmentOpenVertexStepAndColorFill(
				vertices,
				steps,
				colorFills,
				ivertex,
				polylineVertices,
				polylineNormals,
				0,
				polylineVertexCount,
				polylineVertexCount,
				strokeWidth,
				strokeAlign,
				strokeStyle
			);
			lmax = Math.max(lmax, lprev);
			ivertex += polylineVertexCount * 8;
		}
	}

	// Fill the rest
	const ivertexmax = voffset + vcount;
	let iv = (ivertex << 1) - 1;
	let is = ivertex * 6 - 1;
	let icf = (ivertex << 2) - 1;
	const ilast = (polylineVertexCount - 1) << 1;
	const px = polylineVertices[ilast];
	const py = polylineVertices[ilast + 1];
	for (; ivertex < ivertexmax; ++ivertex) {
		vertices[++iv] = px;
		vertices[++iv] = py;
		steps[++is] = 0;
		steps[++is] = 0;
		steps[++is] = 1;
		steps[++is] = 0;
		steps[++is] = 1;
		steps[++is] = 0;
		colorFills[++icf] = 2;
		colorFills[++icf] = 0;
		colorFills[++icf] = 0;
		colorFills[++icf] = 1;
	}

	return lmax;
};

export const buildPolylineSegmentOpenVertexStepAndColorFill = (
	vertices: Float32Array | number[],
	steps: Float32Array | number[],
	colorFills: Float32Array | number[],
	voffset: number,
	polylineVertices: number[],
	polylineNormals: number[],
	polylineVertexFrom: number,
	polylineVertexTo: number,
	polylineVertexCount: number,
	strokeWidth: number,
	strokeAlign: number,
	strokeStyle: EShapeStrokeStyle
): number => {
	const scaleInvariant = toScaleInvariant(strokeStyle);
	const sws = 2 * (strokeAlign - 0.5);
	const sw0 = strokeWidth * (1 - sws);
	const sw1 = strokeWidth * (1 + sws);

	// First segment
	const ifirst = polylineVertexFrom % polylineVertexCount << 1;
	let px = polylineVertices[ifirst];
	let py = polylineVertices[ifirst + 1];
	let nx = polylineNormals[ifirst];
	let ny = polylineNormals[ifirst + 1];
	let pprevx = px;
	let pprevy = py;
	let nprevx = nx;
	let nprevy = ny;
	let l = 0;
	let iv = (voffset << 1) - 1;
	let is = voffset * 6 - 1;
	let icf = (voffset << 2) - 1;
	fillPolylineVertexStepAndColorFill(
		iv,
		vertices,
		is,
		steps,
		icf,
		colorFills,
		px,
		py,
		sw0,
		sw1,
		scaleInvariant,
		nx,
		ny,
		nx,
		ny,
		2
	);
	iv += 8;
	is += 24;
	icf += 16;

	fillPolylineVertexStepAndColorFill(
		iv,
		vertices,
		is,
		steps,
		icf,
		colorFills,
		px,
		py,
		sw0,
		sw1,
		scaleInvariant,
		nx,
		ny,
		nx,
		ny,
		0
	);
	iv += 8;
	is += 24;
	icf += 16;

	// Middle segments
	for (let i = polylineVertexFrom + 1, imax = polylineVertexTo - 1; i < imax; ++i) {
		pprevx = px;
		pprevy = py;
		nprevx = nx;
		nprevy = ny;

		const imiddle = i % polylineVertexCount << 1;
		px = polylineVertices[imiddle];
		py = polylineVertices[imiddle + 1];
		nx = polylineNormals[imiddle];
		ny = polylineNormals[imiddle + 1];

		l += toLength(pprevx, pprevy, px, py);

		fillPolylineVertexStepAndColorFill(
			iv,
			vertices,
			is,
			steps,
			icf,
			colorFills,
			px,
			py,
			sw0,
			sw1,
			scaleInvariant,
			nprevx,
			nprevy,
			nx,
			ny,
			l
		);
		iv += 8;
		is += 24;
		icf += 16;

		fillPolylineVertexStepAndColorFill(
			iv,
			vertices,
			is,
			steps,
			icf,
			colorFills,
			px,
			py,
			sw0,
			sw1,
			scaleInvariant,
			nprevx,
			nprevy,
			nx,
			ny,
			l
		);
		iv += 8;
		is += 24;
		icf += 16;
	}

	// Last segment
	pprevx = px;
	pprevy = py;
	nprevx = nx;
	nprevy = ny;

	const ilast = (polylineVertexTo - 1) % polylineVertexCount << 1;
	px = polylineVertices[ilast];
	py = polylineVertices[ilast + 1];
	nx = polylineNormals[ilast];
	ny = polylineNormals[ilast + 1];

	l += toLength(pprevx, pprevy, px, py);

	fillPolylineVertexStepAndColorFill(
		iv,
		vertices,
		is,
		steps,
		icf,
		colorFills,
		px,
		py,
		sw0,
		sw1,
		scaleInvariant,
		nprevx,
		nprevy,
		nprevx,
		nprevy,
		l
	);
	iv += 8;
	is += 24;
	icf += 16;

	fillPolylineVertexStepAndColorFill(
		iv,
		vertices,
		is,
		steps,
		icf,
		colorFills,
		px,
		py,
		sw0,
		sw1,
		scaleInvariant,
		nprevx,
		nprevy,
		nprevx,
		nprevy,
		2
	);
	iv += 8;
	is += 24;
	icf += 16;

	// Total length
	const dash = toDash(l, strokeWidth, strokeStyle, POLYLINE_WORK_POINT);
	const dash0 = dash.x;
	const dash1 = dash.y;
	const icf0 = voffset << 2;
	const icfmax = icf + 1;
	for (let i = icf0, imax = icf0 + 16; i < imax; i += 4) {
		colorFills[i + 1] = dash0;
		colorFills[i + 2] = dash1;
		colorFills[i + 3] = 1;
	}
	for (let i = icf0 + 16, imax = icfmax - 16; i < imax; i += 4) {
		colorFills[i + 1] = dash0;
		colorFills[i + 2] = dash1;
		colorFills[i + 3] = l;
	}
	for (let i = icfmax - 16; i < icfmax; i += 4) {
		colorFills[i + 1] = dash0;
		colorFills[i + 2] = dash1;
		colorFills[i + 3] = 1;
	}

	return l;
};

export const buildPolylineSegmentClosedVertexStepAndColorFill = (
	vertices: Float32Array | number[],
	steps: Float32Array | number[],
	colorFills: Float32Array | number[],
	voffset: number,
	polylineVertices: number[],
	polylineNormals: number[],
	polylineVertexFrom: number,
	polylineVertexTo: number,
	polylineVertexCount: number,
	strokeWidth: number,
	strokeAlign: number,
	strokeStyle: EShapeStrokeStyle
): number => {
	const scaleInvariant = toScaleInvariant(strokeStyle);
	const sws = 2 * (strokeAlign - 0.5);
	const sw0 = strokeWidth * (1 - sws);
	const sw1 = strokeWidth * (1 + sws);

	const ilast = (polylineVertexTo - 1) % polylineVertexCount << 1;
	let px = polylineVertices[ilast];
	let py = polylineVertices[ilast + 1];
	let nx = polylineNormals[ilast];
	let ny = polylineNormals[ilast + 1];
	let pprevx = px;
	let pprevy = py;
	let nprevx = nx;
	let nprevy = ny;
	let l = 0;
	let iv = (voffset << 1) - 1;
	let is = voffset * 6 - 1;
	let icf = (voffset << 2) - 1;
	for (let i = polylineVertexFrom; i < polylineVertexTo; ++i) {
		pprevx = px;
		pprevy = py;
		nprevx = nx;
		nprevy = ny;

		const imiddle = i % polylineVertexCount << 1;
		px = polylineVertices[imiddle];
		py = polylineVertices[imiddle + 1];
		nx = polylineNormals[imiddle];
		ny = polylineNormals[imiddle + 1];

		l += toLength(pprevx, pprevy, px, py);

		fillPolylineVertexStepAndColorFill(
			iv,
			vertices,
			is,
			steps,
			icf,
			colorFills,
			px,
			py,
			sw0,
			sw1,
			scaleInvariant,
			nprevx,
			nprevy,
			nx,
			ny,
			l
		);
		iv += 8;
		is += 24;
		icf += 16;

		fillPolylineVertexStepAndColorFill(
			iv,
			vertices,
			is,
			steps,
			icf,
			colorFills,
			px,
			py,
			sw0,
			sw1,
			scaleInvariant,
			nprevx,
			nprevy,
			nx,
			ny,
			l
		);
		iv += 8;
		is += 24;
		icf += 16;
	}

	// Last segment
	pprevx = px;
	pprevy = py;
	nprevx = nx;
	nprevy = ny;

	const ifirst = polylineVertexFrom % polylineVertexCount << 1;
	px = polylineVertices[ifirst];
	py = polylineVertices[ifirst + 1];
	nx = polylineNormals[ifirst];
	ny = polylineNormals[ifirst + 1];

	l += toLength(pprevx, pprevy, px, py);

	fillPolylineVertexStepAndColorFill(
		iv,
		vertices,
		is,
		steps,
		icf,
		colorFills,
		px,
		py,
		sw0,
		sw1,
		scaleInvariant,
		nprevx,
		nprevy,
		nx,
		ny,
		l
	);
	iv += 8;
	is += 24;
	icf += 16;

	fillPolylineVertexStepAndColorFill(
		iv,
		vertices,
		is,
		steps,
		icf,
		colorFills,
		px,
		py,
		sw1,
		sw0,
		scaleInvariant,
		nprevx,
		nprevy,
		nx,
		ny,
		2
	);
	iv += 8;
	is += 24;
	icf += 16;

	// Total length
	const dash = toDash(l, strokeWidth, strokeStyle, POLYLINE_WORK_POINT);
	const dash0 = dash.x;
	const dash1 = dash.y;
	const icf0 = voffset << 2;
	const icfmax = icf + 1;
	for (let i = icf0, imax = icfmax - 16; i < imax; i += 4) {
		colorFills[i + 1] = dash0;
		colorFills[i + 2] = dash1;
		colorFills[i + 3] = -1;
	}
	for (let i = icfmax - 16; i < icfmax; i += 4) {
		colorFills[i + 1] = 0;
		colorFills[i + 2] = 0;
		colorFills[i + 3] = 1;
	}

	return l;
};
