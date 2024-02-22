import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";
import { toClippingPacked } from "./to-clipping-packed";

export const TRIANGLE_ROUNDED_VERTEX_COUNT = 22;
export const TRIANGLE_ROUNDED_INDEX_COUNT = 15;
export const TRIANGLE_ROUNDED_WORLD_SIZE: [number, number, number, number, number] = [
	0, 0, 0, 0, 0
];
const TRIANGLE_ROUNDED_WORK_POINT: Point = new Point();

export const buildTriangleRoundedIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	// Top corner
	let ii = ioffset * 3 - 1;
	indices[++ii] = voffset + 0;
	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 3;

	indices[++ii] = voffset + 1;
	indices[++ii] = voffset + 2;
	indices[++ii] = voffset + 3;

	// Bottom-right corner
	indices[++ii] = voffset + 4;
	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 7;

	indices[++ii] = voffset + 5;
	indices[++ii] = voffset + 6;
	indices[++ii] = voffset + 7;

	// Bottom-left corner
	indices[++ii] = voffset + 8;
	indices[++ii] = voffset + 9;
	indices[++ii] = voffset + 11;

	indices[++ii] = voffset + 9;
	indices[++ii] = voffset + 10;
	indices[++ii] = voffset + 11;

	// Others
	indices[++ii] = voffset + 12;
	indices[++ii] = voffset + 13;
	indices[++ii] = voffset + 16;

	indices[++ii] = voffset + 13;
	indices[++ii] = voffset + 14;
	indices[++ii] = voffset + 16;

	indices[++ii] = voffset + 14;
	indices[++ii] = voffset + 15;
	indices[++ii] = voffset + 16;

	//
	indices[++ii] = voffset + 12;
	indices[++ii] = voffset + 16;
	indices[++ii] = voffset + 19;

	indices[++ii] = voffset + 16;
	indices[++ii] = voffset + 17;
	indices[++ii] = voffset + 19;

	indices[++ii] = voffset + 17;
	indices[++ii] = voffset + 18;
	indices[++ii] = voffset + 19;

	//
	indices[++ii] = voffset + 12;
	indices[++ii] = voffset + 19;
	indices[++ii] = voffset + 13;

	indices[++ii] = voffset + 19;
	indices[++ii] = voffset + 20;
	indices[++ii] = voffset + 13;

	indices[++ii] = voffset + 20;
	indices[++ii] = voffset + 21;
	indices[++ii] = voffset + 13;
};

