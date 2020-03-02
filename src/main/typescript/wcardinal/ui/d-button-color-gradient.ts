/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogColorGradient, DDialogColorGradientOptions } from "./d-dialog-color-gradient";
import { DPickerColorGradientData } from "./d-picker-color-gradient-data";
import { DPickerColorGradientDataView } from "./d-picker-color-gradient-data-view";

export interface DButtonColorGradientOptions<
	THEME extends DThemeButtonColorGradient = DThemeButtonColorGradient
> extends DButtonOptions<DPickerColorGradientData, THEME> {
	dialog?: DDialogColorGradientOptions;
}

export interface DThemeButtonColorGradient extends DThemeButton {
	getViewBaseTexture(): Texture | null;
	getTextFormatter(): ( value: DPickerColorGradientData, caller: DButtonColorGradient ) => string;
	getTextValue( state: DBaseState ): DPickerColorGradientData;
	newTextValue(): DPickerColorGradientData;
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
			const texture = this.theme.getViewBaseTexture();
			if( texture instanceof Texture ) {
				const view = this._view = DPickerColorGradientDataView.from( 1, 10, texture );
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
				this.emit( "select", dialog.data, data, this );
				data.fromObject( dialog.data );
				const view = this._view;
				if( view != null ) {
					view.update();
				}
				this.onTextChange();
				this.createOrUpdateText();
				DApplications.update( this );
				this.emit( "change", this );
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
