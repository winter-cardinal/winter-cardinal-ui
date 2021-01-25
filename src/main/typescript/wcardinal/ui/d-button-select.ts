/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogSelect, DDialogSelectOptions } from "./d-dialog-select";

/**
 * A dialog to select values.
 */
export interface DButtonSelectDialog<VALUE> {
	readonly value: VALUE | null;
	open(): Promise<void>;
}

/**
 * A function to retrieve a selected value from a dialog.
 */
export type DButtonSelectGetter<VALUE, DIALOG> = ( dialog: DIALOG ) => VALUE | null;

/**
 * A function to set a selecte value to a dialog.
 * Called before opening a dialog.
 */
export type DButtonSelectSetter<VALUE, DIALOG> = ( dialog: DIALOG, value: VALUE | null ) => void;

/**
 * {@link DButtonSelect} events.
 */
export interface DButtonSelectEvents<VALUE, EMITTER> extends DButtonEvents<VALUE, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newValue a newly selected value
	 * @param oldValue a previously selected value
	 * @param emitter an emitter
	 */
	change( newValue: VALUE | null, oldValue: VALUE | null, emitter: EMITTER ): void;
}

/**
 * {@link DButtonSelect} "on" options.
 */
export interface DButtonSelectOnOptions<VALUE, EMITTER> extends Partial<DButtonSelectEvents<VALUE, EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DButtonSelect} options.
 */
export interface DButtonSelectOptions<
	VALUE extends unknown = unknown,
	DIALOG_VALUE extends unknown = unknown,
	DIALOG extends DButtonSelectDialog<DIALOG_VALUE> = DButtonSelectDialog<DIALOG_VALUE>,
	THEME extends DThemeButtonSelect<VALUE> = DThemeButtonSelect<VALUE>,
	EMITTER = any
> extends DButtonOptions<VALUE | null, THEME, EMITTER> {
	/**
	 * A function to retrieve a selected value from a dialog.
	 */
	getter?: DButtonSelectGetter<VALUE, DIALOG>;

	/**
	 * A function to set a selected value to a dialog.
	 * Called before opening a dialog.
	 */
	setter?: DButtonSelectSetter<VALUE, DIALOG>;

	/**
	 * A dialog to select values.
	 */
	dialog?: DDialogSelectOptions<DIALOG_VALUE> | DIALOG;

	on?: DButtonSelectOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DButtonSelect} theme.
 */
export interface DThemeButtonSelect<VALUE = unknown> extends DThemeButton<VALUE | null> {

}

const defaultGetter = ( dialog: DButtonSelectDialog<any> ): any => {
	// Assumes the dialog.value is VALUE.
	return dialog.value;
};

const defaultSetter = (): void => {
	// DO NOTHING
};

const toOptions = <
	OPTIONS extends DButtonSelectOptions<any, any, any, any>
>( options?: OPTIONS ): OPTIONS | undefined => {
	if( options ) {
		// Try to copy text.formatter to dialog.item.text.formatter at first
		const formatter = options.text?.formatter;
		if( formatter !== undefined ) {
			let dialog = options.dialog;
			if( ! (dialog && "open" in dialog) ) {
				dialog = dialog || {};
				const item = dialog.item = dialog.item || {};
				const text = item.text = item.text || {};
				if( text.formatter === undefined ) {
					// Assumes formatter is ( value: DIALOG_VALUE | null, caller: any ) => string.
					text.formatter = formatter as any;
				}
			}
		} else {
			// Try to copy dialog.item.text.formatter to text.formatter
			const dialog = options.dialog;
			if( ! (dialog && "open" in dialog) ) {
				const dialogFormatter = dialog?.item?.text?.formatter;
				if( dialogFormatter !== undefined ) {
					const text = options.text = options.text || {};
					if( text.formatter === undefined ) {
						// Assumes dialogFormatter is ( value: VALUE | null, caller: any ) => string.
						text.formatter = dialogFormatter as any;
					}
				}
			}
		}
	}
	return options;
};

export class DButtonSelect<
	VALUE extends unknown = unknown,
	DIALOG_VALUE extends unknown = unknown,
	DIALOG extends DButtonSelectDialog<DIALOG_VALUE> = DButtonSelectDialog<DIALOG_VALUE>,
	THEME extends DThemeButtonSelect<VALUE> = DThemeButtonSelect<VALUE>,
	OPTIONS extends DButtonSelectOptions<VALUE, DIALOG_VALUE, DIALOG, THEME>
		= DButtonSelectOptions<VALUE, DIALOG_VALUE, DIALOG, THEME>
> extends DButton<VALUE | null, THEME, OPTIONS> {
	protected _dialog?: DIALOG;
	protected _dialogGetter: DButtonSelectGetter<VALUE, DIALOG>;
	protected _dialogSetter: DButtonSelectSetter<VALUE, DIALOG>;

	constructor( options?: OPTIONS ) {
		super( toOptions( options ) );
		this._dialogGetter = options?.getter ?? defaultGetter;
		this._dialogSetter = options?.setter ?? defaultSetter;
	}

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		super.onActivate( e );
		const dialog = this.dialog;
		const oldValue = this._textValueComputed ?? null;
		this._dialogSetter( dialog, oldValue );
		dialog.open().then((): void => {
			const newValue = this._dialogGetter( dialog );
			if( newValue !== oldValue ) {
				this.text = newValue;
				this.emit( "change", newValue, oldValue, this );
			}
		});
	}

	get dialog(): DIALOG {
		let dialog = this._dialog;
		if( dialog == null ) {
			const options = this._options?.dialog;
			if( options && ("open" in options) ) {
				dialog = options;
			} else {
				// Assumes DIALOG === DDialogSelect<DIALOG_VALUE>.
				dialog = new DDialogSelect<DIALOG_VALUE>( options ) as unknown as DIALOG;
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	get value(): VALUE | null {
		return this._textValueComputed ?? null;
	}

	set value( value: VALUE | null ) {
		this.text = value;
	}

	protected getType(): string {
		return "DButtonSelect";
	}
}
