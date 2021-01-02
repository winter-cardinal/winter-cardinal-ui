/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, interaction, Point, Sprite, Texture } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DColorAndAlpha } from "./d-color-and-alpha";
import { DInputRealAndLabel } from "./d-input-real-and-label";
import { DInputTextAndLabel } from "./d-input-text-and-label";
import { DPickerColorAndAlpha } from "./d-picker-color-and-alpha";
import { DPickerColorRecent } from "./d-picker-color-recent";
import { UtilHsv } from "./util/util-hsv";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { UtilRgb } from "./util/util-rgb";

export interface DPickerColorOptions<THEME extends DThemePickerColor = DThemePickerColor> extends DBaseOptions<THEME> {

}

export interface DThemePickerColor extends DThemeBase {
	getMainWidth(): number;
	getMainHeight(): number;
	getMainTexture(): Texture;
	getMainPointerTexture(): Texture;
	getMainPointerColor(): number;
	getMainPointerAlpha(): number;

	getBaseHeight(): number;
	getBaseMargin(): number;
	getBaseTexture(): Texture;
	getBasePointerTexture(): Texture;
	getBasePointerColor(): number;
	getBasePointerAlpha(): number;

	getAlphaHeight(): number;
	getAlphaMargin(): number;
	getAlphaTexture(): Texture;
	getAlphaCheckerboardTexture(): Texture;
	getAlphaPointerTexture(): Texture;
	getAlphaPointerColor(): number;
	getAlphaPointerAlpha(): number;

	getRecentMargin(): number;
	getRecentColorMargin(): number;
	getRecentColorWidth(): number;
	getRecentColorHeight(): number;
	getRecentColorCount(): number;
	getRecentCheckerboardTexture(): Texture;
	getRecents(): DColorAndAlpha[];

	getInputMargin(): number;
	getInputLabelWidth(): number;

	getSampleCheckerboardTexture(): Texture;
}

