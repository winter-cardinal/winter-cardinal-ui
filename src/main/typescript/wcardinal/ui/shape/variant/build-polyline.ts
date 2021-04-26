/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point, TextureUvs } from "pixi.js";
import { toIndexOf } from "../../util/to-index-of";
import { EShapePointsStyle } from "../e-shape-points-style";
import { toDash } from "./to-dash";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";

const POLYLINE_WORK_POINT = new Point();

export const toPolylineVertexCount = (pointCount: number, pointsClosed: boolean): number => {
	if (2 <= pointCount) {
		if (pointsClosed) {
			return pointCount * 8 + 4;
		} else {
			return (pointCount - 1) * 8;
		}
	}
	return 0;
};

export const toPolylineIndexCount = (pointCount: number, pointsClosed: boolean): number => {
	if (2 <= pointCount) {
		if (pointsClosed) {
			return pointCount * 12;
		} else {
			return 6 + (pointCount - 2) * 12;
		}
	}
	return 0;
};

const fillPolylineClipping = (
	ic: number,
	clippings: Float32Array | number[],
	typeInner: number,
	typeOuter: number
): number => {
	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = typeOuter;

	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = typeInner;

	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = typeInner;

	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = typeOuter;
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
		if (!pointsClosed) {
			ic = fillPolylineClipping(ic, clippings, 4, 6);
		}
		for (let i = pointsClosed ? 0 : 1, imax = pointCount - i; i < imax; ++i) {
			ic = fillPolylineClipping(ic, clippings, 3, 5);
			ic = fillPolylineClipping(ic, clippings, 4, 6);
		}
		ic = fillPolylineClipping(ic, clippings, 3, 5);
	}

	const icmax = (voffset + vcount) * 3 - 1;
	for (; ic < icmax; ) {
		clippings[++ic] = 0;
		clippings[++ic] = 0;
		clippings[++ic] = 0;
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
		if (!pointsClosed) {
			r = colorFills[(icf += 16)] * lengthInverse;
			iuv = fillPolylineUv(iuv, uvs, x0, y0, x3, y3, r, dx01, dy01, dx32, dy32);
		}
		for (let i = pointsClosed ? 0 : 1, imax = pointCount - i; i < imax; ++i) {
			r = colorFills[(icf += 16)] * lengthInverse;
			iuv = fillPolylineUv(iuv, uvs, x0, y0, x3, y3, r, dx01, dy01, dx32, dy32);
			r = colorFills[(icf += 16)] * lengthInverse;
			iuv = fillPolylineUv(iuv, uvs, x0, y0, x3, y3, r, dx01, dy01, dx32, dy32);
		}
		r = colorFills[(icf += 16)] * lengthInverse;
		iuv = fillPolylineUv(iuv, uvs, x0, y0, x3, y3, r, dx01, dy01, dx32, dy32);
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
	strokeWidth: number,
	scaleInvariant: number,
	pprevx: number,
	pprevy: number,
	pnextx: number,
	pnexty: number,
	llo: number
): void => {
	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = pprevx;
	steps[++is] = pprevy;
	steps[++is] = pnextx;
	steps[++is] = pnexty;
	colorFills[(icf += 1)] = llo;

	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = pprevx;
	steps[++is] = pprevy;
	steps[++is] = pnextx;
	steps[++is] = pnexty;
	colorFills[(icf += 4)] = llo;

	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = pnextx;
	steps[++is] = pnexty;
	steps[++is] = pprevx;
	steps[++is] = pprevy;
	colorFills[(icf += 4)] = llo;

	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = pnextx;
	steps[++is] = pnexty;
	steps[++is] = pprevx;
	steps[++is] = pprevy;
	colorFills[(icf += 4)] = llo;
};

