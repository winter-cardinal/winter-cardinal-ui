import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { toLength } from "./to-length";
import { STEP_VALUES, toStep } from "./to-step";

export const RECTANGLE_VERTEX_COUNT = 24;
export const RECTANGLE_INDEX_COUNT = 16;
export const RECTANGLE_WORLD_SIZE: [ number, number, number, number ] = [ 0, 0, 0, 0 ];
const RECTANGLE_WORK_POINT: Point = new Point();

export const buildRectangleClipping = (
	clippings: Float32Array,
	voffset: number,
	worldSize: typeof RECTANGLE_WORLD_SIZE
): void => {
	let ic = voffset * 3;

	const cbx = 1 - worldSize[ 0 ];
	const cby = 1 - worldSize[ 1 ];

	clippings[ ic +  0 ] = 0;
	clippings[ ic +  1 ] = 1;
	clippings[ ic +  2 ] = 0;

	clippings[ ic +  3 ] = 0;
	clippings[ ic +  4 ] = 1;
	clippings[ ic +  5 ] = 0;

	clippings[ ic +  6 ] = 0;
	clippings[ ic +  7 ] = 1;
	clippings[ ic +  8 ] = 0;

	clippings[ ic +  9 ] = 0;
	clippings[ ic + 10 ] = 1;
	clippings[ ic + 11 ] = 0;
	ic += 12;

	clippings[ ic +  0 ] = 0;
	clippings[ ic +  1 ] = cby;
	clippings[ ic +  2 ] = 0;

	clippings[ ic +  3 ] = 0;
	clippings[ ic +  4 ] = cby;
	clippings[ ic +  5 ] = 0;
	ic += 6;

	// --------------------------------

	clippings[ ic +  0 ] = 0;
	clippings[ ic +  1 ] = cby;
	clippings[ ic +  2 ] = 0;

	clippings[ ic +  3 ] = 0;
	clippings[ ic +  4 ] = cby;
	clippings[ ic +  5 ] = 0;
	ic += 6;

	clippings[ ic +  0 ] = 0;
	clippings[ ic +  1 ] = 1;
	clippings[ ic +  2 ] = 0;

	clippings[ ic +  3 ] = 0;
	clippings[ ic +  4 ] = 1;
	clippings[ ic +  5 ] = 0;

	clippings[ ic +  6 ] = 0;
	clippings[ ic +  7 ] = 1;
	clippings[ ic +  8 ] = 0;

	clippings[ ic +  9 ] = 0;
	clippings[ ic + 10 ] = 1;
	clippings[ ic + 11 ] = 0;
	ic += 12;

	// --------------------------------

	clippings[ ic +  0 ] = 1;
	clippings[ ic +  1 ] = 0;
	clippings[ ic +  2 ] = 0;

	clippings[ ic +  3 ] = 1;
	clippings[ ic +  4 ] = 0;
	clippings[ ic +  5 ] = 0;

	clippings[ ic +  6 ] = 1;
	clippings[ ic +  7 ] = 0;
	clippings[ ic +  8 ] = 0;

	clippings[ ic +  9 ] = 1;
	clippings[ ic + 10 ] = 0;
	clippings[ ic + 11 ] = 0;
	ic += 12;

	clippings[ ic +  0 ] = cbx;
	clippings[ ic +  1 ] = 0;
	clippings[ ic +  2 ] = 0;

	clippings[ ic +  3 ] = cbx;
	clippings[ ic +  4 ] = 0;
	clippings[ ic +  5 ] = 0;
	ic += 6;

	// --------------------------------

	clippings[ ic +  0 ] = cbx;
	clippings[ ic +  1 ] = 0;
	clippings[ ic +  2 ] = 0;

	clippings[ ic +  3 ] = cbx;
	clippings[ ic +  4 ] = 0;
	clippings[ ic +  5 ] = 0;
	ic += 6;

	clippings[ ic +  0 ] = 1;
	clippings[ ic +  1 ] = 0;
	clippings[ ic +  2 ] = 0;

	clippings[ ic +  3 ] = 1;
	clippings[ ic +  4 ] = 0;
	clippings[ ic +  5 ] = 0;

	clippings[ ic +  6 ] = 1;
	clippings[ ic +  7 ] = 0;
	clippings[ ic +  8 ] = 0;

	clippings[ ic +  9 ] = 1;
	clippings[ ic + 10 ] = 0;
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
	indices[ ii + 2 ] = voffset + 4;
	ii += 3;

	indices[ ii + 0 ] = voffset + 4;
	indices[ ii + 1 ] = voffset + 1;
	indices[ ii + 2 ] = voffset + 2;
	ii += 3;

	indices[ ii + 0 ] = voffset + 4;
	indices[ ii + 1 ] = voffset + 2;
	indices[ ii + 2 ] = voffset + 5;
	ii += 3;

	indices[ ii + 0 ] = voffset + 5;
	indices[ ii + 1 ] = voffset + 2;
	indices[ ii + 2 ] = voffset + 3;
	ii += 3;

	// --------------------------------

	indices[ ii + 0 ] = voffset + 8;
	indices[ ii + 1 ] = voffset + 6;
	indices[ ii + 2 ] = voffset + 9;
	ii += 3;

	indices[ ii + 0 ] = voffset + 9;
	indices[ ii + 1 ] = voffset + 6;
	indices[ ii + 2 ] = voffset + 7;
	ii += 3;

	indices[ ii + 0 ] = voffset + 9;
	indices[ ii + 1 ] = voffset + 7;
	indices[ ii + 2 ] = voffset + 10;
	ii += 3;

	indices[ ii + 0 ] = voffset + 10;
	indices[ ii + 1 ] = voffset + 7;
	indices[ ii + 2 ] = voffset + 11;
	ii += 3;

	// --------------------------------

	indices[ ii + 0 ] = voffset + 12;
	indices[ ii + 1 ] = voffset + 16;
	indices[ ii + 2 ] = voffset + 13;
	ii += 3;

	indices[ ii + 0 ] = voffset + 13;
	indices[ ii + 1 ] = voffset + 16;
	indices[ ii + 2 ] = voffset + 17;
	ii += 3;

	indices[ ii + 0 ] = voffset + 13;
	indices[ ii + 1 ] = voffset + 17;
	indices[ ii + 2 ] = voffset + 14;
	ii += 3;

	indices[ ii + 0 ] = voffset + 14;
	indices[ ii + 1 ] = voffset + 17;
	indices[ ii + 2 ] = voffset + 15;
	ii += 3;

	// --------------------------------

	indices[ ii + 0 ] = voffset + 18;
	indices[ ii + 1 ] = voffset + 20;
	indices[ ii + 2 ] = voffset + 21;
	ii += 3;

	indices[ ii + 0 ] = voffset + 18;
	indices[ ii + 1 ] = voffset + 21;
	indices[ ii + 2 ] = voffset + 22;
	ii += 3;

	indices[ ii + 0 ] = voffset + 18;
	indices[ ii + 1 ] = voffset + 22;
	indices[ ii + 2 ] = voffset + 19;
	ii += 3;

	indices[ ii + 0 ] = voffset + 19;
	indices[ ii + 1 ] = voffset + 22;
	indices[ ii + 2 ] = voffset + 23;
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
	worldSize: typeof RECTANGLE_WORLD_SIZE
): void => {
	// 0               1
	// |-------|-------|
	// |       |       |
	// |-------|-------|
	// |       |       |
	// |-------|-------|
	// 3               2
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	const work = RECTANGLE_WORK_POINT;
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

	const ax = toLength( bx0, by0, bx1, by1 ) * 0.5;
	const ay = toLength( bx1, by1, bx2, by2 ) * 0.5;
	let brx = 1;
	let bry = 1;
	if( ax <= ay ) {
		bry = ax / ay;
	} else {
		brx = ay / ax;
	}
	worldSize[ 0 ] = brx;
	worldSize[ 1 ] = bry;
	worldSize[ 2 ] = ax;
	worldSize[ 3 ] = ay;

	// 0      1  2      3
	// |------|--|------|
	// |      |  |      |
	// |------4--5------|
	// |      |  |      |
	// |------6--7------|
	// |      |  |      |
	// |------|--|------|
	// 8      9  10     11
	const dx01 = brx * (bx1 - bx0) * 0.5;
	const dy01 = brx * (by1 - by0) * 0.5;
	const dx03 = bry * (bx3 - bx0) * 0.5;
	const dy03 = bry * (by3 - by0) * 0.5;

	const x0 = bx0;
	const y0 = by0;
	const x1 = bx0 + dx01;
	const y1 = by0 + dy01;
	const x2 = bx1 - dx01;
	const y2 = by1 - dy01;
	const x3 = bx1;
	const y3 = by1;

	const x4 = x1 + dx03;
	const y4 = y1 + dy03;
	const x5 = x2 + dx03;
	const y5 = y2 + dy03;

	const x8 = bx3;
	const y8 = by3;
	const x9 = bx3 + dx01;
	const y9 = by3 + dy01;
	const x10 = bx2 - dx01;
	const y10 = by2 - dy01;
	const x11 = bx2;
	const y11 = by2;

	const x6 = x9 - dx03;
	const y6 = y9 - dy03;
	const x7 = x10 - dx03;
	const y7 = y10 - dy03;

	let iv = voffset << 1;
	vertices[ iv + 0 ] = x0;
	vertices[ iv + 1 ] = y0;
	vertices[ iv + 2 ] = x1;
	vertices[ iv + 3 ] = y1;
	vertices[ iv + 4 ] = x2;
	vertices[ iv + 5 ] = y2;
	vertices[ iv + 6 ] = x3;
	vertices[ iv + 7 ] = y3;
	iv += 8;

	vertices[ iv + 0 ] = x4;
	vertices[ iv + 1 ] = y4;
	vertices[ iv + 2 ] = x5;
	vertices[ iv + 3 ] = y5;
	iv += 4;

	vertices[ iv + 0 ] = x6;
	vertices[ iv + 1 ] = y6;
	vertices[ iv + 2 ] = x7;
	vertices[ iv + 3 ] = y7;
	iv += 4;

	vertices[ iv + 0 ] = x8;
	vertices[ iv + 1 ] = y8;
	vertices[ iv + 2 ] = x9;
	vertices[ iv + 3 ] = y9;
	vertices[ iv + 4 ] = x10;
	vertices[ iv + 5 ] = y10;
	vertices[ iv + 6 ] = x11;
	vertices[ iv + 7 ] = y11;
	iv += 8;

	// 12               20
	// |------|--|------|
	// |      |  |      |
	// 13----16--18-----21
	// |      |  |      |
	// 14----17--19-----22
	// |      |  |      |
	// |------|--|------|
	// 15               23
	const x12 = bx0;
	const y12 = by0;
	const x13 = bx0 + dx03;
	const y13 = by0 + dy03;
	const x14 = bx3 - dx03;
	const y14 = by3 - dy03;
	const x15 = bx3;
	const y15 = by3;

	const x16 = x13 + dx01;
	const y16 = y13 + dy01;
	const x17 = x14 + dx01;
	const y17 = y14 + dy01;

	const x20 = bx1;
	const y20 = by1;
	const x21 = bx1 + dx03;
	const y21 = by1 + dy03;
	const x22 = bx2 - dx03;
	const y22 = by2 - dy03;
	const x23 = bx2;
	const y23 = by2;

	const x18 = x21 - dx01;
	const y18 = y21 - dy01;
	const x19 = x22 - dx01;
	const y19 = y22 - dy01;

	vertices[ iv + 0 ] = x12;
	vertices[ iv + 1 ] = y12;
	vertices[ iv + 2 ] = x13;
	vertices[ iv + 3 ] = y13;
	vertices[ iv + 4 ] = x14;
	vertices[ iv + 5 ] = y14;
	vertices[ iv + 6 ] = x15;
	vertices[ iv + 7 ] = y15;
	iv += 8;

	vertices[ iv + 0 ] = x16;
	vertices[ iv + 1 ] = y16;
	vertices[ iv + 2 ] = x17;
	vertices[ iv + 3 ] = y17;
	iv += 4;

	vertices[ iv + 0 ] = x18;
	vertices[ iv + 1 ] = y18;
	vertices[ iv + 2 ] = x19;
	vertices[ iv + 3 ] = y19;
	iv += 4;

	vertices[ iv + 0 ] = x20;
	vertices[ iv + 1 ] = y20;
	vertices[ iv + 2 ] = x21;
	vertices[ iv + 3 ] = y21;
	vertices[ iv + 4 ] = x22;
	vertices[ iv + 5 ] = y22;
	vertices[ iv + 6 ] = x23;
	vertices[ iv + 7 ] = y23;
};

