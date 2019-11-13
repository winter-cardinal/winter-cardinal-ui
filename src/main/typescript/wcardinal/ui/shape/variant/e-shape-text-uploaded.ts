/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, Texture } from "pixi.js";
import { UtilCharacterIterator } from "../../util/util-character-iterator";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeBufferUnitBuilder } from "../e-shape-buffer-unit-builder";
import { EShapeTextAtlas, EShapeTextAtlasCharacter, EShapeTextStyle, EShapeTextWeight } from "../e-shape-text";
import { EShapeTextAlignHorizontal } from "../e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../e-shape-text-align-vertical";
import { EShapeTextDirection } from "../e-shape-text-direction";
import { EShapeUploadedBase } from "../e-shape-uploaded";
import { EShapeTextUploadeds } from "./e-shape-text-uploadeds";

const FMIN: number = 0.00001;

export abstract class EShapeTextUploaded extends EShapeUploadedBase {
	protected textTexture: Texture | null;
	protected textTextureTransformId: number;
	protected textValue: string;
	protected textFamily: string;
	protected textSize: number;
	protected textColor: number;
	protected textAlpha: number;
	protected textWeight: number;
	protected textStyle: number;
	protected textAlignHorizontal: number;
	protected textAlignVertical: number;
	protected textOffsetHorizontal: number;
	protected textOffsetVertical: number;
	protected textOutlineWidth: number;
	protected textOutlineColor: number;
	protected textOutlineAlpha: number;
	protected textSpacingHorizontal: number;
	protected textSpacingVertical: number;
	protected textDirection: number;
	protected textPaddingHorizontal: number;
	protected textPaddingVertical: number;
	protected textClipping: boolean;
	protected textVertexCount: number;
	protected textIndexCount: number;

	constructor(
		buffer: EShapeBuffer,
		voffset: number, ioffset: number,
		tvcount: number, ticount: number,
		vcount: number, icount: number,
		antialiasWeight: number
	) {
		super( buffer, voffset, ioffset, vcount, icount, antialiasWeight );

		this.textSize = NaN;
		this.textFamily = "auto";
		this.textValue = "";
		this.textTexture = null;
		this.textTextureTransformId = NaN;
		this.textColor = NaN;
		this.textAlpha = NaN;
		this.textWeight = NaN;
		this.textStyle = NaN;
		this.textAlignHorizontal = NaN;
		this.textAlignVertical = NaN;
		this.textOffsetHorizontal = NaN;
		this.textOffsetVertical = NaN;
		this.textOutlineWidth = NaN;
		this.textOutlineColor = NaN;
		this.textOutlineAlpha = NaN;
		this.textSpacingHorizontal = NaN;
		this.textSpacingVertical = NaN;
		this.textDirection = NaN;
		this.textPaddingHorizontal = NaN;
		this.textPaddingVertical = NaN;
		this.textClipping = false;
		this.textVertexCount = tvcount;
		this.textIndexCount = ticount;
	}

	isCompatible( shape: EShape ): boolean {
		if( super.isCompatible( shape ) ) {
			const textCount = EShapeTextUploadeds.getTextCount( shape, this.buffer.workCount );
			return ( textCount.vertexCount === this.textVertexCount );
		}
		return false;
	}

	protected updateColor( buffer: EShapeBuffer, shape: EShape ) {
		const vertexCount = this.vertexCount - this.textVertexCount;
		this.updateColorFillAndStroke( buffer, shape, vertexCount );
	}

