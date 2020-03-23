/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DBaseState } from "./d-base-state";
import { DButton, DButtonOnOptions, DButtonOptions, DThemeButton } from "./d-button";
import { DColorAndAlpha } from "./d-color";
import { DDialogColor, DDialogColorOptions } from "./d-dialog-color";
import { DImagePieceOptions, DImagePieceTintOptions } from "./d-image-piece";
import { DPickerColorAndAlpha } from "./d-picker-color-and-alpha";

/**
 * Mappings of event names and handlers.
 */
export interface DButtonColorOnOptions extends DButtonOnOptions<DColorAndAlpha> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newValue a newly selected value
	 * @param oldValue a previously selected value
	 * @param self a button
	 */
	select?: ( newValue: DColorAndAlpha | null, oldValue: DColorAndAlpha | null, self: any ) => void;

	/**
	 * Triggered when a selection is changed.
	 *
	 * @param self a button
	 */
	change?: ( self: any ) => void;
}

export interface DButtonColorOptions<
	THEME extends DThemeButtonColor = DThemeButtonColor
> extends DButtonOptions<DColorAndAlpha, THEME> {
	/**
	 * A dialog to pick a color.
	 */
	dialog?: DDialogColorOptions;

	on?: DButtonColorOnOptions;
}

export interface DThemeButtonColor extends DThemeButton {
	getTextFormatter(): ( value: DColorAndAlpha, caller: DButtonColor ) => string;
	getTextValue( state: DBaseState ): DColorAndAlpha;
	newTextValue(): DColorAndAlpha;
}

export class DButtonColor<
	THEME extends DThemeButtonColor = DThemeButtonColor,
	OPTIONS extends DButtonColorOptions<THEME> = DButtonColorOptions<THEME>
> extends DButton<DColorAndAlpha, THEME, OPTIONS> {
	protected static DIALOG?: DDialogColor;
	protected _dialog?: DDialogColor;
	protected _value!: DPickerColorAndAlpha;

	protected init( options?: OPTIONS ) {
		super.init( options );

		const colorAndAlpha = this._textValueComputed;
		this._value = new DPickerColorAndAlpha( colorAndAlpha, ( color: number ): void => {
			colorAndAlpha.color = color;
			this.onColorChange();
		}, ( alpha: number ): void => {
			colorAndAlpha.alpha = alpha;
			this.updateTextForcibly();
		});

		this.on( "active", (): void => {
			const dialog = this.dialog;
			dialog.current.color = colorAndAlpha.color;
			dialog.current.alpha = colorAndAlpha.alpha;
			dialog.new.color = colorAndAlpha.color;
			dialog.new.alpha = colorAndAlpha.alpha;
			dialog.open().then((): void => {
				const dialogNew = dialog.new;
				const dialogCurrent = dialog.current;
				this.emit( "select", dialogNew, dialogCurrent, this );
				colorAndAlpha.color = dialogNew.color;
				colorAndAlpha.alpha = dialogNew.alpha;
				this.onColorChange();
				this.emit( "change", this );
			});
		});
	}

	protected toImageTintOptions( tint?: DImagePieceTintOptions ): DImagePieceTintOptions {
		const color = () => this._textValueComputed.color;
		if( tint ) {
			return {
				color: tint.color || color,
				alpha: tint.alpha
			};
		}
		return {
			color
		};
	}

	protected toImageOptions( theme: THEME, options?: DImagePieceOptions ): DImagePieceOptions | undefined {
		if( options ) {
			return {
				source: options.source,
				tint: this.toImageTintOptions( options.tint ),
				align: options.align,
				margin: options.margin
			};
		}
		return {
			tint: this.toImageTintOptions()
		};
	}

	protected onColorChange(): void {
		if( this._images[ 0 ].updateTint() ) {
			DApplications.update( this );
		}
		this.updateTextForcibly();
	}

	protected updateTextForcibly(): void {
		this.onTextChange();
		this.createOrUpdateText();
	}

	get dialog(): DDialogColor {
		let dialog = this._dialog;
		if( dialog == null ) {
			const options = this._options;
			const dialogOptions = options && options.dialog;
			if( dialogOptions != null ) {
				dialog = new DDialogColor( dialogOptions );
			} else {
				if( DButtonColor.DIALOG == null ) {
					DButtonColor.DIALOG = new DDialogColor();
				}
				dialog = DButtonColor.DIALOG;
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	get value(): DColorAndAlpha {
		return this._value;
	}

	protected getType(): string {
		return "DButtonColor";
	}
}