export const buildRectangleStep = (
	voffset: number,
	steps: Float32Array,
	strokeWidth: number,
	strokeSide: EShapeStrokeSide,
	antialiasWeight: number,
	worldSize: typeof RECTANGLE_WORLD_SIZE
): void => {
	const brx = worldSize[ 0 ];
	const bry = worldSize[ 1 ];
	const brxi = 1 - brx;
	const bryi = 1 - bry;
	const worldSizeX = worldSize[ 2 ];
	const worldSizeY = worldSize[ 3 ];
	toStep( worldSizeX, strokeWidth, antialiasWeight, STEP_VALUES );
	const swx = STEP_VALUES[ 0 ];
	const px0 = STEP_VALUES[ 1 ];
	const px1 = STEP_VALUES[ 2 ];

	toStep( worldSizeY, strokeWidth, antialiasWeight, STEP_VALUES );
	const swy = STEP_VALUES[ 0 ];
	const py0 = STEP_VALUES[ 1 ];
	const py1 = STEP_VALUES[ 2 ];

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

	const bwl = brxi * swl;
	const bwr = brxi * swr;
	const bwt = bryi * swt;
	const bwb = bryi * swb;

	// 0 1 2 3
	let is = voffset * 6;
	fillRectangleStep( steps, is +  0, swl, swt, pl0, pt0, px1, py1 );
	fillRectangleStep( steps, is +  6, bwl, swt, pl0, pt0, px1, py1 );
	fillRectangleStep( steps, is + 12, bwr, swt, pr0, pt0, px1, py1 );
	fillRectangleStep( steps, is + 18, swr, swt, pr0, pt0, px1, py1 );
	is += 24;

	// 4 5
	fillRectangleStep( steps, is +  0, bwl, bwt, pl0, pt0, px1, py1 );
	fillRectangleStep( steps, is +  6, bwr, bwt, pr0, pt0, px1, py1 );
	is += 12;

	// 6 7
	fillRectangleStep( steps, is +  0, bwl, bwb, pl0, pb0, px1, py1 );
	fillRectangleStep( steps, is +  6, bwr, bwb, pr0, pb0, px1, py1 );
	is += 12;

	// 8 9 10 11
	fillRectangleStep( steps, is +  0, swl, swb, pl0, pb0, px1, py1 );
	fillRectangleStep( steps, is +  6, bwl, swb, pl0, pb0, px1, py1 );
	fillRectangleStep( steps, is + 12, bwr, swb, pr0, pb0, px1, py1 );
	fillRectangleStep( steps, is + 18, swr, swb, pr0, pb0, px1, py1 );
	is += 24;

	// ------------------------------

	// 12 13 14 15
	fillRectangleStep( steps, is +  0, swl, swt, pl0, pt0, px1, py1 );
	fillRectangleStep( steps, is +  6, swl, bwt, pl0, pt0, px1, py1 );
	fillRectangleStep( steps, is + 12, swl, bwb, pl0, pb0, px1, py1 );
	fillRectangleStep( steps, is + 18, swl, swb, pl0, pb0, px1, py1 );
	is += 24;

	// 16 17
	fillRectangleStep( steps, is +  0, bwl, bwt, pl0, pt0, px1, py1 );
	fillRectangleStep( steps, is +  6, bwl, bwb, pl0, pb0, px1, py1 );
	is += 12;

	// 18 19
	fillRectangleStep( steps, is +  0, bwr, bwt, pr0, pt0, px1, py1 );
	fillRectangleStep( steps, is +  6, bwr, bwb, pr0, pb0, px1, py1 );
	is += 12;

	// 20 21 22 23
	fillRectangleStep( steps, is +  0, swr, swt, pr0, pt0, px1, py1 );
	fillRectangleStep( steps, is +  6, swr, bwt, pr0, pt0, px1, py1 );
	fillRectangleStep( steps, is + 12, swr, bwb, pr0, pb0, px1, py1 );
	fillRectangleStep( steps, is + 18, swr, swb, pr0, pb0, px1, py1 );
};

