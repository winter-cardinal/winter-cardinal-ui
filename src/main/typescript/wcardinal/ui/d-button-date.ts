/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDate, DDialogDateOptions } from "./d-dialog-date";
import { DDialogDates } from "./d-dialog-dates";

/**
 * {@link DButtonDate} events.
 */
export interface DButtonDateEvents<EMITTER> extends DButtonEvents<Date, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newValue a newly selected value
	 * @param oldValue a previously selected value
	 * @param emitter an emitter
	 */
	change( newValue: Date, oldValue: Date, emitter: EMITTER ): void;
}

/**
 * {@link DButtonDate} "on" options.
 */
export interface DButtonDateOnOptions<EMITTER> extends Partial<DButtonDateEvents<EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DButtonDate} options.
 */
export interface DButtonDateOptions<
	THEME extends DThemeButtonDate = DThemeButtonDate,
	EMITTER = any
> extends DButtonOptions<Date, THEME, EMITTER> {
	dialog?: DDialogDateOptions;
	on?: DButtonDateOnOptions<EMITTER>;
}

/**
 * {@link DButtonDate} theme.
 */
export interface DThemeButtonDate extends DThemeButton<Date> {

}

export class DButtonDate<
	THEME extends DThemeButtonDate = DThemeButtonDate,
	OPTIONS extends DButtonDateOptions<THEME> = DButtonDateOptions<THEME>
> extends DButton<Date, THEME, OPTIONS> {
	protected _dialog?: DDialogDate;
	protected _dialogOptions?: DDialogDateOptions;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._dialogOptions = options && options.dialog;

		this.on( "active", (): void => {
			const currentTime = this._textValueComputed?.getTime() ?? Date.now();
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

	get dialog(): DDialogDate {
		let dialog = this._dialog;
		if( dialog == null ) {
			const dialogOptions = this._dialogOptions;
			if( dialogOptions != null ) {
				dialog = new DDialogDate( this._dialogOptions );
			} else {
				dialog = DDialogDates.getInstance();
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	get value(): Date {
		const textValueComputed = this._textValueComputed;
		if( textValueComputed !== undefined ) {
			return textValueComputed;
		}
		return new Date();
	}

	set value( value: Date ) {
		const textValueComputed = this._textValueComputed;
		if( textValueComputed === undefined || textValueComputed.getTime() !== value.getTime() ) {
			this.text = value;
		}
	}

	protected getType(): string {
		return "DButtonDate";
	}
}
