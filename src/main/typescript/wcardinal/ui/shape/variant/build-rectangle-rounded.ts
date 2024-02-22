import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toScaleInvariant } from "./to-scale-invariant";
import { toClippingPacked } from "./to-clipping-packed";

export const RECTANGLE_ROUNDED_VERTEX_COUNT = 44;
export const RECTANGLE_ROUNDED_INDEX_COUNT = 24;
export const RECTANGLE_ROUNDED_WORLD_SIZE: [number, number, number, number, number] = [
	0, 0, 0, 0, 0
];
const RECTANGLE_ROUNDED_WORK_POINT: Point = new Point();

export const buildRectangleRoundedIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	// c0   c1        c4   c5
	//  |---|          |---|
	//  |   |          |   |
	//  |---|          |---|
	// c2   c3        c6   c7
	//
	// c8   c9       c12   c13
	//  |---|          |---|
	//  |   |          |   |
	//  |---|          |---|
	//c10   c11      c14   c15
	let ii = ioffset * 3 - 1;
	indices[++ii] = voffset + 0;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 3;

	indices[++ii] = voffset + 4;
	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 6;
	indices[++ii] = voffset + 6;
	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 7;

	indices[++ii] = voffset + 8;
	indices[++ii] = voffset + 9;
	indices[++ii] = voffset + 10;
	indices[++ii] = voffset + 10;
	indices[++ii] = voffset + 9;
	indices[++ii] = voffset + 11;

	indices[++ii] = voffset + 12;
	indices[++ii] = voffset + 13;
	indices[++ii] = voffset + 14;
	indices[++ii] = voffset + 14;
	indices[++ii] = voffset + 13;
	indices[++ii] = voffset + 15;

	//     16  17  23  24
	//      |---|  |---|
	//      |   |  |   |
	// 18--19--20  25--26--27
	//  |       |  |       |
	//  |       |  |       |
	// 21------22  28------29
	indices[++ii] = voffset + 16;
	indices[++ii] = voffset + 17;
	indices[++ii] = voffset + 19;
	indices[++ii] = voffset + 19;
	indices[++ii] = voffset + 17;
	indices[++ii] = voffset + 20;

	indices[++ii] = voffset + 18;
	indices[++ii] = voffset + 20;
	indices[++ii] = voffset + 21;
	indices[++ii] = voffset + 21;
	indices[++ii] = voffset + 20;
	indices[++ii] = voffset + 22;

	indices[++ii] = voffset + 23;
	indices[++ii] = voffset + 24;
	indices[++ii] = voffset + 25;
	indices[++ii] = voffset + 25;
	indices[++ii] = voffset + 24;
	indices[++ii] = voffset + 26;

	indices[++ii] = voffset + 25;
	indices[++ii] = voffset + 27;
	indices[++ii] = voffset + 28;
	indices[++ii] = voffset + 28;
	indices[++ii] = voffset + 27;
	indices[++ii] = voffset + 29;

	// 30------31  37------38
	//  |       |  |       |
	//  |       |  |       |
	// 32--33--34  39--40--41
	//      |   |  |   |
	//      |---|  |---|
	//     35  36  42  43
	indices[++ii] = voffset + 30;
	indices[++ii] = voffset + 31;
	indices[++ii] = voffset + 32;
	indices[++ii] = voffset + 32;
	indices[++ii] = voffset + 31;
	indices[++ii] = voffset + 34;

	indices[++ii] = voffset + 33;
	indices[++ii] = voffset + 34;
	indices[++ii] = voffset + 35;
	indices[++ii] = voffset + 35;
	indices[++ii] = voffset + 34;
	indices[++ii] = voffset + 36;

	indices[++ii] = voffset + 37;
	indices[++ii] = voffset + 38;
	indices[++ii] = voffset + 39;
	indices[++ii] = voffset + 39;
	indices[++ii] = voffset + 38;
	indices[++ii] = voffset + 41;

	indices[++ii] = voffset + 39;
	indices[++ii] = voffset + 40;
	indices[++ii] = voffset + 42;
	indices[++ii] = voffset + 42;
	indices[++ii] = voffset + 40;
	indices[++ii] = voffset + 43;
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
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	const ax = Math.abs(sx);
	const ay = Math.abs(sy);
	const a = radius * Math.min(ax, ay);
	const rx = a / ax;
	const ry = a / ay;

	// b0      b1      b2
	// |-------|-------|
	// |       |       |
	// b3------b4------b5
	// |       |       |
	// |-------|-------|
	// b6      b7      b8
	const work = RECTANGLE_ROUNDED_WORK_POINT;
	work.set(originX - sx, originY - sy);
	internalTransform.apply(work, work);
	const b0x = work.x;
	const b0y = work.y;
	work.set(originX, originY - sy);
	internalTransform.apply(work, work);
	const b1x = work.x;
	const b1y = work.y;
	work.set(originX - sx, originY);
	internalTransform.apply(work, work);
	const b3x = work.x;
	const b3y = work.y;

	const d01x = b1x - b0x;
	const d01y = b1y - b0y;
	const d03x = b3x - b0x;
	const d03y = b3y - b0y;

	const b2x = b1x + d01x;
	const b2y = b1y + d01y;
	const b4x = b3x + d01x;
	const b4y = b3y + d01y;
	const b5x = b2x + d03x;
	const b5y = b2y + d03y;
	const b6x = b3x + d03x;
	const b6y = b3y + d03y;
	const b7x = b6x + d01x;
	const b7y = b6y + d01y;
	const b8x = b7x + d01x;
	const b8y = b7y + d01y;

	const r01x = rx * d01x;
	const r01y = rx * d01y;
	const r03x = ry * d03x;
	const r03y = ry * d03y;

	// c0   c1        c4   c5
	//  |---|          |---|
	//  |   |          |   |
	//  |---|          |---|
	// c2   c3        c6   c7
	//
	// c8   c9       c12   c13
	//  |---|          |---|
	//  |   |          |   |
	//  |---|          |---|
	//c10   c11      c14   c15
	const c0x = b0x;
	const c0y = b0y;
	const c1x = c0x + r01x;
	const c1y = c0y + r01y;
	const c2x = c0x + r03x;
	const c2y = c0y + r03y;
	const c3x = c2x + r01x;
	const c3y = c2y + r01y;
	let iv = voffset * 2 - 1;
	vertices[++iv] = c0x;
	vertices[++iv] = c0y;
	vertices[++iv] = c1x;
	vertices[++iv] = c1y;
	vertices[++iv] = c2x;
	vertices[++iv] = c2y;
	vertices[++iv] = c3x;
	vertices[++iv] = c3y;

	const c5x = b2x;
	const c5y = b2y;
	const c4x = b2x - r01x;
	const c4y = b2y - r01y;
	const c6x = c4x + r03x;
	const c6y = c4y + r03y;
	const c7x = c6x + r01x;
	const c7y = c6y + r01y;
	vertices[++iv] = c4x;
	vertices[++iv] = c4y;
	vertices[++iv] = c5x;
	vertices[++iv] = c5y;
	vertices[++iv] = c6x;
	vertices[++iv] = c6y;
	vertices[++iv] = c7x;
	vertices[++iv] = c7y;

	const c10x = b6x;
	const c10y = b6y;
	const c8x = c10x - r03x;
	const c8y = c10y - r03y;
	const c11x = c10x + r01x;
	const c11y = c10y + r01y;
	const c9x = c8x + r01x;
	const c9y = c8y + r01y;
	vertices[++iv] = c8x;
	vertices[++iv] = c8y;
	vertices[++iv] = c9x;
	vertices[++iv] = c9y;
	vertices[++iv] = c10x;
	vertices[++iv] = c10y;
	vertices[++iv] = c11x;
	vertices[++iv] = c11y;

	const c15x = b8x;
	const c15y = b8y;
	const c14x = c15x - r01x;
	const c14y = c15y - r01y;
	const c13x = c15x - r03x;
	const c13y = c15y - r03y;
	const c12x = c13x - r01x;
	const c12y = c13y - r01y;
	vertices[++iv] = c12x;
	vertices[++iv] = c12y;
	vertices[++iv] = c13x;
	vertices[++iv] = c13y;
	vertices[++iv] = c14x;
	vertices[++iv] = c14y;
	vertices[++iv] = c15x;
	vertices[++iv] = c15y;

	//     16  17  23  24
	//      |---|  |---|
	//      |   |  |   |
	// 18--19--20  25--26--27
	//  |       |  |       |
	//  |       |  |       |
	// 21------22  28------29
	const c16x = c1x;
	const c16y = c1y;
	const c17x = b1x;
	const c17y = b1y;
	const c18x = c2x;
	const c18y = c2y;
	const c19x = c3x;
	const c19y = c3y;
	const c20x = c17x + r03x;
	const c20y = c17y + r03y;
	const c21x = b3x;
	const c21y = b3y;
	const c22x = b4x;
	const c22y = b4y;
	vertices[++iv] = c16x;
	vertices[++iv] = c16y;
	vertices[++iv] = c17x;
	vertices[++iv] = c17y;
	vertices[++iv] = c18x;
	vertices[++iv] = c18y;
	vertices[++iv] = c19x;
	vertices[++iv] = c19y;
	vertices[++iv] = c20x;
	vertices[++iv] = c20y;
	vertices[++iv] = c21x;
	vertices[++iv] = c21y;
	vertices[++iv] = c22x;
	vertices[++iv] = c22y;

	const c23x = c17x;
	const c23y = c17y;
	const c24x = c4x;
	const c24y = c4y;
	const c25x = c20x;
	const c25y = c20y;
	const c26x = c6x;
	const c26y = c6y;
	const c27x = c7x;
	const c27y = c7y;
	const c28x = c22x;
	const c28y = c22y;
	const c29x = b5x;
	const c29y = b5y;
	vertices[++iv] = c23x;
	vertices[++iv] = c23y;
	vertices[++iv] = c24x;
	vertices[++iv] = c24y;
	vertices[++iv] = c25x;
	vertices[++iv] = c25y;
	vertices[++iv] = c26x;
	vertices[++iv] = c26y;
	vertices[++iv] = c27x;
	vertices[++iv] = c27y;
	vertices[++iv] = c28x;
	vertices[++iv] = c28y;
	vertices[++iv] = c29x;
	vertices[++iv] = c29y;

	// 30------31  37------38
	//  |       |  |       |
	//  |       |  |       |
	// 32--33--34  39--40--41
	//      |   |  |   |
	//      |---|  |---|
	//     35  36  42  43
	const c30x = c21x;
	const c30y = c21y;
	const c31x = c22x;
	const c31y = c22y;
	const c32x = c8x;
	const c32y = c8y;
	const c33x = c9x;
	const c33y = c9y;
	const c34x = b7x - r03x;
	const c34y = b7y - r03y;
	const c35x = c11x;
	const c35y = c11y;
	const c36x = b7x;
	const c36y = b7y;
	vertices[++iv] = c30x;
	vertices[++iv] = c30y;
	vertices[++iv] = c31x;
	vertices[++iv] = c31y;
	vertices[++iv] = c32x;
	vertices[++iv] = c32y;
	vertices[++iv] = c33x;
	vertices[++iv] = c33y;
	vertices[++iv] = c34x;
	vertices[++iv] = c34y;
	vertices[++iv] = c35x;
	vertices[++iv] = c35y;
	vertices[++iv] = c36x;
	vertices[++iv] = c36y;

	const c37x = c31x;
	const c37y = c31y;
	const c38x = c29x;
	const c38y = c29y;
	const c39x = c34x;
	const c39y = c34y;
	const c40x = c12x;
	const c40y = c12y;
	const c41x = c13x;
	const c41y = c13y;
	const c42x = c36x;
	const c42y = c36y;
	const c43x = c14x;
	const c43y = c14y;
	vertices[++iv] = c37x;
	vertices[++iv] = c37y;
	vertices[++iv] = c38x;
	vertices[++iv] = c38y;
	vertices[++iv] = c39x;
	vertices[++iv] = c39y;
	vertices[++iv] = c40x;
	vertices[++iv] = c40y;
	vertices[++iv] = c41x;
	vertices[++iv] = c41y;
	vertices[++iv] = c42x;
	vertices[++iv] = c42y;
	vertices[++iv] = c43x;
	vertices[++iv] = c43y;

	// World size
	worldSize[0] = ax;
	worldSize[1] = ay;
	worldSize[2] = a;
	worldSize[3] = rx;
	worldSize[4] = ry;
};

