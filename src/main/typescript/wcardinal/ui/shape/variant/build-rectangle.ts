import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeStrokeSide } from "../e-shape-stroke";
import { utilCalcLength } from "./util-calc-length";
import { utilCalcStep } from "./util-calc-step";

export const RECTANGLE_VERTEX_COUNT = 12;
export const RECTANGLE_INDEX_COUNT = 8;

export const buildRectangleClipping = (
	clippings: Float32Array,
	voffset: number
): void => {
	// Clippings
	let ic = voffset * 3;
	clippings[ ic + 0 ] = 1;
	clippings[ ic + 1 ] = 1;
	clippings[ ic + 2 ] = 0;

	clippings[ ic + 3 ] = 0;
	clippings[ ic + 4 ] = 1;
	clippings[ ic + 5 ] = 0;

	clippings[ ic + 6 ] = 1;
	clippings[ ic + 7 ] = 1;
	clippings[ ic + 8 ] = 0;
	ic += 9;

	clippings[ ic + 0 ] = 0;
	clippings[ ic + 1 ] = 0;
	clippings[ ic + 2 ] = 0;
	ic += 3;

	clippings[ ic +  0 ] = 1;
	clippings[ ic +  1 ] = 0;
	clippings[ ic +  2 ] = 0;

	clippings[ ic +  3 ] = 0;
	clippings[ ic +  4 ] = 0;
	clippings[ ic +  5 ] = 0;

	clippings[ ic +  6 ] = 0;
	clippings[ ic +  7 ] = 0;
	clippings[ ic +  8 ] = 0;

	clippings[ ic +  9 ] = 1;
	clippings[ ic + 10 ] = 0;
	clippings[ ic + 11 ] = 0;
	ic += 12;

	clippings[ ic + 0 ] = 0;
	clippings[ ic + 1 ] = 0;
	clippings[ ic + 2 ] = 0;
	ic += 3;

	clippings[ ic + 0 ] = 1;
	clippings[ ic + 1 ] = 1;
	clippings[ ic + 2 ] = 0;

	clippings[ ic + 3 ] = 0;
	clippings[ ic + 4 ] = 1;
	clippings[ ic + 5 ] = 0;

	clippings[ ic + 6 ] = 1;
	clippings[ ic + 7 ] = 1;
	clippings[ ic + 8 ] = 0;
};

export const buildRectangleIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	// Indices
	const ii = ioffset * 3;
	indices[ ii +  0 ] = voffset + 0;
	indices[ ii +  1 ] = voffset + 1;
	indices[ ii +  2 ] = voffset + 3;

	indices[ ii +  3 ] = voffset + 1;
	indices[ ii +  4 ] = voffset + 2;
	indices[ ii +  5 ] = voffset + 3;

	indices[ ii +  6 ] = voffset + 0;
	indices[ ii +  7 ] = voffset + 5;
	indices[ ii +  8 ] = voffset + 4;

	indices[ ii +  9 ] = voffset + 6;
	indices[ ii + 10 ] = voffset + 2;
	indices[ ii + 11 ] = voffset + 7;

	indices[ ii + 12 ] = voffset + 4;
	indices[ ii + 13 ] = voffset + 5;
	indices[ ii + 14 ] = voffset + 9;

	indices[ ii + 15 ] = voffset + 9;
	indices[ ii + 16 ] = voffset + 8;
	indices[ ii + 17 ] = voffset + 10;

	indices[ ii + 18 ] = voffset + 8;
	indices[ ii + 19 ] = voffset + 11;
	indices[ ii + 20 ] = voffset + 10;

	indices[ ii + 21 ] = voffset + 6;
	indices[ ii + 22 ] = voffset + 7;
	indices[ ii + 23 ] = voffset + 11;
};

