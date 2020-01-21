import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapeCorner } from "../e-shape-corner";
import { toLength } from "./to-length";
import { toStep } from "./to-step";

export const TRIANGLE_ROUNDED_VERTEX_COUNT = 22;
export const TRIANGLE_ROUNDED_INDEX_COUNT = 15;
export const TRIANGLE_ROUNDED_WORLD_SIZE: [ number, number, number, number, number ] = [ 0, 0, 0, 0, 0 ];

export const buildTriangleRoundedIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	// Top corner
	const ii = ioffset * 3;
	indices[ ii +  0 ] = voffset + 0;
	indices[ ii +  1 ] = voffset + 1;
	indices[ ii +  2 ] = voffset + 3;

	indices[ ii +  3 ] = voffset + 1;
	indices[ ii +  4 ] = voffset + 2;
	indices[ ii +  5 ] = voffset + 3;

	// Bottom-right corner
	indices[ ii +  6 ] = voffset + 4;
	indices[ ii +  7 ] = voffset + 5;
	indices[ ii +  8 ] = voffset + 7;

	indices[ ii +  9 ] = voffset + 5;
	indices[ ii + 10 ] = voffset + 6;
	indices[ ii + 11 ] = voffset + 7;

	// Bottom-left corner
	indices[ ii + 12 ] = voffset + 8;
	indices[ ii + 13 ] = voffset + 9;
	indices[ ii + 14 ] = voffset + 11;

	indices[ ii + 15 ] = voffset + 9;
	indices[ ii + 16 ] = voffset + 10;
	indices[ ii + 17 ] = voffset + 11;

	// Others
	indices[ ii + 18 ] = voffset + 12;
	indices[ ii + 19 ] = voffset + 13;
	indices[ ii + 20 ] = voffset + 16;

	indices[ ii + 21 ] = voffset + 13;
	indices[ ii + 22 ] = voffset + 14;
	indices[ ii + 23 ] = voffset + 16;

	indices[ ii + 24 ] = voffset + 14;
	indices[ ii + 25 ] = voffset + 15;
	indices[ ii + 26 ] = voffset + 16;

	//
	indices[ ii + 27 ] = voffset + 12;
	indices[ ii + 28 ] = voffset + 16;
	indices[ ii + 29 ] = voffset + 19;

	indices[ ii + 30 ] = voffset + 16;
	indices[ ii + 31 ] = voffset + 17;
	indices[ ii + 32 ] = voffset + 19;

	indices[ ii + 33 ] = voffset + 17;
	indices[ ii + 34 ] = voffset + 18;
	indices[ ii + 35 ] = voffset + 19;

	//
	indices[ ii + 36 ] = voffset + 12;
	indices[ ii + 37 ] = voffset + 19;
	indices[ ii + 38 ] = voffset + 13;

	indices[ ii + 39 ] = voffset + 19;
	indices[ ii + 40 ] = voffset + 20;
	indices[ ii + 41 ] = voffset + 13;

	indices[ ii + 42 ] = voffset + 20;
	indices[ ii + 43 ] = voffset + 21;
	indices[ ii + 44 ] = voffset + 13;
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
	worldSize: [ number, number, number, number, number ],
	work: Point
): void => {
	// Calculate the transformed positions
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	const sz = Math.sqrt( sx * sx + 4 * sy * sy );
	const sw = 2 * sx * sy / (sx + sz);
	const ry = ( sw * radius ) / ( 2 * sy );
	const rz = ( 0.5 * ( sz - sw ) * radius ) / ( sz );
	const rx = ( ry * sz ) / ( 2 * sx );

	work.set( originX, originY - sy );
	internalTransform.apply( work, work );
	const x1 = work.x;
	const y1 = work.y;
	work.set( originX, originY );
	internalTransform.apply( work, work );
	const tx = work.x;
	const ty = work.y;
	work.set( originX + sx, originY );
	internalTransform.apply( work, work );
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
	work.set( originX, originY + sy - sw ); // Incenter of a triangle
	internalTransform.apply( work, work );
	const x0 = work.x;
	const y0 = work.y;

	const x10 = x1 + radius * ( x0 - x1 );
	const y10 = y1 + radius * ( y0 - y1 );
	const x11 = x4 + radius * ( x0 - x4 );
	const y11 = y4 + radius * ( y0 - y4 );
	const x12 = x7 + radius * ( x0 - x7 );
	const y12 = y7 + radius * ( y0 - y7 );

	// World size
	const xb = tx + dx;
	const yb = ty + dy;
	worldSize[ 0 ] = toLength( xb, yb, x0, y0 );
	worldSize[ 1 ] = rx;
	worldSize[ 2 ] = ry;
	worldSize[ 3 ] = rz;
	worldSize[ 4 ] = 1 - 0.5 * sw / sy;

	// Vertices
	// Top corner
	const iv = voffset * 2;
	vertices[ iv +  0 ] = x10;
	vertices[ iv +  1 ] = y10;
	vertices[ iv +  2 ] = x9;
	vertices[ iv +  3 ] = y9;
	vertices[ iv +  4 ] = x1;
	vertices[ iv +  5 ] = y1;
	vertices[ iv +  6 ] = x2;
	vertices[ iv +  7 ] = y2;

	// Bottom-right corner
	vertices[ iv +  8 ] = x11;
	vertices[ iv +  9 ] = y11;
	vertices[ iv + 10 ] = x3;
	vertices[ iv + 11 ] = y3;
	vertices[ iv + 12 ] = x4;
	vertices[ iv + 13 ] = y4;
	vertices[ iv + 14 ] = x5;
	vertices[ iv + 15 ] = y5;

	// Bottom-left corner
	vertices[ iv + 16 ] = x12;
	vertices[ iv + 17 ] = y12;
	vertices[ iv + 18 ] = x6;
	vertices[ iv + 19 ] = y6;
	vertices[ iv + 20 ] = x7;
	vertices[ iv + 21 ] = y7;
	vertices[ iv + 22 ] = x8;
	vertices[ iv + 23 ] = y8;

	// Others
	vertices[ iv + 24 ] = x0;
	vertices[ iv + 25 ] = y0;

	vertices[ iv + 26 ] = x10;
	vertices[ iv + 27 ] = y10;

	vertices[ iv + 28 ] = x2;
	vertices[ iv + 29 ] = y2;
	vertices[ iv + 30 ] = x3;
	vertices[ iv + 31 ] = y3;

	vertices[ iv + 32 ] = x11;
	vertices[ iv + 33 ] = y11;

	vertices[ iv + 34 ] = x5;
	vertices[ iv + 35 ] = y5;
	vertices[ iv + 36 ] = x6;
	vertices[ iv + 37 ] = y6;

	vertices[ iv + 38 ] = x12;
	vertices[ iv + 39 ] = y12;

	vertices[ iv + 40 ] = x8;
	vertices[ iv + 41 ] = y8;
	vertices[ iv + 42 ] = x9;
	vertices[ iv + 43 ] = y9;
};

