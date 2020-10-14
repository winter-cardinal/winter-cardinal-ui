/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "./d-base-state-set";
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
export interface DThemeButtonDatetime extends DThemeButton {
	getTextFormatter(): ( value: Date, caller: DButtonDatetime ) => string;
	getTextValue( state: DBaseStateSet ): Date;
	newTextValue(): Date;
}

export class DButtonDatetime<
	THEME extends DThemeButtonDatetime = DThemeButtonDatetime,
	OPTIONS extends DButtonDatetimeOptions<THEME> = DButtonDatetimeOptions<THEME>
> extends DButton<Date, THEME, OPTIONS> {
	protected _dialog?: DDialogDatetime;
	protected _datetimeMask?: DPickerDatetimeMask;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this.on( "active", (): void => {
			const currentTime = this._textValueComputed.getTime();
			const dialog = this.dialog;
			dialog.current = new Date( currentTime );
			dialog.new = new Date( currentTime );
			dialog.page = new Date( currentTime );
			dialog.open().then((): void => {
				const dateNew = dialog.new;
				const dateCurrent = dialog.current;
				this.text = new Date( dateNew.getTime() );
				this.emit( "change", dateNew, dateCurrent, this );
			});
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
			if( options != null ) {
				dialog = new DDialogDatetime( options );
			} else {
				dialog = DDialogDatetimes.getInstance();
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	get value(): Date {
		return this._textValueComputed;
	}

	set value( value: Date ) {
		if( this._textValueComputed.getTime() !== value.getTime() ) {
			this.text = value;
		}
	}

	protected getType(): string {
		return "DButtonDatetime";
	}
}
