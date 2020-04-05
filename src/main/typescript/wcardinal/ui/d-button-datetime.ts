/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDatetime, DDialogDatetimeOptions } from "./d-dialog-datetime";
import { DDialogDatetimes } from "./d-dialog-datetimes";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerDatetimes } from "./d-picker-datetimes";
import { EventSupport } from "./decorator/event-support";

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
export interface DButtonDatetimeOnOptions<EMITTER>
	extends Partial<DButtonDatetimeEvents<EMITTER> & Record<string, Function>> {

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
	getTextValue( state: DBaseState ): Date;
	newTextValue(): Date;
}

@EventSupport
export class DButtonDatetime<
	THEME extends DThemeButtonDatetime = DThemeButtonDatetime,
	OPTIONS extends DButtonDatetimeOptions<THEME> = DButtonDatetimeOptions<THEME>
> extends DButton<Date, THEME, OPTIONS> {
	protected _dialog?: DDialogDatetime;
	protected _dialogOptions?: DDialogDatetimeOptions;
	protected _datetimeMask!: DPickerDatetimeMask;

	protected init( options?: OPTIONS ) {
		this._dialogOptions = options && options.dialog;
		this._datetimeMask = DPickerDatetimes.toMask( options && options.dialog && options.dialog.picker );

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
		return this._datetimeMask;
	}

	get dialog(): DDialogDatetime {
		let dialog = this._dialog;
		if( dialog == null ) {
			const dialogOptions = this._dialogOptions;
			if( dialogOptions != null ) {
				dialog = new DDialogDatetime( this._dialogOptions );
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

	// Event handlings
	on<E extends keyof DButtonDatetimeEvents<this>>(
		event: E, handler: DButtonDatetimeEvents<this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;
	on(): this { return this; }

	once<E extends keyof DButtonDatetimeEvents<this>>(
		event: E, handler: DButtonDatetimeEvents<this>[ E ], context?: any
	): this;
	once( event: string, handler: Function, context?: any ): this;
	once(): this { return this; }

	emit<E extends keyof DButtonDatetimeEvents<this>>(
		event: E, ...args: Parameters<DButtonDatetimeEvents<this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
	emit(): boolean { return true; }
}