	protected getTextBBox(
		halign: EShapeTextAlignHorizontal,
		valign: EShapeTextAlignVertical,
		hoffset: number,
		voffset: number,
		hpadding: number,
		vpadding: number,
		width: number, height: number,
		x0: number, y0: number,
		x1: number, y1: number,
		x2: number, y2: number,
		x3: number, y3: number,
		hnx: number, hny: number,
		vnx: number, vny: number,
		result: Point
	): void {
		switch( halign ) {
		case EShapeTextAlignHorizontal.LEFT:
			switch( valign ) {
			case EShapeTextAlignVertical.TOP:
				result.x = x0
					+ hnx * ( hoffset + hpadding )
					+ vnx * ( voffset + vpadding );
				result.y = y0
					+ hny * ( hoffset + hpadding )
					+ vny * ( voffset + vpadding );
				break;
			case EShapeTextAlignVertical.MIDDLE:
				result.x = 0.5 * ( x0 + x3 )
					+ hnx * ( hoffset + hpadding )
					+ vnx * ( voffset - 0.5 * height );
				result.y = 0.5 * ( y0 + y3 )
					+ hny * ( hoffset + hpadding )
					+ vny * ( voffset - 0.5 * height );
				break;
			case EShapeTextAlignVertical.BOTTOM:
				result.x = x3
					+ hnx * ( hoffset + hpadding )
					+ vnx * ( voffset - vpadding - height );
				result.y = y3
					+ hny * ( hoffset + hpadding )
					+ vny * ( voffset - vpadding - height );
				break;
			case EShapeTextAlignVertical.OUTSIDE_TOP:
				result.x = x0
					+ hnx * ( hoffset + hpadding )
					+ vnx * ( voffset - vpadding - height );
				result.y = y0
					+ hny * ( hoffset + hpadding )
					+ vny * ( voffset - vpadding - height );
				break;
			case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
				result.x = x3
					+ hnx * ( hoffset + hpadding )
					+ vnx * ( voffset + vpadding );
				result.y = y3
					+ hny * ( hoffset + hpadding )
					+ vny * ( voffset + vpadding );
				break;
			}
			break;
		case EShapeTextAlignHorizontal.CENTER:
			switch( valign ) {
			case EShapeTextAlignVertical.TOP:
				result.x = 0.5 * ( x0 + x1 )
					+ hnx * ( hoffset - 0.5 * width )
					+ vnx * ( voffset + vpadding );
				result.y = 0.5 * ( y0 + y1 )
					+ hny * ( hoffset - 0.5 * width )
					+ vny * ( voffset + vpadding );
				break;
			case EShapeTextAlignVertical.MIDDLE:
				result.x = 0.5 * ( x0 + x2 )
					+ hnx * ( hoffset - 0.5 * width )
					+ vnx * ( voffset - 0.5 * height );
				result.y = 0.5 * ( y0 + y2 )
					+ hny * ( hoffset - 0.5 * width )
					+ vny * ( voffset - 0.5 * height );
				break;
			case EShapeTextAlignVertical.BOTTOM:
				result.x = 0.5 * ( x3 + x2 )
					+ hnx * ( hoffset - 0.5 * width )
					+ vnx * ( voffset - vpadding - height );
				result.y = 0.5 * ( y3 + y2 )
					+ hny * ( hoffset - 0.5 * width )
					+ vny * ( voffset - vpadding - height );
				break;
			case EShapeTextAlignVertical.OUTSIDE_TOP:
				result.x = 0.5 * ( x0 + x1 )
					+ hnx * ( hoffset - 0.5 * width )
					+ vnx * ( voffset - vpadding - height );
				result.y = 0.5 * ( y0 + y1 )
					+ hny * ( hoffset - 0.5 * width )
					+ vny * ( voffset - vpadding - height );
				break;
			case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
				result.x = 0.5 * ( x3 + x2 )
					+ hnx * ( hoffset - 0.5 * width )
					+ vnx * ( voffset + vpadding );
				result.y = 0.5 * ( y3 + y2 )
					+ hny * ( hoffset - 0.5 * width )
					+ vny * ( voffset + vpadding );
				break;
			}
			break;
		case EShapeTextAlignHorizontal.RIGHT:
			switch( valign ) {
			case EShapeTextAlignVertical.TOP:
				result.x = x1
					+ hnx * ( hoffset - hpadding - width )
					+ vnx * ( voffset + vpadding );
				result.y = y1
					+ hny * ( hoffset - hpadding - width )
					+ vny * ( voffset + vpadding );
				break;
			case EShapeTextAlignVertical.MIDDLE:
				result.x = 0.5 * ( x1 + x2 )
					+ hnx * ( hoffset - hpadding - width )
					+ vnx * ( voffset - 0.5 * height );
				result.y = 0.5 * ( y1 + y2 )
					+ hny * ( hoffset - hpadding - width )
					+ vny * ( voffset - 0.5 * height );
				break;
			case EShapeTextAlignVertical.BOTTOM:
				result.x = x2
					+ hnx * ( hoffset - hpadding - width )
					+ vnx * ( voffset - vpadding - height );
				result.y = y2
					+ hny * ( hoffset - hpadding - width )
					+ vny * ( voffset - vpadding - height );
				break;
			case EShapeTextAlignVertical.OUTSIDE_TOP:
				result.x = x1
					+ hnx * ( hoffset - hpadding - width )
					+ vnx * ( voffset - vpadding - height );
				result.y = y1
					+ hny * ( hoffset - hpadding - width )
					+ vny * ( voffset - vpadding - height );
				break;
			case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
				result.x = x2
					+ hnx * ( hoffset - hpadding - width )
					+ vnx * ( voffset + vpadding );
				result.y = y2
					+ hny * ( hoffset - hpadding - width )
					+ vny * ( voffset + vpadding );
				break;
			}
			break;
		case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
			switch( valign ) {
			case EShapeTextAlignVertical.TOP:
				result.x = x0
					+ hnx * ( hoffset - hpadding - width )
					+ vnx * ( voffset + vpadding );
				result.y = y0
					+ hny * ( hoffset - hpadding - width )
					+ vny * ( voffset + vpadding );
				break;
			case EShapeTextAlignVertical.MIDDLE:
				result.x = 0.5 * ( x0 + x3 )
					+ hnx * ( hoffset - hpadding - width )
					+ vnx * ( voffset - 0.5 * height );
				result.y = 0.5 * ( y0 + y3 )
					+ hny * ( hoffset - hpadding - width )
					+ vny * ( voffset - 0.5 * height );
				break;
			case EShapeTextAlignVertical.BOTTOM:
				result.x = x3
					+ hnx * ( hoffset - hpadding - width )
					+ vnx * ( voffset - vpadding - height );
				result.y = y3
					+ hny * ( hoffset - hpadding - width )
					+ vny * ( voffset - vpadding - height );
				break;
			case EShapeTextAlignVertical.OUTSIDE_TOP:
				result.x = x0
					+ hnx * ( hoffset - hpadding - width )
					+ vnx * ( voffset - vpadding - height );
				result.y = y0
					+ hny * ( hoffset - hpadding - width )
					+ vny * ( voffset - vpadding - height );
				break;
			case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
				result.x = x3
					+ hnx * ( hoffset - hpadding - width )
					+ vnx * ( voffset + vpadding );
				result.y = y3
					+ hny * ( hoffset - hpadding - width )
					+ vny * ( voffset + vpadding );
				break;
			}
			break;
		case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
			switch( valign ) {
			case EShapeTextAlignVertical.TOP:
				result.x = x1
					+ hnx * ( hoffset + hpadding )
					+ vnx * ( voffset + vpadding );
				result.y = y1
					+ hny * ( hoffset + hpadding )
					+ vny * ( voffset + vpadding );
				break;
			case EShapeTextAlignVertical.MIDDLE:
				result.x = 0.5 * ( x1 + x2 )
					+ hnx * ( hoffset + hpadding )
					+ vnx * ( voffset - 0.5 * height );
				result.y = 0.5 * ( y1 + y2 )
					+ hny * ( hoffset + hpadding )
					+ vny * ( voffset - 0.5 * height );
				break;
			case EShapeTextAlignVertical.BOTTOM:
				result.x = x2
					+ hnx * ( hoffset + hpadding )
					+ vnx * ( voffset - vpadding - height );
				result.y = y2
					+ hny * ( hoffset + hpadding )
					+ vny * ( voffset - vpadding - height );
				break;
			case EShapeTextAlignVertical.OUTSIDE_TOP:
				result.x = x1
					+ hnx * ( hoffset + hpadding )
					+ vnx * ( voffset - vpadding - height );
				result.y = y1
					+ hny * ( hoffset + hpadding )
					+ vny * ( voffset - vpadding - height );
				break;
			case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
				result.x = x2
					+ hnx * ( hoffset + hpadding )
					+ vnx * ( voffset + vpadding );
				result.y = y2
					+ hny * ( hoffset + hpadding )
					+ vny * ( voffset + vpadding );
				break;
			}
			break;
		}
	}

