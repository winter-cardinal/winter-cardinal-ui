import { Matrix, TextureUvs } from "pixi.js";
import { EShapePoints } from "../e-shape-points";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toDash } from "./to-dash";
import { toScaleInvariant } from "./to-scale-invariant";
import { toNormalPacked } from "./to-normal-packed";
import { toVectorLength } from "./to-vector-length";
import { toVector } from "./to-vector";
import { toNormal } from "./to-normal";

const LINE_FMIN: number = 0.00001;
const LINE_NPREV = [0, 1];
const LINE_NNEXT = [0, 1];

export const toPointCount = (points?: EShapePoints): number => {
	if (points) {
		return points.formatted.plength;
	}
	return 0;
};

export const toLinePointCount = (points?: EShapePoints): number => {
	const pointCount = toPointCount(points);
	return ((pointCount >> 4) + (0 < (pointCount & 0xf) ? 1 : 0)) << 4;
};

export const toLineVertexCount = (pointCount: number, isClosed: boolean): number => {
	if (isClosed) {
		return (pointCount << 2) + 2;
	} else {
		return pointCount << 2;
	}
};

export const toLineIndexCount = (pointCount: number, isClosed: boolean): number => {
	return toLineVertexCount(pointCount, isClosed) - 2;
};

export const buildLineClipping = (
	clippings: Float32Array,
	voffset: number,
	vcount: number,
	pointCount: number
): void => {
	let ic = voffset * 3 - 1;
	const icmax = (voffset + vcount) * 3 - 1;
	for (let i = 0; i < pointCount; ++i) {
		clippings[++ic] = 1;
		clippings[++ic] = 0;
		clippings[++ic] = 3;

		clippings[++ic] = 0;
		clippings[++ic] = 1;
		clippings[++ic] = 5;

		clippings[++ic] = 1;
		clippings[++ic] = 0;
		clippings[++ic] = 4;

		clippings[++ic] = 0;
		clippings[++ic] = 1;
		clippings[++ic] = 6;
	}
	for (; ic < icmax; ) {
		clippings[++ic] = 1;
		clippings[++ic] = 0;
		clippings[++ic] = 3;

		clippings[++ic] = 0;
		clippings[++ic] = 1;
		clippings[++ic] = 5;
	}
};

export const buildLineIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number,
	icount: number
): void => {
	let ii = ioffset * 3 - 1;
	const iimax = (ioffset + icount) * 3 - 1;
	let io = voffset;
	for (; ii < iimax; ) {
		indices[++ii] = io + 0;
		indices[++ii] = io + 2;
		indices[++ii] = io + 1;

		indices[++ii] = io + 1;
		indices[++ii] = io + 2;
		indices[++ii] = io + 3;
		io += 2;
	}
};

export const buildLineUv = (
	uvs: Float32Array,
	colorFills: Float32Array,
	voffset: number,
	vcount: number,
	textureUvs: TextureUvs,
	length: number
): void => {
	const lengthInverse = 1 / Math.max(LINE_FMIN, length);

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

	let iuv = (voffset << 1) - 1;
	const iuvmax = ((voffset + vcount) << 1) - 1;
	let icf = (voffset << 2) - 8;
	for (; iuv < iuvmax; ) {
		const r = colorFills[(icf += 8)] * lengthInverse;
		uvs[++iuv] = x0 + r * dx01;
		uvs[++iuv] = y0 + r * dy01;
		uvs[++iuv] = x3 + r * dx32;
		uvs[++iuv] = y3 + r * dy32;
	}
};

let TRANSFORMED_POINT_VALUES: number[] | undefined;

