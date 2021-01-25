import { DisplayObject, Graphics, Rectangle, Sprite, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DApplicationTarget } from "./d-application-like";
import { DApplications } from "./d-applications";
import { DBaseStateSet } from "./d-base-state-set";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { isFunction } from "./util/is-function";
import { toEnum } from "./util/to-enum";

export interface DImagePieceTintOptions {
	color?: DStateAwareOrValueMightBe<number | null>;
	alpha?: DStateAwareOrValueMightBe<number>;
}

export interface DImagePieceAlignOptions {
	with?: (keyof typeof DAlignWith) | DAlignWith;
	vertical?: (keyof typeof DAlignVertical) | DAlignVertical;
	horizontal?: (keyof typeof DAlignHorizontal) | DAlignHorizontal;
}

export interface DImagePieceMarginOptions {
	vertical?: number;
	horizontal?: number;
}

export interface DImagePieceOptions {
	source?: DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
	tint?: DImagePieceTintOptions;
	align?: DImagePieceAlignOptions;
	margin?: DImagePieceMarginOptions;
}

export interface DImagePieceAlign {
	with: DAlignWith;
	vertical: DAlignVertical;
	horizontal: DAlignHorizontal;
}

export interface DImagePieceMargin {
	vertical: number;
	horizontal: number;
}

export interface DImagePieceTextAlign {
	vertical: DAlignVertical;
	horizontal: DAlignHorizontal;
}

export interface DImagePieceParent extends DApplicationTarget {
	readonly state: DBaseStateSet;
	addChild( displayObject: DisplayObject ): void;
	removeChild( displayObject: DisplayObject ): void;
	toDirty(): void;
	getOverflowMask(): Graphics | null;
}

export interface DThemeImagePiece {
	getImageAlignHorizontal(): DAlignHorizontal;
	getImageAlignVertical(): DAlignVertical;
	getImageAlignWith(): DAlignWith;
	getImageMarginHorizontal(): number;
	getImageMarginVertial(): number;
	getImageTintColor( state: DBaseStateSet ): number | null;
	getImageTintAlpha( state: DBaseStateSet ): number;
	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null;
}

const toImageAlign = ( theme: DThemeImagePiece, options?: DImagePieceOptions ): DImagePieceAlign => {
	const align = options?.align;
	return {
		with: toEnum( align?.with ?? theme.getImageAlignWith(), DAlignWith ),
		vertical: toEnum( align?.vertical ?? theme.getImageAlignVertical(), DAlignVertical ),
		horizontal: toEnum( align?.horizontal ?? theme.getImageAlignHorizontal(), DAlignHorizontal )
	};
};

const toImageMargin = ( theme: DThemeImagePiece, options?: DImagePieceOptions ): DImagePieceMargin => {
	const margin = options?.margin;
	return {
		vertical: ( margin?.vertical ?? theme.getImageMarginVertial() ),
		horizontal: ( margin?.horizontal ?? theme.getImageMarginHorizontal() )
	};
};

export class DImagePiece {
	protected _parent: DImagePieceParent;
	protected _theme: DThemeImagePiece;
	protected _textAlign: DImagePieceTextAlign;

	protected _image: DisplayObject | null;
	protected _computed: Texture | DisplayObject | null;
	protected _source: DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
	protected _align: DImagePieceAlign;
	protected _margin: DImagePieceMargin;
	protected _tint: DImagePieceTintOptions | undefined;
	protected _bound: Rectangle;

	protected _onUpdateBound: () => void;

	constructor(
		parent: DImagePieceParent,
		theme: DThemeImagePiece,
		textAlign: DImagePieceTextAlign,
		options?: DImagePieceOptions
	) {
		this._parent = parent;
		this._theme = theme;
		this._textAlign = textAlign;

		this._image = null;
		this._align = toImageAlign( theme, options );
		this._margin = toImageMargin( theme, options );
		this._tint = options?.tint;
		this._bound = new Rectangle();
		this._source = options?.source;
		this._computed = null;

		this._onUpdateBound = () => {
			this.onUpdate();
		};
	}

	get image(): DisplayObject | null {
		return this._image;
	}

	get align(): DImagePieceAlign {
		return this._align;
	}

	get margin(): DImagePieceMargin {
		return this._margin;
	}

	get bound(): Rectangle {
		return this._bound;
	}

	get source(): DStateAwareOrValueMightBe<Texture | DisplayObject | null> {
		return this._source;
	}

	set source( source: DStateAwareOrValueMightBe<Texture | DisplayObject | null> ) {
		if( this._source !== source ) {
			this._source = source;
			this.onUpdate();
		}
	}