	protected normalize( dx: number, dy: number, defx: number, defy: number, result: Point ): number {
		const d = dx * dx + dy * dy;
		if( FMIN < d ) {
			const l = Math.sqrt( d );
			const li = 1 / l;
			result.set( dx * li, dy * li );
			return l;
		} else {
			result.set( defx, defy );
			return 0;
		}
	}

	protected rotateAlignHorizontalRight( align: EShapeTextAlignHorizontal ): EShapeTextAlignVertical {
		switch( align ) {
		case EShapeTextAlignHorizontal.LEFT:
			return EShapeTextAlignVertical.BOTTOM;
		case EShapeTextAlignHorizontal.CENTER:
			return EShapeTextAlignVertical.MIDDLE;
		case EShapeTextAlignHorizontal.RIGHT:
			return EShapeTextAlignVertical.TOP;
		case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
			return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
		case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
			return EShapeTextAlignVertical.OUTSIDE_TOP;
		}
	}

	protected rotateAlignVerticalRight( align: EShapeTextAlignVertical ): EShapeTextAlignHorizontal {
		switch( align ) {
		case EShapeTextAlignVertical.TOP:
			return EShapeTextAlignHorizontal.LEFT;
		case EShapeTextAlignVertical.MIDDLE:
			return EShapeTextAlignHorizontal.CENTER;
		case EShapeTextAlignVertical.BOTTOM:
			return EShapeTextAlignHorizontal.RIGHT;
		case EShapeTextAlignVertical.OUTSIDE_TOP:
			return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
		case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
			return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
		}
	}

	protected rotateAlignHorizontalLeft( align: EShapeTextAlignHorizontal ): EShapeTextAlignVertical {
		switch( align ) {
		case EShapeTextAlignHorizontal.LEFT:
			return EShapeTextAlignVertical.TOP;
		case EShapeTextAlignHorizontal.CENTER:
			return EShapeTextAlignVertical.MIDDLE;
		case EShapeTextAlignHorizontal.RIGHT:
			return EShapeTextAlignVertical.BOTTOM;
		case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
			return EShapeTextAlignVertical.OUTSIDE_TOP;
		case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
			return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
		}
	}

	protected rotateAlignVerticalLeft( align: EShapeTextAlignVertical ): EShapeTextAlignHorizontal {
		switch( align ) {
		case EShapeTextAlignVertical.TOP:
			return EShapeTextAlignHorizontal.RIGHT;
		case EShapeTextAlignVertical.MIDDLE:
			return EShapeTextAlignHorizontal.CENTER;
		case EShapeTextAlignVertical.BOTTOM:
			return EShapeTextAlignHorizontal.LEFT;
		case EShapeTextAlignVertical.OUTSIDE_TOP:
			return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
		case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
			return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
		}
	}