export const buildTriangleRoundedClipping = (
	clippings: Float32Array,
	voffset: number,
	corner: EShapeCorner,
	radius: number
): void => {
	// Top corner
	let iv = voffset * 3;
	const w = 1 - radius;
	if( corner & EShapeCorner.TOP ) {
		clippings[ iv +  0 ] = 0;
		clippings[ iv +  1 ] = 0;
		clippings[ iv +  2 ] = 1;
		clippings[ iv +  3 ] = 1;
		clippings[ iv +  4 ] = 0;
		clippings[ iv +  5 ] = 1;
		clippings[ iv +  6 ] = 1;
		clippings[ iv +  7 ] = 1;
		clippings[ iv +  8 ] = 1;
		clippings[ iv +  9 ] = 0;
		clippings[ iv + 10 ] = 1;
		clippings[ iv + 11 ] = 1;
	} else {
		clippings[ iv +  0 ] = w;
		clippings[ iv +  1 ] = w;
		clippings[ iv +  2 ] = 0;
		clippings[ iv +  3 ] = 1;
		clippings[ iv +  4 ] = w;
		clippings[ iv +  5 ] = 0;
		clippings[ iv +  6 ] = 1;
		clippings[ iv +  7 ] = 1;
		clippings[ iv +  8 ] = 0;
		clippings[ iv +  9 ] = w;
		clippings[ iv + 10 ] = 1;
		clippings[ iv + 11 ] = 0;
	}
	iv += 12;

	// Bottom-right corner
	if( corner & EShapeCorner.BOTTOM_RIGHT ) {
		clippings[ iv +  0 ] = 0;
		clippings[ iv +  1 ] = 0;
		clippings[ iv +  2 ] = 1;
		clippings[ iv +  3 ] = 1;
		clippings[ iv +  4 ] = 0;
		clippings[ iv +  5 ] = 1;
		clippings[ iv +  6 ] = 1;
		clippings[ iv +  7 ] = 1;
		clippings[ iv +  8 ] = 1;
		clippings[ iv +  9 ] = 0;
		clippings[ iv + 10 ] = 1;
		clippings[ iv + 11 ] = 1;
	} else {
		clippings[ iv +  0 ] = w;
		clippings[ iv +  1 ] = w;
		clippings[ iv +  2 ] = 0;
		clippings[ iv +  3 ] = 1;
		clippings[ iv +  4 ] = w;
		clippings[ iv +  5 ] = 0;
		clippings[ iv +  6 ] = 1;
		clippings[ iv +  7 ] = 1;
		clippings[ iv +  8 ] = 0;
		clippings[ iv +  9 ] = w;
		clippings[ iv + 10 ] = 1;
		clippings[ iv + 11 ] = 0;
	}
	iv += 12;

	// Bottom-left corner
	if( corner & EShapeCorner.BOTTOM_LEFT ) {
		clippings[ iv +  0 ] = 0;
		clippings[ iv +  1 ] = 0;
		clippings[ iv +  2 ] = 1;
		clippings[ iv +  3 ] = 1;
		clippings[ iv +  4 ] = 0;
		clippings[ iv +  5 ] = 1;
		clippings[ iv +  6 ] = 1;
		clippings[ iv +  7 ] = 1;
		clippings[ iv +  8 ] = 1;
		clippings[ iv +  9 ] = 0;
		clippings[ iv + 10 ] = 1;
		clippings[ iv + 11 ] = 1;
	} else {
		clippings[ iv +  0 ] = w;
		clippings[ iv +  1 ] = w;
		clippings[ iv +  2 ] = 0;
		clippings[ iv +  3 ] = 1;
		clippings[ iv +  4 ] = w;
		clippings[ iv +  5 ] = 0;
		clippings[ iv +  6 ] = 1;
		clippings[ iv +  7 ] = 1;
		clippings[ iv +  8 ] = 0;
		clippings[ iv +  9 ] = w;
		clippings[ iv + 10 ] = 1;
		clippings[ iv + 11 ] = 0;
	}
	iv += 12;

	// Others
	clippings[ iv + 0 ] = 0;
	clippings[ iv + 1 ] = 0;
	clippings[ iv + 2 ] = 0;
	iv += 3;

	clippings[ iv + 0 ] = w;
	clippings[ iv + 1 ] = 0;
	clippings[ iv + 2 ] = 0;
	iv += 3;

	clippings[ iv + 0 ] = 1;
	clippings[ iv + 1 ] = 0;
	clippings[ iv + 2 ] = 0;
	clippings[ iv + 3 ] = 1;
	clippings[ iv + 4 ] = 0;
	clippings[ iv + 5 ] = 0;
	iv += 6;

	clippings[ iv + 0 ] = w;
	clippings[ iv + 1 ] = 0;
	clippings[ iv + 2 ] = 0;
	iv += 3;

	clippings[ iv + 0 ] = 1;
	clippings[ iv + 1 ] = 0;
	clippings[ iv + 2 ] = 0;
	clippings[ iv + 3 ] = 1;
	clippings[ iv + 4 ] = 0;
	clippings[ iv + 5 ] = 0;
	iv += 6;

	clippings[ iv + 0 ] = w;
	clippings[ iv + 1 ] = 0;
	clippings[ iv + 2 ] = 0;
	iv += 3;

	clippings[ iv + 0 ] = 1;
	clippings[ iv + 1 ] = 0;
	clippings[ iv + 2 ] = 0;
	clippings[ iv + 3 ] = 1;
	clippings[ iv + 4 ] = 0;
	clippings[ iv + 5 ] = 0;
};

