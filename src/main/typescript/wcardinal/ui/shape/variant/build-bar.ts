import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toDash } from "./to-dash";
import { toScaleInvariant } from "./to-scale-invariant";

export const BAR_VERTEX_COUNT = 4;
export const BAR_INDEX_COUNT = 2;
const BAR_FMIN: number = 0.00001;
const BAR_WORK_POINT: Point = new Point();

export const buildBarClipping = (clippings: Float32Array, voffset: number): void => {
	let ic = voffset * 3 - 1;
	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = 3;

	clippings[++ic] = 0;
	clippings[++ic] = 1;
	clippings[++ic] = 5;

	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = 3;

	clippings[++ic] = 0;
	clippings[++ic] = 1;
	clippings[++ic] = 5;
};

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
	const dash = toDash(l, strokeWidth, strokeStyle, BAR_WORK_POINT);
	const dash0 = dash.x;
	const dash1 = dash.y;
	let iv = (voffset << 1) - 1;
	let icf = (voffset << 2) - 1;
	let is = voffset * 6 - 1;
	vertices[++iv] = p1x;
	vertices[++iv] = p1y;
	vertices[++iv] = p1x;
	vertices[++iv] = p1y;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = p0x;
	steps[++is] = p0y;
	steps[++is] = p2x;
	steps[++is] = p2y;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = p0x;
	steps[++is] = p0y;
	steps[++is] = p2x;
	steps[++is] = p2y;
	colorFills[++icf] = 0;
	colorFills[++icf] = dash0;
	colorFills[++icf] = dash1;
	colorFills[++icf] = l;
	colorFills[++icf] = 0;
	colorFills[++icf] = dash0;
	colorFills[++icf] = dash1;
	colorFills[++icf] = l;

	vertices[++iv] = p2x;
	vertices[++iv] = p2y;
	vertices[++iv] = p2x;
	vertices[++iv] = p2y;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = p1x;
	steps[++is] = p1y;
	steps[++is] = p3x;
	steps[++is] = p3y;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = p1x;
	steps[++is] = p1y;
	steps[++is] = p3x;
	steps[++is] = p3y;
	colorFills[++icf] = l;
	colorFills[++icf] = dash0;
	colorFills[++icf] = dash1;
	colorFills[++icf] = l;
	colorFills[++icf] = l;
	colorFills[++icf] = dash0;
	colorFills[++icf] = dash1;
	colorFills[++icf] = l;
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
