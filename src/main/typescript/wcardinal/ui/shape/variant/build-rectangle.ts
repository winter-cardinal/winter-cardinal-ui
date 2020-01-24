import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { toLength } from "./to-length";
import { toStep } from "./to-step";

export const RECTANGLE_VERTEX_COUNT = 18;
export const RECTANGLE_INDEX_COUNT = 12;
export const RECTANGLE_WORLD_SIZE: [ number, number, number ] = [ 0, 0, 0 ];

export const buildRectangleClipping = (
	clippings: Float32Array,
	voffset: number,
	worldSize: [ number, number, number ]
): void => {
	const br = worldSize[ 0 ];
	const bri = 1 - br;
	const worldSizeX = worldSize[ 1 ];
	const worldSizeY = worldSize[ 2 ];
	if( worldSizeX < worldSizeY ) {
		buildRectangleClippingVertical(
			0, 1,
			0, bri,
			clippings,
			voffset
		);
	} else {
		buildRectangleClippingVertical(
			1, 0,
			bri, 0,
			clippings,
			voffset
		);
	}
};

export const buildRectangleClippingVertical = (
	cx: number, cy: number,
	cbx: number, cby: number,
	clippings: Float32Array,
	voffset: number
): void => {
	let ic = voffset * 3;

	clippings[ ic + 0 ] = cx;
	clippings[ ic + 1 ] = cy;
	clippings[ ic + 2 ] = 0;

	clippings[ ic + 3 ] = cx;
	clippings[ ic + 4 ] = cy;
	clippings[ ic + 5 ] = 0;

	clippings[ ic + 6 ] = cx;
	clippings[ ic + 7 ] = cy;
	clippings[ ic + 8 ] = 0;
	ic += 9;

	clippings[ ic + 0 ] = cbx;
	clippings[ ic + 1 ] = cby;
	clippings[ ic + 2 ] = 0;
	ic += 3;

	clippings[ ic + 0 ] = cbx;
	clippings[ ic + 1 ] = cby;
	clippings[ ic + 2 ] = 0;
	ic += 3;

	clippings[ ic + 0 ] = cx;
	clippings[ ic + 1 ] = cy;
	clippings[ ic + 2 ] = 0;

	clippings[ ic + 3 ] = cx;
	clippings[ ic + 4 ] = cy;
	clippings[ ic + 5 ] = 0;

	clippings[ ic + 6 ] = cx;
	clippings[ ic + 7 ] = cy;
	clippings[ ic + 8 ] = 0;
	ic += 9;

	// --------------------------------

	clippings[ ic +  0 ] = cy;
	clippings[ ic +  1 ] = cx;
	clippings[ ic +  2 ] = 0;

	clippings[ ic +  3 ] = cy;
	clippings[ ic +  4 ] = cx;
	clippings[ ic +  5 ] = 0;

	clippings[ ic +  6 ] = cy;
	clippings[ ic +  7 ] = cx;
	clippings[ ic +  8 ] = 0;

	clippings[ ic +  9 ] = cy;
	clippings[ ic + 10 ] = cx;
	clippings[ ic + 11 ] = 0;
	ic += 12;

	clippings[ ic + 0 ] = 0;
	clippings[ ic + 1 ] = 0;
	clippings[ ic + 2 ] = 0;
	ic += 3;

	clippings[ ic + 0 ] = 0;
	clippings[ ic + 1 ] = 0;
	clippings[ ic + 2 ] = 0;
	ic += 3;

	// --------------------------------

	clippings[ ic +  0 ] = cy;
	clippings[ ic +  1 ] = cx;
	clippings[ ic +  2 ] = 0;

	clippings[ ic +  3 ] = cy;
	clippings[ ic +  4 ] = cx;
	clippings[ ic +  5 ] = 0;

	clippings[ ic +  6 ] = cy;
	clippings[ ic +  7 ] = cx;
	clippings[ ic +  8 ] = 0;

	clippings[ ic +  9 ] = cy;
	clippings[ ic + 10 ] = cx;
	clippings[ ic + 11 ] = 0;
};

