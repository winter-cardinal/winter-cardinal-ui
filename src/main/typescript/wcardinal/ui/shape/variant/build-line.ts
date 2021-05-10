import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapePoints } from "../e-shape-points";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toDash } from "./to-dash";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";

const LINE_FMIN: number = 0.00001;
const LINE_WORK_POINT: Point = new Point();

export const toPointsCount = (points?: EShapePoints): number => {
	if (points) {
		return points.formatted.length;
	}
	return 0;
};

export const toLinePointCount = (points?: EShapePoints): number => {
	return Math.ceil(toPointsCount(points) / 12) * 12;
};

export const toLineVertexCount = (pointCount: number, isClosed: boolean): number => {
	if (isClosed) {
		return pointCount * 4 + 2;
	} else {
		return pointCount * 4;
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
	let icf = voffset << 2;
	for (; iuv < iuvmax; ) {
		const r0 = colorFills[icf] * lengthInverse;
		uvs[++iuv] = x0 + r0 * dx01;
		uvs[++iuv] = y0 + r0 * dy01;
		uvs[++iuv] = x3 + r0 * dx32;
		uvs[++iuv] = y3 + r0 * dy32;
		icf += 8;

		const r1 = colorFills[icf] * lengthInverse;
		uvs[++iuv] = x0 + r1 * dx01;
		uvs[++iuv] = y0 + r1 * dy01;
		uvs[++iuv] = x3 + r1 * dx32;
		uvs[++iuv] = y3 + r1 * dy32;
		icf += 8;
	}
};

let TRANSFORMED_POINT_VALUES: number[] | undefined;

export const buildLineVertexStepAndColorFill = (
	vertices: Float32Array,
	steps: Float32Array,
	colorFills: Float32Array,
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
	return buildTransformedLineVertexStepAndColorFill(
		vertices,
		steps,
		colorFills,
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

const fillTransformedLineVertexStepAndColorFill = (
	iv: number,
	vertices: Float32Array,
	is: number,
	steps: Float32Array,
	icf: number,
	colorFills: Float32Array,
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
};

const buildTransformedLineVertexStepAndColorFill = (
	vertices: Float32Array,
	steps: Float32Array,
	colorFills: Float32Array,
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
				const iseg = lineSegments[i];
				if (2 <= iseg - iprevseg) {
					lprev = buildTransformedLineOpenSegmentVertexStepAndColorFill(
						vertices,
						steps,
						colorFills,
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
				lprev = buildTransformedLineOpenSegmentVertexStepAndColorFill(
					vertices,
					steps,
					colorFills,
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
				buildTransformedLineEmptyVertexStepAndColorFill(
					vertices,
					steps,
					colorFills,
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
				lprev = buildTransformedLineOpenSegmentVertexStepAndColorFill(
					vertices,
					steps,
					colorFills,
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
					lprev = buildTransformedLineOpenSegmentVertexStepAndColorFill(
						vertices,
						steps,
						colorFills,
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
				lprev = buildTransformedLineOpenSegmentVertexStepAndColorFill(
					vertices,
					steps,
					colorFills,
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
				buildTransformedLineEmptyVertexStepAndColorFill(
					vertices,
					steps,
					colorFills,
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
			return buildTransformedLineClosedSegmentVertexStepAndColorFill(
				vertices,
				steps,
				colorFills,
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
			return buildTransformedLineOpenSegmentVertexStepAndColorFill(
				vertices,
				steps,
				colorFills,
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

const buildTransformedLineEmptyVertexStepAndColorFill = (
	vertices: Float32Array,
	steps: Float32Array,
	colorFills: Float32Array,
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
		let iv = (voffset << 1) - 1;
		let is = voffset * 6 - 1;
		let icf = (voffset << 2) - 1;
		const ivmax = ((voffset + vcount) << 1) - 1;
		const ifirst = lineVertexFrom % lineVertexCount << 1;
		const px = lineVertices[ifirst];
		const py = lineVertices[ifirst + 1];
		for (; iv < ivmax; ) {
			vertices[++iv] = px;
			vertices[++iv] = py;
			steps[++is] = 0;
			steps[++is] = scaleInvariant;
			steps[++is] = -1;
			steps[++is] = 0;
			steps[++is] = +1;
			steps[++is] = 0;
			colorFills[++icf] = length;
			colorFills[++icf] = 0;
			colorFills[++icf] = 0;
			colorFills[++icf] = length;
		}
	}

	return 0;
};

const buildTransformedLineOpenSegmentVertexStepAndColorFill = (
	vertices: Float32Array,
	steps: Float32Array,
	colorFills: Float32Array,
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
	let iv = (voffset << 1) - 1;
	let is = voffset * 6 - 1;
	let icf = (voffset << 2) - 1;
	let l = 0;
	fillTransformedLineVertexStepAndColorFill(
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
		length
	);
	iv += 4;
	is += 12;
	icf += 8;

	fillTransformedLineVertexStepAndColorFill(
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
		l
	);
	iv += 4;
	is += 12;
	icf += 8;

	// Middle segments
	for (let i = lineVertexFrom + 1, imax = lineVertexTo - 1; i < imax; ++i) {
		pprevx = px;
		pprevy = py;
		px = pnextx;
		py = pnexty;

		const imiddle = (i + 1) % lineVertexCount << 1;
		pnextx = lineVertices[imiddle];
		pnexty = lineVertices[imiddle + 1];

		l += toLength(pprevx, pprevy, px, py);

		fillTransformedLineVertexStepAndColorFill(
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
			l
		);
		iv += 4;
		is += 12;
		icf += 8;

		fillTransformedLineVertexStepAndColorFill(
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
			l
		);
		iv += 4;
		is += 12;
		icf += 8;
	}

	// Last segment
	pprevx = px;
	pprevy = py;
	px = pnextx;
	py = pnexty;

	pnextx = px + (px - pprevx);
	pnexty = py + (py - pprevy);

	l += toLength(pprevx, pprevy, px, py);

	fillTransformedLineVertexStepAndColorFill(
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
		l
	);
	iv += 4;
	is += 12;
	icf += 8;

	fillTransformedLineVertexStepAndColorFill(
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
		l
	);
	iv += 4;
	is += 12;
	icf += 8;

	// Total length
	const dash = toDash(l, strokeWidth, strokeStyle, LINE_WORK_POINT);
	const dash0 = dash.x;
	const dash1 = dash.y;
	const icf0 = (voffset << 2) - 1;
	for (let i = icf0, imax = icf0 + 8; i < imax; i += 4) {
		colorFills[i + 2] = dash0;
		colorFills[i + 3] = dash1;
		colorFills[i + 4] = length;
	}
	for (let i = icf0 + 8; i < icf; i += 4) {
		colorFills[i + 2] = dash0;
		colorFills[i + 3] = dash1;
		colorFills[i + 4] = l;
	}

	// Fill the rest
	if (0 <= vcount) {
		const ivmax = ((voffset + vcount) << 1) - 1;
		for (; iv < ivmax; ) {
			vertices[++iv] = px;
			vertices[++iv] = py;
			steps[++is] = 0;
			steps[++is] = scaleInvariant;
			steps[++is] = pprevx;
			steps[++is] = pprevy;
			steps[++is] = pnextx;
			steps[++is] = pnexty;
			colorFills[++icf] = l;
			colorFills[++icf] = dash0;
			colorFills[++icf] = dash1;
			colorFills[++icf] = l;
		}
	}

	return l;
};

const buildTransformedLineClosedSegmentVertexStepAndColorFill = (
	vertices: Float32Array,
	steps: Float32Array,
	colorFills: Float32Array,
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
	let l = 0;
	let iv = (voffset << 1) - 1;
	let is = voffset * 6 - 1;
	let icf = (voffset << 2) - 1;
	for (let i = lineVertexFrom; i < lineVertexTo; ++i) {
		pprevx = px;
		pprevy = py;
		px = pnextx;
		py = pnexty;

		const imiddle = (i + 1) % lineVertexCount << 1;
		pnextx = lineVertices[imiddle];
		pnexty = lineVertices[imiddle + 1];

		l += toLength(pprevx, pprevy, px, py);

		fillTransformedLineVertexStepAndColorFill(
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
			l
		);
		iv += 4;
		is += 12;
		icf += 8;

		fillTransformedLineVertexStepAndColorFill(
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
			l
		);
		iv += 4;
		is += 12;
		icf += 8;
	}

	// Last segment
	pprevx = px;
	pprevy = py;
	px = pnextx;
	py = pnexty;

	const isecond = (lineVertexFrom + 1) % lineVertexCount << 1;
	pnextx = lineVertices[isecond];
	pnexty = lineVertices[isecond + 1];

	l += toLength(pprevx, pprevy, px, py);

	fillTransformedLineVertexStepAndColorFill(
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
		l
	);
	iv += 4;
	is += 12;
	icf += 8;

	// Total length
	const dash = toDash(l, strokeWidth, strokeStyle, LINE_WORK_POINT);
	const dash0 = dash.x;
	const dash1 = dash.y;
	for (let i = (voffset << 2) - 1; i < icf; i += 4) {
		colorFills[i + 2] = dash0;
		colorFills[i + 3] = dash1;
		colorFills[i + 4] = -1;
	}

	// Fill the rest
	if (0 <= vcount) {
		const ivmax = ((voffset + vcount) << 1) - 1;
		for (; iv < ivmax; ) {
			vertices[++iv] = px;
			vertices[++iv] = py;
			steps[++is] = 0;
			steps[++is] = scaleInvariant;
			steps[++is] = pprevx;
			steps[++is] = pprevy;
			steps[++is] = pnextx;
			steps[++is] = pnexty;
			colorFills[++icf] = l;
			colorFills[++icf] = dash0;
			colorFills[++icf] = dash1;
			colorFills[++icf] = -1;
		}
	}
	return l;
};