	protected updateTextVertex( buffer: EShapeBuffer, shape: EShape, textAtlas: EShapeTextAtlas ) {
		const text = shape.text;
		const textSize = text.size;
		const textFamily = text.family;
		const textValue = text.value;
		const textStyle = text.style;
		const textAlignHorizontal = text.align.horizontal;
		const textAlignVertical = text.align.vertical;
		const textOffsetHorizontal = text.offset.horizontal;
		const textOffsetVertical = text.offset.vertical;
		const textSpacingHorizontal = text.spacing.horizontal;
		const textSpacingVertical = text.spacing.vertical;
		const textDirection = text.direction;
		const textPaddingHorizontal = text.padding.horizontal;
		const textPaddingVertical = text.padding.vertical;
		const textClipping = text.clipping;
		const textTexture = text.texture || Texture.WHITE;
		const textTextureTransformId = this.toTextureTransformId( textTexture );

		const isCharChanged = (textValue !== this.textValue || textFamily !== this.textFamily);
		const isCharSizeChanged = (textSize !== this.textSize);
		const isCharStyleChanged = (textStyle !== this.textStyle);
		const isCharAlignChanged = (textAlignHorizontal !== this.textAlignHorizontal ||
			textAlignVertical !== this.textAlignVertical);
		const isCharOffsetChanged = (textOffsetHorizontal !== this.textOffsetHorizontal ||
			textOffsetVertical !== this.textOffsetVertical);
		const isCharSpacingChanged = (textSpacingHorizontal !== this.textSpacingHorizontal ||
			textSpacingVertical !== this.textSpacingVertical ||
			textPaddingHorizontal !== this.textPaddingHorizontal ||
			textPaddingVertical !== this.textPaddingVertical);
		const isCharDirectionChanged = (textDirection !== this.textDirection);
		const isClippingChanged = ( this.textClipping !== textClipping );
		const isTextureChanged = ( textTexture !== this.textTexture ||
			textTextureTransformId !== this.textTextureTransformId );

		if( isCharChanged || isCharSizeChanged || isCharStyleChanged ||
			isCharAlignChanged || isCharOffsetChanged || isCharSpacingChanged ||
			isCharDirectionChanged || isClippingChanged || isTextureChanged ) {
			this.textSize = textSize;
			this.textFamily = textFamily;
			this.textValue = textValue;
			this.textStyle = textStyle;
			this.textAlignHorizontal = textAlignHorizontal;
			this.textAlignVertical = textAlignVertical;
			this.textOffsetHorizontal = textOffsetHorizontal;
			this.textOffsetVertical = textOffsetVertical;
			this.textSpacingHorizontal = textSpacingHorizontal;
			this.textSpacingVertical = textSpacingVertical;
			this.textDirection = textDirection;
			this.textPaddingHorizontal = textPaddingHorizontal;
			this.textPaddingVertical = textPaddingVertical;
			this.textClipping = textClipping;
			this.textTexture = textTexture;
			this.textTextureTransformId = textTextureTransformId;

			if( isCharSizeChanged ) {
				// Invalidate the text weight to update the text steps.
				this.textWeight = NaN;
			}

			// Calculate the transformed positions
			//
			//  0               1
			// |---------------|
			// |               |
			// |3              |2
			// |---------------|
			//
			const size = shape.size;
			const sx = size.x * 0.5;
			const sy = size.y * 0.5;
			shape.updateTransform();
			const internalTransform = shape.transform.internalTransform;
			const work = buffer.work;
			work.set( -sx, -sy );
			internalTransform.apply( work, work );
			const x0 = work.x;
			const y0 = work.y;
			work.set( +sx, -sy );
			internalTransform.apply( work, work );
			const x1 = work.x;
			const y1 = work.y;
			work.set( +sx, +sy );
			internalTransform.apply( work, work );
			const x2 = work.x;
			const y2 = work.y;
			const x3 = x0 + (x2 - x1);
			const y3 = y0 + (y2 - y1);

			// Horizontal normal
			const hl = this.calcLength( x0, y0, x1, y1 );
			this.normalize( internalTransform.a, internalTransform.b, 1, 0, work );
			let hnx = work.x;
			let hny = work.y;

			// Vertical normal
			const vl = this.calcLength( x0, y0, x3, y3 );
			this.normalize( internalTransform.c, internalTransform.d, 0, 1, work );
			let vnx = work.x;
			let vny = work.y;

			// Calculate the width / height
			let width = 0;
			let height = 0;
			let heightChar = 0;
			const lineHeight = Math.max( 0, textSize + textSpacingVertical );
			let lineWidth = 0;
			const textAtlasCharacters = textAtlas.characters;
			const iterator = UtilCharacterIterator.from( textValue );
			let advancePrevious = 0;
			while( iterator.hasNext() ) {
				const character = iterator.next();
				if( character !== "\n" ) {
					if( 0 < advancePrevious ) {
						lineWidth += Math.max( 0, advancePrevious + textSpacingHorizontal );
					}
					const data = textAtlasCharacters[ character ];
					if( data ) {
						advancePrevious = data.advance;
						heightChar = data.height;
					} else {
						advancePrevious = 0;
					}
				} else {
					lineWidth += advancePrevious;
					advancePrevious = 0;
					width = Math.max( width, lineWidth );
					lineWidth = 0;
					height += lineHeight;
				}
			}

			const scale = textSize / textAtlas.font.size;
			lineWidth += advancePrevious;
			width = Math.max( width, lineWidth ) * scale;
			lineWidth = 0;
			heightChar *= scale;
			height += textSize;

			//
			let tx0 = 0;
			let ty0 = 0;
			let lineWidthMaximum = NaN;
			switch( textDirection ) {
			case EShapeTextDirection.LEFT_TO_RIGHT:
				this.getTextBBox(
					textAlignHorizontal,
					textAlignVertical,
					textOffsetHorizontal,
					textOffsetVertical,
					textPaddingHorizontal,
					textPaddingVertical,
					width, height,
					x0, y0,
					x1, y1,
					x2, y2,
					x3, y3,
					hnx, hny,
					vnx, vny,
					work
				);
				tx0 = work.x;
				ty0 = work.y;
				if( textClipping ) {
					switch( textAlignHorizontal ) {
					case EShapeTextAlignHorizontal.LEFT:
					case EShapeTextAlignHorizontal.CENTER:
					case EShapeTextAlignHorizontal.RIGHT:
						switch( textAlignVertical ) {
						case EShapeTextAlignVertical.TOP:
						case EShapeTextAlignVertical.MIDDLE:
						case EShapeTextAlignVertical.BOTTOM:
							lineWidthMaximum = hl - textPaddingHorizontal * 2;
							break;
						}
						break;
					}
				}
				break;
			case EShapeTextDirection.TOP_TO_BOTTOM:
				// Swap normals
				work.set( vnx, vny );
				vnx = -hnx;
				vny = -hny;
				hnx = work.x;
				hny = work.y;

				// Get text bbox
				this.getTextBBox(
					this.rotateAlignVerticalRight( textAlignVertical ),
					this.rotateAlignHorizontalRight( textAlignHorizontal ),
					textOffsetVertical,
					textOffsetHorizontal,
					textPaddingVertical,
					textPaddingHorizontal,
					width, height,
					x1, y1,
					x2, y2,
					x3, y3,
					x0, y0,
					hnx, hny,
					vnx, vny,
					work
				);
				tx0 = work.x;
				ty0 = work.y;
				if( textClipping ) {
					switch( textAlignVertical ) {
					case EShapeTextAlignVertical.TOP:
					case EShapeTextAlignVertical.MIDDLE:
					case EShapeTextAlignVertical.BOTTOM:
						switch( textAlignHorizontal ) {
						case EShapeTextAlignHorizontal.LEFT:
						case EShapeTextAlignHorizontal.CENTER:
						case EShapeTextAlignHorizontal.RIGHT:
							lineWidthMaximum = vl - textPaddingVertical * 2;
							break;
						}
						break;
					}
				}
				break;
			case EShapeTextDirection.BOTTOM_TO_TOP:
				// Swap normals
				work.set( vnx, vny );
				vnx = hnx;
				vny = hny;
				hnx = -work.x;
				hny = -work.y;

				// Get text bbox
				this.getTextBBox(
					this.rotateAlignVerticalLeft( textAlignVertical ),
					this.rotateAlignHorizontalLeft( textAlignHorizontal ),
					textOffsetVertical,
					textOffsetHorizontal,
					textPaddingVertical,
					textPaddingHorizontal,
					width, height,
					x3, y3,
					x0, y0,
					x1, y1,
					x2, y2,
					hnx, hny,
					vnx, vny,
					work
				);
				tx0 = work.x;
				ty0 = work.y;
				if( textClipping ) {
					switch( textAlignVertical ) {
					case EShapeTextAlignVertical.TOP:
					case EShapeTextAlignVertical.MIDDLE:
					case EShapeTextAlignVertical.BOTTOM:
						switch( textAlignHorizontal ) {
						case EShapeTextAlignHorizontal.LEFT:
						case EShapeTextAlignHorizontal.CENTER:
						case EShapeTextAlignHorizontal.RIGHT:
							lineWidthMaximum = vl - textPaddingVertical * 2;
							break;
						}
						break;
					}
				}
				break;
			}

			//
			const textWorld = text.world = text.world || new Float32Array( 8 );
			if( lineWidthMaximum < width ) {
				const dwidth = ( width - lineWidthMaximum ) * 0.5;
				textWorld[ 0 ] = tx0 + hnx * dwidth;
				textWorld[ 1 ] = ty0 + hny * dwidth;
				textWorld[ 2 ] = hnx;
				textWorld[ 3 ] = hny;
				textWorld[ 4 ] = vnx;
				textWorld[ 5 ] = vny;
				textWorld[ 6 ] = lineWidthMaximum;
				textWorld[ 7 ] = height;
			} else {
				textWorld[ 0 ] = tx0;
				textWorld[ 1 ] = ty0;
				textWorld[ 2 ] = hnx;
				textWorld[ 3 ] = hny;
				textWorld[ 4 ] = vnx;
				textWorld[ 5 ] = vny;
				textWorld[ 6 ] = width;
				textWorld[ 7 ] = height;
			}

			// Texture
			const textureUvs = this.toTextureUvs( textTexture ) as any;
			const uvx0 = textureUvs.x0;
			const uvx1 = textureUvs.x1;
			const uvx3 = textureUvs.x3;
			const uvy0 = textureUvs.y0;
			const uvy1 = textureUvs.y1;
			const uvy3 = textureUvs.y3;

			const duvx01 = ( uvx1 - uvx0 );
			const duvy01 = ( uvy1 - uvy0 );
			const duvx03 = ( uvx3 - uvx0 );
			const duvy03 = ( uvy3 - uvy0 );

			// Vertices & UVs
			const vcount = this.textVertexCount;
			const voffset = this.vertexOffset + this.vertexCount - vcount;
			const vertices = buffer.vertices;
			const uvs = buffer.uvs;
			buffer.vertexBuffer.update();
			buffer.uvBuffer.update();

			const lhx = lineHeight * vnx;
			const lhy = lineHeight * vny;

			const snx = scale * hnx;
			const sny = scale * hny;

			const offsetY = (heightChar - textSize) * 0.5;
			const oyx = offsetY * vnx;
			const oyy = offsetY * vny;

			const offsetItalic = ( textStyle === EShapeTextStyle.NORMAL ? 0 : text.size * 0.25 );
			let bx0 = tx0 - oyx + offsetItalic * snx;
			let by0 = ty0 - oyy + offsetItalic * sny;
			let bx3 = tx0 + oyx + textSize * vnx;
			let by3 = ty0 + oyy + textSize * vny;
			let cx0 = bx0;
			let cy0 = by0;
			let cx3 = bx3;
			let cy3 = by3;

			lineWidth = 0;
			advancePrevious = 0;
			iterator.position = 0;
			let lineCount = 0;
			let iv = voffset * 2;
			for( ; iterator.hasNext(); iv += 8 ) {
				const character = iterator.next();
				if( character !== "\n" ) {
					if( 0 < advancePrevious ) {
						lineWidth += Math.max( 0, advancePrevious + textSpacingHorizontal );
					}
					const data = textAtlasCharacters[ character ];
					lineCount += 1;
					if( data ) {
						const advance = data.advance;
						if( lineWidthMaximum < lineWidth ) {
							const dots = textAtlasCharacters[ "..." ];
							if( dots ) {
								this.writeCharacter(
									vertices, uvs, iv, dots, textAtlas,
									snx, sny,
									cx0, cy0, cx3, cy3,
									duvx01, duvy01, duvx03, duvy03,
									uvx0, uvy0
								);

								const advanceDots = dots.advance;
								const ax = advanceDots * snx;
								const ay = advanceDots * sny;
								cx0 = cx0 + ax;
								cy0 = cy0 + ay;
								cx3 = cx3 + ax;
								cy3 = cy3 + ay;
								advancePrevious = advanceDots;

								for( iv += 8; iterator.hasNext(); iv += 8 ) {
									if( iterator.advance( "\n" ) ) {
										this.writeCharacterEmpty(
											vertices, uvs, iv,
											cx0, cy0, cx3, cy3,
											uvx0, uvy0, uvx3, uvy3
										);
										lineCount += 1;
									} else {
										iv -= 8;
										break;
									}
								}
							} else {
								advancePrevious = advance;

								this.writeCharacterEmpty(
									vertices, uvs, iv,
									cx0, cy0, cx3, cy3,
									uvx0, uvy0, uvx3, uvy3
								);
							}
						} else {
							advancePrevious = advance;

							this.writeCharacter(
								vertices, uvs, iv, data, textAtlas,
								snx, sny,
								cx0, cy0, cx3, cy3,
								duvx01, duvy01, duvx03, duvy03,
								uvx0, uvy0
							);

							const ax = advance * snx;
							const ay = advance * sny;
							cx0 = cx0 + ax;
							cy0 = cy0 + ay;
							cx3 = cx3 + ax;
							cy3 = cy3 + ay;
						}
					} else {
						advancePrevious = 0;

						this.writeCharacterEmpty(
							vertices, uvs, iv,
							cx0, cy0, cx3, cy3,
							uvx0, uvy0, uvx3, uvy3
						);
					}
				} else {
					lineWidth += advancePrevious;
					advancePrevious = 0;

					this.writeCharacterEmpty(
						vertices, uvs, iv,
						cx0, cy0, cx3, cy3,
						uvx0, uvy0, uvx3, uvy3
					);

					bx0 += lhx;
					by0 += lhy;
					bx3 += lhx;
					by3 += lhy;
					cx0 = bx0;
					cy0 = by0;
					cx3 = bx3;
					cy3 = by3;

					this.adjustTextAlignment(
						vertices,
						hnx, hny,
						lineCount,
						iv,
						width - lineWidth * scale,
						textDirection,
						textAlignHorizontal,
						textAlignVertical
					);
					lineWidth = 0;
					lineCount = 0;
				}
			}

			lineWidth += advancePrevious;
			this.adjustTextAlignment(
				vertices,
				hnx, hny,
				lineCount,
				iv,
				width - lineWidth * scale,
				textDirection,
				textAlignHorizontal,
				textAlignVertical
			);

			for( const ivmax = (voffset + vcount) * 2; iv < ivmax; iv += 2 ) {
				vertices[ iv + 0 ] = tx0;
				vertices[ iv + 1 ] = ty0;
				uvs[ iv + 0 ] = uvx0;
				uvs[ iv + 1 ] = uvy0;
			}
		}
	}