export const buildRectangleIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	let ii = ioffset * 3;
	indices[ ii + 0 ] = voffset + 0;
	indices[ ii + 1 ] = voffset + 1;
	indices[ ii + 2 ] = voffset + 3;
	ii += 3;

	indices[ ii + 0 ] = voffset + 1;
	indices[ ii + 1 ] = voffset + 2;
	indices[ ii + 2 ] = voffset + 3;
	ii += 3;

	indices[ ii + 0 ] = voffset + 4;
	indices[ ii + 1 ] = voffset + 6;
	indices[ ii + 2 ] = voffset + 5;
	ii += 3;

	indices[ ii + 0 ] = voffset + 4;
	indices[ ii + 1 ] = voffset + 7;
	indices[ ii + 2 ] = voffset + 6;
	ii += 3;

	// --------------------------------

	indices[ ii + 0 ] = voffset + 8;
	indices[ ii + 1 ] = voffset + 12;
	indices[ ii + 2 ] = voffset + 9;
	ii += 3;

	indices[ ii + 0 ] = voffset + 9;
	indices[ ii + 1 ] = voffset + 12;
	indices[ ii + 2 ] = voffset + 10;
	ii += 3;

	indices[ ii + 0 ] = voffset + 10;
	indices[ ii + 1 ] = voffset + 12;
	indices[ ii + 2 ] = voffset + 13;
	ii += 3;

	indices[ ii + 0 ] = voffset + 10;
	indices[ ii + 1 ] = voffset + 13;
	indices[ ii + 2 ] = voffset + 11;
	ii += 3;

	// --------------------------------

	indices[ ii + 0 ] = voffset + 14;
	indices[ ii + 1 ] = voffset + 15;
	indices[ ii + 2 ] = voffset + 12;
	ii += 3;

	indices[ ii + 0 ] = voffset + 12;
	indices[ ii + 1 ] = voffset + 15;
	indices[ ii + 2 ] = voffset + 16;
	ii += 3;

	indices[ ii + 0 ] = voffset + 16;
	indices[ ii + 1 ] = voffset + 13;
	indices[ ii + 2 ] = voffset + 12;
	ii += 3;

	indices[ ii + 0 ] = voffset + 13;
	indices[ ii + 1 ] = voffset + 16;
	indices[ ii + 2 ] = voffset + 17;
};

export const buildRectangleVertex = (
	vertices: Float32Array,
	voffset: number,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	strokeAlign: number,
	strokeWidth: number,
	internalTransform: Matrix,
	worldSize: [ number, number, number ],
	work: Point
): void => {
	// 0               1
	// |-------|-------|
	// |       |       |
	// |-------|-------|
	// |       |       |
	// |-------|-------|
	//                 2
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	work.set( originX - sx, originY - sy );
	internalTransform.apply( work, work );
	const bx0 = work.x;
	const by0 = work.y;
	work.set( originX + sx, originY - sy );
	internalTransform.apply( work, work );
	const bx1 = work.x;
	const by1 = work.y;
	work.set( originX + sx, originY + sy );
	internalTransform.apply( work, work );
	const bx2 = work.x;
	const by2 = work.y;
	const bx3 = bx0 + (bx2 - bx1);
	const by3 = by0 + (by2 - by1);

	const ax = Math.abs( sx );
	const ay = Math.abs( sy );
	if( ax <= ay ) {
		const br = ax / ay;
		buildRectangleVertexVertical(
			br,
			bx0, by0,
			bx1, by1,
			bx2, by2,
			bx3, by3,
			vertices,
			voffset,
			worldSize
		);
	} else {
		const br = ay / ax;
		buildRectangleVertexVertical(
			br,
			bx3, by3,
			bx0, by0,
			bx1, by1,
			bx2, by2,
			vertices,
			voffset,
			worldSize
		);
		const tmp = worldSize[ 1 ];
		worldSize[ 1 ] = worldSize[ 2 ];
		worldSize[ 2 ] = tmp;
	}
};

