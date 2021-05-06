import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";

export const RECTANGLE_ROUNDED_VERTEX_COUNT = 36;
export const RECTANGLE_ROUNDED_INDEX_COUNT = 24;
export const RECTANGLE_ROUNDED_WORLD_SIZE: [number, number, number] = [0, 0, 0];
const RECTANGLE_ROUNDED_WORK_POINT: Point = new Point();

export const buildRectangleRoundedIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	// Top-left corner
	let ii = ioffset * 3 - 1;
	indices[++ii] = voffset;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 3;
	indices[++ii] = voffset + 2;

	// Top-right corner
	indices[++ii] = voffset + 4;
	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 6;
	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 7;
	indices[++ii] = voffset + 6;

	// Bottom-left corner
	indices[++ii] = voffset + 8;
	indices[++ii] = voffset + 9;
	indices[++ii] = voffset + 10;
	indices[++ii] = voffset + 9;
	indices[++ii] = voffset + 11;
	indices[++ii] = voffset + 10;

	// Bottom-right corner
	indices[++ii] = voffset + 12;
	indices[++ii] = voffset + 13;
	indices[++ii] = voffset + 14;
	indices[++ii] = voffset + 13;
	indices[++ii] = voffset + 15;
	indices[++ii] = voffset + 14;

	// Top edge
	indices[++ii] = voffset + 16;
	indices[++ii] = voffset + 17;
	indices[++ii] = voffset + 20;
	indices[++ii] = voffset + 17;
	indices[++ii] = voffset + 21;
	indices[++ii] = voffset + 20;

	indices[++ii] = voffset + 17;
	indices[++ii] = voffset + 18;
	indices[++ii] = voffset + 21;
	indices[++ii] = voffset + 18;
	indices[++ii] = voffset + 22;
	indices[++ii] = voffset + 21;

	// Upper middle
	indices[++ii] = voffset + 19;
	indices[++ii] = voffset + 21;
	indices[++ii] = voffset + 24;
	indices[++ii] = voffset + 21;
	indices[++ii] = voffset + 25;
	indices[++ii] = voffset + 24;

	indices[++ii] = voffset + 21;
	indices[++ii] = voffset + 23;
	indices[++ii] = voffset + 26;
	indices[++ii] = voffset + 23;
	indices[++ii] = voffset + 27;
	indices[++ii] = voffset + 26;

	// Lower middle
	indices[++ii] = voffset + 24;
	indices[++ii] = voffset + 25;
	indices[++ii] = voffset + 28;
	indices[++ii] = voffset + 25;
	indices[++ii] = voffset + 30;
	indices[++ii] = voffset + 28;

	indices[++ii] = voffset + 26;
	indices[++ii] = voffset + 27;
	indices[++ii] = voffset + 30;
	indices[++ii] = voffset + 27;
	indices[++ii] = voffset + 32;
	indices[++ii] = voffset + 30;

	// Bottom edge
	indices[++ii] = voffset + 29;
	indices[++ii] = voffset + 30;
	indices[++ii] = voffset + 33;
	indices[++ii] = voffset + 30;
	indices[++ii] = voffset + 34;
	indices[++ii] = voffset + 33;

	indices[++ii] = voffset + 30;
	indices[++ii] = voffset + 31;
	indices[++ii] = voffset + 34;
	indices[++ii] = voffset + 31;
	indices[++ii] = voffset + 35;
	indices[++ii] = voffset + 34;
};

