/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextureUvs } from "pixi.js";
import { EShapePointsStyle } from "../e-shape-points-style";
import {
	buildPolylineClipping,
	buildPolylineColorStroke,
	buildPolylineIndex,
	buildPolylineUv,
	buildPolylineVertexStepAndColorFill,
	toPolylineIndexCount,
	toPolylineVertexCount
} from "./build-polyline";
import { toScaleInvariant } from "./to-scale-invariant";

export type PolygonBoundary = [number, number, number, number, number, number, number, number];

export interface PolygonDefinition {
	vertexFillCount: number;
	vertexStrokeCount: number;
	vertexCount: number;

	indexFillCount: number;
	indexStrokeCount: number;
	indexCount: number;

	pointCount: number;
	pointValues: number[];
	boundary: PolygonBoundary;
	center: [number, number];
}

export interface PolygonDefinitionTransformed {
	definition: PolygonDefinition;
	pointCount: number;
	pointValues: number[];
	boundary: PolygonBoundary;
	center: [number, number];
}

export const newPolygonDefinition = (
	pointValues: number[],
	center: [number, number],
	boundary: PolygonBoundary
): PolygonDefinition => {
	const pointCount = pointValues.length >> 1;
	const vertexFillCount = toPolygonFillVertexCount(pointCount);
	const vertexStrokeCount = toPolygonStrokeVertexCount(pointCount);
	const indexFillCount = toPolygonFillIndexCount(pointCount);
	const indexStrokeCount = toPolygonStrokeIndexCount(pointCount);
	return {
		vertexFillCount,
		vertexStrokeCount,
		vertexCount: vertexFillCount + vertexStrokeCount,
		indexFillCount,
		indexStrokeCount,
		indexCount: indexFillCount + indexStrokeCount,
		pointCount,
		pointValues: pointValues,
		boundary: boundary,
		center
	};
};

export const toPolygonFillVertexCount = (pointCount: number): number => {
	return 2 <= pointCount ? 1 + pointCount * 4 : 0;
};

export const toPolygonStrokeVertexCount = (pointCount: number): number => {
	return toPolylineVertexCount(pointCount, true);
};

export const toPolygonVertexCount = (pointCount: number): number => {
	return toPolygonFillVertexCount(pointCount) + toPolygonStrokeVertexCount(pointCount);
};

export const toPolygonFillIndexCount = (pointCount: number): number => {
	return 2 <= pointCount ? pointCount * 6 : 0;
};

export const toPolygonStrokeIndexCount = (pointCount: number): number => {
	return toPolylineIndexCount(pointCount, true);
};

export const toPolygonIndexCount = (pointCount: number): number => {
	return toPolygonFillIndexCount(pointCount) + toPolygonStrokeIndexCount(pointCount);
};

const fillPolygonFillClipping = (
	ic: number,
	clippings: Float32Array | number[],
	typeInner: number,
	typeOuter: number
): number => {
	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = typeInner;

	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = typeOuter;
	return ic;
};

export const buildPolygonFillClipping = (
	clippings: Float32Array | number[],
	voffset: number,
	polygon: PolygonDefinition
): void => {
	const pointCount = polygon.pointCount;
	if (2 <= pointCount) {
		let ic = voffset * 3 - 1;
		clippings[++ic] = 1;
		clippings[++ic] = 0;
		clippings[++ic] = 11;
		for (let i = 0; i < pointCount; ++i) {
			ic = fillPolygonFillClipping(ic, clippings, 9, 7);
			ic = fillPolygonFillClipping(ic, clippings, 10, 8);
		}
	}
};

export const buildPolygonStrokeClipping = (
	clippings: Float32Array | number[],
	voffset: number,
	polygon: PolygonDefinition
): void => {
	buildPolylineClipping(
		clippings,
		voffset + polygon.vertexFillCount,
		polygon.vertexStrokeCount,
		polygon.pointCount,
		true
	);
};

export const buildPolygonClipping = (
	clippings: Float32Array | number[],
	voffset: number,
	polygon: PolygonDefinition
): void => {
	buildPolygonFillClipping(clippings, voffset, polygon);
	buildPolygonStrokeClipping(clippings, voffset, polygon);
};