export const buildRectangleVertexAndStep = (
	vertices: Float32Array,
	voffset: number,
	steps: Float32Array,
	antialiases: Float32Array,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	strokeAlign: number,
	strokeWidth: number,
	strokeSide: EShapeStrokeSide,
	isStepsDirty: boolean,
	internalTransform: Matrix,
	antialiasWeight: number,
	work: Point,
	workStep: Float32Array
): void => {
	// Calculate the transformed positions
	//
	//  0       1       2
	// |-------|-------|
	// |4      |3,5,6  |7
	// |-------|-------|
	// |       |8      |
	// |-------|-------|
	//  9       10      11
	//
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	work.set( originX - sx, originY - sy );
	internalTransform.apply( work, work );
	const x0 = work.x;
	const y0 = work.y;
	work.set( originX, originY - sy );
	internalTransform.apply( work, work );
	const x1 = work.x;
	const y1 = work.y;
	const dx = x1 - x0;
	const dy = y1 - y0;
	work.set( originX, originY );
	internalTransform.apply( work, work );
	const x3 = work.x;
	const y3 = work.y;
	const x10 = x3 + (x3 - x1);
	const y10 = y3 + (y3 - y1);
	const x4 = x3 - dx;
	const y4 = y3 - dy;

	// Vertices
	let iv = voffset * 2;
	vertices[ iv + 0 ] = x0;
	vertices[ iv + 1 ] = y0;
	vertices[ iv + 2 ] = x1;
	vertices[ iv + 3 ] = y1;
	vertices[ iv + 4 ] = x1 + dx;
	vertices[ iv + 5 ] = y1 + dy;
	iv += 6;

	vertices[ iv + 0 ] = x3;
	vertices[ iv + 1 ] = y3;
	iv += 2;

	vertices[ iv + 0 ] = x4;
	vertices[ iv + 1 ] = y4;
	vertices[ iv + 2 ] = x3;
	vertices[ iv + 3 ] = y3;
	vertices[ iv + 4 ] = x3;
	vertices[ iv + 5 ] = y3;
	vertices[ iv + 6 ] = x3 + dx;
	vertices[ iv + 7 ] = y3 + dy;
	iv += 8;

	vertices[ iv + 0 ] = x3;
	vertices[ iv + 1 ] = y3;
	iv += 2;

	vertices[ iv + 0 ] = x10 - dx;
	vertices[ iv + 1 ] = y10 - dy;
	vertices[ iv + 2 ] = x10;
	vertices[ iv + 3 ] = y10;
	vertices[ iv + 4 ] = x10 + dx;
	vertices[ iv + 5 ] = y10 + dy;

	if( isStepsDirty ) {
		const worldSizeX = utilCalcLength( x0, y0, x1, y1 );
		utilCalcStep( worldSizeX, strokeWidth, antialiasWeight, workStep );
		const swx = workStep[ 0 ];
		const px0 = workStep[ 1 ];
		const px1 = workStep[ 2 ];

		const worldSizeY = utilCalcLength( x0, y0, x4, y4 );
		utilCalcStep( worldSizeY, strokeWidth, antialiasWeight, workStep );
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

		let is = voffset * 2;
		let ia = voffset * 4;

		// 0
		steps[ is + 0 ] = swl;
		steps[ is + 1 ] = swt;
		antialiases[ ia + 0 ] = pl0;
		antialiases[ ia + 1 ] = pt0;
		antialiases[ ia + 2 ] = px1;
		antialiases[ ia + 3 ] = py1;
		is += 2;
		ia += 4;

		// 1
		steps[ is + 0 ] = 0;
		steps[ is + 1 ] = swt;
		antialiases[ ia + 0 ] = pc0;
		antialiases[ ia + 1 ] = pt0;
		antialiases[ ia + 2 ] = px1;
		antialiases[ ia + 3 ] = py1;
		is += 2;
		ia += 4;

		// 2
		steps[ is + 0 ] = swr;
		steps[ is + 1 ] = swt;
		antialiases[ ia + 0 ] = pr0;
		antialiases[ ia + 1 ] = pt0;
		antialiases[ ia + 2 ] = px1;
		antialiases[ ia + 3 ] = py1;
		is += 2;
		ia += 4;

		// 3
		steps[ is + 0 ] = 0;
		steps[ is + 1 ] = 0;
		antialiases[ ia + 0 ] = pc0;
		antialiases[ ia + 1 ] = pt0;
		antialiases[ ia + 2 ] = px1;
		antialiases[ ia + 3 ] = py1;
		is += 2;
		ia += 4;

		// 4
		steps[ is + 0 ] = swl;
		steps[ is + 1 ] = 0;
		antialiases[ ia + 0 ] = pl0;
		antialiases[ ia + 1 ] = pm0;
		antialiases[ ia + 2 ] = px1;
		antialiases[ ia + 3 ] = py1;
		is += 2;
		ia += 4;

		// 5
		steps[ is + 0 ] = 0;
		steps[ is + 1 ] = 0;
		antialiases[ ia + 0 ] = pl0;
		antialiases[ ia + 1 ] = pm0;
		antialiases[ ia + 2 ] = px1;
		antialiases[ ia + 3 ] = py1;
		is += 2;
		ia += 4;

		// 6
		steps[ is + 0 ] = 0;
		steps[ is + 1 ] = 0;
		antialiases[ ia + 0 ] = pr0;
		antialiases[ ia + 1 ] = pm0;
		antialiases[ ia + 2 ] = px1;
		antialiases[ ia + 3 ] = py1;
		is += 2;
		ia += 4;

		// 7
		steps[ is + 0 ] = swr;
		steps[ is + 1 ] = 0;
		antialiases[ ia + 0 ] = pr0;
		antialiases[ ia + 1 ] = pm0;
		antialiases[ ia + 2 ] = px1;
		antialiases[ ia + 3 ] = py1;
		is += 2;
		ia += 4;

		// 8
		steps[ is + 0 ] = 0;
		steps[ is + 1 ] = 0;
		antialiases[ ia + 0 ] = pc0;
		antialiases[ ia + 1 ] = pb0;
		antialiases[ ia + 2 ] = px1;
		antialiases[ ia + 3 ] = py1;
		is += 2;
		ia += 4;

		// 9
		steps[ is + 0 ] = swl;
		steps[ is + 1 ] = swb;
		antialiases[ ia + 0 ] = pl0;
		antialiases[ ia + 1 ] = pb0;
		antialiases[ ia + 2 ] = px1;
		antialiases[ ia + 3 ] = py1;
		is += 2;
		ia += 4;

		// 10
		steps[ is + 0 ] = 0;
		steps[ is + 1 ] = swb;
		antialiases[ ia + 0 ] = pc0;
		antialiases[ ia + 1 ] = pb0;
		antialiases[ ia + 2 ] = px1;
		antialiases[ ia + 3 ] = py1;
		is += 2;
		ia += 4;

		// 11
		steps[ is + 0 ] = swr;
		steps[ is + 1 ] = swb;
		antialiases[ ia + 0 ] = pr0;
		antialiases[ ia + 1 ] = pb0;
		antialiases[ ia + 2 ] = px1;
		antialiases[ ia + 3 ] = py1;
		is += 2;
		ia += 4;
	}
};