export const buildRectangleRoundedVertex = (
	vertices: Float32Array,
	voffset: number,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	strokeAlign: number,
	strokeWidth: number,
	radius: number,
	internalTransform: Matrix,
	worldSize: typeof RECTANGLE_ROUNDED_WORLD_SIZE
): void => {
	// Calculate the transformed positions
	//
	//  0   1       4   5
	// |---|       |---|
	// |2  |3      |6  |7
	// |---|       |---|
	//
	//
	//
	//
	//
	// |---|       |---|
	// |8  |9      |12 |13
	// |---|       |---|
	//  10  11      14  15
	//
	//
	//      16  17  18       <-- Top edge
	//     |---|---|
	//  19 |20 |21 |22  23   <-- Top
	// |---|---|---|---|
	// |       |       |
	// |24   25|26     |27   <-- Middle
	// |-------|-------|
	// |       |       |
	// |       |       |
	// |---|---|---|---|
	//  28 |29 |30 |31  32   <-- Bottom
	//     |---|---|
	//      33  34  35       <-- Bottom edge
	//
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	const ax = Math.abs(sx);
	const ay = Math.abs(sy);
	const a = radius * Math.min(ax, ay);
	const rx = a / ax;
	const ry = a / ay;

	const work = RECTANGLE_ROUNDED_WORK_POINT;
	work.set(originX - sx, originY - sy);
	internalTransform.apply(work, work);
	const x0 = work.x;
	const y0 = work.y;
	work.set(originX, originY - sy);
	internalTransform.apply(work, work);
	const x2 = work.x;
	const y2 = work.y;
	const dxh = x2 - x0;
	const dyh = y2 - y0;
	const dxhr = rx * dxh;
	const dyhr = rx * dyh;
	const x1 = x0 + dxhr;
	const y1 = y0 + dyhr;
	const x4 = x2 + dxh;
	const y4 = y2 + dyh;
	const x3 = x4 - dxhr;
	const y3 = y4 - dyhr;
	work.set(originX, originY);
	internalTransform.apply(work, work);
	const x11 = work.x;
	const y11 = work.y;
	const dxv = x11 - x2;
	const dyv = y11 - y2;
	const dxvr = ry * dxv;
	const dyvr = ry * dyv;
	const x7 = x2 + dxvr;
	const y7 = y2 + dyvr;
	const x5 = x7 - dxh;
	const y5 = y7 - dyh;
	const x6 = x5 + dxhr;
	const y6 = y5 + dyhr;
	const x9 = x7 + dxh;
	const y9 = y7 + dyh;
	const x8 = x9 - dxhr;
	const y8 = y9 - dyhr;
	const x10 = x11 - dxh;
	const y10 = y11 - dyh;
	const x12 = x11 + dxh;
	const y12 = y11 + dyh;
	const x20 = x11 + dxv;
	const y20 = y11 + dyv;
	const x15 = x20 - dxvr;
	const y15 = y20 - dyvr;
	const x13 = x15 - dxh;
	const y13 = y15 - dyh;
	const x14 = x13 + dxhr;
	const y14 = y13 + dyhr;
	const x17 = x15 + dxh;
	const y17 = y15 + dyh;
	const x16 = x17 - dxhr;
	const y16 = y17 - dyhr;
	const x18 = x20 - dxh;
	const y18 = y20 - dyh;
	const x19 = x18 + dxhr;
	const y19 = y18 + dyhr;
	const x22 = x20 + dxh;
	const y22 = y20 + dyh;
	const x21 = x22 - dxhr;
	const y21 = y22 - dyhr;

	// World size
	worldSize[0] = toLength(x0, y0, x1, y1);
	worldSize[1] = toLength(x0, y0, x2, y2);
	worldSize[2] = toLength(x0, y0, x10, y10);

	// Vertices
	let iv = voffset * 2 - 1;

	// Top-left corner
	vertices[++iv] = x0;
	vertices[++iv] = y0;
	vertices[++iv] = x1;
	vertices[++iv] = y1;
	vertices[++iv] = x5;
	vertices[++iv] = y5;
	vertices[++iv] = x6;
	vertices[++iv] = y6;

	// Top-right corner
	vertices[++iv] = x3;
	vertices[++iv] = y3;
	vertices[++iv] = x4;
	vertices[++iv] = y4;
	vertices[++iv] = x8;
	vertices[++iv] = y8;
	vertices[++iv] = x9;
	vertices[++iv] = y9;

	// Bottom-left corner
	vertices[++iv] = x13;
	vertices[++iv] = y13;
	vertices[++iv] = x14;
	vertices[++iv] = y14;
	vertices[++iv] = x18;
	vertices[++iv] = y18;
	vertices[++iv] = x19;
	vertices[++iv] = y19;

	// Bottom-right corner
	vertices[++iv] = x16;
	vertices[++iv] = y16;
	vertices[++iv] = x17;
	vertices[++iv] = y17;
	vertices[++iv] = x21;
	vertices[++iv] = y21;
	vertices[++iv] = x22;
	vertices[++iv] = y22;

	// Top edge
	vertices[++iv] = x1;
	vertices[++iv] = y1;
	vertices[++iv] = x2;
	vertices[++iv] = y2;
	vertices[++iv] = x3;
	vertices[++iv] = y3;

	// Top
	vertices[++iv] = x5;
	vertices[++iv] = y5;
	vertices[++iv] = x6;
	vertices[++iv] = y6;
	vertices[++iv] = x7;
	vertices[++iv] = y7;
	vertices[++iv] = x8;
	vertices[++iv] = y8;
	vertices[++iv] = x9;
	vertices[++iv] = y9;

	// Middle
	vertices[++iv] = x10;
	vertices[++iv] = y10;
	vertices[++iv] = x11;
	vertices[++iv] = y11;
	vertices[++iv] = x11;
	vertices[++iv] = y11;
	vertices[++iv] = x12;
	vertices[++iv] = y12;

	// Bottom
	vertices[++iv] = x13;
	vertices[++iv] = y13;
	vertices[++iv] = x14;
	vertices[++iv] = y14;
	vertices[++iv] = x15;
	vertices[++iv] = y15;
	vertices[++iv] = x16;
	vertices[++iv] = y16;
	vertices[++iv] = x17;
	vertices[++iv] = y17;

	// Bottom edge
	vertices[++iv] = x19;
	vertices[++iv] = y19;
	vertices[++iv] = x20;
	vertices[++iv] = y20;
	vertices[++iv] = x21;
	vertices[++iv] = y21;
};

