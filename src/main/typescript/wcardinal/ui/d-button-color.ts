/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DApplications } from "./d-applications";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DColorAndAlpha } from "./d-color-and-alpha";
import { DDialogColor, DDialogColorOptions } from "./d-dialog-color";
import { DImagePieceOptions, DImagePieceTintOptions } from "./d-image-piece";
import { DPickerColorAndAlpha } from "./d-picker-color-and-alpha";

/**
 * {@link DButtonColor} events.
 */
export interface DButtonColorEvents<EMITTER> extends DButtonEvents<DColorAndAlpha, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newValue a newly selected value
	 * @param oldValue a previously selected value
	 * @param emitter an emitter
	 */
	change( newValue: DColorAndAlpha, oldValue: DColorAndAlpha, emitter: EMITTER ): void;
}

/**
 * {@link DButtonColor} "on" options.
 */
export interface DButtonColorOnOptions<EMITTER>	extends Partial<DButtonColorEvents<EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DButtonColor} options.
 */
export interface DButtonColorOptions<
	THEME extends DThemeButtonColor = DThemeButtonColor,
	EMITTER = any
> extends DButtonOptions<DColorAndAlpha, THEME, EMITTER> {
	/**
	 * A dialog to pick a color.
	 */
	dialog?: DDialogColorOptions;

	on?: DButtonColorOnOptions<EMITTER>;
}

/**
 * {@link DButtonColor} theme.
 */
export interface DThemeButtonColor extends DThemeButton<DColorAndAlpha> {

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

		const value = this._textValueComputed!;
		this._value = new DPickerColorAndAlpha( value, ( color: number ): void => {
			value.color = color;
			this.onColorChange();
		}, ( alpha: number ): void => {
			value.alpha = alpha;
			this.updateTextForcibly();
		});
	}

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		super.onActivate( e );
		const value = this._textValueComputed!;
		const dialog = this.dialog;
		const dialogCurrent = dialog.current;
		const dialogNew = dialog.new;
		dialogCurrent.color = value.color;
		dialogCurrent.alpha = value.alpha;
		dialogNew.color = value.color;
		dialogNew.alpha = value.alpha;
		dialog.open().then((): void => {
			value.color = dialogNew.color;
			value.alpha = dialogNew.alpha;
			this.onColorChange();
			this.onValueChange(
				this.toClone( dialogNew ),
				this.toClone( dialogCurrent )
			);
		});
	}

	protected toClone( value: DColorAndAlpha ): DColorAndAlpha {
		return {
			color: value.color,
			alpha: value.alpha
		};
	}

	protected onValueChange( newValue: DColorAndAlpha, oldValue: DColorAndAlpha ): void {
		this.emit( "change", newValue, oldValue, this );
	}

	protected toImageTintOptions( tint?: DImagePieceTintOptions ): DImagePieceTintOptions {
		const color = () => this._textValueComputed!.color;
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
			const options = this._options?.dialog;
			if( options != null ) {
				dialog = new DDialogColor( options );
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