export const buildRectangleVertexVertical = (
	br: number,
	bx0: number, by0: number,
	bx1: number, by1: number,
	bx2: number, by2: number,
	bx3: number, by3: number,
	vertices: Float32Array,
	voffset: number,
	worldSize: [ number, number, number ]
): void => {
	// 0       1       2
	// |-------|-------|
	// |       |       |
	// |-------3-------|
	// |       |       |
	// |-------4-------|
	// |       |       |
	// |-------|-------|
	// 5       6       7
	const x0 = bx0;
	const y0 = by0;
	const x1 = (bx0 + bx1) * 0.5;
	const y1 = (by0 + by1) * 0.5;
	const x2 = bx1;
	const y2 = by1;

	const xc = (bx0 + bx2) * 0.5;
	const yc = (by0 + by2) * 0.5;
	const x3 = x1 + br * (xc - x1);
	const y3 = y1 + br * (yc - y1);

	const x5 = bx3;
	const y5 = by3;
	const x6 = (bx3 + bx2) * 0.5;
	const y6 = (by3 + by2) * 0.5;
	const x7 = bx2;
	const y7 = by2;

	const x4 = x6 + br * (xc - x6);
	const y4 = y6 + br * (yc - y6);

	let iv = voffset << 1;
	vertices[ iv + 0 ] = x0;
	vertices[ iv + 1 ] = y0;
	vertices[ iv + 2 ] = x1;
	vertices[ iv + 3 ] = y1;
	vertices[ iv + 4 ] = x2;
	vertices[ iv + 5 ] = y2;
	iv += 6;

	vertices[ iv + 0 ] = x3;
	vertices[ iv + 1 ] = y3;
	iv += 2;

	vertices[ iv + 0 ] = x4;
	vertices[ iv + 1 ] = y4;
	iv += 2;

	vertices[ iv + 0 ] = x5;
	vertices[ iv + 1 ] = y5;
	vertices[ iv + 2 ] = x6;
	vertices[ iv + 3 ] = y6;
	vertices[ iv + 4 ] = x7;
	vertices[ iv + 5 ] = y7;
	iv += 6;

	// 8               14
	// |-------|-------|
	// |       |       |
	// 9-------12------15
	// |       |       |
	// 10------13------16
	// |       |       |
	// |-------|-------|
	// 11              17
	const xcl = (bx0 + bx3) * 0.5;
	const ycl = (by0 + by3) * 0.5;
	const x8 = bx0;
	const y8 = by0;
	const x9 = bx0 + br * (xcl - bx0);
	const y9 = by0 + br * (ycl - by0);
	const x10 = bx3 + br * (xcl - bx3);
	const y10 = by3 + br * (ycl - by3);
	const x11 = bx3;
	const y11 = by3;

	const x12 = x3;
	const y12 = y3;
	const x13 = x4;
	const y13 = y4;

	const xcr = (bx1 + bx2) * 0.5;
	const ycr = (by1 + by2) * 0.5;
	const x14 = bx1;
	const y14 = by1;
	const x15 = bx1 + br * (xcr - bx1);
	const y15 = by1 + br * (ycr - by1);
	const x16 = bx2 + br * (xcr - bx2);
	const y16 = by2 + br * (ycr - by2);
	const x17 = bx2;
	const y17 = by2;

	vertices[ iv + 0 ] = x8;
	vertices[ iv + 1 ] = y8;
	vertices[ iv + 2 ] = x9;
	vertices[ iv + 3 ] = y9;
	vertices[ iv + 4 ] = x10;
	vertices[ iv + 5 ] = y10;
	vertices[ iv + 6 ] = x11;
	vertices[ iv + 7 ] = y11;
	iv += 8;

	vertices[ iv + 0 ] = x12;
	vertices[ iv + 1 ] = y12;
	iv += 2;

	vertices[ iv + 0 ] = x13;
	vertices[ iv + 1 ] = y13;
	iv += 2;

	vertices[ iv + 0 ] = x14;
	vertices[ iv + 1 ] = y14;
	vertices[ iv + 2 ] = x15;
	vertices[ iv + 3 ] = y15;
	vertices[ iv + 4 ] = x16;
	vertices[ iv + 5 ] = y16;
	vertices[ iv + 6 ] = x17;
	vertices[ iv + 7 ] = y17;

	worldSize[ 0 ] = br;
	worldSize[ 1 ] = toLength( x0, y0, x1, y1 );
	worldSize[ 2 ] = toLength( x1, y1, xc, yc );
};

