import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapePointsStyleUploadeds } from "../e-shape-points-style-uploadeds";

export const BAR_VERTEX_COUNT = 4;
export const BAR_INDEX_COUNT = 2;
const BAR_FMIN: number = 0.00001;

export const buildBarClipping = (
	clippings: Float32Array,
	voffset: number
): void => {
	const ic = voffset * 3;
	clippings[ ic +  0 ] = 1;
	clippings[ ic +  1 ] = 0;
	clippings[ ic +  2 ] = 3;

	clippings[ ic +  3 ] = 0;
	clippings[ ic +  4 ] = 1;
	clippings[ ic +  5 ] = 5;

	clippings[ ic +  6 ] = 1;
	clippings[ ic +  7 ] = 0;
	clippings[ ic +  8 ] = 3;

	clippings[ ic +  9 ] = 0;
	clippings[ ic + 10 ] = 1;
	clippings[ ic + 11 ] = 5;
};

export const buildBarIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number
): void => {
	const ii = ioffset * 3;
	indices[ ii + 0 ] = voffset + 0;
	indices[ ii + 1 ] = voffset + 2;
	indices[ ii + 2 ] = voffset + 1;

	indices[ ii + 3 ] = voffset + 1;
	indices[ ii + 4 ] = voffset + 2;
	indices[ ii + 5 ] = voffset + 3;
};

export const buildBarVertexStepAndColorFill = (
	vertices: Float32Array,
	steps: Float32Array,
	antialiases: Float32Array,
	colorFills: Float32Array,
	voffset: number,
	pointValues: number[],
	pointsStyle: EShapePointsStyle,
	pointsSize: number,
	strokeWidth: number,
	internalTransform: Matrix,
	work: Point
): void => {
	// First point
	work.set( pointValues[ 0 ], pointValues[ 1 ] );
	internalTransform.apply( work, work );
	const p1x = work.x;
	const p1y = work.y;

	// Last point
	work.set( pointValues[ 2 ], pointValues[ 3 ] );
	internalTransform.apply( work, work );
	let p2x = work.x;
	let p2y = work.y;

	// Normal
	let dx = p2x - p1x;
	let dy = p2y - p1y;
	const d = Math.sqrt( dx * dx + dy * dy );
	let l = d;
	if( 0 <= pointsSize && BAR_FMIN < d ) {
		const ratio = pointsSize / d;
		dx *= ratio;
		dy *= ratio;
		p2x = p1x + dx;
		p2y = p1y + dy;
		l = pointsSize;
	}

	// Other points
	const p0x = p1x - dx;
	const p0y = p1y - dy;
	const p3x = p2x + dx;
	const p3y = p2y + dy;

	//
	const scaleInvariant = EShapePointsStyleUploadeds.toScaleInvariant( pointsStyle );
	const iv = voffset << 1;
	const ia = voffset << 2;
	vertices[ iv + 0 ] = p1x;
	vertices[ iv + 1 ] = p1y;
	vertices[ iv + 2 ] = p1x;
	vertices[ iv + 3 ] = p1y;
	steps[ iv + 0 ] = strokeWidth;
	steps[ iv + 1 ] = scaleInvariant;
	steps[ iv + 2 ] = strokeWidth;
	steps[ iv + 3 ] = scaleInvariant;
	antialiases[ ia + 0 ] = p0x;
	antialiases[ ia + 1 ] = p0y;
	antialiases[ ia + 2 ] = p2x;
	antialiases[ ia + 3 ] = p2y;
	antialiases[ ia + 4 ] = p0x;
	antialiases[ ia + 5 ] = p0y;
	antialiases[ ia + 6 ] = p2x;
	antialiases[ ia + 7 ] = p2y;
	colorFills[ ia + 0 ] = 0.0;
	colorFills[ ia + 4 ] = 0.0;

	vertices[ iv + 4 ] = p2x;
	vertices[ iv + 5 ] = p2y;
	vertices[ iv + 6 ] = p2x;
	vertices[ iv + 7 ] = p2y;
	steps[ iv + 4 ] = strokeWidth;
	steps[ iv + 5 ] = scaleInvariant;
	steps[ iv + 6 ] = strokeWidth;
	steps[ iv + 7 ] = scaleInvariant;
	antialiases[ ia +  8 ] = p1x;
	antialiases[ ia +  9 ] = p1y;
	antialiases[ ia + 10 ] = p3x;
	antialiases[ ia + 11 ] = p3y;
	antialiases[ ia + 12 ] = p1x;
	antialiases[ ia + 13 ] = p1y;
	antialiases[ ia + 14 ] = p3x;
	antialiases[ ia + 15 ] = p3y;
	colorFills[ ia +  8 ] = l;
	colorFills[ ia + 12 ] = l;

	// Total length
	EShapePointsStyleUploadeds.toDash( l, strokeWidth, pointsStyle, work );
	const dash0 = work.x;
	const dash1 = work.y;
	colorFills[ ia +  1 ] = dash0;
	colorFills[ ia +  2 ] = dash1;
	colorFills[ ia +  3 ] = l;

	colorFills[ ia +  5 ] = dash0;
	colorFills[ ia +  6 ] = dash1;
	colorFills[ ia +  7 ] = l;

	colorFills[ ia +  9 ] = dash0;
	colorFills[ ia + 10 ] = dash1;
	colorFills[ ia + 11 ] = l;

	colorFills[ ia + 13 ] = dash0;
	colorFills[ ia + 14 ] = dash1;
	colorFills[ ia + 15 ] = l;
};

export const buildBarUv = (
	uvs: Float32Array,
	voffset: number,
	textureUvs: TextureUvs
): void => {
	const iuv = voffset * 2;
	uvs[ iuv + 0 ] = textureUvs.x0;
	uvs[ iuv + 1 ] = textureUvs.y0;
	uvs[ iuv + 2 ] = textureUvs.x3;
	uvs[ iuv + 3 ] = textureUvs.y3;

	uvs[ iuv + 4 ] = textureUvs.x1;
	uvs[ iuv + 5 ] = textureUvs.y1;
	uvs[ iuv + 6 ] = textureUvs.x2;
	uvs[ iuv + 7 ] = textureUvs.y2;
};