export const buildTriangleRoundedStep = (
	steps: Float32Array,
	antialiases: Float32Array,
	clippings: Float32Array,
	voffset: number,
	strokeWidth: number,
	radius: number,
	antialiasWeight: number,
	worldSize: [ number, number, number, number, number ],
	workStep: Float32Array
): void => {
	const wsr = worldSize[ 0 ];
	toStep( wsr, strokeWidth, antialiasWeight, workStep );
	const swc = workStep[ 0 ];
	const pc0 = workStep[ 1 ];
	const pc1 = workStep[ 2 ];

	toStep( radius * wsr, strokeWidth, antialiasWeight, workStep );
	const swr = workStep[ 0 ];
	const pr0 = workStep[ 1 ];
	const pr1 = workStep[ 2 ];

	const istart = voffset << 1;
	const imax = (voffset + TRIANGLE_ROUNDED_VERTEX_COUNT) << 1;
	const jstart = voffset * 3;
	const kstart = voffset * 4;
	for( let i = istart, j = jstart, k = kstart; i < imax; i += 2, j += 3, k += 4 ) {
		const cx = clippings[ j + 0 ];
		const cy = clippings[ j + 1 ];
		const cz = clippings[ j + 2 ];
		let sw = swc;
		let p0 = pc0;
		let p1 = pc1;
		if( 0.5 < cz ) {
			sw = swr;
			p0 = pr0;
			p1 = pr1;
		}
		steps[ i + 0 ] = sw * cx;
		steps[ i + 1 ] = sw * cy;
		antialiases[ k + 0 ] = p0;
		antialiases[ k + 1 ] = p0;
		antialiases[ k + 2 ] = p1;
		antialiases[ k + 3 ] = p1;
	}
};

