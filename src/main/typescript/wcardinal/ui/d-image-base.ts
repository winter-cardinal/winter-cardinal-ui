/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Point, Rectangle, Sprite, Text, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DApplications } from "./d-applications";
import { Refitable } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DDynamicText } from "./d-dynamic-text";
import { DStateAware } from "./d-state-aware";
import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";
import { utilIsFunction } from "./util/util-is-function";
import { utilIsString } from "./util/util-is-string";

export type IMAGE_SOURCE = Texture | DisplayObject;
export type IMAGE = DisplayObject;

interface DImageBaseTintOptions {
	color?: DStateAware<number | null | undefined> | number | null;
	alpha?: DStateAware<number | undefined> | number;
}

export interface DImageBaseOptions<
	VALUE,
	THEME extends DThemeImageBase = DThemeImageBase
> extends DTextBaseOptions<VALUE, THEME> {
	image?: {
		source?: DStateAware<IMAGE_SOURCE | null | undefined> | IMAGE_SOURCE | null;
		tint?: DImageBaseTintOptions,
		align?: {
			with?: (keyof typeof DAlignWith) | DAlignWith,
			vertical?: (keyof typeof DAlignVertical) | DAlignVertical,
			horizontal?: (keyof typeof DAlignHorizontal) | DAlignHorizontal
		};
		margin?: {
			vertical?: number,
			horizontal?: number
		};
	};
}

export interface DThemeImageBase extends DThemeTextBase {
	getImageAlignHorizontal(): DAlignHorizontal;
	getImageAlignVertical(): DAlignVertical;
	getImageAlignWith(): DAlignWith;
	getImageMarginHorizontal(): number;
	getImageMarginVertial(): number;
	getImageTintColor( state: DBaseState ): number | null;
	getImageTintAlpha( state: DBaseState ): number;
	getImageSource( state: DBaseState ): IMAGE_SOURCE | null;
}

// Helper
export const isTintAware = ( target: IMAGE | null ): target is IMAGE & { tint: number } => {
	return ( target != null && "tint" in target );
};

// Option parser
const toImageAlign = <VALUE, THEME extends DThemeImageBase>(
	theme: DThemeImageBase, options?: DImageBaseOptions<VALUE, THEME>
) => {
	if( options != null && options.image != null && options.image.align != null ) {
		const align = options.image.align;
		const alignWith: DAlignWith = ( align.with != null ?
			( utilIsString( align.with ) ? DAlignWith[ align.with ] : align.with ) :
			theme.getImageAlignWith()
		);
		const alignVertical: DAlignVertical = ( align.vertical != null ?
			( utilIsString( align.vertical ) ? DAlignVertical[ align.vertical ] : align.vertical ) :
			theme.getImageAlignVertical()
		);
		const alignHorizontal: DAlignHorizontal = ( align.horizontal != null ?
			( utilIsString( align.horizontal ) ? DAlignHorizontal[ align.horizontal ] : align.horizontal ) :
			theme.getImageAlignHorizontal()
		);
		return {
			with: alignWith,
			vertical: alignVertical,
			horizontal: alignHorizontal
		};
	}
	return {
		with: theme.getImageAlignWith(),
		vertical: theme.getImageAlignVertical(),
		horizontal: theme.getImageAlignHorizontal()
	};
};

const toImageMargin = <VALUE, THEME extends DThemeImageBase>(
	theme: DThemeImageBase, options?: DImageBaseOptions<VALUE, THEME>
) => {
	if( options != null && options.image != null && options.image.margin != null ) {
		const margin = options.image.margin;
		const vertical = ( margin.vertical != null ? margin.vertical : theme.getImageMarginVertial() );
		const horizontal = ( margin.horizontal != null ? margin.horizontal : theme.getImageMarginHorizontal() );
		return {
			vertical,
			horizontal
		};
	}
	return {
		vertical: theme.getImageMarginVertial(),
		horizontal: theme.getImageMarginHorizontal()
	};
};