const fillPolygonFillIndex = (
	ii: number,
	indices: Uint16Array | Uint32Array | number[],
	voffset0: number,
	voffset1: number,
	voffset2: number
): number => {
	indices[++ii] = voffset0;
	indices[++ii] = voffset1;
	indices[++ii] = voffset2;

	indices[++ii] = voffset1;
	indices[++ii] = voffset1 + 1;
	indices[++ii] = voffset2;

	indices[++ii] = voffset1 + 1;
	indices[++ii] = voffset2 + 1;
	indices[++ii] = voffset2;
	return ii;
};

export const buildPolygonFillIndex = (
	indices: Uint16Array | Uint32Array | number[],
	voffset: number,
	ioffset: number,
	polygon: PolygonDefinition
): void => {
	const pointCount = polygon.pointCount;
	if (2 <= pointCount) {
		let ii = ioffset * 3 - 1;
		let io = voffset + 1;
		for (let i = 0, imax = pointCount - 1; i < imax; i += 1, io += 4) {
			ii = fillPolygonFillIndex(ii, indices, voffset, io, io + 2);
			ii = fillPolygonFillIndex(ii, indices, voffset, io + 2, io + 4);
		}
		ii = fillPolygonFillIndex(ii, indices, voffset, io, io + 2);
		ii = fillPolygonFillIndex(ii, indices, voffset, io + 2, voffset + 1);
	}
};

export const buildPolygonStrokeIndex = (
	indices: Uint16Array | Uint32Array | number[],
	voffset: number,
	ioffset: number,
	polygon: PolygonDefinition
): void => {
	buildPolylineIndex(
		indices,
		voffset + polygon.vertexFillCount,
		ioffset + polygon.indexFillCount,
		polygon.indexStrokeCount
	);
};

export const buildPolygonIndex = (
	indices: Uint16Array | Uint32Array | number[],
	voffset: number,
	ioffset: number,
	polygon: PolygonDefinition
): void => {
	buildPolygonFillIndex(indices, voffset, ioffset, polygon);
	buildPolygonStrokeIndex(indices, voffset, ioffset, polygon);
};

