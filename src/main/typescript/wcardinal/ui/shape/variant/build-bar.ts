import { Matrix, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toDash } from "./to-dash";
import { toScaleInvariant } from "./to-scale-invariant";
import { toVector } from "./to-vector";
import { toNormal } from "./to-normal";
import { toNormalPacked } from "./to-normal-packed";
import { toPackedI4x64 } from "./to-packed";

export const BAR_VERTEX_COUNT = 4;
export const BAR_INDEX_COUNT = 2;
const BAR_NPREV = [0, 1];
const BAR_NNEXT = [0, 1];
const BAR_FMIN: number = 0.00001;

export const buildBarIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	let ii = ioffset * 3 - 1;
	indices[++ii] = voffset;
	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 1;

	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 3;
};

export const buildBarVertexStep = (
	vertices: Float32Array,
	steps: Float32Array,
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

	const nprev = BAR_NPREV;
	const nnext = BAR_NNEXT;
	toVector(p1x - dx, p1y - dy, p1x, p1y, nprev);
	toVector(p1x, p1y, p2x, p2y, nnext);
	toNormal(nprev, l);
	toNormal(nnext, l);
	const packed = toNormalPacked(nprev, nnext);

	//
	const scaleInvariant = toScaleInvariant(strokeStyle);
	const dash = toDash(strokeStyle);
	const e3 = toPackedI4x64(3, scaleInvariant, dash, 0);
	const e5 = toPackedI4x64(5, scaleInvariant, dash, 0);
	let iv = (voffset << 1) - 1;
	let is = voffset * 5 - 1;
	vertices[++iv] = p1x;
	vertices[++iv] = p1y;
	vertices[++iv] = p1x;
	vertices[++iv] = p1y;
	steps[++is] = strokeWidth;
	steps[++is] = e3;
	steps[++is] = packed;
	steps[++is] = 0;
	steps[++is] = l;
	steps[++is] = strokeWidth;
	steps[++is] = e5;
	steps[++is] = packed;
	steps[++is] = 0;
	steps[++is] = l;

	vertices[++iv] = p2x;
	vertices[++iv] = p2y;
	vertices[++iv] = p2x;
	vertices[++iv] = p2y;
	steps[++is] = strokeWidth;
	steps[++is] = e3;
	steps[++is] = packed;
	steps[++is] = l;
	steps[++is] = l;
	steps[++is] = strokeWidth;
	steps[++is] = e5;
	steps[++is] = packed;
	steps[++is] = l;
	steps[++is] = l;
};

export const buildBarUv = (uvs: Float32Array, voffset: number, textureUvs: TextureUvs): void => {
	let iuv = (voffset << 1) - 1;
	uvs[++iuv] = textureUvs.x0;
	uvs[++iuv] = textureUvs.y0;
	uvs[++iuv] = textureUvs.x3;
	uvs[++iuv] = textureUvs.y3;

	uvs[++iuv] = textureUvs.x1;
	uvs[++iuv] = textureUvs.y1;
	uvs[++iuv] = textureUvs.x2;
	uvs[++iuv] = textureUvs.y2;
};