export const buildTriangleRoundedVertex = (
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
	worldSize: typeof TRIANGLE_ROUNDED_WORLD_SIZE
): void => {
	// Calculate the transformed positions
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	const sz = Math.sqrt(sx * sx + 4 * sy * sy);
	const sw = (2 * sx * sy) / (sx + sz);
	const ry = (sw * radius) / (2 * sy);
	const rz = (0.5 * (sz - sw) * radius) / sz;
	const rx = (ry * sz) / (2 * sx);

	const work = TRIANGLE_ROUNDED_WORK_POINT;
	work.set(originX, originY - sy);
	internalTransform.apply(work, work);
	const x1 = work.x;
	const y1 = work.y;
	work.set(originX, originY);
	internalTransform.apply(work, work);
	const tx = work.x;
	const ty = work.y;
	work.set(originX + sx, originY);
	internalTransform.apply(work, work);
	const dx = tx - x1;
	const dy = ty - y1;
	const x4 = work.x + dx;
	const y4 = work.y + dy;
	const x7 = tx + (tx - work.x) + dx;
	const y7 = ty + (ty - work.y) + dy;
	const dx14 = x4 - x1;
	const dy14 = y4 - y1;
	const x2 = x1 + rz * dx14;
	const y2 = y1 + rz * dy14;
	const x3 = x4 - ry * dx14;
	const y3 = y4 - ry * dy14;
	const dx47r = rx * (x7 - x4);
	const dy47r = rx * (y7 - y4);
	const x5 = x4 + dx47r;
	const y5 = y4 + dy47r;
	const x6 = x7 - dx47r;
	const y6 = y7 - dy47r;
	const dx71 = x1 - x7;
	const dy71 = y1 - y7;
	const x8 = x7 + ry * dx71;
	const y8 = y7 + ry * dy71;
	const x9 = x1 - rz * dx71;
	const y9 = y1 - rz * dy71;
	work.set(originX, originY + sy - sw); // Incenter of a triangle
	internalTransform.apply(work, work);
	const x0 = work.x;
	const y0 = work.y;

	const x10 = x1 + radius * (x0 - x1);
	const y10 = y1 + radius * (y0 - y1);
	const x11 = x4 + radius * (x0 - x4);
	const y11 = y4 + radius * (y0 - y4);
	const x12 = x7 + radius * (x0 - x7);
	const y12 = y7 + radius * (y0 - y7);

	// World size
	const xb = tx + dx;
	const yb = ty + dy;
	worldSize[0] = toLength(xb, yb, x0, y0);
	worldSize[1] = rx;
	worldSize[2] = ry;
	worldSize[3] = rz;
	worldSize[4] = 1 - (0.5 * sw) / sy;

	// Vertices
	// Top corner
	let iv = voffset * 2 - 1;
	vertices[++iv] = x10;
	vertices[++iv] = y10;
	vertices[++iv] = x9;
	vertices[++iv] = y9;
	vertices[++iv] = x1;
	vertices[++iv] = y1;
	vertices[++iv] = x2;
	vertices[++iv] = y2;

	// Bottom-right corner
	vertices[++iv] = x11;
	vertices[++iv] = y11;
	vertices[++iv] = x3;
	vertices[++iv] = y3;
	vertices[++iv] = x4;
	vertices[++iv] = y4;
	vertices[++iv] = x5;
	vertices[++iv] = y5;

	// Bottom-left corner
	vertices[++iv] = x12;
	vertices[++iv] = y12;
	vertices[++iv] = x6;
	vertices[++iv] = y6;
	vertices[++iv] = x7;
	vertices[++iv] = y7;
	vertices[++iv] = x8;
	vertices[++iv] = y8;

	// Others
	vertices[++iv] = x0;
	vertices[++iv] = y0;

	vertices[++iv] = x10;
	vertices[++iv] = y10;

	vertices[++iv] = x2;
	vertices[++iv] = y2;
	vertices[++iv] = x3;
	vertices[++iv] = y3;

	vertices[++iv] = x11;
	vertices[++iv] = y11;

	vertices[++iv] = x5;
	vertices[++iv] = y5;
	vertices[++iv] = x6;
	vertices[++iv] = y6;

	vertices[++iv] = x12;
	vertices[++iv] = y12;

	vertices[++iv] = x8;
	vertices[++iv] = y8;
	vertices[++iv] = x9;
	vertices[++iv] = y9;
};

export const buildTriangleRoundedClipping = (
	clippings: Float32Array,
	voffset: number,
	corner: EShapeCorner,
	radius: number
): void => {
	const w = 1 - radius;
	const c001 = toClippingPacked(0, 0, 1);
	const c101 = toClippingPacked(1, 0, 1);
	const c111 = toClippingPacked(1, 1, 1);
	const c011 = toClippingPacked(0, 1, 1);
	const cww0 = toClippingPacked(w, w, 0);
	const c1w0 = toClippingPacked(1, w, 0);
	const c110 = toClippingPacked(1, 1, 0);
	const cw10 = toClippingPacked(w, 1, 0);
	const c000 = toClippingPacked(0, 0, 0);
	const cw00 = toClippingPacked(w, 0, 0);
	const c100 = toClippingPacked(1, 0, 0);

	// Top corner
	let iv = voffset - 1;
	if (corner & EShapeCorner.TOP) {
		clippings[++iv] = c001;
		clippings[++iv] = c101;
		clippings[++iv] = c111;
		clippings[++iv] = c011;
	} else {
		clippings[++iv] = cww0;
		clippings[++iv] = c1w0;
		clippings[++iv] = c110;
		clippings[++iv] = cw10;
	}

	// Bottom-right corner
	if (corner & EShapeCorner.BOTTOM_RIGHT) {
		clippings[++iv] = c001;
		clippings[++iv] = c101;
		clippings[++iv] = c111;
		clippings[++iv] = c011;
	} else {
		clippings[++iv] = cww0;
		clippings[++iv] = c1w0;
		clippings[++iv] = c110;
		clippings[++iv] = cw10;
	}

	// Bottom-left corner
	if (corner & EShapeCorner.BOTTOM_LEFT) {
		clippings[++iv] = c001;
		clippings[++iv] = c101;
		clippings[++iv] = c111;
		clippings[++iv] = c011;
	} else {
		clippings[++iv] = cww0;
		clippings[++iv] = c1w0;
		clippings[++iv] = c110;
		clippings[++iv] = cw10;
	}

	// Others
	clippings[++iv] = c000;
	clippings[++iv] = cw00;
	clippings[++iv] = c100;
	clippings[++iv] = c100;
	clippings[++iv] = cw00;
	clippings[++iv] = c100;
	clippings[++iv] = c100;
	clippings[++iv] = cw00;
	clippings[++iv] = c100;
	clippings[++iv] = c100;
};

