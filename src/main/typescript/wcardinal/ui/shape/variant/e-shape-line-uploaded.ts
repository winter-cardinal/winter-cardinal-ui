/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix } from "pixi.js";
import { toIndexOf } from "../../util/to-index-of";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapePoints } from "../e-shape-points";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapePointsStyleUploadeds } from "../e-shape-points-style-uploadeds";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
import { toLength } from "./to-length";

const FMIN: number = 0.00001;

export class EShapeLineUploaded extends EShapeTextUploaded {
	protected pointCount: number;
	protected pointId: number;
	protected pointsClosed: boolean;
	protected length: number;

	constructor(
		buffer: EShapeBuffer,
		voffset: number, ioffset: number,
		tvcount: number, ticount: number,
		vcount: number, icount: number,
		antialiasWeight: number,
		pointCount: number, pointsClosed: boolean
	) {
		super( buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight );
		this.pointId = NaN;
		this.pointCount = pointCount;
		this.pointsClosed = pointsClosed;
		this.length = 1;
	}

	init( shape: EShape ): this {
		super.init( shape );
		const buffer = this.buffer;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		const pointCount = this.pointCount;
		const pointsClosed = this.pointsClosed;

		// Clipping & indices
		if( 2 <= pointCount ) {
			buffer.clippingBuffer.update();
			const clippings = buffer.clippings;
			buffer.indexBuffer.update();
			const indices = buffer.indices;

			let ic = voffset * 3;
			let ii = ioffset * 3;
			let io = voffset;

			// First
			if( ! pointsClosed ) {
				clippings[ ic +  0 ] = 1;
				clippings[ ic +  1 ] = 0;
				clippings[ ic +  2 ] = 3;

				clippings[ ic +  3 ] = 0;
				clippings[ ic +  4 ] = 1;
				clippings[ ic +  5 ] = 5;
				ic += 6;

				indices[ ii + 0 ] = io + 0;
				indices[ ii + 1 ] = io + 2;
				indices[ ii + 2 ] = io + 1;

				indices[ ii + 3 ] = io + 1;
				indices[ ii + 4 ] = io + 2;
				indices[ ii + 5 ] = io + 3;
				io += 2;
				ii += 6;
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

				indices[ ii +  0 ] = io + 0;
				indices[ ii +  1 ] = io + 2;
				indices[ ii +  2 ] = io + 1;

				indices[ ii +  3 ] = io + 1;
				indices[ ii +  4 ] = io + 2;
				indices[ ii +  5 ] = io + 3;

				indices[ ii +  6 ] = io + 2;
				indices[ ii +  7 ] = io + 4;
				indices[ ii +  8 ] = io + 3;

				indices[ ii +  9 ] = io + 3;
				indices[ ii + 10 ] = io + 4;
				indices[ ii + 11 ] = io + 5;
				io += 4;
				ii += 12;
			}

			// Last
			clippings[ ic + 0 ] = 1;
			clippings[ ic + 1 ] = 0;
			clippings[ ic + 2 ] = 3;

			clippings[ ic + 3 ] = 0;
			clippings[ ic + 4 ] = 1;
			clippings[ ic + 5 ] = 5;
		}

		// Text
		this.initText();

		//
		this.update( shape );

		return this;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		const points = shape.points;
		if( points != null && 2 <= points.length ) {
			const pointId = points.id;
			const isPointChanged = ( pointId !== this.pointId );
			const stroke = shape.stroke;
			const strokeWidth = ( stroke.enable ? stroke.width : 0 );
			const isStrokeWidthChanged = ( strokeWidth !== this.strokeWidth );
			const transformLocalId = this.toTransformLocalId( shape );
			const isTransformChanged = ( this.transformLocalId !== transformLocalId );
			if( isPointChanged || isTransformChanged || isStrokeWidthChanged ) {
				this.pointId = pointId;
				this.strokeWidth = strokeWidth;
				this.transformLocalId = transformLocalId;
				buffer.vertexBuffer.update();
				buffer.stepBuffer.update();
				buffer.antialiasBuffer.update();
				buffer.colorFillBuffer.update();

				if( isPointChanged || isTransformChanged ) {
					// Invalidate the text layout to update the text layout.
					this.textSpacingHorizontal = NaN;
				}
				if( isPointChanged ) {
					// Invalidate the texture transform ID to update the UVs
					this.textureTransformId = NaN;
				}

				const voffset = this.vertexOffset;
				const vcount = this.vertexCount - this.textVertexCount;
				this.updateLineVertexStepAndColorFill(
					buffer,
					points, strokeWidth, shape.transform.internalTransform,
					voffset, vcount
				);
			}
		}

		this.updateColor( buffer, shape );
		this.updateLineUv( buffer, shape );
		this.updateText( buffer, shape );
	}

