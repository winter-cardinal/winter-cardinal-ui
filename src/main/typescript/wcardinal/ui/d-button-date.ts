/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonOn, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDate, DDialogDateOptions } from "./d-dialog-date";
import { DDialogDates } from "./d-dialog-dates";

/**
 * Event handlers.
 */
export interface DButtonDateOn<SELF> extends DButtonOn<Date, SELF> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newValue a newly selected value
	 * @param oldValue a previously selected value
	 * @param self this
	 */
	change( newValue: Date, oldValue: Date, self: SELF ): void;
}

/**
 * Mappings of event names and handlers.
 */
export interface DButtonDateOnOptions<SELF> extends Partial<DButtonDateOn<SELF> & Record<string, Function>> {

}

export interface DButtonDateOptions<
	THEME extends DThemeButtonDate = DThemeButtonDate,
	SELF = any
> extends DButtonOptions<Date, THEME, SELF> {
	dialog?: DDialogDateOptions;
	on?: DButtonDateOnOptions<SELF>;
}

export interface DThemeButtonDate extends DThemeButton {
	getTextFormatter(): ( value: Date, caller: DButtonDate ) => string;
	getTextValue( state: DBaseState ): Date;
	newTextValue(): Date;
}

export interface DButtonDate {
	on<E extends keyof DButtonDateOn<this>>(
		event: E, handler: DButtonDateOn<this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;

	emit<E extends keyof DButtonDateOn<this>>(
		event: E, ...args: Parameters<DButtonDateOn<this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
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
		return this._textValueComputed;
	}

	set value( value: Date ) {
		if( this._textValueComputed.getTime() !== value.getTime() ) {
			this.text = value;
		}
	}

	protected getType(): string {
		return "DButtonDate";
	}
}
