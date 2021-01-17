/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DApplications } from "./d-applications";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DColorGradientObservable } from "./d-color-gradient-observable";
import { DDialogColorGradient, DDialogColorGradientOptions } from "./d-dialog-color-gradient";
import { DPickerColorGradientView } from "./d-picker-color-gradient-view";

/**
 * {@link DButtonColorGradient} events.
 */
export interface DButtonColorGradientEvents<EMITTER> extends DButtonEvents<DColorGradientObservable, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newValue a newly selected value
	 * @param oldValue a previously selected value
	 * @param emitter an emitter
	 */
	change( newValue: DColorGradientObservable, oldValue: DColorGradientObservable, emitter: EMITTER ): void;
}

/**
 * {@link DButtonColorGradient} "on" options.
 */
export interface DButtonColorGradientOnOptions<EMITTER> extends Partial<DButtonColorGradientEvents<EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DButtonColorGradient} options.
 */
export interface DButtonColorGradientOptions<
	THEME extends DThemeButtonColorGradient = DThemeButtonColorGradient,
	EMITTER = any
> extends DButtonOptions<DColorGradientObservable, THEME, EMITTER> {
	dialog?: DDialogColorGradientOptions;
	on?: DButtonColorGradientOnOptions<EMITTER>;
}

/**
 * {@link DButtonColorGradient} theme.
 */
export interface DThemeButtonColorGradient extends DThemeButton<DColorGradientObservable> {
	getViewBaseTexture(): Texture | null;
	getCheckerColors(): [ number, number ];
}

export class DButtonColorGradient<
	THEME extends DThemeButtonColorGradient = DThemeButtonColorGradient,
	OPTIONS extends DButtonColorGradientOptions<THEME> = DButtonColorGradientOptions<THEME>
> extends DButton<DColorGradientObservable, THEME, OPTIONS> {
	protected static DIALOG?: DDialogColorGradient;
	protected _dialog?: DDialogColorGradient;
	protected _dialogOptions?: DDialogColorGradientOptions;
	protected _view?: DPickerColorGradientView;

	protected init( options?: OPTIONS ) {
		super.init( options );

		const data = this._textValueComputed!;
		this._dialogOptions = options?.dialog;

		if( options == null || options.image == null || options.image.source === undefined ) {
			const theme = this.theme;
			const texture = theme.getViewBaseTexture();
			if( texture instanceof Texture ) {
				const checkers = theme.getCheckerColors();
				const view = this._view = DPickerColorGradientView.from( 1, 10, checkers, texture );
				view.setRectangle( 0, 0, 0, texture.width, texture.height );
				view.setData( 0, data );
				view.update();
				this.image = view;
			}
		}

		this.on( "active", (): void => {
			const dialog = this.dialog;
			dialog.value.fromObject( data );
			dialog.open().then((): void => {
				const newValue = dialog.value;
				const oldValue = new DColorGradientObservable().fromObject( data );
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

	get value(): DColorGradientObservable {
		return this._textValueComputed!;
	}

	protected getType(): string {
		return "DButtonColorGradient";
	}
}