export const buildRectangleRoundedClipping = (
	clippings: Float32Array,
	voffset: number,
	corner: EShapeCorner,
	worldSize: typeof RECTANGLE_ROUNDED_WORLD_SIZE
): void => {
	let ic = voffset - 1;
	const rxi = 1 - worldSize[3];
	const ryi = 1 - worldSize[4];
	const c111 = toClippingPacked(1, 1, 1);
	const c011 = toClippingPacked(0, 1, 1);
	const c101 = toClippingPacked(1, 0, 1);
	const c001 = toClippingPacked(0, 0, 1);
	const c110 = toClippingPacked(1, 1, 0);
	const cx10 = toClippingPacked(rxi, 1, 0);
	const c1y0 = toClippingPacked(1, ryi, 0);
	const cxy0 = toClippingPacked(rxi, ryi, 0);
	const c010 = toClippingPacked(0, 1, 0);
	const c0y0 = toClippingPacked(0, ryi, 0);
	const c100 = toClippingPacked(1, 0, 0);
	const c000 = toClippingPacked(0, 0, 0);

	// c0   c1        c4   c5
	//  |---|          |---|
	//  |   |          |   |
	//  |---|          |---|
	// c2   c3        c6   c7
	//
	// c8   c9       c12   c13
	//  |---|          |---|
	//  |   |          |   |
	//  |---|          |---|
	//c10   c11      c14   c15
	if (corner & EShapeCorner.TOP_LEFT) {
		clippings[++ic] = c111;
		clippings[++ic] = c011;
		clippings[++ic] = c101;
		clippings[++ic] = c001;
	} else {
		clippings[++ic] = c110;
		clippings[++ic] = cx10;
		clippings[++ic] = c1y0;
		clippings[++ic] = cxy0;
	}

	if (corner & EShapeCorner.TOP_RIGHT) {
		clippings[++ic] = c011;
		clippings[++ic] = c111;
		clippings[++ic] = c001;
		clippings[++ic] = c101;
	} else {
		clippings[++ic] = cx10;
		clippings[++ic] = c110;
		clippings[++ic] = cxy0;
		clippings[++ic] = c1y0;
	}

	if (corner & EShapeCorner.BOTTOM_LEFT) {
		clippings[++ic] = c101;
		clippings[++ic] = c001;
		clippings[++ic] = c111;
		clippings[++ic] = c011;
	} else {
		clippings[++ic] = c1y0;
		clippings[++ic] = cxy0;
		clippings[++ic] = c110;
		clippings[++ic] = cx10;
	}

	if (corner & EShapeCorner.BOTTOM_RIGHT) {
		clippings[++ic] = c001;
		clippings[++ic] = c101;
		clippings[++ic] = c011;
		clippings[++ic] = c111;
	} else {
		clippings[++ic] = cxy0;
		clippings[++ic] = c1y0;
		clippings[++ic] = cx10;
		clippings[++ic] = c110;
	}

	//     16  17  23  24
	//      |---|  |---|
	//      |   |  |   |
	// 18--19--20  25--26--27
	//  |       |  |       |
	//  |       |  |       |
	// 21------22  28------29
	clippings[++ic] = cx10;
	clippings[++ic] = c010;
	clippings[++ic] = c1y0;
	clippings[++ic] = cxy0;
	clippings[++ic] = c0y0;
	clippings[++ic] = c100;
	clippings[++ic] = c000;

	clippings[++ic] = c010;
	clippings[++ic] = cx10;
	clippings[++ic] = c0y0;
	clippings[++ic] = cxy0;
	clippings[++ic] = c1y0;
	clippings[++ic] = c000;
	clippings[++ic] = c100;

	// 30------31  37------38
	//  |       |  |       |
	//  |       |  |       |
	// 32--33--34  39--40--41
	//      |   |  |   |
	//      |---|  |---|
	//     35  36  42  43
	clippings[++ic] = c100;
	clippings[++ic] = c000;
	clippings[++ic] = c1y0;
	clippings[++ic] = cxy0;
	clippings[++ic] = c0y0;
	clippings[++ic] = cx10;
	clippings[++ic] = c010;

	clippings[++ic] = c000;
	clippings[++ic] = c100;
	clippings[++ic] = c0y0;
	clippings[++ic] = cxy0;
	clippings[++ic] = c1y0;
	clippings[++ic] = c010;
	clippings[++ic] = cx10;
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

	const ax = worldSize[0];
	const ay = worldSize[1];
	const a = worldSize[2];

	const wt = strokeSide & EShapeStrokeSide.TOP ? 1 : 0;
	const wr = strokeSide & EShapeStrokeSide.RIGHT ? 1 : 0;
	const wb = strokeSide & EShapeStrokeSide.BOTTOM ? 1 : 0;
	const wl = strokeSide & EShapeStrokeSide.LEFT ? 1 : 0;

	// c0   c1        c4   c5
	//  |---|          |---|
	//  |   |          |   |
	//  |---|          |---|
	// c2   c3        c6   c7
	//
	// c8   c9       c12   c13
	//  |---|          |---|
	//  |   |          |   |
	//  |---|          |---|
	//c10   c11      c14   c15
	let is = voffset * 6 - 1;
	if (corner & EShapeCorner.TOP_LEFT) {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wl;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wl;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wl;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wl;
		steps[++is] = wt;
	} else {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wl;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wl;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wl;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wl;
		steps[++is] = wt;
	}

	if (corner & EShapeCorner.TOP_RIGHT) {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wr;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wr;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wr;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wr;
		steps[++is] = wt;
	} else {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wr;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wr;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wr;
		steps[++is] = wt;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wr;
		steps[++is] = wt;
	}

	if (corner & EShapeCorner.BOTTOM_LEFT) {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wl;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wl;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wl;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wl;
		steps[++is] = wb;
	} else {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wl;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wl;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wl;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wl;
		steps[++is] = wb;
	}

	if (corner & EShapeCorner.BOTTOM_RIGHT) {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wr;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wr;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wr;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = a;
		steps[++is] = a;
		steps[++is] = wr;
		steps[++is] = wb;
	} else {
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wr;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wr;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wr;
		steps[++is] = wb;

		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = ax;
		steps[++is] = ay;
		steps[++is] = wr;
		steps[++is] = wb;
	}

	//     16  17  23  24
	//      |---|  |---|
	//      |   |  |   |
	// 18--19--20  25--26--27
	//  |       |  |       |
	//  |       |  |       |
	// 21------22  28------29
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wt;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wt;

	// 30------31  37------38
	//  |       |  |       |
	//  |       |  |       |
	// 32--33--34  39--40--41
	//      |   |  |   |
	//      |---|  |---|
	//     35  36  42  43
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wl;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wb;

	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = ax;
	steps[++is] = ay;
	steps[++is] = wr;
	steps[++is] = wb;
};