	protected writeCharacterEmpty(
		vertices: Float32Array, uvs: Float32Array, iv: number,
		cx0: number, cy0: number,
		cx3: number, cy3: number,
		uvx0: number, uvy0: number,
		uvx3: number, uvy3: number
	): void {
		vertices[ iv + 0 ] = cx0;
		vertices[ iv + 1 ] = cy0;
		vertices[ iv + 2 ] = cx0;
		vertices[ iv + 3 ] = cy0;
		vertices[ iv + 4 ] = cx3;
		vertices[ iv + 5 ] = cy3;
		vertices[ iv + 6 ] = cx3;
		vertices[ iv + 7 ] = cy3;

		uvs[ iv + 0 ] = uvx0;
		uvs[ iv + 1 ] = uvy0;
		uvs[ iv + 2 ] = uvx0;
		uvs[ iv + 3 ] = uvy0;
		uvs[ iv + 4 ] = uvx3;
		uvs[ iv + 5 ] = uvy3;
		uvs[ iv + 6 ] = uvx3;
		uvs[ iv + 7 ] = uvy3;
	}

	protected writeCharacter(
		vertices: Float32Array, uvs: Float32Array, iv: number,
		data: EShapeTextAtlasCharacter, atlas: EShapeTextAtlas,
		snx: number, sny: number,
		cx0: number, cy0: number,
		cx3: number, cy3: number,
		duvx01: number, duvy01: number,
		duvx03: number, duvy03: number,
		uvx0: number, uvy0: number
	): void {
		// Vertices
		const dataOffsetX = data.x - data.origin.x;
		const dataWidth = data.width;
		const dx0 = dataOffsetX * snx;
		const dy0 = dataOffsetX * sny;
		const dx1 = (dataOffsetX + dataWidth) * snx;
		const dy1 = (dataOffsetX + dataWidth) * sny;
		vertices[ iv + 0 ] = cx0 + dx0;
		vertices[ iv + 1 ] = cy0 + dy0;
		vertices[ iv + 2 ] = cx0 + dx1;
		vertices[ iv + 3 ] = cy0 + dy1;
		vertices[ iv + 4 ] = cx3 + dx1;
		vertices[ iv + 5 ] = cy3 + dy1;
		vertices[ iv + 6 ] = cx3 + dx0;
		vertices[ iv + 7 ] = cy3 + dy0;

		// UVs
		const px0 = data.x / atlas.width;
		const py0 = data.y / atlas.height;
		const px1 = (data.x + data.width) / atlas.width;
		const py1 = (data.y + data.height) / atlas.height;

		const dux0 = duvx01 * px0;
		const duy0 = duvy01 * px0;
		const dux1 = duvx01 * px1;
		const duy1 = duvy01 * px1;

		const dvx0 = duvx03 * py0;
		const dvy0 = duvy03 * py0;
		const dvx1 = duvx03 * py1;
		const dvy1 = duvy03 * py1;
		uvs[ iv + 0 ] = uvx0 + dux0 + dvx0;
		uvs[ iv + 1 ] = uvy0 + duy0 + dvy0;
		uvs[ iv + 2 ] = uvx0 + dux1 + dvx0;
		uvs[ iv + 3 ] = uvy0 + duy1 + dvy0;
		uvs[ iv + 4 ] = uvx0 + dux1 + dvx1;
		uvs[ iv + 5 ] = uvy0 + duy1 + dvy1;
		uvs[ iv + 6 ] = uvx0 + dux0 + dvx1;
		uvs[ iv + 7 ] = uvy0 + duy0 + dvy1;
	}

