import { Matrix, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toLength } from "./to-length";
import { EShapeFillDirection } from "../e-shape-fill-direction";
import { EShapeBoundary } from "../e-shape-boundary";
import { buildPolygonStep, buildPolygonUv } from "./build-polygon";

/**
 * @note Must be a multiple of four
 */
export const CIRCLE_N_VERTICES = 64;

export const CIRCLE_VERTEX_COUNT = CIRCLE_N_VERTICES * 2;
export const CIRCLE_INDEX_COUNT = CIRCLE_N_VERTICES * 2;
export const CIRCLE_WORLD_SIZE: [number, number] = [0, 0];
export const CIRCLE_ANGLE_DELTA = 2 * (Math.PI / CIRCLE_N_VERTICES);

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
	const n = CIRCLE_N_VERTICES;
	const qn = n >> 2;

	// Right Top
	let iv = 0;
	let ii = ioffset * 3 - 1;
	for (let i = 0; i < qn; ++i, ++iv) {
		const iv0 = voffset + iv;
		const iv1 = voffset + ((iv + 1) % n);
		indices[++ii] = iv0;
		indices[++ii] = iv1;
		indices[++ii] = iv1 + n;

		indices[++ii] = iv0;
		indices[++ii] = iv1 + n;
		indices[++ii] = iv0 + n;
	}

	// Right Bottom
	for (let i = 0; i < qn; i += 1, ++iv) {
		const iv0 = voffset + iv;
		const iv1 = voffset + ((iv + 1) % n);
		indices[++ii] = iv0;
		indices[++ii] = iv1;
		indices[++ii] = iv0 + n;

		indices[++ii] = iv1;
		indices[++ii] = iv1 + n;
		indices[++ii] = iv0 + n;
	}

	// Left Bottom
	for (let i = 0; i < qn; i += 1, ++iv) {
		const iv0 = voffset + iv;
		const iv1 = voffset + ((iv + 1) % n);

		indices[++ii] = iv0;
		indices[++ii] = iv1;
		indices[++ii] = iv1 + n;

		indices[++ii] = iv0;
		indices[++ii] = iv1 + n;
		indices[++ii] = iv0 + n;
	}

	// Left Top
	for (let i = 0; i < qn; i += 1, ++iv) {
		const iv0 = voffset + iv;
		const iv1 = voffset + ((iv + 1) % n);
		indices[++ii] = iv0;
		indices[++ii] = iv1;
		indices[++ii] = iv0 + n;

		indices[++ii] = iv1;
		indices[++ii] = iv1 + n;
		indices[++ii] = iv0 + n;
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
		// Ounter Vertices
		let angle = 0;
		let j = 0;
		for (let i = 0; i < n; ++i) {
			CIRCLE_UVS[j + 0] = 0.5 * (1 + Math.cos(angle));
			CIRCLE_UVS[j + 1] = 0.5 * (1 + Math.sin(angle));
			angle += CIRCLE_ANGLE_DELTA;
			j += 2;
		}

		// Innver Vertices
		j = n << 1;
		for (let i = 0; i < n; ++i) {
			CIRCLE_UVS[j] = 0;
			CIRCLE_UVS[j + 1] = 0;
			j += 2;
		}
	}

	const distance = 0 < r ? 1 / r : r;
	if (ry <= rx) {
		// Outer Vertices
		let iv2 = voffset << 1;
		let iuv = 0;
		let l = 0;
		let px = 0;
		let py = 0;
		const f = 0 < rx ? 1 - ry / rx : 1;
		for (let i = 0; i < n; ++i) {
			// Vertices
			const u = 2 * CIRCLE_UVS[iuv] - 1;
			const v = 2 * CIRCLE_UVS[iuv + 1] - 1;
			const x = x4 + u * mx + v * nx;
			const y = y4 + u * my + v * ny;
			vertices[iv2] = x;
			vertices[iv2 + 1] = y;

			// Clipping
			CIRCLE_CLIPPINGS[i] = 1;

			// Distance
			CIRCLE_DISTANCES[i] = distance;

			// Length
			if (i === 0) {
				CIRCLE_LENGTHS[i] = 0;
			} else {
				const dx = x - px;
				const dy = y - py;
				l += Math.sqrt(dx * dx + dy * dy);
				CIRCLE_LENGTHS[i] = l;
			}

			// Next
			px = x;
			py = y;
			iv2 += 2;
			iuv += 2;
		}

		// Inner Vertices
		iuv = 0;
		iv2 = (voffset + n) << 1;
		let juv = n << 1;
		let j = n;
		for (let i = 0; i < n; ++i) {
			// Vertices
			const u = 2 * CIRCLE_UVS[iuv] - 1;
			const uf = u * f;
			vertices[iv2] = x4 + uf * mx;
			vertices[iv2 + 1] = y4 + uf * my;

			// UVs
			CIRCLE_UVS[juv] = 0.5 + f * (CIRCLE_UVS[iuv] - 0.5);
			CIRCLE_UVS[juv + 1] = 0.5;

			// Clipping
			CIRCLE_CLIPPINGS[j] = 0;

			// Distance
			CIRCLE_DISTANCES[j] = distance;

			// Length
			CIRCLE_LENGTHS[j] = CIRCLE_LENGTHS[i];

			// Next
			iv2 += 2;
			iuv += 2;
			juv += 2;
			j += 1;
		}
	} else {
		// Outer Vertices
		let iv2 = voffset << 1;
		let iuv = 0;
		let l = 0;
		let px = 0;
		let py = 0;
		const f = 0 < ry ? 1 - rx / ry : 1;
		for (let i = 0; i < n; ++i) {
			// Vertices
			const u = 2 * CIRCLE_UVS[iuv] - 1;
			const v = 2 * CIRCLE_UVS[iuv + 1] - 1;
			const x = x4 + u * mx + v * nx;
			const y = y4 + u * my + v * ny;
			vertices[iv2] = x;
			vertices[iv2 + 1] = y;

			// Clipping
			CIRCLE_CLIPPINGS[i] = 1;

			// Distance
			CIRCLE_DISTANCES[i] = distance;

			// Length
			if (i === 0) {
				CIRCLE_LENGTHS[i] = 0;
			} else {
				const dx = x - px;
				const dy = y - py;
				l += Math.sqrt(dx * dx + dy * dy);
				CIRCLE_LENGTHS[i] = l;
			}

			// Next
			px = x;
			py = y;
			iv2 += 2;
			iuv += 2;
		}

		// Inner Vertices
		iuv = 0;
		iv2 = (voffset + n) << 1;
		let juv = n << 1;
		let j = n;
		for (let i = 0; i < n; ++i) {
			// Vertices
			const v = 2 * CIRCLE_UVS[iuv + 1] - 1;
			const vf = v * f;
			vertices[iv2] = x4 + vf * nx;
			vertices[iv2 + 1] = y4 + vf * ny;

			// UVs
			CIRCLE_UVS[juv] = 0.5;
			CIRCLE_UVS[juv + 1] = 0.5 + f * (CIRCLE_UVS[iuv + 1] - 0.5);

			// Clipping
			CIRCLE_CLIPPINGS[j] = 0;

			// Distance
			CIRCLE_DISTANCES[j] = distance;

			// Length
			CIRCLE_LENGTHS[j] = CIRCLE_LENGTHS[i];

			// Next
			iv2 += 2;
			iuv += 2;
			juv += 2;
			j += 1;
		}
	}
};

export const buildCircleStep = (
	steps: Float32Array,
	voffset: number,
	fillDirection: EShapeFillDirection,
	fillPercent: number,
	strokeWidth: number,
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
		CIRCLE_VERTEX_COUNT,
		fillDirection,
		fillPercent,
		strokeWidth,
		strokeStyle
	);
};

export const buildCircleUv = (uvs: Float32Array, voffset: number, textureUvs: TextureUvs): void => {
	buildPolygonUv(uvs, CIRCLE_UVS, voffset, textureUvs);
};