	protected computeSource(): Texture | DisplayObject | null {
		const source = this._source;
		if( source !== undefined ) {
			if( isFunction( source ) ) {
				const result = source( this._parent.state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return source;
			}
		}
		return this._theme.getImageSource( this._parent.state );
	}

	onStateChange( newState: DBaseStateSet, oldState: DBaseStateSet ): void {
		this.updateTint();
	}

	updateBound(): void {
		const bound = this._bound;
		const image = this._image;
		if( image != null ) {
			image.updateTransform();
			image.getLocalBounds( bound );
			const bl = bound.left;
			const bt = bound.top;
			const br = bound.right;
			const bb = bound.bottom;

			const localTransform = image.localTransform;
			const a = localTransform.a;
			const b = localTransform.b;
			const c = localTransform.c;
			const d = localTransform.d;

			const x0 = a * bl + c * bt;
			const y0 = b * bl + d * bt;
			const x1 = a * br + c * bt;
			const y1 = b * br + d * bt;
			const x2 = a * br + c * bb;
			const y2 = b * br + d * bb;
			const x3 = a * bl + c * bb;
			const y3 = b * bl + d * bb;

			const xmin = Math.min( x0, x1, x2, x3 );
			const xmax = Math.max( x0, x1, x2, x3 );
			const ymin = Math.min( y0, y1, y2, y3 );
			const ymax = Math.max( y0, y1, y2, y3 );

			bound.x = xmin + localTransform.tx;
			bound.y = ymin + localTransform.ty;
			bound.width = xmax - xmin;
			bound.height = ymax - ymin;
		} else {
			bound.x = 0;
			bound.y = 0;
			bound.width = 0;
			bound.height = 0;
		}
	}

	protected isTintAware( target: DisplayObject | null ): target is DisplayObject & { tint: number } {
		return ( target != null && "tint" in target );
	}

	protected toTintColor( theme: DThemeImagePiece, state: DBaseStateSet ): number | null {
		const tint = this._tint;
		if( tint ) {
			const color = tint.color;
			if( color !== undefined ) {
				if( isFunction( color ) ) {
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

	protected toTintAlpha( theme: DThemeImagePiece, state: DBaseStateSet ): number {
		const tint = this._tint;
		if( tint ) {
			const alpha = tint.alpha;
			if( alpha !== undefined ) {
				if( isFunction( alpha ) ) {
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

	/**
	 * Updates the tint.
	 *
	 * @returns True if the tint is changed.
	 */
	updateTint(): boolean {
		const image = this._image;
		if( image ) {
			if( this.isTintAware( image ) ) {
				const theme = this._theme;
				const state = this._parent.state;
				const color = this.toTintColor( theme, state );
				if( color != null ) {
					let result = false;
					if( image.tint !== color ) {
						image.tint = color;
						result = true;
					}
					const alpha = this.toTintAlpha( theme, state );
					if( image.alpha !== alpha ) {
						image.alpha = alpha;
						result = true;
					}
					return result;
				}
			}
		}
		return false;
	}

	/**
	 * Updates the computed source.
	 *
	 * @returns True if the computed source is changed
	 */
	updateSource(): boolean {
		const newComputed = this.computeSource();
		const oldComputed = this._computed;
		if( newComputed !== oldComputed ) {
			this._computed = newComputed;

			const parent = this._parent;
			const oldImage = this._image;
			const onUpdateBound = this._onUpdateBound;
			if( newComputed instanceof Texture ) {
				if( oldComputed instanceof Texture ) {
					oldComputed.off( "update", onUpdateBound );
					if( oldImage instanceof Sprite ) {
						oldImage.texture = newComputed;
						newComputed.on( "update", onUpdateBound );
					}
				} else {
					if( oldImage != null ) {
						parent.removeChild( oldImage );
					}

					const newImage = new Sprite( newComputed );
					const overflowMask = parent.getOverflowMask();
					if( overflowMask ) {
						newImage.mask = overflowMask;
					}
					newComputed.on( "update", onUpdateBound );
					parent.addChild( newImage );
					this._image = newImage;
				}
			} else {
				if( oldComputed instanceof Texture ) {
					oldComputed.off( "update", onUpdateBound );
					if( oldImage != null ) {
						parent.removeChild( oldImage );
						oldImage.destroy();
					}
				} else if( oldImage != null ) {
					parent.removeChild( oldImage );
				}

				if( newComputed != null ) {
					const overflowMask = parent.getOverflowMask();
					if( overflowMask ) {
						newComputed.mask = overflowMask;
					}
					parent.addChild( newComputed );
				}
				this._image = newComputed;
			}
			return true;
		}
		return false;
	}

	isRefitable( target: any ): boolean {
		return ( target != null && target === this._image );
	}

	destroy(): void {
		const image = this._image;
		if( image ) {
			this._image = null;
			const computed = this._computed;
			if( computed instanceof Texture ) {
				computed.off( "update", this._onUpdateBound, this );
				image.destroy();
			}
		}
	}

	protected onUpdate(): void {
		this._parent.toDirty();
		DApplications.update( this._parent );
	}
}