	protected moveText( vertices: Float32Array, vertexIndex: number, textCount: number, dx: number, dy: number ): void {
		for( let i = 0, iv = vertexIndex - 8 * textCount; i < textCount; i += 1, iv += 8 ) {
			vertices[ iv + 0 ] += dx;
			vertices[ iv + 1 ] += dy;
			vertices[ iv + 2 ] += dx;
			vertices[ iv + 3 ] += dy;
			vertices[ iv + 4 ] += dx;
			vertices[ iv + 5 ] += dy;
			vertices[ iv + 6 ] += dx;
			vertices[ iv + 7 ] += dy;
		}
	}

	protected moveTextHalf(
		vertices: Float32Array, vertexIndex: number, textCount: number,
		offset: number, nx: number, ny: number
	): void {
		offset *= 0.5;
		this.moveText( vertices, vertexIndex, textCount, offset * nx, offset * ny );
	}

	protected moveTextFull(
		vertices: Float32Array, vertexIndex: number, textCount: number,
		offset: number, nx: number, ny: number
	): void {
		this.moveText( vertices, vertexIndex, textCount, offset * nx, offset * ny );
	}

	protected adjustTextAlignment(
		vertices: Float32Array,
		nx: number, ny: number,
		lineCount: number, vertexIndex: number,
		offset: number,
		textDirection: EShapeTextDirection,
		textAlignHorizontal: EShapeTextAlignHorizontal,
		textAlignVertical: EShapeTextAlignVertical
	): void {
		if( FMIN < offset ) {
			switch( textDirection ) {
			case EShapeTextDirection.LEFT_TO_RIGHT:
				switch( textAlignHorizontal ) {
				case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
				case EShapeTextAlignHorizontal.LEFT:
					// DO NOTHING
					break;
				case EShapeTextAlignHorizontal.CENTER:
					this.moveTextHalf( vertices, vertexIndex, lineCount, offset, nx, ny );
					break;
				case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
				case EShapeTextAlignHorizontal.RIGHT:
					this.moveTextFull( vertices, vertexIndex, lineCount, offset, nx, ny );
					break;
				}
				break;
			case EShapeTextDirection.TOP_TO_BOTTOM:
				switch( textAlignVertical ) {
				case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
				case EShapeTextAlignVertical.TOP:
					// DO NOTHING
					break;
				case EShapeTextAlignVertical.MIDDLE:
					this.moveTextHalf( vertices, vertexIndex, lineCount, offset, nx, ny );
					break;
				case EShapeTextAlignVertical.OUTSIDE_TOP:
				case EShapeTextAlignVertical.BOTTOM:
					this.moveTextFull( vertices, vertexIndex, lineCount, offset, nx, ny );
					break;
				}
				break;
			case EShapeTextDirection.BOTTOM_TO_TOP:
				switch( textAlignVertical ) {
				case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
				case EShapeTextAlignVertical.TOP:
					this.moveTextFull( vertices, vertexIndex, lineCount, offset, nx, ny );
					break;
				case EShapeTextAlignVertical.MIDDLE:
					this.moveTextHalf( vertices, vertexIndex, lineCount, offset, nx, ny );
					break;
				case EShapeTextAlignVertical.OUTSIDE_TOP:
				case EShapeTextAlignVertical.BOTTOM:
					// DO NOTHING
					break;
				}
				break;
			}
		}
	}

