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
	const brxi = 1 - worldSize[ 0 ];
	const bryi = 1 - worldSize[ 1 ];

	let ic = voffset * 3 - 1;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = bryi;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = bryi;
	clippings[ ++ic ] = 0;

	// --------------------------------

	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = bryi;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = bryi;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;

	// --------------------------------

	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = brxi;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = brxi;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 0;

	// --------------------------------

	clippings[ ++ic ] = brxi;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = brxi;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 0;

	clippings[ ++ic ] = 1;
	clippings[ ++ic ] = 0;
	clippings[ ++ic ] = 0;
};

export const buildRectangleIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	let ii = ioffset * 3 - 1;
	indices[ ++ii ] = voffset + 0;
	indices[ ++ii ] = voffset + 1;
	indices[ ++ii ] = voffset + 4;

	indices[ ++ii ] = voffset + 4;
	indices[ ++ii ] = voffset + 1;
	indices[ ++ii ] = voffset + 2;

	indices[ ++ii ] = voffset + 4;
	indices[ ++ii ] = voffset + 2;
	indices[ ++ii ] = voffset + 5;

	indices[ ++ii ] = voffset + 5;
	indices[ ++ii ] = voffset + 2;
	indices[ ++ii ] = voffset + 3;

	// --------------------------------

	indices[ ++ii ] = voffset + 8;
	indices[ ++ii ] = voffset + 6;
	indices[ ++ii ] = voffset + 9;

	indices[ ++ii ] = voffset + 9;
	indices[ ++ii ] = voffset + 6;
	indices[ ++ii ] = voffset + 7;

	indices[ ++ii ] = voffset + 9;
	indices[ ++ii ] = voffset + 7;
	indices[ ++ii ] = voffset + 10;

	indices[ ++ii ] = voffset + 10;
	indices[ ++ii ] = voffset + 7;
	indices[ ++ii ] = voffset + 11;

	// --------------------------------

	indices[ ++ii ] = voffset + 12;
	indices[ ++ii ] = voffset + 16;
	indices[ ++ii ] = voffset + 13;

	indices[ ++ii ] = voffset + 13;
	indices[ ++ii ] = voffset + 16;
	indices[ ++ii ] = voffset + 17;

	indices[ ++ii ] = voffset + 13;
	indices[ ++ii ] = voffset + 17;
	indices[ ++ii ] = voffset + 14;

	indices[ ++ii ] = voffset + 14;
	indices[ ++ii ] = voffset + 17;
	indices[ ++ii ] = voffset + 15;

	// --------------------------------

	indices[ ++ii ] = voffset + 18;
	indices[ ++ii ] = voffset + 20;
	indices[ ++ii ] = voffset + 21;

	indices[ ++ii ] = voffset + 18;
	indices[ ++ii ] = voffset + 21;
	indices[ ++ii ] = voffset + 22;

	indices[ ++ii ] = voffset + 18;
	indices[ ++ii ] = voffset + 22;
	indices[ ++ii ] = voffset + 19;

	indices[ ++ii ] = voffset + 19;
	indices[ ++ii ] = voffset + 22;
	indices[ ++ii ] = voffset + 23;
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
	// b0              b1
	// |-------|-------|
	// |       |       |
	// |-------|-------|
	// |       |       |
	// |-------|-------|
	// b3              b2
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	const work = RECTANGLE_WORK_POINT;
	work.set( originX - sx, originY - sy );
	internalTransform.apply( work, work );
	const b0x = work.x;
	const b0y = work.y;
	work.set( originX + sx, originY - sy );
	internalTransform.apply( work, work );
	const b1x = work.x;
	const b1y = work.y;
	work.set( originX + sx, originY + sy );
	internalTransform.apply( work, work );
	const b2x = work.x;
	const b2y = work.y;
	const b3x = b0x + (b2x - b1x);
	const b3y = b0y + (b2y - b1y);

	const ax = toLength( b0x, b0y, b1x, b1y ) * 0.5;
	const ay = toLength( b1x, b1y, b2x, b2y ) * 0.5;
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
	const d01x = brx * (b1x - b0x) * 0.5;
	const d01y = brx * (b1y - b0y) * 0.5;
	const d03x = bry * (b3x - b0x) * 0.5;
	const d03y = bry * (b3y - b0y) * 0.5;
	let iv = (voffset << 1) - 1;
	vertices[ ++iv ] = b0x;
	vertices[ ++iv ] = b0y;
	vertices[ ++iv ] = b0x + d01x;
	vertices[ ++iv ] = b0y + d01y;
	vertices[ ++iv ] = b1x - d01x;
	vertices[ ++iv ] = b1y - d01y;
	vertices[ ++iv ] = b1x;
	vertices[ ++iv ] = b1y;

	vertices[ ++iv ] = b0x + d01x + d03x;
	vertices[ ++iv ] = b0y + d01y + d03y;
	vertices[ ++iv ] = b1x - d01x + d03x;
	vertices[ ++iv ] = b1y - d01y + d03y;

	vertices[ ++iv ] = b3x + d01x - d03x;
	vertices[ ++iv ] = b3y + d01y - d03y;
	vertices[ ++iv ] = b2x - d01x - d03x;
	vertices[ ++iv ] = b2y - d01y - d03y;

	vertices[ ++iv ] = b3x;
	vertices[ ++iv ] = b3y;
	vertices[ ++iv ] = b3x + d01x;
	vertices[ ++iv ] = b3y + d01y;
	vertices[ ++iv ] = b2x - d01x;
	vertices[ ++iv ] = b2y - d01y;
	vertices[ ++iv ] = b2x;
	vertices[ ++iv ] = b2y;

	// 12               20
	// |------|--|------|
	// |      |  |      |
	// 13----16--18-----21
	// |      |  |      |
	// 14----17--19-----22
	// |      |  |      |
	// |------|--|------|
	// 15               23
	vertices[ ++iv ] = b0x;
	vertices[ ++iv ] = b0y;
	vertices[ ++iv ] = b0x + d03x;
	vertices[ ++iv ] = b0y + d03y;
	vertices[ ++iv ] = b3x - d03x;
	vertices[ ++iv ] = b3y - d03y;
	vertices[ ++iv ] = b3x;
	vertices[ ++iv ] = b3y;

	vertices[ ++iv ] = b0x + d03x + d01x;
	vertices[ ++iv ] = b0y + d03y + d01y;
	vertices[ ++iv ] = b3x - d03x + d01x;
	vertices[ ++iv ] = b3y - d03y + d01y;

	vertices[ ++iv ] = b1x + d03x - d01x;
	vertices[ ++iv ] = b1y + d03y - d01y;
	vertices[ ++iv ] = b2x - d03x - d01x;
	vertices[ ++iv ] = b2y - d03y - d01y;

	vertices[ ++iv ] = b1x;
	vertices[ ++iv ] = b1y;
	vertices[ ++iv ] = b1x + d03x;
	vertices[ ++iv ] = b1y + d03y;
	vertices[ ++iv ] = b2x - d03x;
	vertices[ ++iv ] = b2y - d03y;
	vertices[ ++iv ] = b2x;
	vertices[ ++iv ] = b2y;
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
	let is = (voffset - 1) * 6;
	fillRectangleStep( steps, is += 6, swl, swt, pl0, pt0, px1, py1 );
	fillRectangleStep( steps, is += 6, bwl, swt, pl0, pt0, px1, py1 );
	fillRectangleStep( steps, is += 6, bwr, swt, pr0, pt0, px1, py1 );
	fillRectangleStep( steps, is += 6, swr, swt, pr0, pt0, px1, py1 );

	// 4 5
	fillRectangleStep( steps, is += 6, bwl, bwt, pl0, pt0, px1, py1 );
	fillRectangleStep( steps, is += 6, bwr, bwt, pr0, pt0, px1, py1 );

	// 6 7
	fillRectangleStep( steps, is += 6, bwl, bwb, pl0, pb0, px1, py1 );
	fillRectangleStep( steps, is += 6, bwr, bwb, pr0, pb0, px1, py1 );

	// 8 9 10 11
	fillRectangleStep( steps, is += 6, swl, swb, pl0, pb0, px1, py1 );
	fillRectangleStep( steps, is += 6, bwl, swb, pl0, pb0, px1, py1 );
	fillRectangleStep( steps, is += 6, bwr, swb, pr0, pb0, px1, py1 );
	fillRectangleStep( steps, is += 6, swr, swb, pr0, pb0, px1, py1 );

	// ------------------------------

	// 12 13 14 15
	fillRectangleStep( steps, is += 6, swl, swt, pl0, pt0, px1, py1 );
	fillRectangleStep( steps, is += 6, swl, bwt, pl0, pt0, px1, py1 );
	fillRectangleStep( steps, is += 6, swl, bwb, pl0, pb0, px1, py1 );
	fillRectangleStep( steps, is += 6, swl, swb, pl0, pb0, px1, py1 );

	// 16 17
	fillRectangleStep( steps, is += 6, bwl, bwt, pl0, pt0, px1, py1 );
	fillRectangleStep( steps, is += 6, bwl, bwb, pl0, pb0, px1, py1 );

	// 18 19
	fillRectangleStep( steps, is += 6, bwr, bwt, pr0, pt0, px1, py1 );
	fillRectangleStep( steps, is += 6, bwr, bwb, pr0, pb0, px1, py1 );

	// 20 21 22 23
	fillRectangleStep( steps, is += 6, swr, swt, pr0, pt0, px1, py1 );
	fillRectangleStep( steps, is += 6, swr, bwt, pr0, pt0, px1, py1 );
	fillRectangleStep( steps, is += 6, swr, bwb, pr0, pb0, px1, py1 );
	fillRectangleStep( steps, is += 6, swr, swb, pr0, pb0, px1, py1 );
};

