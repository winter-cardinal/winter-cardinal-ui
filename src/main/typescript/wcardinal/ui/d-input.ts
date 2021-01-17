/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Text } from "pixi.js";
import { DApplications } from "./d-applications";
import { DDynamicText } from "./d-dynamic-text";
import { DHtmlElement, DHtmlElementOptions, DThemeHtmlElement } from "./d-html-element";
import { isString } from "./util/is-string";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

export interface DInputEditingOptions<VALUE = unknown> {
	formatter?: ( value: VALUE ) => string;
	unformatter?: ( text: string ) => VALUE;
	validator?: ( value: VALUE ) => string | null;
}

export interface DInputOptions<
	VALUE = unknown,
	THEME extends DThemeInput<VALUE> = DThemeInput<VALUE>
> extends DHtmlElementOptions<VALUE, HTMLInputElement, THEME> {
	description?: string;
	editing?: DInputEditingOptions<VALUE>;
}

export interface DThemeInput<VALUE> extends DThemeHtmlElement<VALUE, HTMLInputElement> {
	getEditingFormatter(): ( value: VALUE, caller: any ) => string;
	getEditingUnformatter(): ( text: string, caller: any ) => VALUE;
	getEditingValidator(): ( value: VALUE, caller: any ) => string | null;
}

export abstract class DInput<
	VALUE = unknown,
	THEME extends DThemeInput<VALUE> = DThemeInput<VALUE>,
	OPTIONS extends DInputOptions<VALUE, THEME> = DInputOptions<VALUE, THEME>
> extends DHtmlElement<VALUE, HTMLInputElement, THEME, OPTIONS> {
	protected _description!: string;

	protected _onInputKeyDownBound!: ( e: KeyboardEvent ) => void;
	protected _onInputChangeBound!: ( e: Event ) => void;
	protected _onInputInputBound!: ( e: Event ) => void;

	protected _editingFormatter!: ( value: VALUE, caller: any ) => string;
	protected _editingUnformatter!: ( text: string, caller: any ) => VALUE;
	protected _editingValidator!: ( value: VALUE, caller: any ) => string | null;
	protected _editingValidationResult!: unknown;

	protected init( options?: OPTIONS ) {
		this._editingValidationResult = null;
		this._editingValidator = options?.editing?.validator ?? this.theme.getEditingValidator();

		super.init( options );

		this._description = options?.description ?? "";

		this._editingFormatter = options?.editing?.formatter ?? ( options?.text?.formatter ?? this.theme.getEditingFormatter() );
		this._editingUnformatter = options?.editing?.unformatter ?? this.theme.getEditingUnformatter();

		this._onInputKeyDownBound = ( e: KeyboardEvent ): void => {
			this.onInputKeyDown( e );
		};
		this._onInputChangeBound = (): void => {
			this.onInputChange();
		};
		this._onInputInputBound = ( e: Event ): void => {
			this.onInputInput( e );
		};
	}

	get value(): VALUE {
		return this._textValueComputed!;
	}

	set value( value: VALUE ) {
		this.text = value;
	}

	protected createText( formatted: string ): Text | DDynamicText {
		const result = super.createText( formatted );
		if( this._isElementShown ) {
			result.visible = false;
		}
		return result;
	}

	protected onTextChange(): void {
		super.onTextChange();
		this.validate();
	}

	validate(): string | null {
		const textValueComputed = this._textValueComputed;
		if( textValueComputed !== undefined ) {
			const result = this._editingValidator( textValueComputed, this );
			if( this._editingValidationResult !== result ) {
				this._editingValidationResult = result;
				this.state.isInvalid = ( result != null );
				if( this.state.isHovered ) {
					this.applyTitle();
				}
			}
			return result;
		}
		return null;
	}

	protected applyTitle(): void {
		const editingValidationResult = this._editingValidationResult;
		if( isString( editingValidationResult ) ) {
			const layer = DApplications.getLayer( this );
			if( layer ) {
				layer.view.title = editingValidationResult;
			}
		} else {
			super.applyTitle();
		}
	}

	protected onStart(): void {
		super.onStart();

		const text = this._text;
		if( text != null ) {
			text.visible = false;
		}
	}

	protected onCancel(): void {
		super.onCancel();

		const text = this._text;
		if( text != null ) {
			text.visible = true;
		}
	}

	protected onEnd(): void {
		super.onEnd();
		this.onInputChange();
	}

	protected onElementAttached(
		element: HTMLInputElement, before: HTMLDivElement | null, after: HTMLDivElement | null
	): void {
		super.onElementAttached( element, before, after );
		element.type = this.getInputType();
		const textValueComputed = this._textValueComputed;
		element.value = ( textValueComputed !== undefined ?
			this._editingFormatter( textValueComputed, this ) : ""
		);
		element.addEventListener( "keydown", this._onInputKeyDownBound );
		element.addEventListener( "change", this._onInputChangeBound );
		element.addEventListener( "input", this._onInputInputBound );
	}

	protected onElementDetached(
		element: HTMLInputElement, before: HTMLDivElement | null, after: HTMLDivElement | null
	): void {
		super.onElementDetached( element, before, after );
		element.removeEventListener( "keydown", this._onInputKeyDownBound );
		element.removeEventListener( "change", this._onInputChangeBound );
		element.removeEventListener( "input", this._onInputInputBound );
	}

	protected onInputKeyDown( e: KeyboardEvent ) {
		if( UtilKeyboardEvent.isOkKey( e ) ) {
			this.end();
			this.emit( "enter", this );
		} else if( UtilKeyboardEvent.isCancelKey( e ) ) {
			this.cancel();
		}
	}

	protected onInputChange() {
		if( this._isElementShown ) {
			const element = this._element;
			if( element != null ) {
				const newValue = this.toValue( element.value );
				const oldValue = this._textValueComputed;
				if( oldValue !== newValue ) {
					this.text = newValue;
					this.emit( "change", newValue, oldValue, this );
				}
			}
		}
	}

	protected onInputInput( e: Event ) {
		if( e.target instanceof HTMLInputElement ) {
			this.emit( "input", this.toValue( e.target.value ), this );
		}
	}

	protected onDownThis( e: interaction.InteractionEvent ): void {
		if( this.state.isFocused ) {
			this.start();
		}
		super.onDownThis( e );
	}

	protected getType(): string {
		return "DInput";
	}

	protected abstract toValue( valueAsString: string ): VALUE;
	protected abstract getInputType(): string;
}