export const buildLineVertexStep = (
	vertices: Float32Array,
	steps: Float32Array,
	voffset: number,
	vcount: number,
	pointCount: number,
	pointsClosed: boolean,
	pointValues: number[],
	pointSegments: number[],
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle,
	internalTransform: Matrix
): number => {
	let transformedPointValues = TRANSFORMED_POINT_VALUES;
	if (transformedPointValues == null) {
		transformedPointValues = [];
		TRANSFORMED_POINT_VALUES = transformedPointValues;
	}
	const a = internalTransform.a;
	const b = internalTransform.b;
	const c = internalTransform.c;
	const d = internalTransform.d;
	const tx = internalTransform.tx;
	const ty = internalTransform.ty;
	for (let i = 0; i < pointCount; ++i) {
		const iv = i << 1;
		const x = pointValues[iv];
		const y = pointValues[iv + 1];
		transformedPointValues[iv] = a * x + c * y + tx;
		transformedPointValues[iv + 1] = b * x + d * y + ty;
	}
	return buildTransformedLineVertexStep(
		vertices,
		steps,
		voffset,
		vcount,
		pointCount,
		pointsClosed,
		transformedPointValues,
		pointSegments,
		strokeWidth,
		strokeStyle
	);
};

const fillTransformedLineVertexStep = (
	iv: number,
	vertices: Float32Array,
	is: number,
	steps: Float32Array,
	px: number,
	py: number,
	strokeWidth: number,
	scaleInvariant: number,
	nprev: number[],
	nnext: number[],
	llo: number,
	dashCode: number
): void => {
	const d = toNormalPacked(nprev, nnext);

	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;

	steps[++is] = d;
	steps[++is] = dashCode;
	steps[++is] = llo;
	steps[++is] = llo;

	vertices[++iv] = px;
	vertices[++iv] = py;
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;

	steps[++is] = d;
	steps[++is] = dashCode;
	steps[++is] = llo;
	steps[++is] = llo;
};

const buildTransformedLineVertexStep = (
	vertices: Float32Array,
	steps: Float32Array,
	voffset: number,
	vcount: number,
	lineVertexCount: number,
	lineIsClosed: boolean,
	lineVertices: number[],
	lineSegments: number[],
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle
): number => {
	const lineSegmentsLength = lineSegments.length;
	if (0 < lineSegmentsLength) {
		if (lineIsClosed) {
			let lmax = 0;
			let lprev = 0;
			let ivoffset = voffset;

			let iseg = 0;
			let iprevseg = lineSegments[0];
			for (let i = 1; i < lineSegmentsLength; ++i) {
				iseg = lineSegments[i];
				if (2 <= iseg - iprevseg) {
					lprev = buildTransformedLineOpenSegmentVertexStep(
						vertices,
						steps,
						ivoffset,
						-1,
						lineVertices,
						iprevseg,
						iseg,
						lineVertexCount,
						strokeWidth,
						strokeStyle,
						lprev
					);
					lmax = Math.max(lmax, lprev);
					ivoffset += toLineVertexCount(iseg - iprevseg, false);
				}
				iprevseg = iseg;
			}

			// Last
			iseg = lineSegments[0] + lineVertexCount;
			if (2 <= iseg - iprevseg) {
				lprev = buildTransformedLineOpenSegmentVertexStep(
					vertices,
					steps,
					ivoffset,
					voffset + vcount - ivoffset,
					lineVertices,
					iprevseg,
					iseg,
					lineVertexCount,
					strokeWidth,
					strokeStyle,
					lprev
				);
				lmax = Math.max(lmax, lprev);
				ivoffset += toLineVertexCount(iseg - iprevseg, false);
			} else {
				buildTransformedLineEmptyVertexStep(
					vertices,
					steps,
					ivoffset,
					voffset + vcount - ivoffset,
					lineVertices,
					iprevseg,
					iseg,
					lineVertexCount,
					strokeWidth,
					strokeStyle,
					lprev
				);
			}

			return lmax;
		} else {
			let lmax = 0;
			let lprev = 0;
			let ivoffset = voffset;

			// First
			let iseg = lineSegments[0];
			if (2 <= iseg) {
				lprev = buildTransformedLineOpenSegmentVertexStep(
					vertices,
					steps,
					ivoffset,
					-1,
					lineVertices,
					0,
					iseg,
					lineVertexCount,
					strokeWidth,
					strokeStyle,
					lprev
				);
				lmax = Math.max(lmax, lprev);
				ivoffset += toLineVertexCount(iseg, false);
			}

			// Middle
			let iprevseg = iseg;
			for (let i = 1; i < lineSegmentsLength; ++i) {
				iseg = lineSegments[i];
				if (2 <= iseg - iprevseg) {
					lprev = buildTransformedLineOpenSegmentVertexStep(
						vertices,
						steps,
						ivoffset,
						-1,
						lineVertices,
						iprevseg,
						iseg,
						lineVertexCount,
						strokeWidth,
						strokeStyle,
						lprev
					);
					lmax = Math.max(lmax, lprev);
					ivoffset += toLineVertexCount(iseg - iprevseg, false);
				}
				iprevseg = iseg;
			}

			// Last
			iseg = lineVertexCount;
			if (2 <= iseg - iprevseg) {
				lprev = buildTransformedLineOpenSegmentVertexStep(
					vertices,
					steps,
					ivoffset,
					voffset + vcount - ivoffset,
					lineVertices,
					iprevseg,
					iseg,
					lineVertexCount,
					strokeWidth,
					strokeStyle,
					lprev
				);
				lmax = Math.max(lmax, lprev);
				ivoffset += toLineVertexCount(iseg - iprevseg, false);
			} else {
				buildTransformedLineEmptyVertexStep(
					vertices,
					steps,
					ivoffset,
					voffset + vcount - ivoffset,
					lineVertices,
					iprevseg,
					iseg,
					lineVertexCount,
					strokeWidth,
					strokeStyle,
					lprev
				);
			}
			return lmax;
		}
	} else {
		if (lineIsClosed) {
			return buildTransformedLineClosedSegmentVertexStep(
				vertices,
				steps,
				voffset,
				vcount,
				lineVertices,
				0,
				lineVertexCount,
				lineVertexCount,
				strokeWidth,
				strokeStyle
			);
		} else {
			return buildTransformedLineOpenSegmentVertexStep(
				vertices,
				steps,
				voffset,
				vcount,
				lineVertices,
				0,
				lineVertexCount,
				lineVertexCount,
				strokeWidth,
				strokeStyle,
				0
			);
		}
	}
};

