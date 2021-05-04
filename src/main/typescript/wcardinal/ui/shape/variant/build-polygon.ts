/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import {
	buildPolylineClipping,
	buildPolylineColorStroke,
	buildPolylineIndex,
	buildPolylineUv,
	buildPolylineVertexStepAndColorFill,
	toPolylineIndexCount,
	toPolylineVertexCount
} from "./build-polyline";
import { Polygon } from "./polygon";
import { PolygonTransformed } from "./polygon-transformed";
import { toScaleInvariant } from "./to-scale-invariant";

export const toPolygonFillVertexCount = (polygonVertexCount: number): number => {
	return 2 <= polygonVertexCount ? 1 + polygonVertexCount * 4 : 0;
};

export const toPolygonStrokeVertexCount = (polygonVertexCount: number): number => {
	return toPolylineVertexCount(polygonVertexCount, true);
};

export const toPolygonVertexCount = (polygonVertexCount: number): number => {
	return (
		toPolygonFillVertexCount(polygonVertexCount) +
		toPolygonStrokeVertexCount(polygonVertexCount)
	);
};

export const toPolygonFillIndexCount = (polygonVertexCount: number): number => {
	return 2 <= polygonVertexCount ? polygonVertexCount * 6 : 0;
};

export const toPolygonStrokeIndexCount = (polygonVertexCount: number): number => {
	return toPolylineIndexCount(polygonVertexCount, true);
};

export const toPolygonIndexCount = (polygonVertexCount: number): number => {
	return (
		toPolygonFillIndexCount(polygonVertexCount) + toPolygonStrokeIndexCount(polygonVertexCount)
	);
};

const fillPolygonFillClipping = (
	ic: number,
	clippings: Float32Array | number[],
	type0: number,
	type1: number
): number => {
	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = type0;

	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = type1;
	return ic;
};

export const buildPolygonFillClipping = (
	clippings: Float32Array | number[],
	voffset: number,
	polygon: Polygon
): void => {
	const pointCount = polygon.pointCount;
	if (2 <= pointCount) {
		let ic = voffset * 3 - 1;
		clippings[++ic] = 1;
		clippings[++ic] = 0;
		clippings[++ic] = 15;
		for (let i = 0; i < pointCount; ++i) {
			ic = fillPolygonFillClipping(ic, clippings, 11, 12);
			ic = fillPolygonFillClipping(ic, clippings, 13, 14);
		}
	}
};

export const buildPolygonStrokeClipping = (
	clippings: Float32Array | number[],
	voffset: number,
	polygon: Polygon
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
	polygon: Polygon
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
	polygon: Polygon
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
	polygon: Polygon
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
	polygon: Polygon
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
	polygon: Polygon
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
	polygon: Polygon
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
	polygon: PolygonTransformed,
	textureUvs: TextureUvs
): void => {
	const polygonVertices = polygon.vertices;
	const polygonVerticesLength = polygonVertices.length;
	if (4 <= polygonVerticesLength) {
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
		const b3x = boundary[4];
		const b3y = boundary[5];
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
		for (let i = 0; i < polygonVerticesLength; i += 2) {
			const x = polygonVertices[i];
			const y = polygonVertices[i + 1];
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
	polygon: PolygonTransformed,
	textureUvs: TextureUvs,
	length: number
): void => {
	const parent = polygon.parent;
	const pointCount = parent.pointCount;
	buildPolylineUv(
		uvs,
		colorFills,
		voffset + parent.vertexFillCount,
		parent.vertexStrokeCount,
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
	polygon: PolygonTransformed,
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
	nprevx: number,
	nprevy: number,
	nx: number,
	ny: number
): void => {
	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = nprevx;
	steps[++is] = nprevy;
	steps[++is] = nx;
	steps[++is] = ny;

	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = nprevx;
	steps[++is] = nprevy;
	steps[++is] = nx;
	steps[++is] = ny;
};

export const buildPolygonFillVertexAndStep = (
	vertices: Float32Array | number[],
	steps: Float32Array | number[],
	voffset: number,
	polygon: PolygonTransformed,
	strokeWidth: number,
	strokeAlign: number,
	strokeStyle: EShapeStrokeStyle
): void => {
	const polygonVertices = polygon.vertices;
	const polygonVerticesLength = polygonVertices.length;
	if (4 <= polygonVerticesLength) {
		const scaleInvariant = toScaleInvariant(strokeStyle);
		const sws = 2 * (strokeAlign - 0.5);
		const sw = strokeWidth * (1 - sws);

		let iv = (voffset << 1) - 1;
		let is = voffset * 6 - 1;
		let px = 0;
		let py = 0;
		let pnextx = 0;
		let pnexty = 0;
		let nprevx = 0;
		let nprevy = 0;
		let nx = 0;
		let ny = 0;
		let nnextx = 0;
		let nnexty = 0;

		// Center
		const center = polygon.center;
		vertices[++iv] = center[0];
		vertices[++iv] = center[1];
		steps[++is] = 0;
		steps[++is] = scaleInvariant;
		steps[++is] = 1;
		steps[++is] = 0;
		steps[++is] = 0;
		steps[++is] = 1;

		// Others
		const polygonNormals = polygon.normals;
		px = polygonVertices[polygonVerticesLength - 2];
		py = polygonVertices[polygonVerticesLength - 1];
		nx = polygonNormals[polygonVerticesLength - 2];
		ny = polygonNormals[polygonVerticesLength - 1];
		pnextx = polygonVertices[0];
		pnexty = polygonVertices[1];
		nnextx = polygonNormals[0];
		nnexty = polygonNormals[1];
		for (let i = 0; i < polygonVerticesLength; i += 2) {
			nprevx = nx;
			nprevy = ny;
			px = pnextx;
			py = pnexty;
			nx = nnextx;
			ny = nnexty;

			const inext = (i + 2) % polygonVerticesLength;
			pnextx = polygonVertices[inext];
			pnexty = polygonVertices[inext + 1];
			nnextx = polygonNormals[inext];
			nnexty = polygonNormals[inext + 1];

			fillPolygonFillVertexAndStep(
				iv,
				vertices,
				is,
				steps,
				px,
				py,
				sw,
				scaleInvariant,
				nprevx,
				nprevy,
				nx,
				ny
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
				sw,
				scaleInvariant,
				nprevx,
				nprevy,
				nx,
				ny
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
	polygon: PolygonTransformed,
	strokeWidth: number,
	strokeAlign: number,
	strokeStyle: EShapeStrokeStyle
): number => {
	return buildPolylineVertexStepAndColorFill(
		vertices,
		steps,
		colorFills,
		voffset + polygon.parent.vertexFillCount,
		polygon.parent.vertexStrokeCount,
		polygon.vertices,
		polygon.normals,
		[],
		true,
		polygon.parent.pointCount,
		strokeWidth,
		strokeAlign,
		strokeStyle
	);
};

export const buildPolygonVertexAndStep = (
	vertices: Float32Array | number[],
	steps: Float32Array | number[],
	colorFills: Float32Array | number[],
	voffset: number,
	polygon: PolygonTransformed,
	strokeWidth: number,
	strokeAlign: number,
	strokeStyle: EShapeStrokeStyle
): number => {
	buildPolygonFillVertexAndStep(
		vertices,
		steps,
		voffset,
		polygon,
		strokeWidth,
		strokeAlign,
		strokeStyle
	);

	return buildPolygonStrokeVertexAndStep(
		vertices,
		steps,
		colorFills,
		voffset,
		polygon,
		strokeWidth,
		strokeAlign,
		strokeStyle
	);
};