export const buildTriangleRoundedUv = (
	uvs: Float32Array,
	voffset: number,
	textureUvs: TextureUvs,
	radius: number,
	worldSize: [ number, number, number, number, number ]
): void => {
	const x0 = textureUvs.x0;
	const x1 = textureUvs.x1;
	const x2 = textureUvs.x2;
	const x3 = textureUvs.x3;
	const y0 = textureUvs.y0;
	const y1 = textureUvs.y1;
	const y2 = textureUvs.y2;
	const y3 = textureUvs.y3;

	const x4 = 0.5 * ( x0 + x1 );
	const y4 = 0.5 * ( y0 + y1 );

	const c = worldSize[ 4 ];
	const x5 = x4 + c * ( x3 - x0 );
	const y5 = y4 + c * ( y3 - y0 );

	const rx = worldSize[ 1 ];
	const ry = worldSize[ 2 ];
	const rz = worldSize[ 3 ];
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
	let iuv = voffset * 2;
	uvs[ iuv + 0 ] = x7;
	uvs[ iuv + 1 ] = y7;
	uvs[ iuv + 2 ] = x6;
	uvs[ iuv + 3 ] = y6;
	uvs[ iuv + 4 ] = x4;
	uvs[ iuv + 5 ] = y4;
	uvs[ iuv + 6 ] = x8;
	uvs[ iuv + 7 ] = y8;
	iuv += 8;

	// Bottom-right corner
	uvs[ iuv + 0 ] = x10;
	uvs[ iuv + 1 ] = y10;
	uvs[ iuv + 2 ] = x9;
	uvs[ iuv + 3 ] = y9;
	uvs[ iuv + 4 ] = x2;
	uvs[ iuv + 5 ] = y2;
	uvs[ iuv + 6 ] = x11;
	uvs[ iuv + 7 ] = y11;
	iuv += 8;

	// Bottom-left corner
	uvs[ iuv + 0 ] = x13;
	uvs[ iuv + 1 ] = y13;
	uvs[ iuv + 2 ] = x12;
	uvs[ iuv + 3 ] = y12;
	uvs[ iuv + 4 ] = x3;
	uvs[ iuv + 5 ] = y3;
	uvs[ iuv + 6 ] = x14;
	uvs[ iuv + 7 ] = y14;
	iuv += 8;

	// Others
	uvs[ iuv +  0 ] = x5;
	uvs[ iuv +  1 ] = y5;

	uvs[ iuv +  2 ] = x7;
	uvs[ iuv +  3 ] = y7;

	uvs[ iuv +  4 ] = x8;
	uvs[ iuv +  5 ] = y8;
	uvs[ iuv +  6 ] = x9;
	uvs[ iuv +  7 ] = y9;

	uvs[ iuv +  8 ] = x10;
	uvs[ iuv +  9 ] = y10;

	uvs[ iuv + 10 ] = x11;
	uvs[ iuv + 11 ] = y11;
	uvs[ iuv + 12 ] = x12;
	uvs[ iuv + 13 ] = y12;

	uvs[ iuv + 14 ] = x13;
	uvs[ iuv + 15 ] = y13;

	uvs[ iuv + 16 ] = x14;
	uvs[ iuv + 17 ] = y14;
	uvs[ iuv + 18 ] = x6;
	uvs[ iuv + 19 ] = y6;
};