const fillPolygonFillColorStroke = (
	ic: number,
	colors: Float32Array | number[],
	r: number,
	g: number,
	b: number,
	a: number
): number => {
	colors[++ic] = r;
	colors[++ic] = g;
	colors[++ic] = b;
	colors[++ic] = a;

	colors[++ic] = 0.0;
	colors[++ic] = 0.0;
	colors[++ic] = 0.0;
	colors[++ic] = 0.0;

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

export const buildPolygonFillColorStroke = (
	color: number,
	alpha: number,
	voffset: number,
	colors: Float32Array,
	polygon: PolygonDefinition
): void => {
	const r = (((color >> 16) & 0xff) / 255.0) * alpha;
	const g = (((color >> 8) & 0xff) / 255.0) * alpha;
	const b = (((color >> 0) & 0xff) / 255.0) * alpha;
	const a = alpha;

	const pointCount = polygon.pointCount;
	if (2 < pointCount) {
		let ic = (voffset << 2) - 1;
		colors[++ic] = r;
		colors[++ic] = g;
		colors[++ic] = b;
		colors[++ic] = a;
		for (let i = 0; i < pointCount; ++i) {
			ic = fillPolygonFillColorStroke(ic, colors, r, g, b, a);
		}
	}
};

export const buildPolygonStrokeColorStroke = (
	color: number,
	alpha: number,
	voffset: number,
	colors: Float32Array,
	polygon: PolygonDefinition
): void => {
	buildPolylineColorStroke(
		color,
		alpha,
		voffset + polygon.vertexFillCount,
		polygon.vertexStrokeCount,
		colors
	);
};

const fillPolygonFillUv = (
	iuv: number,
	uvs: Float32Array | number[],
	icf: number,
	colorFills: Float32Array | number[],
	u: number,
	v: number,
	dxu: number,
	dxv: number,
	dyu: number,
	dyv: number
): void => {
	uvs[++iuv] = u;
	uvs[++iuv] = v;
	colorFills[++icf] = dxu;
	colorFills[++icf] = dxv;
	colorFills[++icf] = dyu;
	colorFills[++icf] = dyv;

	uvs[++iuv] = u;
	uvs[++iuv] = v;
	colorFills[++icf] = dxu;
	colorFills[++icf] = dxv;
	colorFills[++icf] = dyu;
	colorFills[++icf] = dyv;
};

export const buildPolygonFillUv = (
	uvs: Float32Array | number[],
	colorFills: Float32Array | number[],
	voffset: number,
	polygon: PolygonDefinitionTransformed,
	textureUvs: TextureUvs
): void => {
	const pointCount = polygon.pointCount;
	if (2 <= pointCount) {
		let iuv = (voffset << 1) - 1;
		let icf = (voffset << 2) - 1;

		const x0 = textureUvs.x0;
		const x1 = textureUvs.x1;
		const x3 = textureUvs.x3;
		const y0 = textureUvs.y0;
		const y1 = textureUvs.y1;
		const y3 = textureUvs.y3;

		const dx01 = x1 - x0;
		const dy01 = y1 - y0;
		const dx03 = x3 - x0;
		const dy03 = y3 - y0;

		const boundary = polygon.boundary;
		const b0x = boundary[0];
		const b0y = boundary[1];
		const b1x = boundary[2];
		const b1y = boundary[3];
		const b3x = boundary[6];
		const b3y = boundary[7];
		const d01x = b1x - b0x;
		const d01y = b1y - b0y;
		const d03x = b3x - b0x;
		const d03y = b3y - b0y;
		const n01 = d01x * d01x + d01y * d01y;
		const n03 = d03x * d03x + d03y * d03y;
		const ux = d01x / n01;
		const uy = d01y / n01;
		const vx = d03x / n03;
		const vy = d03y / n03;

		// Center
		{
			const center = polygon.center;
			const dx = center[0] - b0x;
			const dy = center[1] - b0y;
			const ru = dx * ux + dy * uy;
			const rv = dx * vx + dy * vy;
			const u = x0 + ru * dx01 + rv * dx03;
			const v = y0 + ru * dy01 + rv * dy03;
			uvs[++iuv] = u;
			uvs[++iuv] = v;
			colorFills[++icf] = ux;
			colorFills[++icf] = vx;
			colorFills[++icf] = uy;
			colorFills[++icf] = vy;
		}

		// Others
		const pointValues = polygon.pointValues;
		for (let i = 0; i < pointCount; ++i) {
			const index = i << 1;
			const x = pointValues[index];
			const y = pointValues[index + 1];
			const dx = x - b0x;
			const dy = y - b0y;
			const ru = dx * ux + dy * uy;
			const rv = dx * vx + dy * vy;
			const u = x0 + ru * dx01 + rv * dx03;
			const v = y0 + ru * dy01 + rv * dy03;
			fillPolygonFillUv(iuv, uvs, icf, colorFills, u, v, ux, vx, uy, vy);
			iuv += 4;
			icf += 8;
			fillPolygonFillUv(iuv, uvs, icf, colorFills, u, v, ux, vx, uy, vy);
			iuv += 4;
			icf += 8;
		}
	}
};

export const buildPolygonStrokeUv = (
	uvs: Float32Array | number[],
	colorFills: Float32Array | number[],
	voffset: number,
	polygon: PolygonDefinitionTransformed,
	textureUvs: TextureUvs,
	length: number
): void => {
	const pointCount = polygon.pointCount;
	buildPolylineUv(
		uvs,
		colorFills,
		voffset + polygon.definition.vertexFillCount,
		polygon.definition.vertexStrokeCount,
		pointCount,
		true,
		textureUvs,
		length
	);
};

export const buildPolygonUv = (
	uvs: Float32Array | number[],
	colorFills: Float32Array | number[],
	voffset: number,
	polygon: PolygonDefinitionTransformed,
	textureUvs: TextureUvs,
	length: number
): void => {
	buildPolygonFillUv(uvs, colorFills, voffset, polygon, textureUvs);
	buildPolygonStrokeUv(uvs, colorFills, voffset, polygon, textureUvs, length);
};

const fillPolygonFillVertexAndStep = (
	iv: number,
	vertices: Float32Array | number[],
	is: number,
	steps: Float32Array | number[],
	px: number,
	py: number,
	strokeWidth: number,
	scaleInvariant: number,
	pprevx: number,
	pprevy: number,
	pnextx: number,
	pnexty: number
): void => {
	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = pprevx;
	steps[++is] = pprevy;
	steps[++is] = pnextx;
	steps[++is] = pnexty;

	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = pprevx;
	steps[++is] = pprevy;
	steps[++is] = pnextx;
	steps[++is] = pnexty;
};

export const buildPolygonFillVertexAndStep = (
	vertices: Float32Array | number[],
	steps: Float32Array | number[],
	voffset: number,
	polygon: PolygonDefinitionTransformed,
	strokeStyle: EShapePointsStyle,
	strokeWidth: number
): void => {
	const pointCount = polygon.pointCount;
	if (2 <= pointCount) {
		const scaleInvariant = toScaleInvariant(strokeStyle);

		//
		let pprevx = 0;
		let pprevy = 0;
		let pnextx = 0;
		let pnexty = 0;

		// Center
		let iv = (voffset << 1) - 1;
		let is = voffset * 6 - 1;
		let px = 0;
		let py = 0;
		const center = polygon.center;
		vertices[++iv] = center[0];
		vertices[++iv] = center[1];
		steps[++is] = 0;
		steps[++is] = scaleInvariant;
		steps[++is] = 1;
		steps[++is] = 0;
		steps[++is] = 0;
		steps[++is] = 1;

		// First point
		let ipv = 0;
		let ipvs = ipv << 1;
		const pointValues = polygon.pointValues;
		const pfirstx = pointValues[ipvs];
		const pfirsty = pointValues[ipvs + 1];

		// Last point
		ipv = pointCount - 1;
		ipvs = ipv << 1;
		const plastx = pointValues[ipvs];
		const plasty = pointValues[ipvs + 1];

		// Second point
		let psecondx = plastx;
		let psecondy = plasty;
		if (2 < pointCount) {
			ipv = 1;
			ipvs = ipv << 1;
			psecondx = pointValues[ipvs];
			psecondy = pointValues[ipvs + 1];
		}

		//
		px = plastx;
		py = plasty;
		pnextx = pfirstx;
		pnexty = pfirsty;
		for (let i = 0; i < pointCount; ++i) {
			pprevx = px;
			pprevy = py;
			px = pnextx;
			py = pnexty;
			if (i === pointCount - 2) {
				pnextx = plastx;
				pnexty = plasty;
			} else if (i === 0) {
				pnextx = psecondx;
				pnexty = psecondy;
			} else if (i < pointCount - 1) {
				ipv = i + 1;
				ipvs = ipv << 1;
				pnextx = pointValues[ipvs];
				pnexty = pointValues[ipvs + 1];
			} else {
				pnextx = pfirstx;
				pnexty = pfirsty;
			}

			fillPolygonFillVertexAndStep(
				iv,
				vertices,
				is,
				steps,
				px,
				py,
				strokeWidth,
				scaleInvariant,
				pprevx,
				pprevy,
				pnextx,
				pnexty
			);
			iv += 4;
			is += 12;

			fillPolygonFillVertexAndStep(
				iv,
				vertices,
				is,
				steps,
				px,
				py,
				strokeWidth,
				scaleInvariant,
				pprevx,
				pprevy,
				pnextx,
				pnexty
			);
			iv += 4;
			is += 12;
		}
	}
};

export const buildPolygonStrokeVertexAndStep = (
	vertices: Float32Array | number[],
	steps: Float32Array | number[],
	colorFills: Float32Array | number[],
	voffset: number,
	polygon: PolygonDefinitionTransformed,
	strokeStyle: EShapePointsStyle,
	strokeWidth: number
): number => {
	const pointCount = polygon.pointCount;
	return buildPolylineVertexStepAndColorFill(
		vertices,
		steps,
		colorFills,
		voffset + polygon.definition.vertexFillCount,
		polygon.definition.vertexStrokeCount,
		pointCount,
		true,
		polygon.pointValues,
		[],
		strokeStyle,
		strokeWidth
	);
};

export const buildPolygonVertexAndStep = (
	vertices: Float32Array | number[],
	steps: Float32Array | number[],
	colorFills: Float32Array | number[],
	voffset: number,
	polygon: PolygonDefinitionTransformed,
	strokeStyle: EShapePointsStyle,
	strokeWidth: number
): number => {
	buildPolygonFillVertexAndStep(vertices, steps, voffset, polygon, strokeStyle, strokeWidth);

	return buildPolygonStrokeVertexAndStep(
		vertices,
		steps,
		colorFills,
		voffset,
		polygon,
		strokeStyle,
		strokeWidth
	);
};