const toImageTint = <VALUE, THEME extends DThemeImageBase>(
	theme: DThemeImageBase, options?: DImageBaseOptions<VALUE, THEME>
): DImageBaseTintOptions | undefined => {
	if( options != null && options.image != null && options.image.tint != null ) {
		return options.image.tint;
	}
	return undefined;
};

export class DImageBase<
	VALUE = unknown,
	THEME extends DThemeImageBase = DThemeImageBase,
	OPTIONS extends DImageBaseOptions<VALUE, THEME> = DImageBaseOptions<VALUE, THEME>
> extends DTextBase<VALUE, THEME, OPTIONS> {
	protected _image!: IMAGE | null;
	protected _imageSourceComputed!: IMAGE_SOURCE | null;
	protected _imageSource!: DStateAware<IMAGE_SOURCE | null | undefined> | IMAGE_SOURCE | null | undefined;
	protected _imageAlign!: {
		with: DAlignWith,
		vertical: DAlignVertical,
		horizontal: DAlignHorizontal
	};
	protected _imageMargin!: {
		vertical: number,
		horizontal: number
	};
	protected _imageTint!: DImageBaseTintOptions | undefined;
	protected _imageBound!: Rectangle;
	protected _imageBoundPoint!: Point;
	protected _onImageChangeBound!: () => void;

	protected init( options?: OPTIONS ) {
		super.init( options );
		this._image = null;
		const theme = this.theme;
		this._imageAlign = toImageAlign( theme, options );
		this._imageMargin = toImageMargin( theme, options );
		this._imageTint = toImageTint( theme, options );
		this._imageBound = new Rectangle();
		this._imageBoundPoint = new Point();
		this._imageSource = ( options && options.image && options.image.source );
		this._imageSourceComputed = null;
		this._onImageChangeBound = () => {
			this.onImageChange();
		};
	}

	get image(): DStateAware<IMAGE_SOURCE | null | undefined> | IMAGE_SOURCE | null | undefined {
		return this._imageSource;
	}

	set image( imageSource: DStateAware<IMAGE_SOURCE | null | undefined> | IMAGE_SOURCE | null | undefined ) {
		if( this._imageSource !== imageSource ) {
			this._imageSource = imageSource;
			this.toDirty();
			DApplications.update();
		}
	}

	protected computeImageSource(): IMAGE_SOURCE | null {
		const imageSource = this._imageSource;
		if( imageSource !== undefined ) {
			if( utilIsFunction( imageSource ) ) {
				const result = imageSource( this.state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return imageSource;
			}
		}
		return this.theme.getImageSource( this.state );
	}

	protected onImageChange(): void {
		this.toDirty();
		DApplications.update();
	}

	protected onStateChange( newState: DBaseState, oldState: DBaseState ): void {
		super.onStateChange( newState, oldState );

		const image = this._image;
		if( image != null ) {
			this.updateImageTint( image );
		}
	}

	protected getImageRect( image: IMAGE ): Rectangle {
		image.updateTransform();
		const bounds = image.getLocalBounds( this._imageBound );
		const point = this._imageBoundPoint;
		point.set( bounds.left, bounds.top );
		image.localTransform.apply( point, point );
		const x0 = point.x;
		const y0 = point.y;
		point.set( bounds.right, bounds.top );
		image.localTransform.apply( point, point );
		const x1 = point.x;
		const y1 = point.y;
		point.set( bounds.right, bounds.bottom );
		image.localTransform.apply( point, point );
		const x2 = point.x;
		const y2 = point.y;
		point.set( bounds.left, bounds.bottom );
		image.localTransform.apply( point, point );
		const x3 = point.x;
		const y3 = point.y;
		bounds.x = Math.min( x0, x1, x2, x3 );
		bounds.y = Math.min( y0, y1, y2, y3 );
		bounds.width = Math.max( x0, x1, x2, x3 ) - bounds.x;
		bounds.height = Math.max( y0, y1, y2, y3 ) - bounds.y;
		return bounds;
	}

	protected updateTextAndImagePosition( text: DDynamicText | Text, image: IMAGE ): void {
		const bounds = this.getImageRect( image );
		const imageWidth = bounds.width;
		const imageHeight = bounds.height;

		const textAlign = this._textAlign;
		const imageAlign = this._imageAlign;
		const margin = this._imageMargin;
		const padding = this._padding;

		const marginHorizontal = margin.horizontal;
		const imageWaMH = imageWidth + marginHorizontal;
		switch( imageAlign.horizontal ) {
		case DAlignHorizontal.LEFT:
			switch( textAlign.horizontal ) {
			case DAlignHorizontal.LEFT:
				if( text instanceof DDynamicText ) {
					text.setClippingWidthDelta( imageWaMH );
				}
				image.x = this.toRounded( padding.getLeft() );
				break;
			case DAlignHorizontal.CENTER:
				if( text instanceof DDynamicText ) {
					text.setClippingWidthDelta( imageWaMH );
				}
				image.x = this.toRounded( ( this.width - text.width - imageWaMH ) * 0.5 );
				break;
			case DAlignHorizontal.RIGHT:
				if( text instanceof DDynamicText ) {
					text.setClippingWidthDelta( 0 );
				}
				image.x = this.toRounded( this.width - text.width - padding.getRight() - imageWaMH );
				break;
			}
			text.x = this.toRounded( image.x + imageWaMH );
			break;
		case DAlignHorizontal.CENTER:
			if( text instanceof DDynamicText ) {
				text.setClippingWidthDelta( 0 );
			}
			switch( textAlign.horizontal ) {
			case DAlignHorizontal.LEFT:
				text.x = this.toRounded( padding.getLeft() );
				break;
			case DAlignHorizontal.CENTER:
				text.x = this.toRounded( ( this.width - text.width ) * 0.5 );
				break;
			case DAlignHorizontal.RIGHT:
				text.x = this.toRounded( this.width - text.width - padding.getRight() );
				break;
			}
			image.x = this.toRounded( text.x + ( text.width - imageWidth ) * 0.5 );
			break;
		case DAlignHorizontal.RIGHT:
			switch( textAlign.horizontal ) {
			case DAlignHorizontal.LEFT:
				if( text instanceof DDynamicText ) {
					text.setClippingWidthDelta( 0 );
				}
				text.x = this.toRounded( padding.getLeft() );
				break;
			case DAlignHorizontal.CENTER:
				if( text instanceof DDynamicText ) {
					text.setClippingWidthDelta( imageWaMH );
				}
				text.x = this.toRounded( ( this.width - text.width - imageWaMH ) * 0.5 );
				break;
			case DAlignHorizontal.RIGHT:
				if( text instanceof DDynamicText ) {
					text.setClippingWidthDelta( imageWaMH );
				}
				text.x = this.toRounded( this.width - text.width - padding.getRight() - imageWaMH );
				break;
			}
			image.x = this.toRounded( text.x + text.width + marginHorizontal );
			break;
		}

		const marginVertical = margin.vertical;
		const imageHaMV = imageWidth + marginHorizontal;
		switch( imageAlign.vertical ) {
		case DAlignVertical.TOP:
			switch( textAlign.vertical ) {
			case DAlignVertical.TOP:
				image.y = this.toRounded( padding.getTop() );
				break;
			case DAlignVertical.MIDDLE:
				image.y = this.toRounded( ( this.height - text.height - imageHaMV ) * 0.5 );
				break;
			case DAlignVertical.BOTTOM:
				image.y = this.toRounded( this.height - text.height - padding.getBottom() - imageHaMV );
				break;
			}
			text.y = this.toRounded( image.y + imageHaMV );
			break;
		case DAlignVertical.MIDDLE:
			switch( textAlign.vertical ) {
			case DAlignVertical.TOP:
				text.y = this.toRounded( padding.getTop() );
				break;
			case DAlignVertical.MIDDLE:
				text.y = this.toRounded( ( this.height - text.height ) * 0.5 );
				break;
			case DAlignVertical.BOTTOM:
				text.y = this.toRounded( this.height - text.height - padding.getBottom() );
				break;
			}
			image.y = this.toRounded( text.y + ( text.height - imageHeight ) * 0.5 );
			break;
		case DAlignVertical.BOTTOM:
			switch( textAlign.vertical ) {
			case DAlignVertical.TOP:
				text.y = this.toRounded( padding.getTop() );
				break;
			case DAlignVertical.MIDDLE:
				text.y = this.toRounded( ( this.height - text.height - imageHaMV ) * 0.5 );
				break;
			case DAlignVertical.BOTTOM:
				text.y = this.toRounded( this.height - text.height - padding.getBottom() - imageHaMV );
				break;
			}
			image.y = this.toRounded( text.y + text.height + marginVertical );
			break;
		}
	}

	protected updateImagePositionText( image: IMAGE ): void {
		const bounds = this.getImageRect( image );
		image.x = this.toRounded( ( this.width - bounds.width ) * 0.5 );
		image.y = this.toRounded( ( this.height - bounds.height ) * 0.5 );
	}

	protected updateImagePositionPadding( image: IMAGE ): void {
		const margin = this._imageMargin;
		const align = this._imageAlign;
		const padding = this._padding;
		const bounds = this.getImageRect( image );
		const imageWidth = bounds.width;
		const imageHeight = bounds.height;

		const marginHorizontal = margin.horizontal;
		switch( align.horizontal ) {
		case DAlignHorizontal.LEFT:
			image.x = this.toRounded( padding.getLeft() + marginHorizontal );
			break;
		case DAlignHorizontal.CENTER:
			image.x = this.toRounded( ( this.width - imageWidth ) * 0.5 );
			break;
		case DAlignHorizontal.RIGHT:
			image.x = this.toRounded( this.width - padding.getRight() - marginHorizontal - imageWidth );
			break;
		}

		const marginVertical = margin.vertical;
		switch( align.vertical ) {
		case DAlignVertical.TOP:
			image.y = this.toRounded( padding.getTop() + marginVertical );
			break;
		case DAlignVertical.MIDDLE:
			image.y = this.toRounded( ( this.height - imageHeight ) * 0.5 );
			break;
		case DAlignVertical.BOTTOM:
			image.y = this.toRounded( this.height - padding.getBottom() - marginVertical );
			break;
		}
	}

	protected updateImagePositionBorder( image: IMAGE ): void {
		const margin = this._imageMargin;
		const align = this._imageAlign;
		const bounds = this.getImageRect( image );
		const imageWidth = bounds.width;
		const imageHeight = bounds.height;

		const marginHorizontal = margin.horizontal;
		switch( align.horizontal ) {
		case DAlignHorizontal.LEFT:
			image.x = this.toRounded( marginHorizontal );
			break;
		case DAlignHorizontal.CENTER:
			image.x = this.toRounded( ( this.width - imageWidth ) * 0.5 );
			break;
		case DAlignHorizontal.RIGHT:
			image.x = this.toRounded( this.width - marginHorizontal - imageWidth );
			break;
		}

		const marginVertical = margin.vertical;
		switch( align.vertical ) {
		case DAlignVertical.TOP:
			image.y = this.toRounded( marginVertical );
			break;
		case DAlignVertical.MIDDLE:
			image.y = this.toRounded( ( this.height - imageHeight ) * 0.5 );
			break;
		case DAlignVertical.BOTTOM:
			image.y = this.toRounded( this.height - marginVertical );
			break;
		}
	}

	protected getImageTintColor( theme: THEME, state: DBaseState ): number | null {
		const imageTint = this._imageTint;
		if( imageTint != null ) {
			const color = imageTint.color;
			if( color !== undefined ) {
				if( utilIsFunction( color ) ) {
					const result = color( state );
					if( result !== undefined ) {
						return result;
					}
				} else {
					return color;
				}
			}
		}
		return theme.getImageTintColor( state );
	}

	protected getImageTintAlpha( theme: THEME, state: DBaseState ): number {
		const imageTint = this._imageTint;
		if( imageTint != null ) {
			const alpha = imageTint.alpha;
			if( alpha !== undefined ) {
				if( utilIsFunction( alpha ) ) {
					const result = alpha( state );
					if( result !== undefined ) {
						return result;
					}
				} else {
					return alpha;
				}
			}
		}
		return theme.getImageTintAlpha( state );
	}

	protected updateImageTint( image: DisplayObject ): void {
		if( isTintAware( image ) ) {
			const theme = this.theme;
			const state = this.state;
			const color = this.getImageTintColor( theme, state );
			if( color != null ) {
				if( image.tint !== color ) {
					image.tint = color;
				}
				const alpha = this.getImageTintAlpha( theme, state );
				if( image.alpha !== alpha ) {
					image.alpha = alpha;
				}
			}
		}
	}

	protected updateImageSource(): void {
		const newImageSourceComputed = this.computeImageSource();
		const oldImageSourceComputed = this._imageSourceComputed;
		if( newImageSourceComputed !== oldImageSourceComputed ) {
			this._imageSourceComputed = newImageSourceComputed;

			const oldImage = this._image;
			if( newImageSourceComputed instanceof Texture ) {
				if( oldImageSourceComputed instanceof Texture ) {
					oldImageSourceComputed.off( "update", this._onImageChangeBound );
					if( oldImage instanceof Sprite ) {
						oldImage.texture = newImageSourceComputed;
						newImageSourceComputed.on( "update", this._onImageChangeBound );
					}
				} else {
					if( oldImage != null ) {
						this.removeChild( oldImage );
					}

					const newImage = new Sprite( newImageSourceComputed );
					if( this._isOverflowMaskEnabled ) {
						newImage.mask = this.getOrCreateOverflowMask();
					}
					newImageSourceComputed.on( "update", this._onImageChangeBound );
					this.addChild( newImage );
					this._image = newImage;
				}
			} else {
				if( oldImageSourceComputed instanceof Texture ) {
					oldImageSourceComputed.off( "update", this._onImageChangeBound );
					if( oldImage != null ) {
						this.removeChild( oldImage );
						oldImage.destroy();
					}
				} else if( oldImage != null ) {
					this.removeChild( oldImage );
				}

				if( newImageSourceComputed != null ) {
					if( this._isOverflowMaskEnabled ) {
						newImageSourceComputed.mask = this.getOrCreateOverflowMask();
					}
					this.addChild( newImageSourceComputed );
				}
				this._image = newImageSourceComputed;
			}
		}
	}

	protected updateText(): void {
		this.updateTextValue();
		this.updateImageSource();

		const text = this._text;
		const image = this._image;
		if( text != null ) {
			if( image != null ) {
				const align = this._imageAlign;
				switch( align.with ) {
				case DAlignWith.TEXT:
					this.updateTextAndImagePosition( text, image );
					break;
				case DAlignWith.PADDING:
					if( text instanceof DDynamicText ) {
						text.setClippingWidthDelta( 0 );
					}
					this.updateTextPosition( text );
					this.updateImagePositionPadding( image );
					break;
				case DAlignWith.BORDER:
					if( text instanceof DDynamicText ) {
						text.setClippingWidthDelta( 0 );
					}
					this.updateTextPosition( text );
					this.updateImagePositionBorder( image );
					break;
				}
				this.updateTextColor( text );
				this.updateImageTint( image );
			} else {
				if( text instanceof DDynamicText ) {
					text.setClippingWidthDelta( 0 );
				}
				this.updateTextPosition( text );
				this.updateTextColor( text );
			}
		} else if( image != null ) {
			const align = this._imageAlign;
			switch( align.with ) {
			case DAlignWith.TEXT:
				this.updateImagePositionText( image );
				break;
			case DAlignWith.PADDING:
				this.updateImagePositionPadding( image );
				break;
			case DAlignWith.BORDER:
				this.updateImagePositionBorder( image );
				break;
			}
			this.updateImageTint( image );
		}
	}

	protected isRefitable( target: any ): target is Refitable {
		return super.isRefitable( target ) ||
			(target != null && target === this._image);
	}

	protected getType(): string {
		return "DImageBase";
	}

	destroy(): void {
		// Image
		const image = this._image;
		if( image != null ) {
			this._image = null;
			const imageSourceComputed = this._imageSourceComputed;
			if( imageSourceComputed instanceof Texture ) {
				imageSourceComputed.off( "update", this._onImageChangeBound, this );
				image.destroy();
			}
		}

		//
		super.destroy();
	}
}
