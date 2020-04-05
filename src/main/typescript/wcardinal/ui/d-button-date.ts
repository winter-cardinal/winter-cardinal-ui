/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDate, DDialogDateOptions } from "./d-dialog-date";
import { DDialogDates } from "./d-dialog-dates";
import { EventSupport } from "./decorator/event-support";

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
export interface DButtonDateOnOptions<EMITTER> extends Partial<DButtonDateEvents<EMITTER> & Record<string, Function>> {

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
export interface DThemeButtonDate extends DThemeButton {
	getTextFormatter(): ( value: Date, caller: DButtonDate ) => string;
	getTextValue( state: DBaseState ): Date;
	newTextValue(): Date;
}

@EventSupport
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

	// Event handlings
	on<E extends keyof DButtonDateEvents<this>>(
		event: E, handler: DButtonDateEvents<this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;
	on(): this { return this; }

	once<E extends keyof DButtonDateEvents<this>>(
		event: E, handler: DButtonDateEvents<this>[ E ], context?: any
	): this;
	once( event: string, handler: Function, context?: any ): this;
	once(): this { return this; }

	emit<E extends keyof DButtonDateEvents<this>>(
		event: E, ...args: Parameters<DButtonDateEvents<this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
	emit(): boolean { return true; }
}