export const buildRectangleStep = (
	voffset: number,
	steps: Float32Array,
	antialiases: Float32Array,
	strokeWidth: number,
	strokeSide: EShapeStrokeSide,
	antialiasWeight: number,
	worldSize: [ number, number, number ],
	workStep: Float32Array
): void => {
	const br = worldSize[ 0 ];
	const bri = 1 - br;
	const worldSizeX = worldSize[ 1 ];
	const worldSizeY = worldSize[ 2 ];
	toStep( worldSizeX, strokeWidth, antialiasWeight, workStep );
	const swx = workStep[ 0 ];
	const px0 = workStep[ 1 ];
	const px1 = workStep[ 2 ];

	toStep( worldSizeY, strokeWidth, antialiasWeight, workStep );
	const swy = workStep[ 0 ];
	const py0 = workStep[ 1 ];
	const py1 = workStep[ 2 ];

	let swt = swy;
	let pt0 = py0;
	if( ! (strokeSide & EShapeStrokeSide.TOP) ) {
		swt = 1;
		pt0 = py1;
	}
	let swr = swx;
	let pr0 = px0;
	if( ! (strokeSide & EShapeStrokeSide.RIGHT) ) {
		swr = 1;
		pr0 = px1;
	}
	let swb = swy;
	let pb0 = py0;
	if( ! (strokeSide & EShapeStrokeSide.BOTTOM) ) {
		swb = 1;
		pb0 = py1;
	}
	let swl = swx;
	let pl0 = px0;
	if( ! (strokeSide & EShapeStrokeSide.LEFT) ) {
		swl = 1;
		pl0 = px1;
	}
	const pc0 = 0.5 * (pl0 + pr0);
	const pm0 = 0.5 * (pt0 + pb0);
	if( worldSizeX < worldSizeY ) {
		buildRectangleStepVertical(
			bri,
			swx, px0, px1,
			swy, py0, py1,
			swt, pt0,
			swr, pr0,
			swb, pb0,
			swl, pl0,
			pc0, pm0,
			voffset,
			steps,
			antialiases
		);
	} else {
		buildRectangleStepHorizontal(
			bri,
			swx, px0, px1,
			swy, py0, py1,
			swt, pt0,
			swr, pr0,
			swb, pb0,
			swl, pl0,
			pc0, pm0,
			voffset,
			steps,
			antialiases
		);
	}
};

export const buildRectangleStepVertical = (
	bri: number,
	swx: number, px0: number, px1: number,
	swy: number, py0: number, py1: number,
	swt: number, pt0: number,
	swr: number, pr0: number,
	swb: number, pb0: number,
	swl: number, pl0: number,
	pc0: number, pm0: number,
	voffset: number,
	steps: Float32Array,
	antialiases: Float32Array
): void => {
	let is = voffset << 1;
	let ia = voffset << 2;

	// 0
	steps[ is     ] = swl;
	steps[ is + 1 ] = swt;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 1
	steps[ is     ] = 0;
	steps[ is + 1 ] = swt;
	antialiases[ ia     ] = pc0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 2
	steps[ is     ] = swr;
	steps[ is + 1 ] = swt;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 3
	steps[ is    ] = 0;
	steps[ is + 1 ] = bri * swt;
	antialiases[ ia     ] = pc0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 4
	steps[ is     ] = 0;
	steps[ is + 1 ] = bri * swb;
	antialiases[ ia + 0 ] = pc0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 5
	steps[ is     ] = swl;
	steps[ is + 1 ] = swb;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 6
	steps[ is     ] = 0;
	steps[ is + 1 ] = swb;
	antialiases[ ia     ] = pc0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 7
	steps[ is     ] = swr;
	steps[ is + 1 ] = swb;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// ------------------------------

	// 8
	steps[ is     ] = swl;
	steps[ is + 1 ] = swt;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 9
	steps[ is     ] = swl;
	steps[ is + 1 ] = bri * swt;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 10
	steps[ is     ] = swl;
	steps[ is + 1 ] = bri * swb;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 11
	steps[ is     ] = swl;
	steps[ is + 1 ] = swb;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// ------------------------------

	// 12
	steps[ is     ] = 0;
	steps[ is + 1 ] = bri * swt;
	antialiases[ ia     ] = pc0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 13
	steps[ is     ] = 0;
	steps[ is + 1 ] = bri * swb;
	antialiases[ ia     ] = pc0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// ------------------------------

	// 14
	steps[ is     ] = swr;
	steps[ is + 1 ] = swt;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 15
	steps[ is     ] = swr;
	steps[ is + 1 ] = bri * swt;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 16
	steps[ is     ] = swr;
	steps[ is + 1 ] = bri * swb;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 17
	steps[ is     ] = swr;
	steps[ is + 1 ] = swb;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
};

