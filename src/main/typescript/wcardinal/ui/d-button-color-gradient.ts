/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseState } from "./d-base-state";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogColorGradient, DDialogColorGradientOptions } from "./d-dialog-color-gradient";
import { DPickerColorGradientData } from "./d-picker-color-gradient-data";
import { DPickerColorGradientDataView } from "./d-picker-color-gradient-data-view";
import { EventSupport } from "./decorator/event-support";

/**
 * {@link DButtonColorGradient} events.
 */
export interface DButtonColorGradientEvents<EMITTER> extends DButtonEvents<DPickerColorGradientData, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newValue a newly selected value
	 * @param oldValue a previously selected value
	 * @param emitter an emitter
	 */
	change( newValue: DPickerColorGradientData, oldValue: DPickerColorGradientData, emitter: EMITTER ): void;
}

/**
 * {@link DButtonColorGradient} "on" options.
 */
export interface DButtonColorGradientOnOptions<EMITTER>
	extends Partial<DButtonColorGradientEvents<EMITTER>>, Record<string, Function | undefined> {

}

/**
 * {@link DButtonColorGradient} options.
 */
export interface DButtonColorGradientOptions<
	THEME extends DThemeButtonColorGradient = DThemeButtonColorGradient,
	EMITTER = any
> extends DButtonOptions<DPickerColorGradientData, THEME, EMITTER> {
	dialog?: DDialogColorGradientOptions;
	on?: DButtonColorGradientOnOptions<EMITTER>;
}

/**
 * {@link DButtonColorGradient} theme.
 */
export interface DThemeButtonColorGradient extends DThemeButton {
	getViewBaseTexture(): Texture | null;
	getTextFormatter(): ( value: DPickerColorGradientData, caller: DButtonColorGradient ) => string;
	getTextValue( state: DBaseState ): DPickerColorGradientData;
	newTextValue(): DPickerColorGradientData;
	getCheckerColors(): [ number, number ];
}

@EventSupport
export class DButtonColorGradient<
	THEME extends DThemeButtonColorGradient = DThemeButtonColorGradient,
	OPTIONS extends DButtonColorGradientOptions<THEME> = DButtonColorGradientOptions<THEME>
> extends DButton<DPickerColorGradientData, THEME, OPTIONS> {
	protected static DIALOG?: DDialogColorGradient;
	protected _dialog?: DDialogColorGradient;
	protected _dialogOptions?: DDialogColorGradientOptions;
	protected _view?: DPickerColorGradientDataView;

	protected init( options?: OPTIONS ) {
		super.init( options );

		const data = this._textValueComputed;
		this._dialogOptions = options && options.dialog;

		if( options == null || options.image == null || options.image.source === undefined ) {
			const theme = this.theme;
			const texture = theme.getViewBaseTexture();
			if( texture instanceof Texture ) {
				const checkers = theme.getCheckerColors();
				const view = this._view = DPickerColorGradientDataView.from( 1, 10, checkers, texture );
				view.setRectangle( 0, 0, 0, texture.width, texture.height );
				view.setData( 0, data );
				view.update();
				this.image = view;
			}
		}

		this.on( "active", (): void => {
			const dialog = this.dialog;
			dialog.data.fromObject( data );
			dialog.open().then((): void => {
				const newValue = dialog.data;
				const oldValue = new DPickerColorGradientData().fromObject( data );
				data.fromObject( newValue );
				const view = this._view;
				if( view != null ) {
					view.update();
				}
				this.onTextChange();
				this.createOrUpdateText();
				DApplications.update( this );
				this.emit( "change", newValue, oldValue, this );
			});
		});
	}

	get dialog(): DDialogColorGradient {
		let dialog = this._dialog;
		if( dialog == null ) {
			const dialogOptions = this._dialogOptions;
			if( dialogOptions != null ) {
				dialog = new DDialogColorGradient( this._dialogOptions );
			} else {
				if( DButtonColorGradient.DIALOG == null ) {
					DButtonColorGradient.DIALOG = new DDialogColorGradient();
				}
				dialog = DButtonColorGradient.DIALOG;
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	get value(): DPickerColorGradientData {
		return this._textValueComputed;
	}

	protected getType(): string {
		return "DButtonColorGradient";
	}

	// Event handlings
	on<E extends keyof DButtonColorGradientEvents<this>>(
		event: E, handler: DButtonColorGradientEvents<this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;
	on(): this { return this; }

	once<E extends keyof DButtonColorGradientEvents<this>>(
		event: E, handler: DButtonColorGradientEvents<this>[ E ], context?: any
	): this;
	once( event: string, handler: Function, context?: any ): this;
	once(): this { return this; }

	emit<E extends keyof DButtonColorGradientEvents<this>>(
		event: E, ...args: Parameters<DButtonColorGradientEvents<this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
	emit(): boolean { return true; }
}
