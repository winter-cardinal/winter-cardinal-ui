/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogTime, DDialogTimeOptions } from "./d-dialog-time";
import { DDialogTimes } from "./d-dialog-times";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimes } from "./d-picker-times";

/**
 * {@link DButtonTime} events.
 */
export interface DButtonTimeEvents<SELF> extends DButtonEvents<Date, SELF> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param self this
	 */
	change( newValue: Date, oldValue: Date, self: SELF ): void;
}

/**
 * Mappings of event names and handlers.
 */
export interface DButtonTimeOnOptions<SELF> extends Partial<DButtonTimeEvents<SELF> & Record<string, Function>> {

}

export interface DButtonTimeOptions<
	THEME extends DThemeButtonTime = DThemeButtonTime,
	SELF = any
> extends DButtonOptions<Date, THEME, SELF> {
	dialog?: DDialogTimeOptions;
	on?: DButtonTimeOnOptions<SELF>;
}

export interface DThemeButtonTime extends DThemeButton {
	getTextFormatter(): ( value: Date, caller: DButtonTime ) => string;
	getTextValue( state: DBaseState ): Date;
	newTextValue(): Date;
}

export interface DButtonTime {
	on<E extends keyof DButtonTimeEvents<this>>(
		event: E, handler: DButtonTimeEvents<this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;

	emit<E extends keyof DButtonTimeEvents<this>>(
		event: E, ...args: Parameters<DButtonTimeEvents<this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
}

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
}