export const buildRectangleStepHorizontal = (
	bri: number,
	swx: number, px0: number, px1: number,
	swy: number, py0: number, py1: number,
	swt: number, pt0: number,
	swr: number, pr0: number,
	swb: number, pb0: number,
	swl: number, pl0: number,
	pc0: number, pm0: number,
	voffset: number,
	steps: Float32Array,
	antialiases: Float32Array
): void => {
	let is = voffset << 1;
	let ia = voffset << 2;

	// 0
	steps[ is     ] = swl;
	steps[ is + 1 ] = swb;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 1
	steps[ is     ] = swl;
	steps[ is + 1 ] = 0;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pm0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 2
	steps[ is     ] = swl;
	steps[ is + 1 ] = swt;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 3
	steps[ is     ] = bri * swl;
	steps[ is + 1 ] = 0;
	antialiases[ ia + 0 ] = pl0;
	antialiases[ ia + 1 ] = pm0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 4
	steps[ is     ] = bri * swr;
	steps[ is + 1 ] = 0;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pm0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 5
	steps[ is     ] = swr;
	steps[ is + 1 ] = swb;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 6
	steps[ is     ] = swr;
	steps[ is + 1 ] = 0;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pm0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 7
	steps[ is     ] = swr;
	steps[ is + 1 ] = swt;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// ------------------------------

	// 8
	steps[ is     ] = swl;
	steps[ is + 1 ] = swb;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 9
	steps[ is     ] = bri * swl;
	steps[ is + 1 ] = swb;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 10
	steps[ is     ] = bri * swr;
	steps[ is + 1 ] = swb;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 11
	steps[ is     ] = swr;
	steps[ is + 1 ] = swb;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pb0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// ------------------------------

	// 12
	steps[ is     ] = bri * swl;
	steps[ is + 1 ] = 0;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pm0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 13
	steps[ is     ] = bri * swr;
	steps[ is + 1 ] = 0;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pm0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// ------------------------------

	// 14
	steps[ is     ] = swl;
	steps[ is + 1 ] = swt;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 15
	steps[ is     ] = bri * swl;
	steps[ is + 1 ] = swt;
	antialiases[ ia     ] = pl0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 16
	steps[ is     ] = bri * swr;
	steps[ is + 1 ] = swt;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
	is += 2;
	ia += 4;

	// 17
	steps[ is     ] = swr;
	steps[ is + 1 ] = swt;
	antialiases[ ia     ] = pr0;
	antialiases[ ia + 1 ] = pt0;
	antialiases[ ia + 2 ] = px1;
	antialiases[ ia + 3 ] = py1;
};