export const buildRectangleUv = (
	uvs: Float32Array,
	voffset: number,
	textureUvs: TextureUvs
): void => {
	const x0 = textureUvs.x0;
	const x1 = textureUvs.x1;
	const x2 = textureUvs.x2;
	const x3 = textureUvs.x3;
	const y0 = textureUvs.y0;
	const y1 = textureUvs.y1;
	const y2 = textureUvs.y2;
	const y3 = textureUvs.y3;

	const x02 = 0.5 * ( x0 + x2 );
	const y02 = 0.5 * ( y0 + y2 );

	// UVs
	let iuv = voffset * 2;
	uvs[ iuv + 0 ] = x0;
	uvs[ iuv + 1 ] = y0;
	uvs[ iuv + 2 ] = 0.5 * ( x0 + x1 );
	uvs[ iuv + 3 ] = 0.5 * ( y0 + y1 );
	uvs[ iuv + 4 ] = x1;
	uvs[ iuv + 5 ] = y1;
	iuv += 6;

	uvs[ iuv + 0 ] = x02;
	uvs[ iuv + 1 ] = y02;
	iuv += 2;

	uvs[ iuv + 0 ] = 0.5 * ( x0 + x3 );
	uvs[ iuv + 1 ] = 0.5 * ( y0 + y3 );
	uvs[ iuv + 2 ] = x02;
	uvs[ iuv + 3 ] = y02;
	uvs[ iuv + 4 ] = x02;
	uvs[ iuv + 5 ] = y02;
	uvs[ iuv + 6 ] = 0.5 * ( x1 + x2 );
	uvs[ iuv + 7 ] = 0.5 * ( y1 + y2 );
	iuv += 8;

	uvs[ iuv + 0 ] = x02;
	uvs[ iuv + 1 ] = y02;
	iuv += 2;

	uvs[ iuv + 0 ] = x3;
	uvs[ iuv + 1 ] = y3;
	uvs[ iuv + 2 ] = 0.5 * ( x3 + x2 );
	uvs[ iuv + 3 ] = 0.5 * ( y3 + y2 );
	uvs[ iuv + 4 ] = x2;
	uvs[ iuv + 5 ] = y2;
};
