/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DApplications } from "./d-applications";
import { DRefitable } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DDynamicText } from "./d-dynamic-text";
import { DImageBaseThemeWrapperSecondary, DThemeImageBaseSecondary } from "./d-image-base-theme-wrapper-secondary";
import { DImageBaseThemeWrapperTertiary, DThemeImageBaseTertiary } from "./d-image-base-theme-wrapper-tertiary";
import { DImagePiece, DImagePieceOptions, DThemeImagePiece } from "./d-image-piece";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DTextBase, DTextBaseOnOptions, DTextBaseOptions, DThemeTextBase } from "./d-text-base";

export interface DImageBaseOnOptions<VALUE> extends DTextBaseOnOptions<VALUE> {

}

export interface DImageBaseOptions<
	VALUE,
	THEME extends DThemeImageBase = DThemeImageBase
> extends DTextBaseOptions<VALUE, THEME> {
	image?: DImagePieceOptions;
	on?: DImageBaseOnOptions<VALUE>;
}

export interface DThemeImageBase extends DThemeTextBase, DThemeImagePiece {
	getSecondaryImageAlignHorizontal(): DAlignHorizontal;
	getSecondaryImageAlignVertical(): DAlignVertical;
	getSecondaryImageAlignWith(): DAlignWith;
	getSecondaryImageMarginHorizontal(): number;
	getSecondaryImageMarginVertial(): number;
	getSecondaryImageTintColor( state: DBaseState ): number | null;
	getSecondaryImageTintAlpha( state: DBaseState ): number;
	getSecondaryImageSource?( state: DBaseState ): Texture | DisplayObject | null;

	getTertiaryImageAlignHorizontal(): DAlignHorizontal;
	getTertiaryImageAlignVertical(): DAlignVertical;
	getTertiaryImageAlignWith(): DAlignWith;
	getTertiaryImageMarginHorizontal(): number;
	getTertiaryImageMarginVertial(): number;
	getTertiaryImageTintColor( state: DBaseState ): number | null;
	getTertiaryImageTintAlpha( state: DBaseState ): number;
	getTertiaryImageSource?( state: DBaseState ): Texture | DisplayObject | null;
}

const hasSecondaryImageSource = ( theme: DThemeImageBase ): theme is DThemeImageBase & DThemeImageBaseSecondary => {
	return !! theme.getSecondaryImageSource;
};

const hasTertiaryImageSource = ( theme: DThemeImageBase ): theme is DThemeImageBase & DThemeImageBaseTertiary => {
	return !! theme.getTertiaryImageSource;
};

export class DImageBase<
	VALUE = unknown,
	THEME extends DThemeImageBase = DThemeImageBase,
	OPTIONS extends DImageBaseOptions<VALUE, THEME> = DImageBaseOptions<VALUE, THEME>