export const buildRectangleRoundedClipping = (
	clippings: Float32Array,
	voffset: number,
	corner: EShapeCorner,
	worldSize: typeof RECTANGLE_ROUNDED_WORLD_SIZE
): void => {
	let ic = voffset * 3 - 1;
	const rxc = 1 - worldSize[0] / worldSize[1];
	const ryc = 1 - worldSize[0] / worldSize[2];

	// Top-left corner
	if (corner & EShapeCorner.TOP_LEFT) {
		clippings[++ic] = 1;
		clippings[++ic] = 1;
		clippings[++ic] = 1;

		clippings[++ic] = 0;
		clippings[++ic] = 1;
		clippings[++ic] = 1;

		clippings[++ic] = 1;
		clippings[++ic] = 0;
		clippings[++ic] = 1;

		clippings[++ic] = 0;
		clippings[++ic] = 0;
		clippings[++ic] = 1;
	} else {
		clippings[++ic] = 1;
		clippings[++ic] = 1;
		clippings[++ic] = 0;

		clippings[++ic] = rxc;
		clippings[++ic] = 1;
		clippings[++ic] = 0;

		clippings[++ic] = 1;
		clippings[++ic] = ryc;
		clippings[++ic] = 0;

		clippings[++ic] = rxc;
		clippings[++ic] = ryc;
		clippings[++ic] = 0;
	}

	// Top-right corner
	if (corner & EShapeCorner.TOP_RIGHT) {
		clippings[++ic] = 0;
		clippings[++ic] = 1;
		clippings[++ic] = 1;

		clippings[++ic] = 1;
		clippings[++ic] = 1;
		clippings[++ic] = 1;

		clippings[++ic] = 0;
		clippings[++ic] = 0;
		clippings[++ic] = 1;

		clippings[++ic] = 1;
		clippings[++ic] = 0;
		clippings[++ic] = 1;
	} else {
		clippings[++ic] = rxc;
		clippings[++ic] = 1;
		clippings[++ic] = 0;

		clippings[++ic] = 1;
		clippings[++ic] = 1;
		clippings[++ic] = 0;

		clippings[++ic] = rxc;
		clippings[++ic] = ryc;
		clippings[++ic] = 0;

		clippings[++ic] = 1;
		clippings[++ic] = ryc;
		clippings[++ic] = 0;
	}

	// Bottom-left corner
	if (corner & EShapeCorner.BOTTOM_LEFT) {
		clippings[++ic] = 1;
		clippings[++ic] = 0;
		clippings[++ic] = 1;

		clippings[++ic] = 0;
		clippings[++ic] = 0;
		clippings[++ic] = 1;

		clippings[++ic] = 1;
		clippings[++ic] = 1;
		clippings[++ic] = 1;

		clippings[++ic] = 0;
		clippings[++ic] = 1;
		clippings[++ic] = 1;
	} else {
		clippings[++ic] = 1;
		clippings[++ic] = ryc;
		clippings[++ic] = 0;

		clippings[++ic] = rxc;
		clippings[++ic] = ryc;
		clippings[++ic] = 0;

		clippings[++ic] = 1;
		clippings[++ic] = 1;
		clippings[++ic] = 0;

		clippings[++ic] = rxc;
		clippings[++ic] = 1;
		clippings[++ic] = 0;
	}

	// Bottom-right corner
	if (corner & EShapeCorner.BOTTOM_RIGHT) {
		clippings[++ic] = 0;
		clippings[++ic] = 0;
		clippings[++ic] = 1;

		clippings[++ic] = 1;
		clippings[++ic] = 0;
		clippings[++ic] = 1;

		clippings[++ic] = 0;
		clippings[++ic] = 1;
		clippings[++ic] = 1;

		clippings[++ic] = 1;
		clippings[++ic] = 1;
		clippings[++ic] = 1;
	} else {
		clippings[++ic] = rxc;
		clippings[++ic] = ryc;
		clippings[++ic] = 0;

		clippings[++ic] = 1;
		clippings[++ic] = ryc;
		clippings[++ic] = 0;

		clippings[++ic] = rxc;
		clippings[++ic] = 1;
		clippings[++ic] = 0;

		clippings[++ic] = 1;
		clippings[++ic] = 1;
		clippings[++ic] = 0;
	}

	// Top edge
	clippings[++ic] = rxc;
	clippings[++ic] = 1;
	clippings[++ic] = 0;

	clippings[++ic] = 0;
	clippings[++ic] = 1;
	clippings[++ic] = 0;

	clippings[++ic] = rxc;
	clippings[++ic] = 1;
	clippings[++ic] = 0;

	// Top
	clippings[++ic] = 1;
	clippings[++ic] = ryc;
	clippings[++ic] = 0;

	clippings[++ic] = rxc;
	clippings[++ic] = ryc;
	clippings[++ic] = 0;

	clippings[++ic] = 0;
	clippings[++ic] = ryc;
	clippings[++ic] = 0;

	clippings[++ic] = rxc;
	clippings[++ic] = ryc;
	clippings[++ic] = 0;

	clippings[++ic] = 1;
	clippings[++ic] = ryc;
	clippings[++ic] = 0;

	// Middle
	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = 0;

	clippings[++ic] = 0;
	clippings[++ic] = 0;
	clippings[++ic] = 0;

	clippings[++ic] = 0;
	clippings[++ic] = 0;
	clippings[++ic] = 0;

	clippings[++ic] = 1;
	clippings[++ic] = 0;
	clippings[++ic] = 0;

	// Bottom
	clippings[++ic] = 1;
	clippings[++ic] = ryc;
	clippings[++ic] = 0;

	clippings[++ic] = rxc;
	clippings[++ic] = ryc;
	clippings[++ic] = 0;

	clippings[++ic] = 0;
	clippings[++ic] = ryc;
	clippings[++ic] = 0;

	clippings[++ic] = rxc;
	clippings[++ic] = ryc;
	clippings[++ic] = 0;

	clippings[++ic] = 1;
	clippings[++ic] = ryc;
	clippings[++ic] = 0;

	// Bottom edge
	clippings[++ic] = rxc;
	clippings[++ic] = 1;
	clippings[++ic] = 0;

	clippings[++ic] = 0;
	clippings[++ic] = 1;
	clippings[++ic] = 0;

	clippings[++ic] = rxc;
	clippings[++ic] = 1;
	clippings[++ic] = 0;
};