export const buildTriangleRoundedStep = (
	steps: Float32Array,
	voffset: number,
	strokeWidth: number,
	strokeStyle: EShapeStrokeStyle,
	corner: EShapeCorner,
	radius: number,
	worldSize: typeof TRIANGLE_ROUNDED_WORLD_SIZE
): void => {
	const scaleInvariant = toScaleInvariant(strokeStyle);

	const s = worldSize[0];
	const sr = radius * s;

	// Top corner
	let is = voffset * 6 - 1;
	if (corner & EShapeCorner.TOP) {
		// 001
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sr;
		steps[++is] = sr;
		steps[++is] = 1;
		steps[++is] = 1;

		// 101
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sr;
		steps[++is] = sr;
		steps[++is] = 1;
		steps[++is] = 1;

		// 111
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sr;
		steps[++is] = sr;
		steps[++is] = 1;
		steps[++is] = 1;

		// 011
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sr;
		steps[++is] = sr;
		steps[++is] = 1;
		steps[++is] = 1;
	} else {
		// ww0
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = s;
		steps[++is] = s;
		steps[++is] = 1;
		steps[++is] = 1;

		// 1w0
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = s;
		steps[++is] = s;
		steps[++is] = 1;
		steps[++is] = 1;

		// 110
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = s;
		steps[++is] = s;
		steps[++is] = 1;
		steps[++is] = 1;

		// w10
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = s;
		steps[++is] = s;
		steps[++is] = 1;
		steps[++is] = 1;
	}

	// Bottom-right corner
	if (corner & EShapeCorner.BOTTOM_RIGHT) {
		// 001
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sr;
		steps[++is] = sr;
		steps[++is] = 1;
		steps[++is] = 1;

		// 101
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sr;
		steps[++is] = sr;
		steps[++is] = 1;
		steps[++is] = 1;

		// 111
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sr;
		steps[++is] = sr;
		steps[++is] = 1;
		steps[++is] = 1;

		// 011
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sr;
		steps[++is] = sr;
		steps[++is] = 1;
		steps[++is] = 1;
	} else {
		// ww0
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = s;
		steps[++is] = s;
		steps[++is] = 1;
		steps[++is] = 1;

		// 1w0
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = s;
		steps[++is] = s;
		steps[++is] = 1;
		steps[++is] = 1;

		// 110
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = s;
		steps[++is] = s;
		steps[++is] = 1;
		steps[++is] = 1;

		// w10
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = s;
		steps[++is] = s;
		steps[++is] = 1;
		steps[++is] = 1;
	}

	// Bottom-left corner
	if (corner & EShapeCorner.BOTTOM_LEFT) {
		// 001
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sr;
		steps[++is] = sr;
		steps[++is] = 1;
		steps[++is] = 1;

		// 101
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sr;
		steps[++is] = sr;
		steps[++is] = 1;
		steps[++is] = 1;

		// 111
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sr;
		steps[++is] = sr;
		steps[++is] = 1;
		steps[++is] = 1;

		// 011
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = sr;
		steps[++is] = sr;
		steps[++is] = 1;
		steps[++is] = 1;
	} else {
		// ww0
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = s;
		steps[++is] = s;
		steps[++is] = 1;
		steps[++is] = 1;

		// 1w0
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = s;
		steps[++is] = s;
		steps[++is] = 1;
		steps[++is] = 1;

		// 110
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = s;
		steps[++is] = s;
		steps[++is] = 1;
		steps[++is] = 1;

		// w10
		steps[++is] = strokeWidth;
		steps[++is] = scaleInvariant;
		steps[++is] = s;
		steps[++is] = s;
		steps[++is] = 1;
		steps[++is] = 1;
	}

	// Others
	// 000
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 1;

	// w00
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 1;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 1;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 1;

	// w00
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 1;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 1;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 1;

	// w00
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 1;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 1;

	// 100
	steps[++is] = strokeWidth;
	steps[++is] = scaleInvariant;
	steps[++is] = s;
	steps[++is] = s;
	steps[++is] = 1;
	steps[++is] = 1;
};