> extends DTextBase<VALUE, THEME, OPTIONS> {
	protected _images!: DImagePiece[];
	protected _onChangeBound!: () => void;
	protected _applyMaskBound!: ( target: DisplayObject ) => void;

	protected init( options?: OPTIONS ) {
		this._onChangeBound = (): void => {
			this.toDirty();
			DApplications.update( this );
		};
		this._applyMaskBound = ( target: DisplayObject ): void => {
			if( this._isOverflowMaskEnabled ) {
				target.mask = this.getOrCreateOverflowMask();
			}
		};
		this._images = this.newImages( this.theme, options );
		super.init( options );
	}

	protected newImages( theme: THEME, options?: OPTIONS ): DImagePiece[] {
		const images: DImagePiece[] = [];
		images.push( this.newImage( theme, this.toImageOptions( theme, options && options.image ) ) );
		if( hasSecondaryImageSource( theme ) ) {
			images.push( this.newImage( new DImageBaseThemeWrapperSecondary( theme ) ) );
		}
		if( hasTertiaryImageSource( theme ) ) {
			images.push( this.newImage( new DImageBaseThemeWrapperTertiary( theme ) ) );
		}
		return images;
	}

	protected toImageOptions( theme: THEME, options?: DImagePieceOptions ): DImagePieceOptions | undefined {
		return options;
	}

	protected newImage( theme: DThemeImagePiece, options?: DImagePieceOptions ) {
		return new DImagePiece(
			this, theme, options,
			this._textAlign, this._onChangeBound, this._applyMaskBound
		);
	}

	get image(): DStateAwareOrValueMightBe<Texture | DisplayObject | null> {
		return this._images[ 0 ].source;
	}

	set image( imageSource: DStateAwareOrValueMightBe<Texture | DisplayObject | null> ) {
		this._images[ 0 ].source = imageSource;
	}

	protected onStateChange( newState: DBaseState, oldState: DBaseState ): void {
		super.onStateChange( newState, oldState );
		const images = this._images;
		for( let i = 0, imax = images.length; i < imax; ++i ) {
			images[ i ].onStateChange( newState, oldState );
		}
	}

	protected updateText(): void {
		this.updateTextValue();
		this.updateTextAndImage();
	}

	protected updateTextAndImage(): void {
		const text = this._text;
		const images = this._images;
		const padding = this._padding;

		const toRounded = this.toRounded;

		const width = this.width;
		const height = this.height;

		const pl = padding.getLeft();
		const pr = padding.getRight();
		const pt = padding.getTop();
		const pb = padding.getBottom();

		const noText = text == null;

		let textLeftFirst = noText;
		let textTopFirst = noText;

		let textRightLastMargin = 0;
		let textBottomLastMargin = 0;

		let textLeft = 0;
		let textRight = 0;
		let textTop = 0;
		let textBottom = 0;

		let paddingLeft = pl;
		let paddingRight = width - pr;
		let paddingTop = pt;
		let paddingBottom = height - pb;

		let borderLeft = 0;
		let borderRight = width;
		let borderTop = 0;
		let borderBottom = height;

		for( let i = 0, imax = images.length; i < imax; ++i ) {
			const image = images[ i ];
			image.updateSource();
			image.updateTint();
			image.updateBound();

			const imageImage = image.image;
			if( imageImage ) {
				const imageBound = image.bound;
				const imageBoundWidth = imageBound.width;
				const imageBoundHeight = imageBound.height;
				const imageMargin = image.margin;
				const imageMarginHorizontal = imageMargin.horizontal;
				const imageMarginVertical = imageMargin.vertical;

				// Text
				if( image.align.with === DAlignWith.TEXT ) {
					switch( image.align.horizontal ) {
					case DAlignHorizontal.LEFT:
						imageImage.x = textLeft;
						textLeft += imageBoundWidth;
						if( textLeftFirst ) {
							textLeftFirst = false;
						} else {
							textLeft += imageMarginHorizontal;
						}
						break;
					case DAlignHorizontal.CENTER:
						// DO NOTHING
						break;
					case DAlignHorizontal.RIGHT:
						textRight -= imageBoundWidth;
						imageImage.x = textRight;
						textRight -= imageMarginHorizontal;
						textRightLastMargin = imageMarginHorizontal;
						break;
					}
					switch( image.align.vertical ) {
					case DAlignVertical.TOP:
						imageImage.y = textTop;
						textTop += imageBoundHeight;
						if( textTopFirst ) {
							textTopFirst = false;
						} else {
							textTop += imageMarginVertical;
						}
						break;
					case DAlignVertical.MIDDLE:
						// DO NOTHING
						break;
					case DAlignVertical.BOTTOM:
						textBottom -= imageBoundHeight;
						imageImage.y = textBottom;
						textBottom -= imageMarginVertical;
						textBottomLastMargin = imageMarginVertical;
						break;
					}
				}

				// Padding
				if( image.align.with === DAlignWith.PADDING ) {
					switch( image.align.horizontal ) {
					case DAlignHorizontal.LEFT:
						paddingLeft += imageMarginHorizontal;
						imageImage.x = toRounded( paddingLeft );
						paddingLeft += imageBoundWidth;
						break;
					case DAlignHorizontal.CENTER:
						// DO NOTHING
						break;
					case DAlignHorizontal.RIGHT:
						paddingRight -= imageBoundWidth + imageMarginHorizontal;
						imageImage.x = toRounded( paddingRight );
						break;
					}
					switch( image.align.vertical ) {
					case DAlignVertical.TOP:
						paddingTop += imageMarginVertical;
						imageImage.y = toRounded( paddingTop );
						paddingTop += imageBoundHeight;
						break;
					case DAlignVertical.MIDDLE:
						// DO NOTHING
						break;
					case DAlignVertical.BOTTOM:
						paddingBottom -= imageBoundHeight + imageMarginVertical;
						imageImage.y = toRounded( paddingBottom );
						break;
					}
				}

				// Border
				if( image.align.with === DAlignWith.BORDER ) {
					switch( image.align.horizontal ) {
					case DAlignHorizontal.LEFT:
						borderLeft += imageMarginHorizontal;
						imageImage.x = toRounded( borderLeft );
						borderLeft += imageBoundWidth;
						break;
					case DAlignHorizontal.CENTER:
						// DO NOTHING
						break;
					case DAlignHorizontal.RIGHT:
						borderRight -= imageBoundWidth + imageMarginHorizontal;
						imageImage.x = toRounded( borderRight );
						break;
					}
					switch( image.align.vertical ) {
					case DAlignVertical.TOP:
						borderTop += imageMarginVertical;
						imageImage.y = toRounded( borderTop );
						borderTop += imageBoundHeight;
						break;
					case DAlignVertical.MIDDLE:
						// DO NOTHING
						break;
					case DAlignVertical.BOTTOM:
						borderBottom -= imageBoundHeight + imageMarginVertical;
						imageImage.y = toRounded( borderBottom );
						break;
					}
				}
			}
		}
		if( noText ) {
			textRight += textRightLastMargin;
			textBottom += textBottomLastMargin;
		}

		// Text
		let textLeftAdjust = 0;
		let textCenterAdjust = 0;
		let textRightAdjust = 0;
		let textTopAdjust = 0;
		let textMiddleAdjust = 0;
		let textBottomAdjust = 0;

		if( text != null ) {
			this.updateTextColor( text );
			if( text instanceof DDynamicText ) {
				text.setClippingWidthDelta( textLeft - textRight );
			}

			const textAlign = this._textAlign;
			const textWidth = text.width;
			const textHeight = text.height;
			switch( textAlign.horizontal ) {
			case DAlignHorizontal.LEFT:
				textLeftAdjust = pl;
				textRightAdjust = textLeftAdjust + textLeft + textWidth - textRight;
				break;
			case DAlignHorizontal.CENTER:
				textLeftAdjust = (width - textLeft + textRight - textWidth) * 0.5;
				textRightAdjust = textLeftAdjust + textLeft + textWidth - textRight;
				break;
			case DAlignHorizontal.RIGHT:
				textRightAdjust = width - pr;
				textLeftAdjust = textRightAdjust + textRight - textWidth - textLeft;
				break;
			}

			text.x = toRounded( textLeftAdjust + textLeft );
			textCenterAdjust = textLeftAdjust + textLeft + textWidth * 0.5;

			switch( textAlign.vertical ) {
			case DAlignVertical.TOP:
				textTopAdjust = pt;
				textBottomAdjust = textTopAdjust + textTop + textHeight - textBottom;
				break;
			case DAlignVertical.MIDDLE:
				textTopAdjust = (height - textTop + textBottom - textHeight) * 0.5;
				textBottomAdjust = textTopAdjust + textTop + textHeight - textBottom;
				break;
			case DAlignVertical.BOTTOM:
				textBottomAdjust = height - pb;
				textTopAdjust = textBottomAdjust + textBottom - textHeight - textTop;
				break;
			}

			text.y = toRounded( textTopAdjust + textTop );
			textMiddleAdjust = textTopAdjust + textTop + textHeight * 0.5;
		} else {
			textLeftAdjust = (width - textLeft + textRight) * 0.5;
			textRightAdjust = textLeftAdjust + textLeft - textRight;
			textCenterAdjust = textLeftAdjust + textLeft;

			textTopAdjust = (height - textTop + textBottom) * 0.5;
			textBottomAdjust = textTopAdjust + textTop - textBottom;
			textMiddleAdjust = textTopAdjust + textTop;
		}

		const paddingCenterAdjust = width * 0.5;
		const paddingMiddleAdjust = height * 0.5;

		const borderCenterAdjust = width * 0.5;
		const borderMiddleAdjust = height * 0.5;

		for( let i = 0, imax = images.length; i < imax; ++i ) {
			const image = images[ i ];
			const imageImage = image.image;
			if( imageImage ) {
				const imageBound = image.bound;
				const imageBoundWidth = imageBound.width;
				const imageBoundHeight = imageBound.height;

				// Text
				if( image.align.with === DAlignWith.TEXT ) {
					switch( image.align.horizontal ) {
					case DAlignHorizontal.LEFT:
						imageImage.x = toRounded( imageImage.x + textLeftAdjust );
						break;
					case DAlignHorizontal.CENTER:
						imageImage.x = toRounded( textCenterAdjust - imageBoundWidth * 0.5 );
						break;
					case DAlignHorizontal.RIGHT:
						imageImage.x = toRounded( imageImage.x + textRightAdjust );
						break;
					}
					switch( image.align.vertical ) {
					case DAlignVertical.TOP:
						imageImage.y = toRounded( imageImage.y + textTopAdjust );
						break;
					case DAlignVertical.MIDDLE:
						imageImage.y = toRounded( textMiddleAdjust - imageBoundHeight * 0.5 );
						break;
					case DAlignVertical.BOTTOM:
						imageImage.y = toRounded( imageImage.y + textBottomAdjust );
						break;
					}
				}

				// Padding
				if( image.align.with === DAlignWith.PADDING ) {
					switch( image.align.horizontal ) {
					case DAlignHorizontal.CENTER:
						imageImage.x = toRounded( paddingCenterAdjust - imageBoundWidth * 0.5 );
						break;
					}
					switch( image.align.vertical ) {
					case DAlignVertical.MIDDLE:
						imageImage.y = toRounded( paddingMiddleAdjust - imageBoundHeight * 0.5 );
						break;
					}
				}

				// Border
				if( image.align.with === DAlignWith.BORDER ) {
					switch( image.align.horizontal ) {
					case DAlignHorizontal.CENTER:
						imageImage.x = toRounded( borderCenterAdjust - imageBoundWidth * 0.5 );
						break;
					}
					switch( image.align.vertical ) {
					case DAlignVertical.MIDDLE:
						imageImage.y = toRounded( borderMiddleAdjust - imageBoundHeight * 0.5 );
						break;
					}
				}
			}
		}
	}

	protected isRefitable( target: any ): target is DRefitable {
		if( super.isRefitable( target ) ) {
			return true;
		}

		const images = this._images;
		for( let i = 0, imax = images.length; i < imax; ++i ) {
			if( images[ i ].isRefitable( target ) ) {
				return true;
			}
		}

		return false;
	}

	protected getType(): string {
		return "DImageBase";
	}

	destroy(): void {
		const images = this._images;
		for( let i = 0, imax = images.length; i < imax; ++i ) {
			images[ i ].destroy();
		}
		super.destroy();
	}
}
