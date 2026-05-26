import { Matrix, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toLength } from "./to-length";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeFillDirection } from "../e-shape-fill-direction";
import { EShapeBoundary } from "../e-shape-boundary";
import { buildPolygonStep, buildPolygonUv } from "./build-polygon";

export const CIRCLE_N_VERTICES = 32;

export const CIRCLE_VERTEX_COUNT = CIRCLE_N_VERTICES * 2;
export const CIRCLE_INDEX_COUNT = CIRCLE_N_VERTICES * 2;
export const CIRCLE_WORLD_SIZE: [number, number] = [0, 0];

export const CIRCLE_DISTANCES: number[] = [];
export const CIRCLE_LENGTHS: number[] = [];
export const CIRCLE_CLIPPINGS: number[] = [];
export const CIRCLE_UVS: number[] = [];
export const CIRCLE_BOUNDARY: EShapeBoundary = [0, 0, 0, 0];

export const buildCircleIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	let ii = ioffset * 3 - 1;
	const n = CIRCLE_N_VERTICES;
	for (let i = 0, iv1 = voffset; i < n; i += 1, iv1 += 1) {
		indices[++ii] = iv1;
		indices[++ii] = iv1 + 1;
		indices[++ii] = iv1 + n;

		indices[++ii] = iv1 + 1;
		indices[++ii] = iv1 + n + 1;
		indices[++ii] = iv1 + n;
	}
};

export const buildCircleVertex = (
	vertices: Float32Array,
	voffset: number,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	strokeAlign: number,
	strokeWidth: number,
	internalTransform: Matrix
): void => {
	const a = internalTransform.a;
	const b = internalTransform.b;
	const c = internalTransform.c;
	const d = internalTransform.d;
	const tx = internalTransform.tx;
	const ty = internalTransform.ty;

	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);

	// Calculate the transformed positions
	//
	//  0       1       2
	// |-------|-------|
	// |3      |4      |5
	// |-------|-------|
	// |6      |7      |8
	// |-------|-------|
	//
	const p0x = originX - sx;
	const p0y = originY - sy;
	const x0 = a * p0x + c * p0y + tx;
	const y0 = b * p0x + d * p0y + ty;

	const p1x = originX;
	const p1y = originY - sy;
	const x1 = a * p1x + c * p1y + tx;
	const y1 = b * p1x + d * p1y + ty;
	const mx = x1 - x0;
	const my = y1 - y0;

	const x4 = a * originX + c * originY + tx;
	const y4 = b * originX + d * originY + ty;

	const nx = x1 - x4;
	const ny = y1 - y4;
	const x3 = x4 - mx;
	const y3 = y4 - my;

	const rx = toLength(x0, y0, x1, y1);
	const ry = toLength(x0, y0, x3, y3);
	const r = Math.min(rx, ry);
	CIRCLE_BOUNDARY[0] = -rx;
	CIRCLE_BOUNDARY[1] = -ry;
	CIRCLE_BOUNDARY[2] = +rx;
	CIRCLE_BOUNDARY[3] = +ry;

	const n = CIRCLE_N_VERTICES;
	if (CIRCLE_UVS.length <= 0) {
		const dangle = Math.PI / n;
		let angle = 0;
		for (let i = 0, j = 0; i < n; i += 1, j += 2, angle += dangle) {
			CIRCLE_UVS[j + 0] = Math.cos(angle);
			CIRCLE_UVS[j + 1] = Math.sin(angle);
		}
		for (let i = 0, j = 0; i < n; i += 1, j += 2) {
			CIRCLE_UVS[j + n] = 0;
			CIRCLE_UVS[j + n + 1] = Math.sin(angle);
		}
	}

	let iv0 = voffset * 2;
	let iv1 = iv0 + n * 2;
	let iuv = 0;
	let f = 1;
	let l = 0;
	let px = 0;
	let py = 0;
	if (ry <= rx) {
		if (0 < rx) {
			const t = ry / rx;
			f = 1 - t * t;
		}
		for (let i = 0; i < n; ++i) {
			// Vertices
			const u = CIRCLE_UVS[iuv];
			const v = CIRCLE_UVS[iuv + 1];
			const w = u * f;
			const x = x4 + u * mx + v * nx;
			const y = y4 + u * my + v * ny;
			vertices[iv0] = x;
			vertices[iv0 + 1] = y;
			vertices[iv1] = x4 + w * mx;
			vertices[iv1 + 1] = y4 + w * my;

			// Clipping
			CIRCLE_CLIPPINGS[i] = 1;
			CIRCLE_CLIPPINGS[i + n] = 0;

			// Distance
			CIRCLE_DISTANCES[i] = r;
			CIRCLE_DISTANCES[i + n] = 0;

			// Length
			if (i === 0) {
				CIRCLE_LENGTHS[i] = 0;
				CIRCLE_LENGTHS[i + n] = 0;
			} else {
				const dx = x - px;
				const dy = y - py;
				l += Math.sqrt(dx * dx + dy * dy);
				CIRCLE_LENGTHS[i] = l;
				CIRCLE_LENGTHS[i + n] = l;
			}

			// Next
			px = x;
			py = y;
			iv0 += 2;
			iv1 += 2;
			iuv += 2;
		}
	} else {
		if (0 < rx) {
			const t = ry / rx;
			f = 1 - t * t;
		}
		for (let i = 0; i < n; ++i) {
			// Vertices
			const u = CIRCLE_UVS[iuv];
			const v = CIRCLE_UVS[iuv + 1];
			const w = v * f;
			const x = x4 + u * mx + v * nx;
			const y = y4 + u * my + v * ny;
			vertices[iv0] = x;
			vertices[iv0 + 1] = y;
			vertices[iv1] = x4 + w * nx;
			vertices[iv1 + 1] = y4 + w * ny;

			// Clipping
			CIRCLE_CLIPPINGS[i] = 1;
			CIRCLE_CLIPPINGS[i + n] = 0;

			// Distance
			CIRCLE_DISTANCES[i] = r;
			CIRCLE_DISTANCES[i + n] = 0;

			// Length
			if (i === 0) {
				CIRCLE_LENGTHS[i] = 0;
				CIRCLE_LENGTHS[i + n] = 0;
			} else {
				const dx = x - px;
				const dy = y - py;
				l += Math.sqrt(dx * dx + dy * dy);
				CIRCLE_LENGTHS[i] = l;
				CIRCLE_LENGTHS[i + n] = l;
			}

			// Next
			px = x;
			py = y;
			iv0 += 2;
			iv1 += 2;
			iuv += 2;
		}
	}
};

export const buildCircleStep = (
	steps: Float32Array,
	voffset: number,
	fillDirection: EShapeFillDirection,
	fillPercent: number,
	strokeWidth: number,
	strokeSide: EShapeStrokeSide,
	strokeStyle: EShapeStrokeStyle
): void => {
	buildPolygonStep(
		steps,
		CIRCLE_DISTANCES,
		CIRCLE_LENGTHS,
		CIRCLE_CLIPPINGS,
		CIRCLE_UVS,
		CIRCLE_BOUNDARY,
		voffset,
		CIRCLE_N_VERTICES,
		fillDirection,
		fillPercent,
		strokeWidth,
		strokeSide,
		strokeStyle
	);
};

export const buildCircleUv = (uvs: Float32Array, voffset: number, textureUvs: TextureUvs): void => {
	buildPolygonUv(uvs, CIRCLE_UVS, voffset, textureUvs);
};
