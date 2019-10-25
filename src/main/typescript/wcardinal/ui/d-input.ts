/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point, Rectangle, Renderer, Text } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DControllers } from "./d-controllers";
import { DDynamicText } from "./d-dynamic-text";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { utilIsString } from "./util/util-is-string";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

export interface DInputOptions<
	VALUE = unknown,
	THEME extends DThemeInput = DThemeInput
> extends DImageBaseOptions<VALUE, THEME> {
	description?: string;
	editing?: {
		formatter?: ( value: VALUE ) => string;
		unformatter?: ( text: string ) => VALUE;
		validator?: ( value: VALUE ) => string | null;
	};
}

export interface DThemeInput extends DThemeImageBase {
	getEditingFormatter(): ( value: any, caller: any ) => string;
	getEditingUnformatter(): ( text: string, caller: any ) => any;
	getEditingValidator(): ( value: any, caller: any ) => unknown;
}

export abstract class DInput<
	VALUE = unknown,
	THEME extends DThemeInput = DThemeInput,
	OPTIONS extends DInputOptions<VALUE, THEME> = DInputOptions<VALUE, THEME>
> extends DImageBase<VALUE, THEME, OPTIONS> {
	protected static _input: HTMLInputElement | null = null;
	protected static _clipper: HTMLDivElement | null = null;
	protected _isInputShown!: boolean;
	protected _inputRect!: Rectangle | null;
	protected _isInputSelected!: boolean;
	protected _isStarted!: boolean;
	protected _clipperRect!: Rectangle | null;
	protected _onInputKeyDownBound!: ( e: KeyboardEvent ) => void;
	protected _onInputBlurBound!: ( e: FocusEvent ) => void;
	protected _updateInputBound!: () => void;
	protected _onInputChangeBound!: ( e: Event ) => void;
	protected _onInputInputBound!: ( e: Event ) => void;
	protected _onPreRenderBound!: () => void;
	protected _updateInputBoundRenderer!: Renderer | null;
	protected _description!: string;
	protected _editingFormatter!: ( value: VALUE, caller: DInput<VALUE> ) => string;
	protected _editingUnformatter!: ( text: string, caller: DInput<VALUE> ) => VALUE;
	protected _editingValidator!: ( value: VALUE, caller: DInput<VALUE> ) => unknown;
	protected _editingValidationResult!: unknown;

	protected init( options?: OPTIONS ) {
		this._editingValidationResult = null;
		this._editingValidator = ( options && options.editing && options.editing.validator ) ||
			this.theme.getEditingValidator();

		super.init( options );

		this._isInputShown = false;
		this._inputRect = null;
		this._isInputSelected = false;
		this._isStarted = false;
		this._clipperRect = null;

		this.cursor = "text";

		this._description = ( options && options.description ) || "";
		this._editingFormatter = ( options && options.editing && options.editing.formatter ) ||
			this.theme.getEditingFormatter();
		this._editingUnformatter = ( options && options.editing && options.editing.unformatter ) ||
			this.theme.getEditingUnformatter();

		this._onInputKeyDownBound = ( e: KeyboardEvent ): void => {
			this.onInputKeyDown( e );
		};

		this._onInputBlurBound = ( e: FocusEvent ): void => {
			this.onInputBlur( e );
		};

		this._updateInputBound = (): void => {
			this.updateInput();
		};

		this._onInputChangeBound = (): void => {
			this.onInputChange();
		};

		this._onInputInputBound = ( e: Event ): void => {
			this.onInputInput( e );
		};

		this._onPreRenderBound = (): void => {
			this.onPreRender();
		};

		this._updateInputBoundRenderer = null;
	}

	get value(): VALUE {
		return this._textValueComputed;
	}

	set value( value: VALUE ) {
		this.text = value;
	}

	protected onTextChange(): void {
		super.onTextChange();
		this.validate();
	}

	validate(): unknown {
		const result = this._editingValidator( this._textValueComputed, this );
		if( this._editingValidationResult !== result ) {
			this._editingValidationResult = result;
			this.setInvalid( result != null );
			if( this.isHovered() ) {
				this.applyTitle();
			}
		}
		return result;
	}

	protected applyTitle(): void {
		const editingValidationResult = this._editingValidationResult;
		if( utilIsString( editingValidationResult ) ) {
			DApplications.getInstance().view.title = editingValidationResult;
		} else {
			super.applyTitle();
		}
	}

	protected onFocused(): void {
		super.onFocused();
		this.start();
	}

	protected onBlured(): void {
		super.onBlured();
		if( this._isInputShown ) {
			this.onInputChange();
		}
		this.cancel();
	}

	protected onPreRender(): void {
		if( this._isStarted ) {
			this._isStarted = false;
			this.start_( false );
		}
	}

	start(): void {
		if( ! this.isDisabled() && this._isStarted !== true ) {
			// This method might be invoked in the `pointerown` event handler.
			// Because of this, focusing on an input element in this method invokes
			// the `onInputBlur` immediately. Thus, must not call the `start` here.
			this._isStarted = true;
			DApplications.getInstance().renderer.once(
				"prerender", this._onPreRenderBound
			);
			DApplications.update();
		}
	}

	protected start_( update?: boolean ): void {
		if( ! this._isInputShown ) {
			this._isInputShown = true;

			const text = this._text;
			if( text != null ) {
				text.visible = false;
			}

			const app = DApplications.getInstance();
			const clipper = this.getClipper();
			if( clipper != null ) {
				const input = this.getInput( clipper );
				if( input != null ) {
					const resolution = app.renderer.resolution;
					const inputRect = this.getInputRect( resolution );
					const clipperRect = this.getClipperRect( inputRect, resolution );
					this.initInput( input, clipper, inputRect, clipperRect );

					const updateInputBound = this._updateInputBound;
					const renderer = this._updateInputBoundRenderer;
					if( renderer != null ) {
						renderer.off( "postrender", updateInputBound );
					}
					this._updateInputBoundRenderer = app.renderer;
					app.renderer.on( "postrender", updateInputBound );

					clipper.style.display = "";
					input.focus();
					clipper.scrollTop = 0;
					clipper.scrollLeft = 0;

					if( this._isInputSelected ) {
						this._isInputSelected = false;
						input.select();
					}
				}
			}
			if( update !== false ) {
				DApplications.update();
			}
		}
	}

	protected createText( formatted: string ): Text | DDynamicText {
		const result = super.createText( formatted );
		if( this._isInputShown ) {
			result.visible = false;
		}
		return result;
	}

	/**
	 * Please note that this method does not update transforms.
	 *
	 * @param inputRect
	 */
	protected getClipperRect( inputRect: Rectangle, resolution: number ) {
		const rect = this._clipperRect = ( this._clipperRect != null ? this._clipperRect : new Rectangle() );
		rect.copyFrom( inputRect );

		const p = new Point( 0, 0 );
		let current = this.parent;
		while( current instanceof DBase ) {
			p.set( 0, 0 );
			current.toGlobal( p, p, false );
			let x = p.x;
			let y = p.y;

			p.set( current.width, current.height );
			current.toGlobal( p, p, true );
			const w = p.x - x;
			const h = p.y - y;

			x = ( (x * resolution) | 0 ) / resolution;
			y = ( (y * resolution) | 0 ) / resolution;

			const x0 = rect.x;
			const y0 = rect.y;
			const x1 = rect.x + rect.width;
			const y1 = rect.y + rect.height;

			rect.x = Math.min( Math.max( x0, x ), x + w );
			rect.y = Math.min( Math.max( y0, y ), y + h );

			rect.width = Math.min( Math.max( x1, x ), x + w ) - rect.x;
			rect.height = Math.min( Math.max( y1, y ), y + h ) - rect.y;

			current = current.parent;
		}
		return rect;
	}

	/**
	 * Please note that this method does not update transforms.
	 */
	protected getInputRect( resolution: number ) {
		const rect = this._inputRect = ( this._inputRect != null ? this._inputRect : new Rectangle() );

		const p = new Point( 0, 0 );
		this.toGlobal( p, p, false );
		rect.x = p.x;
		rect.y = p.y;

		p.set( this.width, this.height );
		this.toGlobal( p, p, true );
		rect.width = p.x - rect.x;
		rect.height = p.y - rect.y;

		// Rounds pixels as Pixi.js does
		rect.x = ( (rect.x * resolution) | 0 ) / resolution;
		rect.y = ( (rect.y * resolution) | 0 ) / resolution;

		return rect;
	}

	protected initInput(
		input: HTMLInputElement, clipper: HTMLDivElement,
		inputRect: Rectangle, clipperRect: Rectangle
	) {
		input.type = this.getInputType();
		input.value = this._editingFormatter( this._textValueComputed, this );
		input.addEventListener( "keydown", this._onInputKeyDownBound );
		input.addEventListener( "blur", this._onInputBlurBound );
		input.addEventListener( "change", this._onInputChangeBound );
		input.addEventListener( "input", this._onInputInputBound );

		// Style
		const theme = this.theme;
		const state = this.state;
		clipper.setAttribute( "style", this.getClipperStyle( state, theme, inputRect, clipperRect ) );
		input.setAttribute( "style", this.getInputStyle( state, theme, inputRect, clipperRect ) );

		// ReadOnly
		if( this.isReadOnly() ) {
			input.setAttribute( "readonly", "readonly" );
		} else {
			input.removeAttribute( "readonly" );
		}

		// Disabled
		if( this.isDisabled() ) {
			input.setAttribute( "disabled", "disabled" );
		} else {
			input.removeAttribute( "disabled" );
		}
	}

	cancel(): void {
		if( this._isInputShown ) {
			this._isInputShown = false;

			const text = this._text;
			if( text != null ) {
				text.visible = true;
			}

			const input = DInput._input;
			if( input != null ) {
				input.removeEventListener( "keydown", this._onInputKeyDownBound );
				input.removeEventListener( "blur", this._onInputBlurBound );
				input.removeEventListener( "change", this._onInputChangeBound );
				input.removeEventListener( "input", this._onInputInputBound );
				input.type = "text";
				this.resetSelection( input );
			}

			const clipper = DInput._clipper;
			if( clipper != null ) {
				clipper.style.display = "none";
			}

			const renderer = this._updateInputBoundRenderer;
			if( renderer != null ) {
				this._updateInputBoundRenderer = null;
				renderer.off( "postrender", this._updateInputBound );
			}

			this._isInputSelected = false;

			const application = DApplications.getInstance();
			const view = application.view;
			view.focus();

			const interactionManager = application.renderer.plugins.interaction;
			if( this.containsPoint( interactionManager.mouse.global ) && ! this.isHovered() ) {
				this.setHovered( true );
				view.style.cursor = this.cursor;
			}

			DApplications.update();
		}
	}

	protected resetSelection( input: HTMLInputElement ) {
		input.setSelectionRange( input.value.length, input.value.length, "backward" );
	}

	protected getInput( clipper: HTMLDivElement ): HTMLInputElement | null {
		if( DInput._input == null ) {
			clipper.appendChild( DInput._input = this.createInput() );
		}
		return DInput._input;
	}

	protected createInput(): HTMLInputElement {
		const result = document.createElement( "input" );
		result.setAttribute( "spellcheck", "false" );
		return result;
	}

	protected getClipper(): HTMLDivElement | null {
		if( DInput._clipper == null ) {
			const clipper = DInput._clipper = this.createClipper();
			DApplications.getInstance().getRootElement().appendChild( clipper );
		}
		return DInput._clipper;
	}

	protected createClipper(): HTMLDivElement {
		return document.createElement( "div" );
	}

	protected getInputStyleBackground( state: DBaseState, theme: DThemeInput ): string {
		return `background-color: transparent;`;
	}

	protected getInputStyleBorder( state: DBaseState, theme: DThemeInput ): string {
		return `border: none; box-sizing: border-box;`;
	}

	protected getInputStylePadding( state: DBaseState, theme: DThemeInput, inputRect: Rectangle ): string {
		const paddingTop = theme.getPaddingTop();
		const paddingRight = theme.getPaddingRight();
		const paddingBottom = theme.getPaddingBottom();
		const paddingLeft = theme.getPaddingLeft();
		return `padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;`;
	}

	protected getInputStyleOutline( state: DBaseState, theme: DThemeInput ): string {
		return `outline: none;`;
	}

	protected getInputStylePosition(
		state: DBaseState, theme: DThemeInput,
		inputRect: Rectangle, clipperRect: Rectangle
	): string {
		return `position: absolute;` +
			`left: ${inputRect.x - clipperRect.x}px;` +
			`top: ${inputRect.y - clipperRect.y}px;` +
			`width: ${inputRect.width}px;` +
			`height: ${inputRect.height}px;` +
			`line-height: ${inputRect.height}px;`;
	}

	protected getInputStyleText( state: DBaseState, theme: DThemeInput ): string {
		return `font-family: ${theme.getFontFamilly()};` +
			`font-size: ${theme.getFontSize()}px;` +
			`color: #${theme.getColor( state ).toString( 16 )};`;
	}

	protected getInputStyleMargin( state: DBaseState, theme: DThemeInput ): string {
		return "margin: 0;";
	}

	protected getInputStyle(
		state: DBaseState, theme: DThemeInput,
		inputRect: Rectangle, clipperRect: Rectangle
	): string {
		return this.getInputStylePosition( state, theme, inputRect, clipperRect ) +
			this.getInputStyleMargin( state, theme ) +
			this.getInputStyleText( state, theme ) +
			this.getInputStyleBackground( state, theme ) +
			this.getInputStyleBorder( state, theme ) +
			this.getInputStylePadding( state, theme, inputRect ) +
			this.getInputStyleOutline( state, theme );
	}

	protected getClipperStylePosition(
		state: DBaseState, theme: DThemeInput,
		inputRect: Rectangle, clipperRect: Rectangle
	): string {
		return `position: absolute;` +
			`left: ${clipperRect.x}px;` +
			`top: ${clipperRect.y}px;` +
			`width: ${clipperRect.width}px;` +
			`height: ${clipperRect.height}px;` +
			`line-height: ${inputRect.height}px;`;
	}

	protected getClipperStyle(
		state: DBaseState, theme: DThemeInput,
		inputRect: Rectangle, clipperRect: Rectangle
	) {
		return `overflow: hidden; outline: none;` +
			`padding: 0; margin: 0; border: none; background-color: transparent;` +
			this.getClipperStylePosition( state, theme, inputRect, clipperRect );
	}

	protected onInputKeyDown( e: KeyboardEvent ) {
		if( UtilKeyboardEvent.isFocusKey( e ) ) {
			this.end();

			const focusController = DControllers.getFocusController();
			const direction = UtilKeyboardEvent.getFocusDirection( e );
			const focusable = focusController.findFocusable( this, false, false, direction );
			if( focusable != null ) {
				DApplications.getInstance().view.focus();
				focusController.setFocused( focusable, true, true );
				e.preventDefault();
				e.stopImmediatePropagation();
			}
		} else if( UtilKeyboardEvent.isOkKey( e ) ) {
			this.end();
			this.emit( "enter", this );
		} else if( UtilKeyboardEvent.isCancelKey( e ) ) {
			this.cancel();
		}
	}

	protected onInputBlur( e: FocusEvent ) {
		this.end();
	}

	end(): void {
		this.onInputChange();
		this.cancel();
	}

	protected onInputInput( e: Event ) {
		if( e.target instanceof HTMLInputElement ) {
			this.emit( "input", this.toValue( e.target.value ), this );
		}
	}

	protected onInputChange() {
		if( this._isInputShown ) {
			const input = DInput._input;
			if( input != null ) {
				const newValue = this.toValue( input.value );
				const oldValue = this._textValueComputed;
				if( oldValue !== newValue ) {
					this.text = newValue;
					this.onTextValueChange( newValue, oldValue );
				}
			}
		}
	}

	protected onTextValueChange( newValue: VALUE, oldValue: VALUE ): void {
		this.validate();
		this.emit( "change", newValue, oldValue, this );
	}

	select(): this {
		const input = DInput._input;
		if( input != null && this._isInputShown ) {
			input.select();
		} else {
			this._isInputSelected = true;
		}
		return this;
	}

	protected updateInput() {
		if( this._isInputShown ) {
			if( this.worldVisible ) {
				const input = DInput._input;
				const clipper = DInput._clipper;
				if( input != null && clipper != null ) {
					const resolution = DApplications.getInstance().renderer.resolution;
					const inputRect = this.getInputRect( resolution );
					const clipperRect = this.getClipperRect( inputRect, resolution );
					const theme = this.theme;
					const state = this.state;
					input.setAttribute( "style", this.getInputStyle( state, theme, inputRect, clipperRect ) );
					clipper.setAttribute( "style", this.getClipperStyle( state, theme, inputRect, clipperRect ) );
				}
			} else {
				this.cancel();
			}
		}
	}

	protected onDownThis( e: InteractionEvent ): void {
		if( this.isFocused() ) {
			this.start();
		}
		super.onDownThis( e );
	}

	protected abstract toValue( valueAsString: string ): VALUE;
	protected abstract getInputType(): string;
}