const fillRectangleStep = (
	steps: Float32Array, is: number,
	v0: number, v1: number, v2: number,
	v3: number, v4: number, v5: number
): void => {
	steps[ is     ] = v0;
	steps[ is + 1 ] = v1;
	steps[ is + 2 ] = v2;
	steps[ is + 3 ] = v3;
	steps[ is + 4 ] = v4;
	steps[ is + 5 ] = v5;
}

export const buildRectangleUv = (
	uvs: Float32Array,
	voffset: number,
	textureUvs: TextureUvs,
	worldSize: typeof RECTANGLE_WORLD_SIZE
): void => {
	const x0 = textureUvs.x0;
	const x1 = textureUvs.x1;
	const x2 = textureUvs.x2;
	const x3 = textureUvs.x3;
	const y0 = textureUvs.y0;
	const y1 = textureUvs.y1;
	const y2 = textureUvs.y2;
	const y3 = textureUvs.y3;

	const brx = worldSize[ 0 ];
	const bry = worldSize[ 1 ];
	const dx01 = brx * (x1 - x0) * 0.5;
	const dy01 = brx * (y1 - y0) * 0.5;
	const dx03 = bry * (x3 - x0) * 0.5;
	const dy03 = bry * (y3 - y0) * 0.5;

	// UVs
	let iuv = voffset << 1;
	uvs[ iuv + 0 ] = x0;
	uvs[ iuv + 1 ] = y0;
	uvs[ iuv + 2 ] = x0 + dx01;
	uvs[ iuv + 3 ] = y0 + dy01;
	uvs[ iuv + 4 ] = x1 - dx01;
	uvs[ iuv + 5 ] = y1 - dy01;
	uvs[ iuv + 6 ] = x1;
	uvs[ iuv + 7 ] = y1;
	iuv += 8;

	uvs[ iuv + 0 ] = x0 + dx01 + dx03;
	uvs[ iuv + 1 ] = y0 + dy01 + dy03;
	uvs[ iuv + 2 ] = x1 - dx01 + dx03;
	uvs[ iuv + 3 ] = y1 - dy01 + dy03;
	iuv += 4;

	uvs[ iuv + 0 ] = x3 + dx01 - dx03;
	uvs[ iuv + 1 ] = y3 + dy01 - dy03;
	uvs[ iuv + 2 ] = x2 - dx01 - dx03;
	uvs[ iuv + 3 ] = y2 - dy01 - dy03;
	iuv += 4;

	uvs[ iuv + 0 ] = x3;
	uvs[ iuv + 1 ] = y3;
	uvs[ iuv + 2 ] = x3 + dx01;
	uvs[ iuv + 3 ] = y3 + dy01;
	uvs[ iuv + 4 ] = x2 - dx01;
	uvs[ iuv + 5 ] = y2 - dy01;
	uvs[ iuv + 6 ] = x2;
	uvs[ iuv + 7 ] = y2;
	iuv += 8;

	// ------------------------------

	uvs[ iuv + 0 ] = x0;
	uvs[ iuv + 1 ] = y0;
	uvs[ iuv + 2 ] = x0 + dx03;
	uvs[ iuv + 3 ] = y0 + dy03;
	uvs[ iuv + 4 ] = x3 - dx03;
	uvs[ iuv + 5 ] = y3 - dy03;
	uvs[ iuv + 6 ] = x3;
	uvs[ iuv + 7 ] = y3;
	iuv += 8;

	uvs[ iuv + 0 ] = x0 + dx03 + dx01;
	uvs[ iuv + 1 ] = y0 + dy03 + dy01;
	uvs[ iuv + 2 ] = x3 - dx03 + dx01;
	uvs[ iuv + 3 ] = y3 - dy03 + dy01;
	iuv += 4;

	uvs[ iuv + 0 ] = x1 + dx03 - dx01;
	uvs[ iuv + 1 ] = y1 + dy03 - dy01;
	uvs[ iuv + 2 ] = x2 - dx03 - dx01;
	uvs[ iuv + 3 ] = y2 - dy03 - dy01;
	iuv += 4;

	uvs[ iuv + 0 ] = x1;
	uvs[ iuv + 1 ] = y1;
	uvs[ iuv + 2 ] = x1 + dx03;
	uvs[ iuv + 3 ] = y1 + dy03;
	uvs[ iuv + 4 ] = x2 - dx03;
	uvs[ iuv + 5 ] = y2 - dy03;
	uvs[ iuv + 6 ] = x2;
	uvs[ iuv + 7 ] = y2;
};
