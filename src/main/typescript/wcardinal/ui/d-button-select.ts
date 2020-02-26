/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogSelect, DDialogSelectOptions } from "./d-dialog-select";

export interface DButtonSelectOptions<
	VALUE extends unknown = unknown,
	THEME extends DThemeButtonSelect = DThemeButtonSelect
> extends DButtonOptions<VALUE | null, THEME> {
	dialog?: DDialogSelectOptions<VALUE | null>;
}

export interface DThemeButtonSelect extends DThemeButton {
	getTextFormatter(): ( value: unknown | null, caller: DButtonSelect ) => string;
	getTextValue( state: DBaseState ): unknown | null;
	newTextValue(): unknown | null;
}

export class DButtonSelect<
	VALUE extends unknown = unknown,
	THEME extends DThemeButtonSelect = DThemeButtonSelect,
	OPTIONS extends DButtonSelectOptions<VALUE | null, THEME> = DButtonSelectOptions<VALUE | null, THEME>
> extends DButton<VALUE | null, THEME, OPTIONS> {
	protected _dialog?: DDialogSelect<VALUE | null>;

	protected init( options?: OPTIONS ) {
		super.init( this.toOptions( options ) );

		this.on( "active", (): void => {
			const dialog = this.dialog;
			dialog.open().then((): void => {
				const newValue = dialog.value;
				const oldValue = this._textValueComputed;
				if( newValue !== oldValue ) {
					this.text = newValue;
					this.emit( "select", newValue, oldValue, this );
					this.emit( "change", this );
				}
			});
		});
	}

	get dialog(): DDialogSelect<VALUE | null> {
		let dialog = this._dialog;
		if( dialog == null ) {
			const options = this._options;
			dialog = new DDialogSelect( options && options.dialog );
			this._dialog = dialog;
		}
		return dialog;
	}

	protected toOptions( options?: OPTIONS ): OPTIONS | undefined {
		if( options ) {
			// Try to copy text.formatter to dialog.item.text.formatter at first
			let formatter = options.text?.formatter;
			if( formatter !== undefined ) {
				const dialog = options.dialog = options.dialog || {};
				const item = dialog.item = dialog.item || {};
				const text = item.text = item.text || {};
				if( text.formatter === undefined ) {
					text.formatter = formatter;
				}
			} else {
				// Try to copy dialog.item.text.formatter to text.formatter
				formatter = options.dialog?.item?.text?.formatter;
				if( formatter !== undefined ) {
					const text = options.text = options.text || {};
					if( text.formatter === undefined ) {
						text.formatter = formatter;
					}
				}
			}
		}
		return options;
	}

	get value(): VALUE | null {
		return this._textValueComputed;
	}

	set value( value: VALUE | null ) {
		this.text = value;
	}

	protected getType(): string {
		return "DButtonSelect";
	}
}
