import { Matrix, Point, TextureUvs } from "pixi.js";
import { toIndexOf } from "../../util/to-index-of";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapePointsStyleUploadeds } from "../e-shape-points-style-uploadeds";
import { toLength } from "./to-length";

const LINE_FMIN: number = 0.00001;

export const toLineVertexCount = ( pointCount: number ): number => {
	return (Math.ceil( pointCount / 12 ) * 12) * 4 + 2;
};

export const buildLineClipping = (
	clippings: Float32Array,
	voffset: number,
	vcount: number,
	pointCount: number,
	pointsClosed: boolean
): void => {
	let ic = voffset * 3;
	if( 2 <= pointCount ) {
		// First
		if( ! pointsClosed ) {
			clippings[ ic +  0 ] = 1;
			clippings[ ic +  1 ] = 0;
			clippings[ ic +  2 ] = 3;

			clippings[ ic +  3 ] = 0;
			clippings[ ic +  4 ] = 1;
			clippings[ ic +  5 ] = 5;
			ic += 6;
		}

		// Middle
		for( let i = (pointsClosed ? 0 : 1), imax = pointCount - i; i < imax; ++i ) {
			clippings[ ic +  0 ] = 1;
			clippings[ ic +  1 ] = 0;
			clippings[ ic +  2 ] = 3;

			clippings[ ic +  3 ] = 0;
			clippings[ ic +  4 ] = 1;
			clippings[ ic +  5 ] = 5;

			clippings[ ic +  6 ] = 1;
			clippings[ ic +  7 ] = 0;
			clippings[ ic +  8 ] = 4;

			clippings[ ic +  9 ] = 0;
			clippings[ ic + 10 ] = 1;
			clippings[ ic + 11 ] = 6;
			ic += 12;
		}

		// Last
		clippings[ ic + 0 ] = 1;
		clippings[ ic + 1 ] = 0;
		clippings[ ic + 2 ] = 3;

		clippings[ ic + 3 ] = 0;
		clippings[ ic + 4 ] = 1;
		clippings[ ic + 5 ] = 5;
		ic += 6;
	}

	// Fill the rest
	for( const icmax = (voffset + vcount) * 3; ic < icmax; ic += 3 ) {
		clippings[ ic + 0 ] = 0;
		clippings[ ic + 1 ] = 0;
		clippings[ ic + 2 ] = 0;
	}
};

export const buildLineIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number,
	icount: number
): void => {
	for( let ii = ioffset * 3, iimax = (ioffset + icount) * 3, io = voffset; ii < iimax; ii += 6, io += 2 ) {
		indices[ ii + 0 ] = io + 0;
		indices[ ii + 1 ] = io + 2;
		indices[ ii + 2 ] = io + 1;
		indices[ ii + 3 ] = io + 1;
		indices[ ii + 4 ] = io + 2;
		indices[ ii + 5 ] = io + 3;
	}
};

export const buildLineUv = (
	uvs: Float32Array,
	colorFills: Float32Array,
	voffset: number,
	vcount: number,
	pointCount: number,
	pointsClosed: boolean,
	textureUvs: TextureUvs,
	length: number
): void => {
	let iuv = voffset << 1;
	if( 2 <= pointCount ) {
		const x0 = textureUvs.x0;
		const x1 = textureUvs.x1;
		const x2 = textureUvs.x2;
		const x3 = textureUvs.x3;
		const y0 = textureUvs.y0;
		const y1 = textureUvs.y1;
		const y2 = textureUvs.y2;
		const y3 = textureUvs.y3;

		const dx01 = x1 - x0;
		const dy01 = y1 - y0;
		const dx32 = x2 - x3;
		const dy32 = y2 - y3;

		// Uvs
		let icf = voffset << 2;
		const lengthInverse = 1 / Math.max( LINE_FMIN, length );
		let r = 0;

		// UV: First
		if( ! pointsClosed ) {
			r = colorFills[ icf ] * lengthInverse;
			uvs[ iuv + 0 ] = x0 + r * dx01;
			uvs[ iuv + 1 ] = y0 + r * dy01;
			uvs[ iuv + 2 ] = x3 + r * dx32;
			uvs[ iuv + 3 ] = y3 + r * dy32;
			iuv += 4;
			icf += 8;
		}

		// UV: Middle
		for( let i = (pointsClosed ? 0 : 1), imax = pointCount - i; i < imax; ++i ) {
			r = colorFills[ icf ] * lengthInverse;
			uvs[ iuv + 0 ] = x0 + r * dx01;
			uvs[ iuv + 1 ] = y0 + r * dy01;
			uvs[ iuv + 2 ] = x3 + r * dx32;
			uvs[ iuv + 3 ] = y3 + r * dy32;
			iuv += 4;
			icf += 8;

			r = colorFills[ icf ] * lengthInverse;
			uvs[ iuv + 0 ] = x0 + r * dx01;
			uvs[ iuv + 1 ] = y0 + r * dy01;
			uvs[ iuv + 2 ] = x3 + r * dx32;
			uvs[ iuv + 3 ] = y3 + r * dy32;
			iuv += 4;
			icf += 8;
		}

		// UV: Last
		r = colorFills[ icf ] * lengthInverse;
		uvs[ iuv + 0 ] = x0 + r * dx01;
		uvs[ iuv + 1 ] = y0 + r * dy01;
		uvs[ iuv + 2 ] = x3 + r * dx32;
		uvs[ iuv + 3 ] = y3 + r * dy32;
		iuv += 4;
	}

	// Fill the rest
	for( const iuvmax = ((voffset + vcount) << 1); iuv < iuvmax; iuv += 2 ) {
		uvs[ iuv + 0 ] = 0;
		uvs[ iuv + 1 ] = 0;
	}
};