const buildTransformedLineEmptyVertexStep = (
	vertices: Float32Array,
	steps: Float32Array,
	voffset: number,
	vcount: number,
	lineVertices: number[],
	lineVertexFrom: number,
	lineVertexTo: number,
	lineVertexCount: number,
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle,
	length: number
): number => {
	if (0 <= vcount) {
		const scaleInvariant = toScaleInvariant(strokeStyle);
		const dash = toDash(strokeStyle);
		let iv = (voffset << 1) - 1;
		let is = voffset * 6 - 1;
		const ivmax = ((voffset + vcount) << 1) - 1;
		const ifirst = lineVertexFrom % lineVertexCount << 1;
		const px = lineVertices[ifirst];
		const py = lineVertices[ifirst + 1];
		for (; iv < ivmax; ) {
			vertices[++iv] = px;
			vertices[++iv] = py;
			steps[++is] = 0;
			steps[++is] = scaleInvariant;
			steps[++is] = 0;
			steps[++is] = dash;
			steps[++is] = length;
			steps[++is] = length;
		}
	}

	return 0;
};

const buildTransformedLineOpenSegmentVertexStep = (
	vertices: Float32Array,
	steps: Float32Array,
	voffset: number,
	vcount: number,
	lineVertices: number[],
	lineVertexFrom: number,
	lineVertexTo: number,
	lineVertexCount: number,
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle,
	length: number
): number => {
	const scaleInvariant = toScaleInvariant(strokeStyle);

	// First segment
	const ifirst = lineVertexFrom % lineVertexCount << 1;
	let px = lineVertices[ifirst];
	let py = lineVertices[ifirst + 1];
	const isecond = (lineVertexFrom + 1) % lineVertexCount << 1;
	let pnextx = lineVertices[isecond];
	let pnexty = lineVertices[isecond + 1];
	let pprevx = px - (pnextx - px);
	let pprevy = py - (pnexty - py);
	const nprev = LINE_NPREV;
	const nnext = LINE_NNEXT;
	toVector(pprevx, pprevy, px, py, nprev);
	toVector(px, py, pnextx, pnexty, nnext);
	let lprev = toVectorLength(nprev);
	let lnext = lprev;
	toNormal(nprev, lprev);
	toNormal(nnext, lnext);
	const dash = toDash(strokeStyle);
	let iv = (voffset << 1) - 1;
	let is = voffset * 6 - 1;
	let l = 0;
	fillTransformedLineVertexStep(
		iv,
		vertices,
		is,
		steps,
		px,
		py,
		strokeWidth,
		scaleInvariant,
		nprev,
		nnext,
		length,
		dash
	);
	iv += 4;
	is += 12;

	fillTransformedLineVertexStep(
		iv,
		vertices,
		is,
		steps,
		px,
		py,
		strokeWidth,
		scaleInvariant,
		nprev,
		nnext,
		l,
		dash
	);
	iv += 4;
	is += 12;

	// Middle segments
	for (let i = lineVertexFrom + 1, imax = lineVertexTo - 1; i < imax; ++i) {
		pprevx = px;
		pprevy = py;
		px = pnextx;
		py = pnexty;
		nprev[0] = nnext[0];
		nprev[1] = nnext[1];
		lprev = lnext;

		const imiddle = (i + 1) % lineVertexCount << 1;
		pnextx = lineVertices[imiddle];
		pnexty = lineVertices[imiddle + 1];
		toVector(px, py, pnextx, pnexty, nnext);
		lnext = toVectorLength(nnext);
		toNormal(nnext, lnext);
		l += lprev;

		fillTransformedLineVertexStep(
			iv,
			vertices,
			is,
			steps,
			px,
			py,
			strokeWidth,
			scaleInvariant,
			nprev,
			nnext,
			l,
			dash
		);
		iv += 4;
		is += 12;

		fillTransformedLineVertexStep(
			iv,
			vertices,
			is,
			steps,
			px,
			py,
			strokeWidth,
			scaleInvariant,
			nprev,
			nnext,
			l,
			dash
		);
		iv += 4;
		is += 12;
	}

	// Last segment
	pprevx = px;
	pprevy = py;
	px = pnextx;
	py = pnexty;
	nprev[0] = nnext[0];
	nprev[1] = nnext[1];
	lprev = lnext;

	pnextx = px + (px - pprevx);
	pnexty = py + (py - pprevy);

	toVector(px, py, pnextx, pnexty, nnext);
	toNormal(nnext, lnext);
	l += lprev;

	fillTransformedLineVertexStep(
		iv,
		vertices,
		is,
		steps,
		px,
		py,
		strokeWidth,
		scaleInvariant,
		nprev,
		nnext,
		l,
		dash
	);
	iv += 4;
	is += 12;

	fillTransformedLineVertexStep(
		iv,
		vertices,
		is,
		steps,
		px,
		py,
		strokeWidth,
		scaleInvariant,
		nprev,
		nnext,
		l,
		dash
	);
	iv += 4;
	is += 12;

	// Total length
	const is0 = voffset * 6 - 1;
	for (let i = is0, imax = is0 + 12; i < imax; i += 6) {
		steps[i + 6] = length;
	}
	for (let i = is0 + 12; i < is; i += 6) {
		steps[i + 6] = l;
	}

	// Fill the rest
	if (0 <= vcount) {
		const d = toNormalPacked(nprev, nnext);
		const ivmax = ((voffset + vcount) << 1) - 1;
		for (; iv < ivmax; ) {
			vertices[++iv] = px;
			vertices[++iv] = py;
			steps[++is] = 0;
			steps[++is] = scaleInvariant;
			steps[++is] = d;
			steps[++is] = dash;
			steps[++is] = l;
			steps[++is] = l;
		}
	}

	return l;
};

