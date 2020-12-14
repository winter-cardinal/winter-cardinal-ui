/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics, SCALE_MODES, Text } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DApplications } from "./d-applications";
import { DBase, DBaseEvents, DBaseOptions, DRefitable, DThemeBase } from "./d-base";
import { DBaseOverflowMaskSimple } from "./d-base-overflow-mask-simple";
import { DBaseStateSet } from "./d-base-state-set";
import { DDynamicText } from "./d-dynamic-text";
import { DDynamicTextStyleOptions } from "./d-dynamic-text-style";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { isFunction } from "./util/is-function";
import { isString } from "./util/is-string";

/**
 * {@link DTextBase} text align options.
 */
export interface DTextBaseTextAlignOptions {
	vertical?: (keyof typeof DAlignVertical) | DAlignVertical;
	horizontal?: (keyof typeof DAlignHorizontal) | DAlignHorizontal;
}

/**
 * {@link DTextBase} text options.
 */
export interface DTextBaseTextOptions<VALUE = unknown> {
	value?: DStateAwareOrValueMightBe<VALUE>;
	color?: DStateAwareOrValueMightBe<number>;
	alpha?: DStateAwareOrValueMightBe<number>;
	style?: DDynamicTextStyleOptions;
	align?: DTextBaseTextAlignOptions;
	formatter?: ( value: VALUE, caller: any ) => string;
	dynamic?: boolean;
}

/**
 * {@link DTextBase} events.
 */
export interface DTextBaseEvents<VALUE, EMITTER> extends DBaseEvents<EMITTER> {

}

/**
 * {@link DTextBase} "on" options.
 */
export interface DTextBaseOnOptions<VALUE, EMITTER> extends Partial<DTextBaseEvents<VALUE, EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DTextBase} options.
 */
export interface DTextBaseOptions<
	VALUE = unknown,
	THEME extends DThemeTextBase = DThemeTextBase,
	EMITTER = any
> extends DBaseOptions<THEME, EMITTER> {
	text?: DTextBaseTextOptions<VALUE>;
	mask?: boolean;
	on?: DTextBaseOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DTextBase} theme.
 */
export interface DThemeTextBase extends DThemeBase {
	getTextFormatter(): ( value: any, caller: any ) => string;

	/**
	 * Returns a new text value.
	 * Called to initialize a text value if a text value is not given.
	 */
	newTextValue(): any;

	/**
	 * Returns a text value.
	 * Called to get a text vale if there is no text value.
	 *
	 * @param state a state
	 */
	getTextValue( state: DBaseStateSet ): any;

	getTextAlignVertical(): DAlignVertical;
	getTextAlignHorizontal(): DAlignHorizontal;
	getTextStyleClipping(): boolean;
	isOverflowMaskEnabled(): boolean;

	/**
	 * Returns true if a dynamic text should be enabled.
	 */
	isTextDynamic(): boolean;
}

// Option parser
const toTextValue = <VALUE, THEME extends DThemeTextBase>(
	theme: DThemeTextBase,
	options: DTextBaseOptions<VALUE, THEME> | undefined
): DStateAwareOrValueMightBe<VALUE> => {
	const value = options?.text?.value;
	return ( value !== undefined ? value : theme.newTextValue() );
};

const toTextStyle = <VALUE, THEME extends DThemeTextBase>(
	theme: DThemeTextBase, options: DTextBaseOptions<VALUE, THEME> | undefined, state: DBaseStateSet
): DDynamicTextStyleOptions => {
	const style = options?.text?.style;
	if( style != null ) {
		const fill = style.fill ?? theme.getColor( state );
		const fontSize = style.fontSize ?? theme.getFontSize();
		const fontFamily = style.fontFamily ?? theme.getFontFamilly();
		const fontWeight = style.fontWeight ?? theme.getFontWeight();
		const fontStyle = style.fontStyle ?? theme.getFontStyle();
		const fontVariant = style.fontVariant ?? theme.getFontVariant();
		const clipping = style.clipping ?? theme.getTextStyleClipping();
		return {
			fill,
			fontSize,
			fontFamily,
			fontWeight,
			fontStyle,
			fontVariant,
			clipping
		};
	}

	return {
		fill: theme.getColor( state ),
		fontSize: theme.getFontSize(),
		fontFamily: theme.getFontFamilly(),
		fontWeight: theme.getFontWeight(),
		fontStyle: theme.getFontStyle(),
		fontVariant: theme.getFontVariant(),
		clipping: theme.getTextStyleClipping()
	};
};