const fillRectangleStep = (
	steps: Float32Array, is: number,
	v0: number, v1: number, v2: number,
	v3: number, v4: number, v5: number
): void => {
	steps[   is ] = v0;
	steps[ ++is ] = v1;
	steps[ ++is ] = v2;
	steps[ ++is ] = v3;
	steps[ ++is ] = v4;
	steps[ ++is ] = v5;
}

export const buildRectangleUv = (
	uvs: Float32Array,
	voffset: number,
	textureUvs: TextureUvs,
	worldSize: typeof RECTANGLE_WORLD_SIZE
): void => {
	const x0 = textureUvs.x0;
	const y0 = textureUvs.y0;
	const y1 = textureUvs.y1;
	const x1 = textureUvs.x1;
	const y2 = textureUvs.y2;
	const x2 = textureUvs.x2;
	const y3 = textureUvs.y3;
	const x3 = textureUvs.x3;

	const brx = worldSize[ 0 ];
	const bry = worldSize[ 1 ];
	const d01x = brx * (x1 - x0) * 0.5;
	const d01y = brx * (y1 - y0) * 0.5;
	const d03x = bry * (x3 - x0) * 0.5;
	const d03y = bry * (y3 - y0) * 0.5;

	// UVs
	let iuv = (voffset << 1) - 1;
	uvs[ ++iuv ] = x0;
	uvs[ ++iuv ] = y0;
	uvs[ ++iuv ] = x0 + d01x;
	uvs[ ++iuv ] = y0 + d01y;
	uvs[ ++iuv ] = x1 - d01x;
	uvs[ ++iuv ] = y1 - d01y;
	uvs[ ++iuv ] = x1;
	uvs[ ++iuv ] = y1;

	uvs[ ++iuv ] = x0 + d01x + d03x;
	uvs[ ++iuv ] = y0 + d01y + d03y;
	uvs[ ++iuv ] = x1 - d01x + d03x;
	uvs[ ++iuv ] = y1 - d01y + d03y;

	uvs[ ++iuv ] = x3 + d01x - d03x;
	uvs[ ++iuv ] = y3 + d01y - d03y;
	uvs[ ++iuv ] = x2 - d01x - d03x;
	uvs[ ++iuv ] = y2 - d01y - d03y;

	uvs[ ++iuv ] = x3;
	uvs[ ++iuv ] = y3;
	uvs[ ++iuv ] = x3 + d01x;
	uvs[ ++iuv ] = y3 + d01y;
	uvs[ ++iuv ] = x2 - d01x;
	uvs[ ++iuv ] = y2 - d01y;
	uvs[ ++iuv ] = x2;
	uvs[ ++iuv ] = y2;

	// ------------------------------

	uvs[ ++iuv ] = x0;
	uvs[ ++iuv ] = y0;
	uvs[ ++iuv ] = x0 + d03x;
	uvs[ ++iuv ] = y0 + d03y;
	uvs[ ++iuv ] = x3 - d03x;
	uvs[ ++iuv ] = y3 - d03y;
	uvs[ ++iuv ] = x3;
	uvs[ ++iuv ] = y3;

	uvs[ ++iuv ] = x0 + d03x + d01x;
	uvs[ ++iuv ] = y0 + d03y + d01y;
	uvs[ ++iuv ] = x3 - d03x + d01x;
	uvs[ ++iuv ] = y3 - d03y + d01y;

	uvs[ ++iuv ] = x1 + d03x - d01x;
	uvs[ ++iuv ] = y1 + d03y - d01y;
	uvs[ ++iuv ] = x2 - d03x - d01x;
	uvs[ ++iuv ] = y2 - d03y - d01y;

	uvs[ ++iuv ] = x1;
	uvs[ ++iuv ] = y1;
	uvs[ ++iuv ] = x1 + d03x;
	uvs[ ++iuv ] = y1 + d03y;
	uvs[ ++iuv ] = x2 - d03x;
	uvs[ ++iuv ] = y2 - d03y;
	uvs[ ++iuv ] = x2;
	uvs[ ++iuv ] = y2;
};