export const buildPolylineVertexStepAndColorFill = (
	vertices: Float32Array | number[],
	steps: Float32Array | number[],
	colorFills: Float32Array | number[],
	voffset: number,
	vcount: number,
	pointCount: number,
	pointsClosed: boolean,
	pointValues: number[],
	pointSegments: number[],
	pointsStyle: EShapePointsStyle,
	strokeWidth: number
): number => {
	let iv = (voffset << 1) - 1;
	let is = voffset * 6 - 1;
	let icf = (voffset << 2) - 1;
	let lmax = 0;
	let px = 0;
	let py = 0;
	if (2 <= pointCount) {
		const scaleInvariant = toScaleInvariant(pointsStyle);

		//
		let l = 0;
		let lprev = 0;
		let lnext = 0;
		let llop = 0;
		let llo = 0;
		let pprevx = 0;
		let pprevy = 0;
		let pnextx = 0;
		let pnexty = 0;
		let pseg = false;
		let psegnext = false;
		let icfprev = icf;
		let loffset = 0;
		const ipvoffset = 0 < pointSegments.length ? pointSegments[0] : 0;

		// First point
		let ipv = ipvoffset % pointCount;
		let ipvs = ipv << 1;
		const pfirstx = pointValues[ipvs];
		const pfirsty = pointValues[ipvs + 1];
		const psegfirst = 0 <= toIndexOf(pointSegments, ipv);

		// Last point
		ipv = (ipvoffset + pointCount - 1) % pointCount;
		ipvs = ipv << 1;
		const plastx = pointValues[ipvs];
		const plasty = pointValues[ipvs + 1];
		const pseglast = 0 <= toIndexOf(pointSegments, ipv);

		// Second point
		let psecondx = plastx;
		let psecondy = plasty;
		let psegsecond = pseglast;
		if (2 < pointCount) {
			ipv = (ipvoffset + 1) % pointCount;
			ipvs = ipv << 1;
			psecondx = pointValues[ipvs];
			psecondy = pointValues[ipvs + 1];
			psegsecond = 0 <= toIndexOf(pointSegments, ipv);
		}

		// First segment
		if (pointsClosed) {
			px = plastx;
			py = plasty;
			pnextx = pfirstx;
			pnexty = pfirsty;
			pseg = pseglast;
			psegnext = psegfirst;
		} else {
			pprevx = pfirstx - (psecondx - pfirstx);
			pprevy = pfirsty - (psecondy - pfirsty);
			px = pfirstx;
			py = pfirsty;
			pnextx = psecondx;
			pnexty = psecondy;
			pseg = psegfirst;
			psegnext = psegsecond;
			lnext += toLength(px, py, pnextx, pnexty);

			//
			fillPolylineVertexStepAndColorFill(
				iv,
				vertices,
				is,
				steps,
				icf,
				colorFills,
				px,
				py,
				strokeWidth,
				scaleInvariant,
				pprevx,
				pprevy,
				pnextx,
				pnexty,
				llo
			);
			iv += 8;
			is += 24;
			icf += 16;
		}

		// Middle segments
		for (let i = pointsClosed ? 0 : 1, imax = pointCount - i; i < imax; ++i) {
			pprevx = px;
			pprevy = py;
			px = pnextx;
			py = pnexty;
			pseg = psegnext;
			if (i === pointCount - 2) {
				pnextx = plastx;
				pnexty = plasty;
				psegnext = pseglast;
			} else if (i === 0) {
				pnextx = psecondx;
				pnexty = psecondy;
				psegnext = psegsecond;
			} else if (i < pointCount - 1) {
				ipv = (ipvoffset + i + 1) % pointCount;
				ipvs = ipv << 1;
				pnextx = pointValues[ipvs];
				pnexty = pointValues[ipvs + 1];
				psegnext = 0 <= toIndexOf(pointSegments, ipv);
			} else {
				pnextx = pfirstx;
				pnexty = pfirsty;
				psegnext = psegfirst;
			}
			lprev = l;
			l = lnext;
			lnext += toLength(px, py, pnextx, pnexty);

			let pnextxn = pnextx;
			let pnextyn = pnexty;
			let loffsetprev = loffset;
			if (pseg) {
				pprevx = px - (pnextx - px);
				pprevy = py - (pnexty - py);

				lmax = Math.max(lmax, llo);

				llop = lprev - loffset;
				const dash = toDash(llop, strokeWidth, pointsStyle, POLYLINE_WORK_POINT);
				const dash0 = dash.x;
				const dash1 = dash.y;
				for (let j = icfprev; j < icf + 16; j += 4) {
					colorFills[j + 2] = dash0;
					colorFills[j + 3] = dash1;
					colorFills[j + 4] = llop;
				}
				icfprev = icf + 16;
				loffsetprev = loffset;
				loffset = l;
			} else if (psegnext) {
				pnextxn = px + (px - pprevx);
				pnextyn = py + (py - pprevy);
			}

			// Vertices
			llop = l - loffsetprev;
			fillPolylineVertexStepAndColorFill(
				iv,
				vertices,
				is,
				steps,
				icf,
				colorFills,
				px,
				py,
				strokeWidth,
				scaleInvariant,
				pprevx,
				pprevy,
				pnextxn,
				pnextyn,
				llop
			);
			iv += 8;
			is += 24;
			icf += 16;

			llo = l - loffset;
			fillPolylineVertexStepAndColorFill(
				iv,
				vertices,
				is,
				steps,
				icf,
				colorFills,
				px,
				py,
				strokeWidth,
				scaleInvariant,
				pprevx,
				pprevy,
				pnextxn,
				pnextyn,
				llo
			);
			iv += 8;
			is += 24;
			icf += 16;
		}

		// Last segment
		{
			pprevx = px;
			pprevy = py;
			px = pnextx;
			py = pnexty;
			pseg = psegnext;
			if (pointsClosed) {
				pnextx = psecondx;
				pnexty = psecondy;
				psegnext = psegsecond;
			} else {
				pnextx = px + (px - pprevx);
				pnexty = py + (py - pprevy);
				psegnext = false;
			}
			lprev = l;
			l = lnext;

			let pnextxn = pnextx;
			let pnextyn = pnexty;
			let loffsetprev = loffset;
			if (pseg) {
				pprevx = px - (pnextx - px);
				pprevy = py - (pnexty - py);

				lmax = Math.max(lmax, llo);

				llop = lprev - loffset;
				const dash = toDash(llop, strokeWidth, pointsStyle, POLYLINE_WORK_POINT);
				const dash0 = dash.x;
				const dash1 = dash.y;
				for (let j = icfprev; j < icf + 16; j += 4) {
					colorFills[j + 2] = dash0;
					colorFills[j + 3] = dash1;
					colorFills[j + 4] = llop;
				}
				icfprev = icf + 16;
				loffsetprev = loffset;
				loffset = l;
			} else if (psegnext) {
				pnextxn = px + (px - pprevx);
				pnextyn = py + (py - pprevy);
			}

			// Vertices
			llop = l - loffsetprev;
			lmax = Math.max(lmax, llop);
			fillPolylineVertexStepAndColorFill(
				iv,
				vertices,
				is,
				steps,
				icf,
				colorFills,
				px,
				py,
				strokeWidth,
				scaleInvariant,
				pprevx,
				pprevy,
				pnextxn,
				pnextyn,
				llop
			);
			iv += 8;
			is += 24;
			icf += 16;

			// Total length
			if (icfprev < icf) {
				const dash = toDash(llop, strokeWidth, pointsStyle, POLYLINE_WORK_POINT);
				const dash0 = dash.x;
				const dash1 = dash.y;
				if (pointsClosed) {
					for (let i = icfprev; i < icf; i += 4) {
						colorFills[i + 2] = dash0;
						colorFills[i + 3] = dash1;
						colorFills[i + 4] = -1;
					}
				} else {
					for (let i = icfprev; i < icf; i += 4) {
						colorFills[i + 2] = dash0;
						colorFills[i + 3] = dash1;
						colorFills[i + 4] = llop;
					}
				}
			}
		}
	}

	// Fill the rest
	const ivmax = ((voffset + vcount) << 1) - 1;
	for (; iv < ivmax; ) {
		vertices[++iv] = px;
		vertices[++iv] = py;
		steps[++is] = 0;
		steps[++is] = 0;
		steps[++is] = 0;
		steps[++is] = 0;
		steps[++is] = 0;
		steps[++is] = 0;
		colorFills[++icf] = 0;
		colorFills[++icf] = 0;
		colorFills[++icf] = 0;
		colorFills[++icf] = 0;
	}

	return lmax;
};