const toTextAlign = <VALUE, THEME extends DThemeTextBase>(
	theme: DThemeTextBase, options?: DTextBaseOptions<VALUE, THEME>
): { vertical: DAlignVertical, horizontal: DAlignHorizontal } => {
	const align = options?.text?.align;
	if( align != null ) {
		const vertical = ( align.vertical != null ?
			( isString( align.vertical ) ? DAlignVertical[ align.vertical ] : align.vertical ) :
			theme.getTextAlignVertical()
		);
		const horizontal = ( align.horizontal != null ?
			( isString( align.horizontal ) ? DAlignHorizontal[ align.horizontal ] : align.horizontal ) :
			theme.getTextAlignHorizontal()
		);
		return {
			vertical,
			horizontal
		};
	}
	return {
		vertical: theme.getTextAlignVertical(),
		horizontal: theme.getTextAlignHorizontal()
	};
};

/**
 * A base class for UI classes with a text support.
 * See {@link DTextBaseEvents} for event defaults.
 */
export class DTextBase<
	VALUE = unknown,
	THEME extends DThemeTextBase = DThemeTextBase,
	OPTIONS extends DTextBaseOptions<VALUE, THEME> = DTextBaseOptions<VALUE, THEME>
> extends DBase<THEME, OPTIONS> {
	protected _text?: DDynamicText | Text | null;
	protected _textValue!: DStateAwareOrValueMightBe<VALUE>;
	protected _textValueComputed!: VALUE;
	protected _textColor!: DStateAwareOrValueMightBe<number>;
	protected _textAlpha!: DStateAwareOrValueMightBe<number>;
	protected _textStyle!: DDynamicTextStyleOptions;
	protected _textAlign!: {
		vertical: DAlignVertical,
		horizontal: DAlignHorizontal
	};
	protected _textFormatter!: ( value: VALUE, caller: any ) => string;
	protected _isOverflowMaskEnabled!: boolean;
	protected _overflowMask!: DBaseOverflowMaskSimple | null;
	protected _textDynamic!: boolean;

	protected init( options?: OPTIONS ): void {
		super.init( options );

		const theme = this.theme;
		this._textValue = toTextValue( theme, options );
		this._textValueComputed = this.computeTextValue();
		this._textColor = options?.text?.color;
		this._textAlpha = options?.text?.alpha;
		this._textStyle = toTextStyle( theme, options, this.state );
		this._textAlign = toTextAlign( theme, options );
		this._textFormatter = ( options?.text?.formatter ?? theme.getTextFormatter() );
		this._textDynamic = ( options?.text?.dynamic ?? theme.isTextDynamic() );
		this._isOverflowMaskEnabled = ( options?.mask ?? theme.isOverflowMaskEnabled() );
		this._overflowMask = null;
		this.onTextChange();
		this.createOrUpdateText();
	}

	set text( text: DStateAwareOrValueMightBe<VALUE> ) {
		if( this._textValue !== text ) {
			this._textValue = text;
			this.updateTextValue();
		}
	}

	get text(): DStateAwareOrValueMightBe<VALUE> {
		return this._textValue;
	}

	protected onTextChange() {
		// DO NOTHING
	}

	protected computeTextValue(): VALUE {
		const textValue = this._textValue;
		if( textValue !== undefined ) {
			if( isFunction( textValue ) ) {
				const result = textValue( this.state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return textValue;
			}
		}
		return this.theme.getTextValue( this.state ) as VALUE;
	}

	protected createOrUpdateText(): void {
		const formatted = this._textFormatter( this._textValueComputed, this );
		const text = this._text;
		if( text == null ) {
			if( 0 < formatted.length ) {
				const newText = this.createText( formatted );
				this._text = newText;
				this.addChild( newText );
				this.updateTextPosition( newText );
				if( this._isOverflowMaskEnabled ) {
					newText.mask = this.getOrCreateOverflowMask();
				}
				this.toDirty();
				DApplications.update( this );
			}
		} else {
			text.text = formatted;
			this.toDirty();
			DApplications.update( this );
		}
	}

	protected createText( formatted: string ): Text | DDynamicText {
		if( this._textDynamic ) {
			return new DDynamicText( formatted, this._textStyle );
		} else {
			const result = new Text( formatted, this._textStyle );
			result.texture.baseTexture.scaleMode = SCALE_MODES.NEAREST;
			result.resolution = DApplications.getResolution( this );
			return result;
		}
	}

	protected getOrCreateOverflowMask(): Graphics {
		if( this._overflowMask == null ) {
			this._overflowMask = new DBaseOverflowMaskSimple( this );
			this.addReflowable( this._overflowMask );
			this.toDirty();
		}
		return this._overflowMask;
	}

	protected updateTextPosition( text: DDynamicText | Text ): void {
		const align = this._textAlign;
		const padding = this._padding;
		const toRounded = this.toRounded;

		switch( align.horizontal ) {
		case DAlignHorizontal.LEFT:
			text.x = toRounded( padding.getLeft() );
			break;
		case DAlignHorizontal.CENTER:
			text.x = toRounded( ( this.width - text.width ) * 0.5 );
			break;
		case DAlignHorizontal.RIGHT:
			text.x = toRounded( this.width - text.width - padding.getRight() );
			break;
		}

		switch( align.vertical ) {
		case DAlignVertical.TOP:
			text.y = toRounded( padding.getTop() );
			break;
		case DAlignVertical.MIDDLE:
			text.y = toRounded( ( this.height - text.height ) * 0.5 );
			break;
		case DAlignVertical.BOTTOM:
			text.y = toRounded( this.height - text.height - padding.getBottom() );
			break;
		}
	}

	protected toRounded( this: unknown, value: number ): number {
		return Math.round( value );
	}

	protected getTextColor( theme: THEME, state: DBaseStateSet ): number {
		const color = this._textColor;
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
		return theme.getColor( state );
	}

	protected getTextAlpha( theme: THEME, state: DBaseStateSet ): number {
		const alpha = this._textAlpha;
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
		return theme.getAlpha( state );
	}

	protected updateTextColor( text: DDynamicText | Text ): void {
		const theme = this.theme;
		const state = this.state;
		text.style.fill = this.getTextColor( theme, state );
		text.alpha = this.getTextAlpha( theme, state );
	}

	protected updateTextValue(): void {
		const newTextValueComputed = this.computeTextValue();
		if( this._textValueComputed !== newTextValueComputed ) {
			this._textValueComputed = newTextValueComputed;
			this.onTextChange();
			this.createOrUpdateText();
		}
	}

	protected updateText(): void {
		const text = this._text;
		if( text != null ) {
			this.updateTextValue();
			this.updateTextPosition( text );
			this.updateTextColor( text );
		}
	}

	protected onReflow(): void {
		super.onReflow();
		this.updateText();
	}

	protected isRefitable( target: any ): target is DRefitable {
		return super.isRefitable( target ) ||
			(target != null && target === this._text);
	}

	protected applyTitle(): void {
		const text = this._text;
		if( this._title.length <= 0 && text && ("clipped" in text) && text.clipped ) {
			const layer = DApplications.getLayer( this );
			if( layer ) {
				layer.view.title = text.text;
			}
		} else {
			super.applyTitle();
		}
	}

	protected getType(): string {
		return "DTextBase";
	}

	destroy(): void {
		// Text
		const text = this._text;
		if( text != null ) {
			this._text = null;
			text.destroy();
		}

		// Overflow mask
		const overflowMask = this._overflowMask;
		if( overflowMask != null ) {
			this._overflowMask = null;
			overflowMask.destroy();
		}

		super.destroy();
	}
}
