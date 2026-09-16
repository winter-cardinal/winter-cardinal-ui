import { Matrix, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";
import { toPackedClippings, toPackedI4x64 } from "./to-packed";

export const TRIANGLE_LEGACY_VERTEX_COUNT = 7;
export const TRIANGLE_LEGACY_INDEX_COUNT = 3;
export const TRIANGLE_LEGACY_WORLD_SIZE: [number, number, number] = [0, 0, 0];

export const buildTriangleLegacyIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	// Indices
	let ii = ioffset * 3 - 1;
	indices[++ii] = voffset + 0;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 2;

	indices[++ii] = voffset + 0;
	indices[++ii] = voffset + 3;
	indices[++ii] = voffset + 4;

	indices[++ii] = voffset + 0;
	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 6;
};

export const buildTriangleLegacyVertex = (
	vertices: Float32Array,
	voffset: number,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	strokeAlign: number,
	strokeWidth: number,
	internalTransform: Matrix,
	worldSize: typeof TRIANGLE_LEGACY_WORLD_SIZE
): void => {
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	const sz = Math.sqrt(sx * sx + 4 * sy * sy);
	const sw = (2 * sx * sy) / (sx + sz);

	const a = internalTransform.a;
	const b = internalTransform.b;
	const c = internalTransform.c;
	const d = internalTransform.d;
	const tx = internalTransform.tx;
	const ty = internalTransform.ty;
	const x0 = a * originX + c * (originY - sy) + tx;
	const y0 = b * originX + d * (originY - sy) + ty;
	const ox = a * originX + c * originY + tx;
	const oy = b * originX + d * originY + ty;
	const rx = a * (originX + sx) + c * originY + tx;
	const ry = b * (originX + sx) + d * originY + ty;
	const dx = ox - x0;
	const dy = oy - y0;
	const x1 = rx + dx;
	const y1 = ry + dy;
	const x2 = ox + (ox - rx) + dx;
	const y2 = oy + (oy - ry) + dy;
	const x3 = a * originX + c * (originY + sy - sw) + tx;
	const y3 = b * originX + d * (originY + sy - sw) + ty;

	// World size
	const xb = ox + dx;
	const yb = oy + dy;
	worldSize[0] = toLength(xb, yb, x3, y3);
	worldSize[1] = toLength(x1, y1, xb, yb);
	worldSize[2] = toLength(x0, y0, ox, oy);

	// Vertices
	let iv = (voffset << 1) - 1;
	vertices[++iv] = x3;
	vertices[++iv] = y3;

	vertices[++iv] = x0;
	vertices[++iv] = y0;
	vertices[++iv] = x1;
	vertices[++iv] = y1;

	vertices[++iv] = x1;
	vertices[++iv] = y1;
	vertices[++iv] = x2;
	vertices[++iv] = y2;

	vertices[++iv] = x2;
	vertices[++iv] = y2;
	vertices[++iv] = x0;
	vertices[++iv] = y0;
};

export const buildTriangleLegacyStep = (
	steps: Float32Array,
	voffset: number,
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle,
	worldSize: typeof TRIANGLE_LEGACY_WORLD_SIZE
): void => {
	const scaleInvariant = toScaleInvariant(strokeStyle);
	const s = worldSize[0];

	const e = toPackedI4x64(0, scaleInvariant, 1, 1);

	const c00 = toPackedClippings(0, 0);
	const c10 = toPackedClippings(1, 0);
	const c01 = toPackedClippings(0, 1);

	// 000
	let is = voffset * 6 - 1;
	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = c00;
	steps[++is] = 0;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = c10;
	steps[++is] = 0;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = c10;
	steps[++is] = 0;

	// 010
	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = c01;
	steps[++is] = 0;

	// 010
	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = c01;
	steps[++is] = 0;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = c10;
	steps[++is] = 0;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = e;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = c10;
	steps[++is] = 0;
};

export const buildTriangleLegacyUv = (
	uvs: Float32Array,
	textureUvs: TextureUvs,
	voffset: number,
	worldSize: typeof TRIANGLE_LEGACY_WORLD_SIZE
): void => {
	const x0 = textureUvs.x0;
	const x1 = textureUvs.x1;
	const x2 = textureUvs.x2;
	const x3 = textureUvs.x3;
	const y0 = textureUvs.y0;
	const y1 = textureUvs.y1;
	const y2 = textureUvs.y2;
	const y3 = textureUvs.y3;

	const x4 = 0.5 * (x0 + x1);
	const y4 = 0.5 * (y0 + y1);

	const c = 1 - (0.5 * worldSize[0]) / worldSize[2];
	const x5 = x4 + c * (x3 - x0);
	const y5 = y4 + c * (y3 - y0);

	let iuv = (voffset << 1) - 1;
	uvs[++iuv] = x5;
	uvs[++iuv] = y5;

	uvs[++iuv] = x4;
	uvs[++iuv] = y4;
	uvs[++iuv] = x2;
	uvs[++iuv] = y2;

	uvs[++iuv] = x2;
	uvs[++iuv] = y2;
	uvs[++iuv] = x3;
	uvs[++iuv] = y3;

	uvs[++iuv] = x3;
	uvs[++iuv] = y3;
	uvs[++iuv] = x4;
	uvs[++iuv] = y4;
};
