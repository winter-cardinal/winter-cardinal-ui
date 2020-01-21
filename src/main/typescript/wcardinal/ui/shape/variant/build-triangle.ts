import { Matrix, Point, TextureUvs } from "pixi.js";
import { buildStep } from "./build-step";
import { toLength } from "./to-length";
import { toStep } from "./to-step";

export const TRIANGLE_VERTEX_COUNT = 7;
export const TRIANGLE_INDEX_COUNT = 3;
export const TRIANGLE_WORLD_SIZE: [ number, number, number ] = [ 0, 0, 0 ];

export const buildTriangleClipping = (
	clippings: Float32Array,
	voffset: number
): void => {
	// Clippings
	let iv = voffset * 3;
	clippings[ iv + 0 ] = 0;
	clippings[ iv + 1 ] = 0;
	clippings[ iv + 2 ] = 0;
	iv += 3;

	clippings[ iv + 0 ] = 1;
	clippings[ iv + 1 ] = 0;
	clippings[ iv + 2 ] = 0;
	iv += 3;

	clippings[ iv + 0 ] = 1;
	clippings[ iv + 1 ] = 0;
	clippings[ iv + 2 ] = 0;
	iv += 3;

	clippings[ iv + 0 ] = 0;
	clippings[ iv + 1 ] = 1;
	clippings[ iv + 2 ] = 0;
	iv += 3;

	clippings[ iv + 0 ] = 0;
	clippings[ iv + 1 ] = 1;
	clippings[ iv + 2 ] = 0;
	iv += 3;

	clippings[ iv + 0 ] = 1;
	clippings[ iv + 1 ] = 0;
	clippings[ iv + 2 ] = 0;
	iv += 3;

	clippings[ iv + 0 ] = 1;
	clippings[ iv + 1 ] = 0;
	clippings[ iv + 2 ] = 0;
};

export const buildTriangleIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	// Indices
	const ii = ioffset * 3;
	indices[ ii + 0 ] = voffset + 0;
	indices[ ii + 1 ] = voffset + 1;
	indices[ ii + 2 ] = voffset + 2;

	indices[ ii + 3 ] = voffset + 0;
	indices[ ii + 4 ] = voffset + 3;
	indices[ ii + 5 ] = voffset + 4;

	indices[ ii + 6 ] = voffset + 0;
	indices[ ii + 7 ] = voffset + 5;
	indices[ ii + 8 ] = voffset + 6;
};

export const buildTriangleVertex = (
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
	const s = strokeAlign * strokeWidth;
	const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
	const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
	const sz = Math.sqrt( sx * sx + 4 * sy * sy );
	const sw = 2 * sx * sy / (sx + sz);

	work.set( originX, originY - sy );
	internalTransform.apply( work, work );
	const x0 = work.x;
	const y0 = work.y;
	work.set( originX, originY );
	internalTransform.apply( work, work );
	const tx = work.x;
	const ty = work.y;
	work.set( originX + sx, originY );
	internalTransform.apply( work, work );
	const dx = tx - x0;
	const dy = ty - y0;
	const x1 = work.x + dx;
	const y1 = work.y + dy;
	const x2 = tx + (tx - work.x) + dx;
	const y2 = ty + (ty - work.y) + dy;
	work.set( originX, originY + sy - sw ); // Incenter of a triangle
	internalTransform.apply( work, work );
	const x3 = work.x;
	const y3 = work.y;

	// World size
	const xb = tx + dx;
	const yb = ty + dy;
	worldSize[ 0 ] = toLength( xb, yb, x3, y3 );
	worldSize[ 1 ] = toLength( x1, y1, xb, yb );
	worldSize[ 2 ] = toLength( x0, y0, tx, ty );

	// Vertices
	const iv = voffset << 1;
	vertices[ iv +  0 ] = x3;
	vertices[ iv +  1 ] = y3;

	vertices[ iv +  2 ] = x0;
	vertices[ iv +  3 ] = y0;
	vertices[ iv +  4 ] = x1;
	vertices[ iv +  5 ] = y1;

	vertices[ iv +  6 ] = x1;
	vertices[ iv +  7 ] = y1;
	vertices[ iv +  8 ] = x2;
	vertices[ iv +  9 ] = y2;

	vertices[ iv + 10 ] = x2;
	vertices[ iv + 11 ] = y2;
	vertices[ iv + 12 ] = x0;
	vertices[ iv + 13 ] = y0;
};

export const buildTriangleStep = (
	steps: Float32Array,
	antialiases: Float32Array,
	clippings: Float32Array,
	voffset: number,
	vcount: number,
	strokeWidth: number,
	antialiasWeight: number,
	worldSize: [ number, number, number ],
	workStep: Float32Array
): void => {
	toStep( worldSize[ 0 ], strokeWidth, antialiasWeight, workStep );
	const swc = workStep[ 0 ];
	const pc0 = workStep[ 1 ];
	const pc1 = workStep[ 2 ];

	buildStep(
		steps,
		antialiases,
		clippings,
		voffset,
		vcount,
		swc, swc,
		pc0, pc0,
		pc1, pc1
	);
};

export const buildTriangleUv = (
	uvs: Float32Array,
	textureUvs: TextureUvs,
	voffset: number,
	worldSize: [ number, number, number ]
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

	const c = 1 - 0.5 * worldSize[ 0 ] / worldSize[ 2 ];
	const x5 = x4 + c * ( x3 - x0 );
	const y5 = y4 + c * ( y3 - y0 );

	const iuv = voffset << 1;
	uvs[ iuv +  0 ] = x5;
	uvs[ iuv +  1 ] = y5;

	uvs[ iuv +  2 ] = x4;
	uvs[ iuv +  3 ] = y4;
	uvs[ iuv +  4 ] = x2;
	uvs[ iuv +  5 ] = y2;

	uvs[ iuv +  6 ] = x2;
	uvs[ iuv +  7 ] = y2;
	uvs[ iuv +  8 ] = x3;
	uvs[ iuv +  9 ] = y3;

	uvs[ iuv + 10 ] = x3;
	uvs[ iuv + 11 ] = y3;
	uvs[ iuv + 12 ] = x4;
	uvs[ iuv + 13 ] = y4;
};