	protected updateTextColorFill( buffer: EShapeBuffer, shape: EShape ) {
		const text = shape.text;
		const color = text.color;
		const alpha = ( shape.visible && text.enable ? text.alpha : 0 );
		if( color !== this.textColor || alpha !== this.textAlpha ) {
			this.textColor = color;
			this.textAlpha = alpha;
			buffer.colorFillBuffer.update();

			this.fillColor(
				color, alpha,
				this.vertexOffset + this.vertexCount - this.textVertexCount,
				this.textVertexCount,
				buffer.colorFills
			);
		}
	}

	protected updateTextColorStroke( buffer: EShapeBuffer, shape: EShape ) {
		const text = shape.text;
		const outline = text.outline;
		const color = outline.color;
		const alpha = ( shape.visible && text.enable ? outline.alpha : 0 );
		if( color !== this.textOutlineColor || alpha !== this.textOutlineAlpha ) {
			this.textOutlineColor = color;
			this.textOutlineAlpha = alpha;
			buffer.colorStrokeBuffer.update();

			this.fillColor(
				color, alpha,
				this.vertexOffset + this.vertexCount - this.textVertexCount,
				this.textVertexCount,
				buffer.colorStrokes
			);
		}
	}

	protected updateTextStep( buffer: EShapeBuffer, shape: EShape ) {
		const text = shape.text;
		const textOutline = text.outline;
		const textOutlineWidth = (textOutline.enable ? textOutline.width : 0);
		const textWeight = text.weight;
		if( textWeight !== this.textWeight || textOutlineWidth !== this.textOutlineWidth ) {
			this.textWeight = textWeight;
			this.textOutlineWidth = textOutlineWidth;

			buffer.stepBuffer.update();
			buffer.antialiasBuffer.update();
			const steps = buffer.steps;
			const antialiases = buffer.antialiases;
			const vcount = this.textVertexCount;
			const voffset = this.vertexOffset + this.vertexCount - vcount;

			const textAtlas = text.atlas;
			if( textAtlas != null ) {
				const scale = 0.05 / (text.size / textAtlas.font.size);
				const outlineWidth = textOutlineWidth * 0.4;
				const weight =  -0.025 + ( textWeight === EShapeTextWeight.NORMAL ? 0.0 : 0.05 );
				for( let i = voffset * 2, imax = i + vcount * 2; i < imax; i += 2 ) {
					steps[ i + 0 ] = scale;
					steps[ i + 1 ] = outlineWidth;
				}
				for( let i = voffset * 4, imax = i + vcount * 4; i < imax; i += 4 ) {
					antialiases[ i +  0 ] = weight;
					antialiases[ i +  1 ] = FMIN;
					antialiases[ i +  2 ] = FMIN;
					antialiases[ i +  3 ] = FMIN;
				}
			} else {
				for( let i = voffset * 2, imax = i + vcount * 2; i < imax; i += 2 ) {
					steps[ i + 0 ] = 0;
					steps[ i + 1 ] = 0;
				}
				for( let i = voffset * 4, imax = i + vcount * 4; i < imax; i += 4 ) {
					antialiases[ i +  0 ] = FMIN;
					antialiases[ i +  1 ] = FMIN;
					antialiases[ i +  2 ] = FMIN;
					antialiases[ i +  3 ] = FMIN;
				}
			}
		}
	}