export const buildRectangleUv = (
	uvs: Float32Array,
	voffset: number,
	textureUvs: TextureUvs,
	worldSize: [ number, number, number ]
): void => {
	const br = worldSize[ 0 ];
	const bri = 1 - br;
	const worldSizeX = worldSize[ 1 ];
	const worldSizeY = worldSize[ 2 ];
	const x0 = textureUvs.x0;
	const x1 = textureUvs.x1;
	const x2 = textureUvs.x2;
	const x3 = textureUvs.x3;
	const y0 = textureUvs.y0;
	const y1 = textureUvs.y1;
	const y2 = textureUvs.y2;
	const y3 = textureUvs.y3;
	if( worldSizeX < worldSizeY ) {
		buildRectangleUvVertical(
			bri,
			x0, x1, x2, x3,
			y0, y1, y2, y3,
			uvs, voffset
		);
	} else {
		buildRectangleUvVertical(
			bri,
			x3, x0, x1, x2,
			y3, y0, y1, y2,
			uvs, voffset
		);
	}
};

export const buildRectangleUvVertical = (
	bri: number,
	x0: number, x1: number, x2: number, x3: number,
	y0: number, y1: number, y2: number, y3: number,
	uvs: Float32Array,
	voffset: number
): void => {
	const x01 = 0.5 * ( x0 + x1 );
	const y01 = 0.5 * ( y0 + y1 );
	const x02 = 0.5 * ( x0 + x2 );
	const y02 = 0.5 * ( y0 + y2 );
	const x23 = 0.5 * ( x2 + x3 );
	const y23 = 0.5 * ( y2 + y3 );
	const x03 = 0.5 * ( x0 + x3 );
	const y03 = 0.5 * ( y0 + y3 );
	const x12 = 0.5 * ( x1 + x2 );
	const y12 = 0.5 * ( y1 + y2 );

	const xbu = x02 + bri * (x01 - x02);
	const ybu = y02 + bri * (y01 - y02);

	const xbb = x02 + bri * (x23 - x02);
	const ybb = y02 + bri * (y23 - y02);

	// UVs
	let iuv = voffset << 1;
	uvs[ iuv + 0 ] = x0;
	uvs[ iuv + 1 ] = y0;
	uvs[ iuv + 2 ] = x01;
	uvs[ iuv + 3 ] = y01;
	uvs[ iuv + 4 ] = x1;
	uvs[ iuv + 5 ] = y1;
	iuv += 6;

	uvs[ iuv + 0 ] = xbu;
	uvs[ iuv + 1 ] = ybu;
	iuv += 2;

	uvs[ iuv + 0 ] = xbb;
	uvs[ iuv + 1 ] = ybb;
	iuv += 2;

	uvs[ iuv + 0 ] = x3;
	uvs[ iuv + 1 ] = y3;
	uvs[ iuv + 2 ] = x23;
	uvs[ iuv + 3 ] = y23;
	uvs[ iuv + 4 ] = x2;
	uvs[ iuv + 5 ] = y2;
	iuv += 6;

	// ------------------------------

	uvs[ iuv + 0 ] = x0;
	uvs[ iuv + 1 ] = y0;
	uvs[ iuv + 2 ] = x03 + bri * (x0 - x03);
	uvs[ iuv + 3 ] = y03 + bri * (y0 - y03);
	uvs[ iuv + 4 ] = x03 + bri * (x3 - x03);
	uvs[ iuv + 5 ] = y03 + bri * (y3 - y03);
	uvs[ iuv + 6 ] = x3;
	uvs[ iuv + 7 ] = y3;
	iuv += 8;

	uvs[ iuv + 0 ] = xbu;
	uvs[ iuv + 1 ] = ybu;
	iuv += 2;

	uvs[ iuv + 0 ] = xbb;
	uvs[ iuv + 1 ] = ybb;
	iuv += 2;

	uvs[ iuv + 0 ] = x1;
	uvs[ iuv + 1 ] = y1;
	uvs[ iuv + 2 ] = x12 + bri * (x1 - x12);
	uvs[ iuv + 3 ] = y12 + bri * (y1 - y12);
	uvs[ iuv + 4 ] = x12 + bri * (x2 - x12);
	uvs[ iuv + 5 ] = y12 + bri * (y2 - y12);
	uvs[ iuv + 6 ] = x2;
	uvs[ iuv + 7 ] = y2;
};