export const buildLineVertexStepAndColorFill = (
	vertices: Float32Array,
	steps: Float32Array,
	antialiases: Float32Array,
	colorFills: Float32Array,
	voffset: number,
	vcount: number,
	pointCount: number,
	pointsClosed: boolean,
	pointValues: number[],
	pointSegments: number[],
	pointsStyle: EShapePointsStyle,
	strokeWidth: number,
	internalTransform: Matrix,
	work: Point
): number => {
	let iv = voffset << 1;
	let ia = voffset << 2;
	let lmax = 0;
	let px = 0;
	let py = 0;
	if( 2 <= pointCount ) {
		const scaleInvariant = EShapePointsStyleUploadeds.toScaleInvariant( pointsStyle );

		//
		let l = 0;
		let lprev = 0;
		let lnext = 0;
		let llop = 0;
		let llo = 0;
		let pprevx = 0;
		let pprevy = 0;
		let pnextx = 0;
		let pnexty = 0;
		let pseg = false;
		let psegnext = false;
		let icfprev = voffset * 4;
		let loffset = 0;

		// First point
		work.set( pointValues[ 0 ], pointValues[ 1 ] );
		internalTransform.apply( work, work );
		const pfirstx = work.x;
		const pfirsty = work.y;
		const psegfirst = ( 0 <= toIndexOf( pointSegments, 0 ) );

		// Last point
		const lastIndex = (pointCount - 1) << 1;
		work.set( pointValues[ lastIndex + 0 ], pointValues[ lastIndex + 1 ] );
		internalTransform.apply( work, work );
		const plastx = work.x;
		const plasty = work.y;
		const pseglast = ( 0 <= toIndexOf( pointSegments, pointCount - 1 ) );

		// Second point
		let psecondx = plastx;
		let psecondy = plasty;
		let psegsecond = pseglast;
		if( 2 < pointCount ) {
			work.set( pointValues[ 2 ], pointValues[ 3 ] );
			internalTransform.apply( work, work );
			psecondx = work.x;
			psecondy = work.y;
			psegsecond = ( 0 <= toIndexOf( pointSegments, 1 ) );
		}

		// First segment
		if( pointsClosed ) {
			px = plastx;
			py = plasty;
			pnextx = pfirstx;
			pnexty = pfirsty;
			pseg = pseglast;
			psegnext = psegfirst;
		} else {
			pprevx = pfirstx - (psecondx - pfirstx);
			pprevy = pfirsty - (psecondy - pfirsty);
			px = pfirstx;
			py = pfirsty;
			pnextx = psecondx;
			pnexty = psecondy;
			pseg = psegfirst;
			psegnext = psegsecond;
			lnext += toLength( px, py, pnextx, pnexty );

			//
			vertices[ iv + 0 ] = px;
			vertices[ iv + 1 ] = py;
			vertices[ iv + 2 ] = px;
			vertices[ iv + 3 ] = py;
			steps[ iv + 0 ] = strokeWidth;
			steps[ iv + 1 ] = scaleInvariant;
			steps[ iv + 2 ] = strokeWidth;
			steps[ iv + 3 ] = scaleInvariant;
			antialiases[ ia + 0 ] = pprevx;
			antialiases[ ia + 1 ] = pprevy;
			antialiases[ ia + 2 ] = pnextx;
			antialiases[ ia + 3 ] = pnexty;
			antialiases[ ia + 4 ] = pprevx;
			antialiases[ ia + 5 ] = pprevy;
			antialiases[ ia + 6 ] = pnextx;
			antialiases[ ia + 7 ] = pnexty;
			colorFills[ ia + 0 ] = llo;
			colorFills[ ia + 4 ] = llo;
			iv += 4;
			ia += 8;
		}

		// Middle segments
		for( let i = ( pointsClosed ? 0 : 1 ), imax = pointCount - i; i < imax; ++i ) {
			pprevx = px;
			pprevy = py;
			px = pnextx;
			py = pnexty;
			pseg = psegnext;
			if( i === pointCount - 2 ) {
				pnextx = plastx;
				pnexty = plasty;
				psegnext = pseglast;
			} else if( i === 0 ) {
				pnextx = psecondx;
				pnexty = psecondy;
				psegnext = psegsecond;
			} else if( i < pointCount - 1 ) {
				const nextIndex = (i + 1) << 1;
				work.set( pointValues[ nextIndex + 0 ], pointValues[ nextIndex + 1 ] );
				internalTransform.apply( work, work );
				pnextx = work.x;
				pnexty = work.y;
				psegnext = ( 0 <= toIndexOf( pointSegments, i + 1 ) );
			} else {
				pnextx = pfirstx;
				pnexty = pfirsty;
				psegnext = psegfirst;
			}
			lprev = l;
			l = lnext;
			lnext += toLength( px, py, pnextx, pnexty );

			let pnextxn = pnextx;
			let pnextyn = pnexty;
			let loffsetprev = loffset;
			if( pseg ) {
				pprevx = px - (pnextx - px);
				pprevy = py - (pnexty - py);

				lmax = Math.max( lmax, llo );

				llop = lprev - loffset;
				EShapePointsStyleUploadeds.toDash( llop, strokeWidth, pointsStyle, work );
				const dash0 = work.x;
				const dash1 = work.y;
				for( let j = icfprev; j < ia + 8; j += 4 ) {
					colorFills[ j + 1 ] = dash0;
					colorFills[ j + 2 ] = dash1;
					colorFills[ j + 3 ] = llop;
				}
				icfprev = ia + 8;
				loffsetprev = loffset;
				loffset = l;
			} else if( psegnext ) {
				pnextxn = px + (px - pprevx);
				pnextyn = py + (py - pprevy);
			}

			// Vertices
			vertices[ iv + 0 ] = px;
			vertices[ iv + 1 ] = py;
			vertices[ iv + 2 ] = px;
			vertices[ iv + 3 ] = py;
			steps[ iv + 0 ] = strokeWidth;
			steps[ iv + 1 ] = scaleInvariant;
			steps[ iv + 2 ] = strokeWidth;
			steps[ iv + 3 ] = scaleInvariant;
			antialiases[ ia + 0 ] = pprevx;
			antialiases[ ia + 1 ] = pprevy;
			antialiases[ ia + 2 ] = pnextxn;
			antialiases[ ia + 3 ] = pnextyn;
			antialiases[ ia + 4 ] = pprevx;
			antialiases[ ia + 5 ] = pprevy;
			antialiases[ ia + 6 ] = pnextxn;
			antialiases[ ia + 7 ] = pnextyn;
			llop = l - loffsetprev;
			colorFills[ ia + 0 ] = llop;
			colorFills[ ia + 4 ] = llop;
			iv += 4;
			ia += 8;

			vertices[ iv + 0 ] = px;
			vertices[ iv + 1 ] = py;
			vertices[ iv + 2 ] = px;
			vertices[ iv + 3 ] = py;
			steps[ iv + 0 ] = strokeWidth;
			steps[ iv + 1 ] = scaleInvariant;
			steps[ iv + 2 ] = strokeWidth;
			steps[ iv + 3 ] = scaleInvariant;
			antialiases[ ia + 0 ] = pprevx;
			antialiases[ ia + 1 ] = pprevy;
			antialiases[ ia + 2 ] = pnextxn;
			antialiases[ ia + 3 ] = pnextyn;
			antialiases[ ia + 4 ] = pprevx;
			antialiases[ ia + 5 ] = pprevy;
			antialiases[ ia + 6 ] = pnextxn;
			antialiases[ ia + 7 ] = pnextyn;
			llo = l - loffset;
			colorFills[ ia + 0 ] = llo;
			colorFills[ ia + 4 ] = llo;
			iv += 4;
			ia += 8;
		}

		// Last segment
		{
			pprevx = px;
			pprevy = py;
			px = pnextx;
			py = pnexty;
			pseg = psegnext;
			if( pointsClosed ) {
				pnextx = psecondx;
				pnexty = psecondy;
				psegnext = psegsecond;
			} else {
				pnextx = px + (px - pprevx);
				pnexty = py + (py - pprevy);
				psegnext = false;
			}
			lprev = l;
			l = lnext;

			let pnextxn = pnextx;
			let pnextyn = pnexty;
			let loffsetprev = loffset;
			if( pseg ) {
				pprevx = px - (pnextx - px);
				pprevy = py - (pnexty - py);

				lmax = Math.max( lmax, llo );

				llop = lprev - loffset;
				EShapePointsStyleUploadeds.toDash( llop, strokeWidth, pointsStyle, work );
				const dash0 = work.x;
				const dash1 = work.y;
				for( let j = icfprev; j < ia + 8; j += 4 ) {
					colorFills[ j + 1 ] = dash0;
					colorFills[ j + 2 ] = dash1;
					colorFills[ j + 3 ] = llop;
				}
				icfprev = ia + 8;
				loffsetprev = loffset;
				loffset = l;
			} else if( psegnext ) {
				pnextxn = px + (px - pprevx);
				pnextyn = py + (py - pprevy);
			}

			// Vertices
			vertices[ iv + 0 ] = px;
			vertices[ iv + 1 ] = py;
			vertices[ iv + 2 ] = px;
			vertices[ iv + 3 ] = py;
			steps[ iv + 0 ] = strokeWidth;
			steps[ iv + 1 ] = scaleInvariant;
			steps[ iv + 2 ] = strokeWidth;
			steps[ iv + 3 ] = scaleInvariant;
			antialiases[ ia + 0 ] = pprevx;
			antialiases[ ia + 1 ] = pprevy;
			antialiases[ ia + 2 ] = pnextxn;
			antialiases[ ia + 3 ] = pnextyn;
			antialiases[ ia + 4 ] = pprevx;
			antialiases[ ia + 5 ] = pprevy;
			antialiases[ ia + 6 ] = pnextxn;
			antialiases[ ia + 7 ] = pnextyn;
			llop = l - loffsetprev;
			lmax = Math.max( lmax, llop );
			colorFills[ ia + 0 ] = llop;
			colorFills[ ia + 4 ] = llop;
			iv += 4;
			ia += 8;

			// Total length
			if( icfprev < ia ) {
				EShapePointsStyleUploadeds.toDash( llop, strokeWidth, pointsStyle, work );
				const dash0 = work.x;
				const dash1 = work.y;
				if( pointsClosed ) {
					for( let i = icfprev; i < ia; i += 4 ) {
						colorFills[ i + 1 ] = dash0;
						colorFills[ i + 2 ] = dash1;
						colorFills[ i + 3 ] = -1;
					}
				} else {
					for( let i = icfprev; i < ia; i += 4 ) {
						colorFills[ i + 1 ] = dash0;
						colorFills[ i + 2 ] = dash1;
						colorFills[ i + 3 ] = llop;
					}
				}
			}

		}
	}

	// Fill the rest
	for( const ivmax = ((voffset + vcount) << 1); iv < ivmax; iv += 2, ia += 4 ) {
		vertices[ iv + 0 ] = px;
		vertices[ iv + 1 ] = py;
		steps[ iv + 0 ] = 0;
		steps[ iv + 1 ] = 0;
		antialiases[ ia + 0 ] = 0;
		antialiases[ ia + 1 ] = 0;
		antialiases[ ia + 2 ] = 0;
		antialiases[ ia + 3 ] = 0;
		colorFills[ ia + 0 ] = 0;
		colorFills[ ia + 1 ] = 0;
		colorFills[ ia + 2 ] = 0;
		colorFills[ ia + 4 ] = 0;
	}

	return lmax;
};