export const buildRectangleRoundedStep = (
	steps: Float32Array,
	voffset: number,
	strokeWidth: number,
	strokeSide: EShapeStrokeSide,
	strokeStyle: EShapeStrokeStyle,
	corner: EShapeCorner,
	worldSize: typeof RECTANGLE_ROUNDED_WORLD_SIZE
): void => {
	const scaleInvariant = toScaleInvariant(strokeStyle);

	const sc = worldSize[0];
	const sx = worldSize[1];
	const sy = worldSize[2];

	const rxc = Math.max(0, 1 - worldSize[0] / worldSize[1]);
	const ryc = Math.max(0, 1 - worldSize[0] / worldSize[2]);

	let wt: number;
	let zt: number;
	let bt: number;
	if (strokeSide & EShapeStrokeSide.TOP) {
		wt = +2;
		zt = +1;
		bt = +1 + ryc;
	} else {
		wt = -2;
		zt = -1;
		bt = -1 - ryc;
	}

	let wr: number;
	let zr: number;
	let br: number;
	if (strokeSide & EShapeStrokeSide.RIGHT) {
		wr = +2;
		zr = +1;
		br = +1 + rxc;
	} else {
		wr = -2;
		zr = -1;
		br = -1 - rxc;
	}

	let wb: number;
	let zb: number;
	let bb: number;
	if (strokeSide & EShapeStrokeSide.BOTTOM) {
		wb = +2;
		zb = +1;
		bb = +1 + ryc;
	} else {
		wb = -2;
		zb = -1;
		bb = -1 - ryc;
	}

	let wl: number;
	let zl: number;
	let bl: number;
	if (strokeSide & EShapeStrokeSide.LEFT) {
		wl = +2;
		zl = +1;
		bl = +1 + rxc;
	} else {
		wl = -2;
		zl = -1;
		bl = -1 - rxc;
	}

	// Top-left corner
	let is = voffset * 6 - 1;
	if (corner & EShapeCorner.TOP_LEFT) {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = wl;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = zl;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = wl;
		steps[++is] = zt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = zl;
		steps[++is] = zt;
	} else {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = wl;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = bl;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = wl;
		steps[++is] = bt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = bl;
		steps[++is] = bt;
	}

	// Top-right corner
	if (corner & EShapeCorner.TOP_RIGHT) {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = zr;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = wr;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = zr;
		steps[++is] = zt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = wr;
		steps[++is] = zt;
	} else {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = br;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = wr;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = br;
		steps[++is] = bt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = wr;
		steps[++is] = wt;
	}

	// Bottom-left corner
	if (corner & EShapeCorner.BOTTOM_LEFT) {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = wl;
		steps[++is] = zb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = zl;
		steps[++is] = zb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = wl;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = zl;
		steps[++is] = wb;
	} else {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = wl;
		steps[++is] = bb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = bl;
		steps[++is] = bb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = wl;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = bl;
		steps[++is] = wb;
	}

	// Bottom-right corner
	if (corner & EShapeCorner.BOTTOM_RIGHT) {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = zr;
		steps[++is] = zb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = wr;
		steps[++is] = zb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = zr;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sc;
		steps[++is] = sc;
		steps[++is] = wr;
		steps[++is] = wb;
	} else {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = br;
		steps[++is] = bb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = wr;
		steps[++is] = bb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = br;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sx;
		steps[++is] = sy;
		steps[++is] = wr;
		steps[++is] = wb;
	}

	// Top edge
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = bl;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = zl;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = br;
	steps[++is] = wt;

	// Top
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = wl;
	steps[++is] = bt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = bl;
	steps[++is] = bt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = zl;
	steps[++is] = bt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = br;
	steps[++is] = bt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = wr;
	steps[++is] = bt;

	// Middle
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = wl;
	steps[++is] = zt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = zl;
	steps[++is] = zt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = zr;
	steps[++is] = zb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = wr;
	steps[++is] = zb;

	// Bottom
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = wl;
	steps[++is] = bb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = bl;
	steps[++is] = bb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = zb;
	steps[++is] = bb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = br;
	steps[++is] = bb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = wr;
	steps[++is] = bb;

	// Bottom edge
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = bl;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = zb;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = sx;
	steps[++is] = sy;
	steps[++is] = br;
	steps[++is] = wb;
};