export class DPickerColor<
	THEME extends DThemePickerColor = DThemePickerColor,
	OPTIONS extends DPickerColorOptions<THEME> = DPickerColorOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected static RECENT_COLORS: DPickerColorRecent | null = null;

	protected _mainBaseSprite!: Sprite;
	protected _mainSprite!: Sprite;
	protected _mainPointerSprite!: Sprite;
	protected _pointerPoint!: Point;
	protected _onMainMoveBound!: ( e: InteractionEvent ) => void;
	protected _onMainUpBound!: ( e: InteractionEvent ) => void;

	protected _baseSprite!: Sprite;
	protected _basePointerSprite!: Sprite;
	protected _onBaseMoveBound!: ( e: InteractionEvent ) => void;
	protected _onBaseUpBound!: ( e: InteractionEvent ) => void;

	protected _alphaCheckerboardSprite!: Sprite;
	protected _alphaSprite!: Sprite;
	protected _alphaPointerSprite!: Sprite;
	protected _onAlphaMoveBound!: ( e: InteractionEvent ) => void;
	protected _onAlphaUpBound!: ( e: InteractionEvent ) => void;

	protected _recentColorSprites!: Sprite[];
	protected _recent!: DPickerColorRecent;

	protected _inputAndLabelColor!: DInputTextAndLabel;
	protected _inputAndLabelAlpha!: DInputRealAndLabel;

	protected _sampleCurrentCheckerboardSprite!: Sprite;
	protected _sampleCurrentSprite!: Sprite;
	protected _sampleNewCheckerboardSprite!: Sprite;
	protected _sampleNewSprite!: Sprite;

	protected _current!: DColorAndAlpha;
	protected _currentPicker!: DPickerColorAndAlpha;
	protected _base!: number;
	protected _new!: DColorAndAlpha;
	protected _newPicker!: DPickerColorAndAlpha;

	get current(): DColorAndAlpha {
		return this._currentPicker;
	}

	get new(): DColorAndAlpha {
		return this._newPicker;
	}

	get recent(): DPickerColorRecent {
		return this._recent;
	}

	protected init( options?: OPTIONS ) {
		super.init( options );

		this.state.isFocusable = false;

		this._base = 0xff0000;
		this._new = { color: 0xffffff, alpha: 1 };
		this._newPicker = new DPickerColorAndAlpha( this._new, ( color ) => {
			this.setColorNew( color );
		}, ( alpha: number ) => {
			this.setAlphaNew( alpha );
		});
		this._current = { color: 0xffffff, alpha: 1 };
		this._currentPicker = new DPickerColorAndAlpha( this._current, ( color ) => {
			this.setColorCurrent( color );
		}, ( alpha: number ) => {
			this.setAlphaCurrent( alpha );
		});

		const theme = this.theme;
		const padding = this._padding;
		const paddingTop = padding.getTop();
		const paddingRight = padding.getRight();
		const paddingBottom = padding.getBottom();
		const paddingLeft = padding.getLeft();
		this._pointerPoint = new Point();

		// Main
		const mainWidth = theme.getMainWidth();
		const mainHeight = theme.getMainHeight();
		const mainBaseSprite = new Sprite( Texture.WHITE );
		this._mainBaseSprite = mainBaseSprite;
		mainBaseSprite.x = paddingLeft;
		mainBaseSprite.y = paddingTop;
		mainBaseSprite.width = mainWidth;
		mainBaseSprite.height = mainHeight;
		mainBaseSprite.interactive = true;
		this.addChild( mainBaseSprite );

		const mainSprite = new Sprite( theme.getMainTexture() );
		this._mainSprite = mainSprite;
		mainSprite.x = paddingLeft;
		mainSprite.y = paddingTop;
		mainSprite.tint = this._base;
		mainSprite.interactive = false;
		this.addChild( mainSprite );

		// Main event handling
		this._onMainMoveBound = ( e: InteractionEvent ): void => {
			this.onMainMove( e );
		};
		this._onMainUpBound = ( e: InteractionEvent ): void => {
			this.onMainUp( e );
		};
		mainBaseSprite.on( UtilPointerEvent.down, ( e: InteractionEvent ) => {
			this.onMainDown( e );
		});

		// Base color picker
		const baseSprite = new Sprite( theme.getBaseTexture() );
		this._baseSprite = baseSprite;
		baseSprite.x = paddingLeft;
		baseSprite.y = mainBaseSprite.y + mainBaseSprite.height + theme.getBaseMargin();
		baseSprite.interactive = true;
		this.addChild( baseSprite );

		// Base event
		this._onBaseMoveBound = ( e: InteractionEvent ): void => {
			this.onBaseMove( e );
		};
		this._onBaseUpBound = ( e: InteractionEvent ): void => {
			this.onBaseUp( e );
		};
		baseSprite.on( UtilPointerEvent.down, ( e: InteractionEvent ) => {
			this.onBaseDown( e );
		});

		// Alpha picker
		const alphaCheckerboardSprite = new Sprite( theme.getAlphaCheckerboardTexture() );
		this._alphaCheckerboardSprite = alphaCheckerboardSprite;
		alphaCheckerboardSprite.x = padding.getLeft();
		alphaCheckerboardSprite.y = baseSprite.y + theme.getBaseHeight() + theme.getBaseMargin();
		alphaCheckerboardSprite.interactive = false;
		this.addChild( alphaCheckerboardSprite );

		const alphaSprite = new Sprite( theme.getAlphaTexture() );
		alphaSprite.tint = this._new.color;
		alphaSprite.interactive = true;
		alphaCheckerboardSprite.addChild( alphaSprite );

		// Alpha event
		this._onAlphaMoveBound = ( e: InteractionEvent ): void => {
			this.onAlphaMove( e );
		};
		this._onAlphaUpBound = ( e: InteractionEvent ): void => {
			this.onAlphaUp( e );
		};
		alphaSprite.on( UtilPointerEvent.down, ( e: InteractionEvent ) => {
			this.onAlphaDown( e );
		});

		// Pointers
		const mainPointerSprite = new Sprite( theme.getMainPointerTexture() );
		this._mainPointerSprite = mainPointerSprite;
		mainPointerSprite.x = paddingLeft;
		mainPointerSprite.y = paddingTop;
		mainPointerSprite.anchor.x = 0.5;
		mainPointerSprite.anchor.y = 0.5;
		mainPointerSprite.tint = theme.getMainPointerColor();
		mainPointerSprite.alpha = theme.getMainPointerAlpha();
		mainPointerSprite.interactive = false;
		this.addChild( mainPointerSprite );

		const alphaPointerSprite = new Sprite( theme.getAlphaPointerTexture() );
		this._alphaPointerSprite = alphaPointerSprite;
		alphaPointerSprite.x = mainWidth;
		alphaPointerSprite.y = alphaCheckerboardSprite.height * 0.5;
		alphaPointerSprite.tint = theme.getAlphaPointerColor();
		alphaPointerSprite.alpha = theme.getAlphaPointerAlpha();
		alphaPointerSprite.anchor.set( 0.5, 0.5 );
		alphaPointerSprite.interactive = false;
		alphaCheckerboardSprite.addChild( alphaPointerSprite );

		const basePointerSprite = new Sprite( theme.getBasePointerTexture() );
		this._basePointerSprite = basePointerSprite;
		basePointerSprite.x = 0;
		basePointerSprite.y = baseSprite.height * 0.5;
		basePointerSprite.tint = theme.getBasePointerColor();
		basePointerSprite.alpha = theme.getBasePointerAlpha();
		basePointerSprite.anchor.set( 0.5, 0.5 );
		basePointerSprite.interactive = false;
		baseSprite.addChild( basePointerSprite );

		// Recently used
		this._recentColorSprites = [];
		const recentColorSprites = this._recentColorSprites;
		const recentColorCount = theme.getRecentColorCount();
		const recentColorWidth = theme.getRecentColorWidth();
		const recentColorHeight = theme.getRecentColorHeight();
		const recentColorWidthHalf = recentColorWidth * 0.5;
		const recentColorHeightHalf = recentColorHeight * 0.5;
		const recentColorMargin = theme.getRecentColorMargin();
		const recentColorY = alphaCheckerboardSprite.y + theme.getAlphaHeight() + theme.getRecentMargin();
		const recentCheckerboardTexture = theme.getRecentCheckerboardTexture();
		if( DPickerColor.RECENT_COLORS == null ) {
			DPickerColor.RECENT_COLORS = new DPickerColorRecent(
				theme.getRecents().slice( 0 ),
				recentColorCount
			);
		}
		const recent = this._recent = DPickerColor.RECENT_COLORS;
		recent.on( "change", () => {
			this.onRecentChange();
		});
		const onRecentClick = ( e: InteractionEvent ) => {
			const checkerboardSprite = e.currentTarget;
			if( checkerboardSprite instanceof Container ) {
				const sprite = checkerboardSprite.children[ 0 ];
				if( sprite instanceof Sprite ) {
					this.setColorNew( sprite.tint );
					this.setAlphaNew( sprite.alpha );
				}
			}
		};
		for( let i = 0; i < recentColorCount; ++i ) {
			const x = paddingLeft + i * (recentColorWidth + recentColorMargin);

			const checkerboardSprite = new Sprite( recentCheckerboardTexture );
			checkerboardSprite.x = x + recentColorWidthHalf;
			checkerboardSprite.y = recentColorY + recentColorHeightHalf;
			checkerboardSprite.anchor.x = 0.5;
			checkerboardSprite.anchor.y = 0.5;
			checkerboardSprite.buttonMode = true;
			checkerboardSprite.interactive = true;
			UtilPointerEvent.onClick( checkerboardSprite, onRecentClick );
			this.addChild( checkerboardSprite );

			const sprite = new Sprite( Texture.WHITE );
			const recentColorAndAlpha = recent.get( i );
			if( recentColorAndAlpha != null ) {
				sprite.tint = recentColorAndAlpha.color;
				sprite.alpha = recentColorAndAlpha.alpha;
			} else {
				sprite.tint = 0xffffff;
				sprite.alpha = 0;
			}
			sprite.width = recentColorWidth;
			sprite.height = recentColorHeight;
			sprite.anchor.x = 0.5;
			sprite.anchor.y = 0.5;
			sprite.interactive = false;
			checkerboardSprite.addChild( sprite );
			recentColorSprites.push( sprite );
		}

		// Input color
		const inputMargin = theme.getInputMargin();
		const inputLabelWidth = theme.getInputLabelWidth();
		const inputY = recentColorY + recentColorHeight + inputMargin;
		const inputWidth = (mainWidth - inputMargin) * 0.5;
		const inputAndLabelColor = new DInputTextAndLabel({
			parent: this,
			x: paddingLeft,
			y: inputY,
			width: inputWidth,
			label: {
				width: inputLabelWidth,
				text: {
					value: "#"
				}
			},
			input: {
				weight: 1,
				text: {
					value: "FFFFFF"
				},
				on: {
					input: ( code: string ): void => {
						const color = UtilRgb.fromCode( code );
						if( color != null ) {
							this.setColorNew( color );
						}
					}
				}
			}
		});
		this._inputAndLabelColor = inputAndLabelColor;
		const inputHeight = inputAndLabelColor.height;

		const inputAndLabelAlpha = new DInputRealAndLabel({
			parent: this,
			x: paddingLeft,
			y: inputY + inputHeight + inputMargin,
			width: inputWidth,
			label: {
				width: inputLabelWidth,
				text: {
					value: "A"
				}
			},
			input: {
				weight: 1,
				text: {
					value: 1
				},
				min: 0,
				max: 1,
				on: {
					input: ( value: number ) => {
						this.setAlphaNew( value );
					}
				}
			}
		});
		this._inputAndLabelAlpha = inputAndLabelAlpha;

		// Samples
		const sampleWidth = (inputWidth - inputLabelWidth - inputMargin) * 0.5;
		const sampleHeight = inputHeight + inputMargin + inputHeight;
		const sampleX = paddingLeft + (mainWidth - inputMargin) * 0.5 + inputMargin;
		const sampleY = inputY + (inputHeight + inputMargin + inputAndLabelAlpha.height - sampleHeight) * 0.5;

		const sampleCurrentCheckerboardSprite = new Sprite( theme.getSampleCheckerboardTexture() );
		this._sampleCurrentCheckerboardSprite = sampleCurrentCheckerboardSprite;
		sampleCurrentCheckerboardSprite.x = sampleX;
		sampleCurrentCheckerboardSprite.y = sampleY;
		sampleCurrentCheckerboardSprite.width = sampleWidth;
		sampleCurrentCheckerboardSprite.height = sampleHeight;
		sampleCurrentCheckerboardSprite.interactive = false;
		this.addChild( sampleCurrentCheckerboardSprite );

		const current = this._current;
		const sampleCurrentSprite = new Sprite( Texture.WHITE );
		this._sampleCurrentSprite = sampleCurrentSprite;
		sampleCurrentSprite.x = sampleX;
		sampleCurrentSprite.y = sampleY;
		sampleCurrentSprite.tint = current.color;
		sampleCurrentSprite.alpha = current.alpha;
		sampleCurrentSprite.width = sampleWidth;
		sampleCurrentSprite.height = sampleHeight;
		sampleCurrentSprite.interactive = true;
		sampleCurrentSprite.buttonMode = true;
		UtilPointerEvent.onClick( sampleCurrentSprite, (): void => {
			this.setColorNew( current.color );
			this.setAlphaNew( current.alpha );
		});
		this.addChild( sampleCurrentSprite );

		const sampleNewCheckerboardSprite = new Sprite( theme.getSampleCheckerboardTexture() );
		this._sampleNewCheckerboardSprite = sampleNewCheckerboardSprite;
		sampleNewCheckerboardSprite.x = sampleX + sampleWidth;
		sampleNewCheckerboardSprite.y = sampleY;
		sampleNewCheckerboardSprite.width = sampleWidth;
		sampleNewCheckerboardSprite.height = sampleHeight;
		sampleNewCheckerboardSprite.interactive = false;
		this.addChild( sampleNewCheckerboardSprite );

		const sampleNewSprite = new Sprite( Texture.WHITE );
		this._sampleNewSprite = sampleNewSprite;
		sampleNewSprite.x = sampleX + sampleWidth;
		sampleNewSprite.y = sampleY;
		sampleNewSprite.tint = this._new.color;
		sampleNewSprite.alpha = this._new.alpha;
		sampleNewSprite.width = sampleWidth;
		sampleNewSprite.height = sampleHeight;
		sampleNewSprite.interactive = false;
		this.addChild( sampleNewSprite );

		// Width
		if( options == null || options.width == null ) {
			this.width = paddingLeft + mainWidth + paddingRight;
		}

		// Height
		if( options == null || options.height == null ) {
			this.height = inputY + inputAndLabelColor.height + inputMargin + inputAndLabelAlpha.height + paddingBottom;
		}
	}

	protected onMainDown( e: InteractionEvent ): void {
		this.onMainPick( e.data.global );

		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.move, this._onMainMoveBound );
			stage.on( UtilPointerEvent.up, this._onMainUpBound );
		}
	}

	protected onMainMove( e: InteractionEvent ): void {
		this.onMainPick( e.data.global );
	}

	protected onMainUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.move, this._onMainMoveBound );
			stage.off( UtilPointerEvent.up, this._onMainUpBound );
		}
	}

	protected toMainHex( b: number, w0: number, w1: number, shift: number ) {
		return Math.max( 0, Math.min( 255, w0 * 255 + w1 * (( b >> shift ) & 0xff) ) ) << shift;
	}

	protected toMainColor( base: number, tx: number, ty: number, width: number, height: number ): number {
		const hw = width * 0.5;
		const ux = Math.max( 0, Math.min( 1, ((tx - hw) * ( 1 - ty / height ) + hw) / width ) );
		const uy = Math.max( 0, Math.min( 1, ty / height ) );
		const w1 = Math.abs( 0.5 * uy  - ux );
		const w0 = 1 - w1 - uy;
		const r = this.toMainHex( base, w0, w1, 16 );
		const g = this.toMainHex( base, w0, w1, 8 );
		const b = this.toMainHex( base, w0, w1, 0 );
		return r | g | b;
	}

	protected onMainPick( global: Point ) {
		const point = this._pointerPoint;
		const padding = this._padding;
		const paddingLeft = padding.getLeft();
		const paddingTop = padding.getTop();
		const theme = this.theme;
		const mainWidth = theme.getMainWidth();
		const mainHeight = theme.getMainHeight();
		this.toLocal( global, undefined, point );
		const x = Math.max( 0, Math.min( mainWidth, point.x - paddingLeft ) );
		const y = Math.max( 0, Math.min( mainHeight, point.y - paddingTop ) );
		const mainPointerSprite = this._mainPointerSprite;
		mainPointerSprite.position.set( paddingLeft + x, paddingTop + y );
		this.onColorNew( this.toMainColor(
			this._base, x, y, mainWidth, mainHeight ) );
	}

	protected setColorCurrent( color: number ) {
		this._sampleCurrentSprite.tint = this._current.color = color;
	}

	protected setAlphaCurrent( alpha: number ) {
		this._sampleCurrentSprite.alpha = this._current.alpha = alpha;
	}

	protected setColorNew( color: number ) {
		const theme = this.theme;
		const mainWidth = theme.getMainWidth();
		const mainHeight = theme.getMainHeight();
		const padding = this._padding;

		// Base color
		const hsv = UtilHsv.fromRgb( color );
		this._mainSprite.tint = this._base = UtilHsv.toRgb( hsv[ 0 ], 255, 255 );

		// Move the base pointer
		const basePointerSprite = this._basePointerSprite;
		basePointerSprite.x = Math.max( 0, Math.min( 1, hsv[ 0 ] / 360 ) ) * mainWidth;

		// Move the main pointer
		const ns = Math.max( 0, Math.min( 1, hsv[ 1 ] / 255 ) );
		const nv = Math.max( 0, Math.min( 1, 1 - hsv[ 2 ] / 255 ) );
		const mainPointerSprite = this._mainPointerSprite;
		mainPointerSprite.tint = (nv < 0.45 ? theme.getMainPointerColor() : 0xffffff);
		mainPointerSprite.position.set(
			padding.getLeft() + ns * mainWidth,
			padding.getTop() + nv * mainHeight
		);

		// New color
		this.onColorNew( color );
	}

	protected onColorNew( color: number ) {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			layer.lock();
		}
		this._sampleNewSprite.tint = this._new.color = color;
		this._inputAndLabelColor.input.value = UtilRgb.toCode( color );
		this.emit( "newcolorchange", color, this );
		if( layer ) {
			layer.unlock();
			layer.update();
		}
	}

	protected onBaseDown( e: InteractionEvent ): void {
		this.onBasePick( e.data.global );

		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.move, this._onBaseMoveBound );
			stage.on( UtilPointerEvent.up, this._onBaseUpBound );
		}
	}

	protected onBaseMove( e: InteractionEvent ): void {
		this.onBasePick( e.data.global );
	}

	protected onBaseUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.move, this._onBaseMoveBound );
			stage.off( UtilPointerEvent.up, this._onBaseUpBound );
		}
	}

	protected toBaseHex( t: number, shift: number ) {
		return Math.max( 0, Math.min( 255, t * 6 * 255 ) ) << shift;
	}

	protected toBaseColor( t: number ): number {
		if( t <= 0.167 ) {
			return 0xff0000 + this.toBaseHex( t, 8 );
		} else if( t <= 0.333 ) {
			t = 0.333 - t;
			return 0x00ff00 + this.toBaseHex( t, 16 );
		} else if( t <= 0.5 ) {
			t -= 0.333;
			return 0x00ff00 + this.toBaseHex( t, 0 );
		} else if( t < 0.667 ) {
			t = 0.667 - t;
			return 0x0000ff + this.toBaseHex( t, 8 );
		} else if( t < 0.883 ) {
			t -= 0.667;
			return 0x0000ff + this.toBaseHex( t, 16 );
		} else {
			t = 0.883 - t;
			return 0xff0000 + this.toBaseHex( t, 0 );
		}
	}

	protected onBasePick( global: Point ) {
		const point = this._pointerPoint;
		const padding = this._padding;
		const theme = this.theme;
		const mainWidth = theme.getMainWidth();
		this.toLocal( global, undefined, point );
		const x = Math.max( 0, Math.min( mainWidth, point.x - padding.getLeft() ) );
		const basePointerSprite = this._basePointerSprite;
		basePointerSprite.x = x;
		this.onColorBase( this.toBaseColor( x / mainWidth ) );
	}

	protected setColorBase( h: number ) {
		const theme = this.theme;
		const mainWidth = theme.getMainWidth();
		const basePointerSprite = this._basePointerSprite;
		basePointerSprite.x = Math.max( 0, Math.min( 1, h / 360 ) ) * mainWidth;
		this.onColorBase( UtilHsv.toRgb( h, 255, 255 ) );
	}

	protected onColorBase( color: number ) {
		this._mainSprite.tint = this._base = color;

		const mainPointerSprite = this._mainPointerSprite;
		const theme = this.theme;
		const mainWidth = theme.getMainWidth();
		const mainHeight = theme.getMainHeight();
		const padding = this._padding;
		this.onColorNew( this.toMainColor(
			this._base,
			mainPointerSprite.x - padding.getLeft(),
			mainPointerSprite.y - padding.getTop(),
			mainWidth,
			mainHeight
		));
	}

	protected onAlphaDown( e: InteractionEvent ): void {
		this.onAlphaPick( e.data.global );

		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.move, this._onAlphaMoveBound );
			stage.on( UtilPointerEvent.up, this._onAlphaUpBound );
		}
	}

	protected onAlphaMove( e: InteractionEvent ): void {
		this.onAlphaPick( e.data.global );
	}

	protected onAlphaUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.move, this._onAlphaMoveBound );
			stage.off( UtilPointerEvent.up, this._onAlphaUpBound );
		}
	}

	protected onAlphaPick( global: Point ) {
		const point = this._pointerPoint;
		const padding = this._padding;
		const theme = this.theme;
		const mainWidth = theme.getMainWidth();
		this.toLocal( global, undefined, point );
		const x = Math.max( 0, Math.min( mainWidth, point.x - padding.getLeft() ) );
		this._alphaPointerSprite.x = x;
		this.onAlphaNew( x / mainWidth );
	}

	protected setAlphaNew( alpha: number ): void {
		const theme = this.theme;
		const mainWidth = theme.getMainWidth();
		this._alphaPointerSprite.x = Math.max( 0, Math.min( 1, alpha ) ) * mainWidth;
		this.onAlphaNew( alpha );
	}

	protected onAlphaNew( alpha: number ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			layer.lock();
		}
		this._sampleNewSprite.alpha = this._new.alpha = alpha;
		this._inputAndLabelAlpha.input.value = Number( alpha.toFixed( 2 ) );
		this.emit( "newalphachange", alpha, this );
		if( layer ) {
			layer.unlock();
			layer.update();
		}
	}

	protected onRecentChange(): void {
		const sprites = this._recentColorSprites;
		const recent = this._recent;
		for( let i = 0, imax = sprites.length; i < imax; ++i ) {
			const sprite = sprites[ i ];
			const colorAndAlpha = recent.get( i );
			if( colorAndAlpha != null ) {
				sprite.tint = colorAndAlpha.color;
				sprite.alpha = colorAndAlpha.alpha;
			} else {
				sprite.tint = 0xffffff;
				sprite.alpha = 0;
			}
		}
	}

	protected getType(): string {
		return "DPickerColor";
	}
}
