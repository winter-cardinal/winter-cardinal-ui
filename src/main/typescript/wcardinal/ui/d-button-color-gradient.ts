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

/**
 * {@link DButtonColorGradient} events.
 */
export interface DButtonColorGradientEvents<SELF> extends DButtonEvents<DPickerColorGradientData, SELF> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newValue a newly selected value
	 * @param oldValue a previously selected value
	 * @param self this
	 */
	change( newValue: DPickerColorGradientData, oldValue: DPickerColorGradientData, self: SELF ): void;
}

/**
 * Mappings of event names and handlers.
 */
export interface DButtonColorGradientOnOptions<SELF>
	extends Partial<DButtonColorGradientEvents<SELF>>, Record<string, Function | undefined> {

}

export interface DButtonColorGradientOptions<
	THEME extends DThemeButtonColorGradient = DThemeButtonColorGradient,
	SELF = any
> extends DButtonOptions<DPickerColorGradientData, THEME, SELF> {
	dialog?: DDialogColorGradientOptions;
	on?: DButtonColorGradientOnOptions<SELF>;
}

export interface DThemeButtonColorGradient extends DThemeButton {
	getViewBaseTexture(): Texture | null;
	getTextFormatter(): ( value: DPickerColorGradientData, caller: DButtonColorGradient ) => string;
	getTextValue( state: DBaseState ): DPickerColorGradientData;
	newTextValue(): DPickerColorGradientData;
	getCheckerColors(): [ number, number ];
}

export interface DButtonColorGradient {
	on<E extends keyof DButtonColorGradientEvents<this>>(
		event: E, handler: DButtonColorGradientEvents<this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;

	emit<E extends keyof DButtonColorGradientEvents<this>>(
		event: E, ...args: Parameters<DButtonColorGradientEvents<this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
}

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
}