const buildTransformedLineClosedSegmentVertexStep = (
	vertices: Float32Array,
	steps: Float32Array,
	voffset: number,
	vcount: number,
	lineVertices: number[],
	lineVertexFrom: number,
	lineVertexTo: number,
	lineVertexCount: number,
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle
): number => {
	const scaleInvariant = toScaleInvariant(strokeStyle);

	const ilast = (lineVertexTo - 1) % lineVertexCount << 1;
	let pprevx = 0;
	let pprevy = 0;
	let px = lineVertices[ilast];
	let py = lineVertices[ilast + 1];
	const ifirst = lineVertexFrom % lineVertexCount << 1;
	let pnextx = lineVertices[ifirst];
	let pnexty = lineVertices[ifirst + 1];
	const nprev = LINE_NPREV;
	const nnext = LINE_NNEXT;
	toVector(pprevx, pprevy, px, py, nprev);
	toVector(px, py, pnextx, pnexty, nnext);
	let lprev = toVectorLength(nprev);
	let lnext = toVectorLength(nnext);
	toNormal(nprev, lprev);
	toNormal(nnext, lnext);
	const dash = toDash(strokeStyle);
	let l = 0;
	let iv = (voffset << 1) - 1;
	let is = voffset * 6 - 1;
	for (let i = lineVertexFrom; i < lineVertexTo; ++i) {
		pprevx = px;
		pprevy = py;
		px = pnextx;
		py = pnexty;
		nprev[0] = nnext[0];
		nprev[1] = nnext[1];
		lprev = lnext;

		const imiddle = (i + 1) % lineVertexCount << 1;
		pnextx = lineVertices[imiddle];
		pnexty = lineVertices[imiddle + 1];
		toVector(px, py, pnextx, pnexty, nnext);
		lnext = toVectorLength(nnext);
		toNormal(nnext, lnext);
		l += lprev;

		fillTransformedLineVertexStep(
			iv,
			vertices,
			is,
			steps,
			px,
			py,
			strokeWidth,
			scaleInvariant,
			nprev,
			nnext,
			l,
			dash
		);
		iv += 4;
		is += 12;

		fillTransformedLineVertexStep(
			iv,
			vertices,
			is,
			steps,
			px,
			py,
			strokeWidth,
			scaleInvariant,
			nprev,
			nnext,
			l,
			dash
		);
		iv += 4;
		is += 12;
	}

	// Last segment
	pprevx = px;
	pprevy = py;
	px = pnextx;
	py = pnexty;
	nprev[0] = nnext[0];
	nprev[1] = nnext[1];
	lprev = lnext;

	const isecond = (lineVertexFrom + 1) % lineVertexCount << 1;
	pnextx = lineVertices[isecond];
	pnexty = lineVertices[isecond + 1];
	toVector(px, py, pnextx, pnexty, nnext);
	lnext = toVectorLength(nnext);
	toNormal(nnext, lnext);
	l += lprev;

	fillTransformedLineVertexStep(
		iv,
		vertices,
		is,
		steps,
		px,
		py,
		strokeWidth,
		scaleInvariant,
		nprev,
		nnext,
		l,
		dash
	);
	iv += 4;
	is += 12;

	// Total length
	for (let i = voffset * 6 - 1; i < is; i += 6) {
		steps[i + 6] = l;
	}

	// Fill the rest
	if (0 <= vcount) {
		const d = toNormalPacked(nprev, nnext);
		const ivmax = ((voffset + vcount) << 1) - 1;
		for (; iv < ivmax; ) {
			vertices[++iv] = px;
			vertices[++iv] = py;
			steps[++is] = strokeWidth;
			steps[++is] = scaleInvariant;
			steps[++is] = d;
			steps[++is] = dash;
			steps[++is] = l;
			steps[++is] = l;
		}
	}
	return l;
};