export const buildRectangleRoundedUv = (
	uvs: Float32Array,
	voffset: number,
	textureUvs: TextureUvs,
	worldSize: typeof RECTANGLE_ROUNDED_WORLD_SIZE
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
	const x5 = 0.5 * (x3 + x2);
	const y5 = 0.5 * (y3 + y2);

	const ruvx = (0.5 * worldSize[0]) / worldSize[1];
	const ruvy = (0.5 * worldSize[0]) / worldSize[2];
	const d0x = ruvx * (x1 - x0);
	const d0y = ruvx * (y1 - y0);
	const d1x = ruvy * (x3 - x0);
	const d1y = ruvy * (y3 - y0);

	// UVs
	let iuv = voffset * 2 - 1;

	// Top-left corner
	uvs[++iuv] = x0;
	uvs[++iuv] = y0;
	uvs[++iuv] = x0 + d0x;
	uvs[++iuv] = y0 + d0y;
	uvs[++iuv] = x0 + d1x;
	uvs[++iuv] = y0 + d1y;
	uvs[++iuv] = x0 + d0x + d1x;
	uvs[++iuv] = y0 + d0y + d1y;

	// Top-right corner
	uvs[++iuv] = x1 - d0x;
	uvs[++iuv] = y1 - d0y;
	uvs[++iuv] = x1;
	uvs[++iuv] = y1;
	uvs[++iuv] = x1 - d0x + d1x;
	uvs[++iuv] = y1 - d0y + d1y;
	uvs[++iuv] = x1 + d1x;
	uvs[++iuv] = y1 + d1y;

	// Bottom-left corner
	uvs[++iuv] = x3 - d1x;
	uvs[++iuv] = y3 - d1y;
	uvs[++iuv] = x3 + d0x - d1x;
	uvs[++iuv] = y3 + d0y - d1y;
	uvs[++iuv] = x3;
	uvs[++iuv] = y3;
	uvs[++iuv] = x3 + d0x;
	uvs[++iuv] = y3 + d0y;

	// Bottom-right corner
	uvs[++iuv] = x2 - d0x - d1x;
	uvs[++iuv] = y2 - d0y - d1y;
	uvs[++iuv] = x2 - d1x;
	uvs[++iuv] = y2 - d1y;
	uvs[++iuv] = x2 - d0x;
	uvs[++iuv] = y2 - d0y;
	uvs[++iuv] = x2;
	uvs[++iuv] = y2;

	// Top edge
	uvs[++iuv] = x0 + d0x;
	uvs[++iuv] = y0 + d0y;
	uvs[++iuv] = x4;
	uvs[++iuv] = y4;
	uvs[++iuv] = x1 - d0x;
	uvs[++iuv] = y1 - d0y;

	// Top
	uvs[++iuv] = x0 + d1x;
	uvs[++iuv] = y0 + d1y;
	uvs[++iuv] = x0 + d1x + d0x;
	uvs[++iuv] = y0 + d1y + d0y;
	uvs[++iuv] = x4 + d1x;
	uvs[++iuv] = y4 + d1y;
	uvs[++iuv] = x1 + d1x - d0x;
	uvs[++iuv] = y1 + d1y - d0y;
	uvs[++iuv] = x1 + d1x;
	uvs[++iuv] = y1 + d1y;

	// Middle
	const x02 = 0.5 * (x0 + x2);
	const y02 = 0.5 * (y0 + y2);
	uvs[++iuv] = 0.5 * (x0 + x3);
	uvs[++iuv] = 0.5 * (y0 + y3);
	uvs[++iuv] = x02;
	uvs[++iuv] = y02;
	uvs[++iuv] = x02;
	uvs[++iuv] = y02;
	uvs[++iuv] = 0.5 * (x1 + x2);
	uvs[++iuv] = 0.5 * (y1 + y2);

	// Bottom
	uvs[++iuv] = x3 - d1x;
	uvs[++iuv] = y3 - d1y;
	uvs[++iuv] = x3 - d1x + d0x;
	uvs[++iuv] = y3 - d1y + d0y;
	uvs[++iuv] = x5 - d1x;
	uvs[++iuv] = y5 - d1y;
	uvs[++iuv] = x2 - d1x - d0x;
	uvs[++iuv] = y2 - d1y - d0y;
	uvs[++iuv] = x2 - d1x;
	uvs[++iuv] = y2 - d1y;

	// Bottom edge
	uvs[++iuv] = x3 + d0x;
	uvs[++iuv] = y3 + d0y;
	uvs[++iuv] = x5;
	uvs[++iuv] = y5;
	uvs[++iuv] = x2 - d0x;
	uvs[++iuv] = y2 - d0y;
};
