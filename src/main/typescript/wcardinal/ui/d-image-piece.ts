import { DisplayObject, Point, Rectangle, Sprite, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DBaseState } from "./d-base-state";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { isFunction } from "./util/is-function";
import { isString } from "./util/is-string";

type DImagePieceOnChange = () => void;

type DImagePieceApplyMask = ( target: DisplayObject ) => void;

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

export interface DImagePieceParent {
	readonly state: DBaseState;
	addChild( displayObject: DisplayObject ): void;
	removeChild( displayObject: DisplayObject ): void;
}

export interface DThemeImagePiece {
	getImageAlignHorizontal(): DAlignHorizontal;
	getImageAlignVertical(): DAlignVertical;
	getImageAlignWith(): DAlignWith;
	getImageMarginHorizontal(): number;
	getImageMarginVertial(): number;
	getImageTintColor( state: DBaseState ): number | null;
	getImageTintAlpha( state: DBaseState ): number;
	getImageSource( state: DBaseState ): Texture | DisplayObject | null;
}

const toImageAlign = ( theme: DThemeImagePiece, options?: DImagePieceOptions ): DImagePieceAlign => {
	const align = options && options.align;
	if( align ) {
		const alignWith: DAlignWith = ( align.with != null ?
			( isString( align.with ) ? DAlignWith[ align.with ] : align.with ) :
			theme.getImageAlignWith()
		);
		const alignVertical: DAlignVertical = ( align.vertical != null ?
			( isString( align.vertical ) ? DAlignVertical[ align.vertical ] : align.vertical ) :
			theme.getImageAlignVertical()
		);
		const alignHorizontal: DAlignHorizontal = ( align.horizontal != null ?
			( isString( align.horizontal ) ? DAlignHorizontal[ align.horizontal ] : align.horizontal ) :
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

const toImageMargin = ( theme: DThemeImagePiece, options?: DImagePieceOptions ): DImagePieceMargin => {
	const margin = options && options.margin;
	if( margin ) {
		const vertical = ( margin.vertical != null ?
			margin.vertical : theme.getImageMarginVertial()
		);
		const horizontal = ( margin.horizontal != null ?
			margin.horizontal : theme.getImageMarginHorizontal()
		);
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

const toImageTint = ( theme: DThemeImagePiece, options?: DImagePieceOptions ): DImagePieceTintOptions | undefined => {
	if( options && options.tint != null ) {
		return options.tint;
	}
	return undefined;
};

export class DImagePiece {
	protected _image: DisplayObject | null;
	protected _computed: Texture | DisplayObject | null;
	protected _source: DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
	protected _align: DImagePieceAlign;
	protected _margin: DImagePieceMargin;
	protected _tint: DImagePieceTintOptions | undefined;
	protected _bound: Rectangle;
	protected _point: Point;
	protected _onChange: DImagePieceOnChange;
	protected _applyMask: DImagePieceApplyMask;
	protected _parent: DImagePieceParent;
	protected _textAlign: DImagePieceTextAlign;
	protected _theme: DThemeImagePiece;

	constructor(
		parent: DImagePieceParent,
		theme: DThemeImagePiece,
		options: DImagePieceOptions | undefined,
		textAlign: DImagePieceTextAlign,
		onChange: DImagePieceOnChange,
		applyMask: DImagePieceApplyMask
	) {
		this._image = null;
		this._align = toImageAlign( theme, options );
		this._margin = toImageMargin( theme, options );
		this._tint = toImageTint( theme, options );
		this._bound = new Rectangle();
		this._point = new Point();
		this._source = ( options && options.source );
		this._computed = null;

		this._parent = parent;
		this._theme = theme;
		this._textAlign = textAlign;
		this._onChange = onChange;
		this._applyMask = applyMask;
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
			this._onChange();
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

	onStateChange( newState: DBaseState, oldState: DBaseState ): void {
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

	protected toTintColor( theme: DThemeImagePiece, state: DBaseState ): number | null {
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

	protected toTintAlpha( theme: DThemeImagePiece, state: DBaseState ): number {
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
			if( newComputed instanceof Texture ) {
				if( oldComputed instanceof Texture ) {
					oldComputed.off( "update", this._onChange );
					if( oldImage instanceof Sprite ) {
						oldImage.texture = newComputed;
						newComputed.on( "update", this._onChange );
					}
				} else {
					if( oldImage != null ) {
						parent.removeChild( oldImage );
					}

					const newImage = new Sprite( newComputed );
					this._applyMask( newImage );
					newComputed.on( "update", this._onChange );
					parent.addChild( newImage );
					this._image = newImage;
				}
			} else {
				if( oldComputed instanceof Texture ) {
					oldComputed.off( "update", this._onChange );
					if( oldImage != null ) {
						parent.removeChild( oldImage );
						oldImage.destroy();
					}
				} else if( oldImage != null ) {
					parent.removeChild( oldImage );
				}

				if( newComputed != null ) {
					this._applyMask( newComputed );
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
				computed.off( "update", this._onChange, this );
				image.destroy();
			}
		}
	}
}