export const buildTriangleRoundedUv = (
	uvs: Float32Array,
	voffset: number,
	textureUvs: TextureUvs,
	radius: number,
	worldSize: typeof TRIANGLE_ROUNDED_WORLD_SIZE
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

	const c = worldSize[4];
	const x5 = x4 + c * (x3 - x0);
	const y5 = y4 + c * (y3 - y0);

	const rx = worldSize[1];
	const ry = worldSize[2];
	const rz = worldSize[3];
	const x6 = x4 + rz * (x3 - x4);
	const y6 = y4 + rz * (y3 - y4);
	const x7 = x4 + radius * (x5 - x4);
	const y7 = y4 + radius * (y5 - y4);
	const x8 = x4 + rz * (x2 - x4);
	const y8 = y4 + rz * (y2 - y4);

	const x9 = x2 + ry * (x4 - x2);
	const y9 = y2 + ry * (y4 - y2);
	const x10 = x2 + radius * (x5 - x2);
	const y10 = y2 + radius * (y5 - y2);
	const x11 = x2 + rx * (x3 - x2);
	const y11 = y2 + rx * (y3 - y2);

	const x12 = x3 + rx * (x2 - x3);
	const y12 = y3 + rx * (y2 - y3);
	const x13 = x3 + radius * (x5 - x3);
	const y13 = y3 + radius * (y5 - y3);
	const x14 = x3 + ry * (x4 - x3);
	const y14 = y3 + ry * (y4 - y3);

	// Uvs
	// Top corner
	let iuv = voffset * 2 - 1;
	uvs[++iuv] = x7;
	uvs[++iuv] = y7;
	uvs[++iuv] = x6;
	uvs[++iuv] = y6;
	uvs[++iuv] = x4;
	uvs[++iuv] = y4;
	uvs[++iuv] = x8;
	uvs[++iuv] = y8;

	// Bottom-right corner
	uvs[++iuv] = x10;
	uvs[++iuv] = y10;
	uvs[++iuv] = x9;
	uvs[++iuv] = y9;
	uvs[++iuv] = x2;
	uvs[++iuv] = y2;
	uvs[++iuv] = x11;
	uvs[++iuv] = y11;

	// Bottom-left corner
	uvs[++iuv] = x13;
	uvs[++iuv] = y13;
	uvs[++iuv] = x12;
	uvs[++iuv] = y12;
	uvs[++iuv] = x3;
	uvs[++iuv] = y3;
	uvs[++iuv] = x14;
	uvs[++iuv] = y14;

	// Others
	uvs[++iuv] = x5;
	uvs[++iuv] = y5;

	uvs[++iuv] = x7;
	uvs[++iuv] = y7;

	uvs[++iuv] = x8;
	uvs[++iuv] = y8;
	uvs[++iuv] = x9;
	uvs[++iuv] = y9;

	uvs[++iuv] = x10;
	uvs[++iuv] = y10;

	uvs[++iuv] = x11;
	uvs[++iuv] = y11;
	uvs[++iuv] = x12;
	uvs[++iuv] = y12;

	uvs[++iuv] = x13;
	uvs[++iuv] = y13;

	uvs[++iuv] = x14;
	uvs[++iuv] = y14;
	uvs[++iuv] = x6;
	uvs[++iuv] = y6;
};