	protected updateColorFillAndStroke( buffer: EShapeBuffer, shape: EShape, vertexCount: number ) {
		this.updateColorStroke( buffer, shape, vertexCount );
	}

	isCompatible( shape: EShape ): boolean {
		if( super.isCompatible( shape ) ) {
			const points = shape.points;
			if( points ) {
				return (
					this.pointCount === points.length &&
					this.pointsClosed === (!!( points.style & EShapePointsStyle.CLOSED ))
				);
			} else {
				return (
					this.pointCount === 0 &&
					this.pointsClosed === false
				);
			}
		}
		return false;
	}

	protected updateLineVertexStepAndColorFill(
		buffer: EShapeBuffer,
		points: EShapePoints,
		strokeWidth: number,
		internalTransform: Matrix,
		voffset: number,
		vcount: number
	): void {
		let iv = voffset * 2;
		let ia = voffset * 4;
		const vertices = buffer.vertices;
		const steps = buffer.steps;
		const antialiases = buffer.antialiases;
		const colorFills = buffer.colorFills;
		const pointCount = points.length;
		const pointValues = points.values;
		const pointSegments = points.segments;
		const pointsStyle = points.style;
		const closed = ( (pointsStyle & EShapePointsStyle.CLOSED) !== 0 );
		const scaleInvariant = EShapePointsStyleUploadeds.toScaleInvariant( pointsStyle );

		//
		let l = 0;
		let lprev = 0;
		let lnext = 0;
		let llop = 0;
		let llo = 0;
		let lmax = 0;
		let pprevx = 0;
		let pprevy = 0;
		let px = 0;
		let py = 0;
		let pnextx = 0;
		let pnexty = 0;
		let pseg = false;
		let psegnext = false;
		let icfprev = voffset * 4;
		let loffset = 0;

		// First point
		const work = buffer.work;
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
		if( closed ) {
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
		for( let i = ( closed ? 0 : 1 ), imax = pointCount - i; i < imax; ++i ) {
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
			if( closed ) {
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
			this.length = lmax;
			if( icfprev < ia ) {
				EShapePointsStyleUploadeds.toDash( llop, strokeWidth, pointsStyle, work );
				const dash0 = work.x;
				const dash1 = work.y;
				if( closed ) {
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

	updateLineUv( buffer: EShapeBuffer, shape: EShape ): void {
		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		if( texture !== this.texture || textureTransformId !== this.textureTransformId ) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			const pointCount = this.pointCount;
			if( 2 <= pointCount ) {
				const textureUvs = this.toTextureUvs( texture ) as any;
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
				buffer.uvBuffer.update();
				const uvs = buffer.uvs;
				const colorFills = buffer.colorFills;
				const closed = this.pointsClosed;
				const voffset = this.vertexOffset;

				let iuv = voffset * 2;
				let icf = voffset * 4;
				const lengthInverse = 1 / Math.max( FMIN, this.length );
				let r = 0;

				// UV: First
				if( ! closed ) {
					r = colorFills[ icf ] * lengthInverse;
					uvs[ iuv + 0 ] = x0 + r * dx01;
					uvs[ iuv + 1 ] = y0 + r * dy01;
					uvs[ iuv + 2 ] = x3 + r * dx32;
					uvs[ iuv + 3 ] = y3 + r * dy32;
					iuv += 4;
					icf += 8;
				}

				// UV: Middle
				for( let i = (closed ? 0 : 1), imax = pointCount - i; i < imax; ++i ) {
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
			}
		}
	}
}
