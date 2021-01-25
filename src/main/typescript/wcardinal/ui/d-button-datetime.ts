/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDatetime, DDialogDatetimeOptions } from "./d-dialog-datetime";
import { DDialogDatetimes } from "./d-dialog-datetimes";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerDatetimes } from "./d-picker-datetimes";

/**
 * {@link DButtonDatetime} events.
 */
export interface DButtonDatetimeEvents<EMITTER> extends DButtonEvents<Date, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param emitter an emitter
	 */
	change( newValue: Date, oldValue: Date, emitter: EMITTER ): void;
}

/**
 * {@link DButtonDatetime} "on" options.
 */
export interface DButtonDatetimeOnOptions<EMITTER> extends Partial<DButtonDatetimeEvents<EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DButtonDatetime} options.
 */
export interface DButtonDatetimeOptions<
	THEME extends DThemeButtonDatetime = DThemeButtonDatetime,
	EMITTER = any
> extends DButtonOptions<Date, THEME, EMITTER> {
	dialog?: DDialogDatetimeOptions;
	on?: DButtonDatetimeOnOptions<EMITTER>;
}

/**
 * {@link DButtonDatetime} theme.
 */
export interface DThemeButtonDatetime extends DThemeButton<Date> {

}

export class DButtonDatetime<
	THEME extends DThemeButtonDatetime = DThemeButtonDatetime,
	OPTIONS extends DButtonDatetimeOptions<THEME> = DButtonDatetimeOptions<THEME>
> extends DButton<Date, THEME, OPTIONS> {
	protected _dialog?: DDialogDatetime;
	protected _datetimeMask?: DPickerDatetimeMask;

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		super.onActivate( e );
		const value = this._textValueComputed?.getTime() ?? Date.now();
		const dialog = this.dialog;
		dialog.current = new Date( value );
		dialog.new = new Date( value );
		dialog.page = new Date( value );
		dialog.open().then((): void => {
			const newValue = dialog.new;
			const oldValue = dialog.current;
			this.text = new Date( newValue.getTime() );
			this.emit( "change", newValue, oldValue, this );
		});
	}

	getDatetimeMask(): DPickerDatetimeMask {
		let result = this._datetimeMask;
		if( result == null ) {
			result = DPickerDatetimes.toMask( this._options?.dialog?.picker );
			this._datetimeMask = result;
		}
		return result;
	}

	get dialog(): DDialogDatetime {
		let dialog = this._dialog;
		if( dialog == null ) {
			const options = this._options?.dialog;
			if( options ) {
				dialog = new DDialogDatetime( options );
			} else {
				dialog = DDialogDatetimes.getInstance();
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	get value(): Date {
		return this._textValueComputed ?? new Date();
	}

	set value( value: Date ) {
		const textValueComputed = this._textValueComputed;
		if( textValueComputed === undefined || textValueComputed.getTime() !== value.getTime() ) {
			this.text = value;
		}
	}

	protected getType(): string {
		return "DButtonDatetime";
	}
}
