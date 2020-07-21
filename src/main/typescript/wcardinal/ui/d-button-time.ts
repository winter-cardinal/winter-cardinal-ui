/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "./d-base-state-set";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogTime, DDialogTimeOptions } from "./d-dialog-time";
import { DDialogTimes } from "./d-dialog-times";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimes } from "./d-picker-times";
import { EventSupport } from "./decorator/event-support";

/**
 * {@link DButtonTime} events.
 */
export interface DButtonTimeEvents<EMITTER> extends DButtonEvents<Date, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param emitter an emitter
	 */
	change( newValue: Date, oldValue: Date, emitter: EMITTER ): void;
}

/**
 * {@link DButtonTime} "on" options.
 */
export interface DButtonTimeOnOptions<EMITTER> extends Partial<DButtonTimeEvents<EMITTER> & Record<string, Function>> {

}

/**
 * {@link DButtonTime} options.
 */
export interface DButtonTimeOptions<
	THEME extends DThemeButtonTime = DThemeButtonTime,
	EMITTER = any
> extends DButtonOptions<Date, THEME, EMITTER> {
	dialog?: DDialogTimeOptions;
	on?: DButtonTimeOnOptions<EMITTER>;
}

/**
 * {@link DButtonTime} theme.
 */
export interface DThemeButtonTime extends DThemeButton {
	getTextFormatter(): ( value: Date, caller: DButtonTime ) => string;
	getTextValue( state: DBaseStateSet ): Date;
	newTextValue(): Date;
}

@EventSupport
export class DButtonTime<
	THEME extends DThemeButtonTime = DThemeButtonTime,
	OPTIONS extends DButtonTimeOptions<THEME> = DButtonTimeOptions<THEME>
> extends DButton<Date, THEME, OPTIONS> {
	protected _dialog?: DDialogTime;
	protected _dialogOptions?: DDialogTimeOptions;
	protected _datetimeMask!: DPickerDatetimeMask;

	protected init( options?: OPTIONS ) {
		this._dialogOptions = options && options.dialog;
		this._datetimeMask = DPickerTimes.toMask( options && options.dialog && options.dialog.picker );

		super.init( options );

		this.on( "active", (): void => {
			const currentTime = this._textValueComputed.getTime();
			const dialog = this.dialog;
			dialog.current = new Date( currentTime );
			dialog.new = new Date( currentTime );
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

	get dialog(): DDialogTime {
		let dialog = this._dialog;
		if( dialog == null ) {
			const dialogOptions = this._dialogOptions;
			if( dialogOptions != null ) {
				dialog = new DDialogTime( this._dialogOptions );
			} else {
				dialog = DDialogTimes.getInstance();
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
		return "DButtonTime";
	}

	// Event handlings
	on<E extends keyof DButtonTimeEvents<this>>(
		event: E, handler: DButtonTimeEvents<this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;
	on(): this { return this; }

	once<E extends keyof DButtonTimeEvents<this>>(
		event: E, handler: DButtonTimeEvents<this>[ E ], context?: any
	): this;
	once( event: string, handler: Function, context?: any ): this;
	once(): this { return this; }

	emit<E extends keyof DButtonTimeEvents<this>>(
		event: E, ...args: Parameters<DButtonTimeEvents<this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
	emit(): boolean { return true; }
}