	protected updateText( buffer: EShapeBuffer, shape: EShape ) {
		const vcount = this.textVertexCount;
		if( 0 < vcount ) {
			const textAtlas = shape.text.atlas;
			if( textAtlas != null ) {
				this.updateTextVertex( buffer, shape, textAtlas );
				this.updateTextColorFill( buffer, shape );
				this.updateTextColorStroke( buffer, shape );
				this.updateTextStep( buffer, shape );
			}
		}
	}

	initText() {
		const vcount = this.textVertexCount;
		if( 0 < vcount ) {
			const icount = this.textIndexCount;
			const voffset = this.vertexOffset + this.vertexCount - vcount;
			const ioffset = this.indexOffset + this.indexCount - icount;
			const buffer = this.buffer;

			// Clippings
			buffer.clippingBuffer.update();
			const clippings = buffer.clippings;
			for( let i = voffset * 3, imax = i + vcount * 3; i < imax; i += 3 ) {
				clippings[ i + 0 ] = 0;
				clippings[ i + 1 ] = 0;
				clippings[ i + 2 ] = 2;
			}

			// Indices
			buffer.indexBuffer.update();
			const indices = buffer.indices;
			for( let i = 0, ii = ioffset * 3, imax = (icount >> 1); i < imax; i += 1, ii += 6 ) {
				const j = voffset + ( i << 2 );
				indices[ ii + 0 ] = j + 0;
				indices[ ii + 1 ] = j + 1;
				indices[ ii + 2 ] = j + 3;

				indices[ ii + 3 ] = j + 1;
				indices[ ii + 4 ] = j + 2;
				indices[ ii + 5 ] = j + 3;
			}
		}
	}

	buildUnit( builder: EShapeBufferUnitBuilder ) {
		super.buildUnit( builder );

		if( 0 < this.textVertexCount ) {
			const textTexture = this.textTexture || Texture.WHITE;
			const textBaseTexture = textTexture.baseTexture;
			if( textBaseTexture !== builder.baseTexture ) {
				builder.baseTexture = textBaseTexture;
				const indexOffset = this.indexOffset + this.indexCount - this.textIndexCount;
				builder.push( textTexture, indexOffset );
			}
		}
	}
}