export const buildRectangleRoundedUv = (
	uvs: Float32Array,
	voffset: number,
	textureUvs: TextureUvs,
	worldSize: typeof RECTANGLE_ROUNDED_WORLD_SIZE
): void => {
	// b0      b1      b2
	// |-------|-------|
	// |       |       |
	// b3------b4------b5
	// |       |       |
	// |-------|-------|
	// b6      b7      b8
	const b0x = textureUvs.x0;
	const b0y = textureUvs.y0;
	const b2x = textureUvs.x1;
	const b2y = textureUvs.y1;
	const b8x = textureUvs.x2;
	const b8y = textureUvs.y2;
	const b6x = textureUvs.x3;
	const b6y = textureUvs.y3;

	const b1x = (b0x + b2x) * 0.5;
	const b1y = (b0y + b2y) * 0.5;
	const b3x = (b0x + b6x) * 0.5;
	const b3y = (b0y + b6y) * 0.5;

	const d01x = b1x - b0x;
	const d01y = b1y - b0y;
	const d03x = b3x - b0x;
	const d03y = b3y - b0y;

	const b4x = b3x + d01x;
	const b4y = b3y + d01y;
	const b5x = b2x + d03x;
	const b5y = b2y + d03y;
	const b7x = b6x + d01x;
	const b7y = b6y + d01y;

	const rx = worldSize[3];
	const ry = worldSize[4];
	const r01x = rx * d01x;
	const r01y = rx * d01y;
	const r03x = ry * d03x;
	const r03y = ry * d03y;

	// c0   c1        c4   c5
	//  |---|          |---|
	//  |   |          |   |
	//  |---|          |---|
	// c2   c3        c6   c7
	//
	// c8   c9       c12   c13
	//  |---|          |---|
	//  |   |          |   |
	//  |---|          |---|
	//c10   c11      c14   c15
	const c0x = b0x;
	const c0y = b0y;
	const c1x = c0x + r01x;
	const c1y = c0y + r01y;
	const c2x = c0x + r03x;
	const c2y = c0y + r03y;
	const c3x = c2x + r01x;
	const c3y = c2y + r01y;
	let iuv = voffset * 2 - 1;
	uvs[++iuv] = c0x;
	uvs[++iuv] = c0y;
	uvs[++iuv] = c1x;
	uvs[++iuv] = c1y;
	uvs[++iuv] = c2x;
	uvs[++iuv] = c2y;
	uvs[++iuv] = c3x;
	uvs[++iuv] = c3y;

	const c5x = b2x;
	const c5y = b2y;
	const c4x = b2x - r01x;
	const c4y = b2y - r01y;
	const c6x = c4x + r03x;
	const c6y = c4y + r03y;
	const c7x = c6x + r01x;
	const c7y = c6y + r01y;
	uvs[++iuv] = c4x;
	uvs[++iuv] = c4y;
	uvs[++iuv] = c5x;
	uvs[++iuv] = c5y;
	uvs[++iuv] = c6x;
	uvs[++iuv] = c6y;
	uvs[++iuv] = c7x;
	uvs[++iuv] = c7y;

	const c10x = b6x;
	const c10y = b6y;
	const c8x = c10x - r03x;
	const c8y = c10y - r03y;
	const c11x = c10x + r01x;
	const c11y = c10y + r01y;
	const c9x = c8x + r01x;
	const c9y = c8y + r01y;
	uvs[++iuv] = c8x;
	uvs[++iuv] = c8y;
	uvs[++iuv] = c9x;
	uvs[++iuv] = c9y;
	uvs[++iuv] = c10x;
	uvs[++iuv] = c10y;
	uvs[++iuv] = c11x;
	uvs[++iuv] = c11y;

	const c15x = b8x;
	const c15y = b8y;
	const c14x = c15x - r01x;
	const c14y = c15y - r01y;
	const c13x = c15x - r03x;
	const c13y = c15y - r03y;
	const c12x = c13x - r01x;
	const c12y = c13y - r01y;
	uvs[++iuv] = c12x;
	uvs[++iuv] = c12y;
	uvs[++iuv] = c13x;
	uvs[++iuv] = c13y;
	uvs[++iuv] = c14x;
	uvs[++iuv] = c14y;
	uvs[++iuv] = c15x;
	uvs[++iuv] = c15y;

	//     16  17  23  24
	//      |---|  |---|
	//      |   |  |   |
	// 18--19--20  25--26--27
	//  |       |  |       |
	//  |       |  |       |
	// 21------22  28------29
	const c16x = c1x;
	const c16y = c1y;
	const c17x = b1x;
	const c17y = b1y;
	const c18x = c2x;
	const c18y = c2y;
	const c19x = c3x;
	const c19y = c3y;
	const c20x = c17x + r03x;
	const c20y = c17y + r03y;
	const c21x = b3x;
	const c21y = b3y;
	const c22x = b4x;
	const c22y = b4y;
	uvs[++iuv] = c16x;
	uvs[++iuv] = c16y;
	uvs[++iuv] = c17x;
	uvs[++iuv] = c17y;
	uvs[++iuv] = c18x;
	uvs[++iuv] = c18y;
	uvs[++iuv] = c19x;
	uvs[++iuv] = c19y;
	uvs[++iuv] = c20x;
	uvs[++iuv] = c20y;
	uvs[++iuv] = c21x;
	uvs[++iuv] = c21y;
	uvs[++iuv] = c22x;
	uvs[++iuv] = c22y;

	const c23x = c17x;
	const c23y = c17y;
	const c24x = c4x;
	const c24y = c4y;
	const c25x = c20x;
	const c25y = c20y;
	const c26x = c6x;
	const c26y = c6y;
	const c27x = c7x;
	const c27y = c7y;
	const c28x = c22x;
	const c28y = c22y;
	const c29x = b5x;
	const c29y = b5y;
	uvs[++iuv] = c23x;
	uvs[++iuv] = c23y;
	uvs[++iuv] = c24x;
	uvs[++iuv] = c24y;
	uvs[++iuv] = c25x;
	uvs[++iuv] = c25y;
	uvs[++iuv] = c26x;
	uvs[++iuv] = c26y;
	uvs[++iuv] = c27x;
	uvs[++iuv] = c27y;
	uvs[++iuv] = c28x;
	uvs[++iuv] = c28y;
	uvs[++iuv] = c29x;
	uvs[++iuv] = c29y;

	// 30------31  37------38
	//  |       |  |       |
	//  |       |  |       |
	// 32--33--34  39--40--41
	//      |   |  |   |
	//      |---|  |---|
	//     35  36  42  43
	const c30x = c21x;
	const c30y = c21y;
	const c31x = c22x;
	const c31y = c22y;
	const c32x = c8x;
	const c32y = c8y;
	const c33x = c9x;
	const c33y = c9y;
	const c34x = b7x - r03x;
	const c34y = b7y - r03y;
	const c35x = c11x;
	const c35y = c11y;
	const c36x = b7x;
	const c36y = b7y;
	uvs[++iuv] = c30x;
	uvs[++iuv] = c30y;
	uvs[++iuv] = c31x;
	uvs[++iuv] = c31y;
	uvs[++iuv] = c32x;
	uvs[++iuv] = c32y;
	uvs[++iuv] = c33x;
	uvs[++iuv] = c33y;
	uvs[++iuv] = c34x;
	uvs[++iuv] = c34y;
	uvs[++iuv] = c35x;
	uvs[++iuv] = c35y;
	uvs[++iuv] = c36x;
	uvs[++iuv] = c36y;

	const c37x = c31x;
	const c37y = c31y;
	const c38x = c29x;
	const c38y = c29y;
	const c39x = c34x;
	const c39y = c34y;
	const c40x = c12x;
	const c40y = c12y;
	const c41x = c13x;
	const c41y = c13y;
	const c42x = c36x;
	const c42y = c36y;
	const c43x = c14x;
	const c43y = c14y;
	uvs[++iuv] = c37x;
	uvs[++iuv] = c37y;
	uvs[++iuv] = c38x;
	uvs[++iuv] = c38y;
	uvs[++iuv] = c39x;
	uvs[++iuv] = c39y;
	uvs[++iuv] = c40x;
	uvs[++iuv] = c40y;
	uvs[++iuv] = c41x;
	uvs[++iuv] = c41y;
	uvs[++iuv] = c42x;
	uvs[++iuv] = c42y;
	uvs[++iuv] = c43x;
	uvs[++iuv] = c43y;
};
