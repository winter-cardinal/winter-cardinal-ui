/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent } from "pixi.js";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DColorAndAlpha } from "./d-color-and-alpha";
import { DDialogColor, DDialogColorOptions } from "./d-dialog-color";
import { DOnOptions } from "./d-on-options";
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
	change(newValue: DColorAndAlpha, oldValue: DColorAndAlpha, emitter: EMITTER): void;
}

/**
 * {@link DButtonColor} "on" options.
 */
export interface DButtonColorOnOptions<EMITTER>
	extends Partial<DButtonColorEvents<EMITTER>>,
		DOnOptions {}

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
export interface DThemeButtonColor extends DThemeButton<DColorAndAlpha> {}

export class DButtonColor<
	THEME extends DThemeButtonColor = DThemeButtonColor,
	OPTIONS extends DButtonColorOptions<THEME> = DButtonColorOptions<THEME>
> extends DButton<DColorAndAlpha, THEME, OPTIONS> {
	protected static DIALOG?: DDialogColor;
	protected _dialog?: DDialogColor;
	protected _value?: DPickerColorAndAlpha;

	protected onActivate(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		super.onActivate(e);
		const dialog = this.dialog;
		const computed = this.text.computed;
		if (computed != null) {
			const dialogCurrent = dialog.current;
			dialogCurrent.color = computed.color;
			dialogCurrent.alpha = computed.alpha;
			const dialogNew = dialog.new;
			dialogNew.color = computed.color;
			dialogNew.alpha = computed.alpha;
		}
		dialog.open(this).then((): void => {
			this.onValueChange(this.toClone(dialog.new), this.toClone(dialog.current));
		});
	}

	protected toClone(value: DColorAndAlpha): DColorAndAlpha {
		return {
			color: value.color,
			alpha: value.alpha
		};
	}

	protected onValueChange(newValue: DColorAndAlpha, oldValue: DColorAndAlpha): void {
		const computed = this.text.computed;
		if (computed != null) {
			computed.color = newValue.color;
			computed.alpha = newValue.alpha;
		}
		this.onColorChange();
		this.emit("change", newValue, oldValue, this);
	}

	protected onColorChange(): void {
		const image = this.image.get(0);
		if (image != null) {
			const computed = this.text.computed;
			if (computed != null) {
				image.tint.color = computed.color;
			}
		}
		this.text.compute(true);
	}

	get dialog(): DDialogColor {
		let dialog = this._dialog;
		if (dialog == null) {
			const options = this._options?.dialog;
			if (options) {
				dialog = this.newDialog(options);
			} else {
				if (DButtonColor.DIALOG == null) {
					DButtonColor.DIALOG = this.newDialog({
						mode: "MENU",
						sticky: true
					});
				}
				dialog = DButtonColor.DIALOG;
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	protected newDialog(options?: DDialogColorOptions): DDialogColor {
		return new DDialogColor(options);
	}

	get value(): DColorAndAlpha {
		let result = this._value;
		if (result == null) {
			result = this.newValue();
			this._value = result;
		}
		return result;
	}

	protected newValue(): DPickerColorAndAlpha {
		const text = this.text;
		const computed = text.computed!;
		return new DPickerColorAndAlpha(
			computed,
			(color: number): void => {
				computed.color = color;
				this.onColorChange();
			},
			(alpha: number): void => {
				computed.alpha = alpha;
				text.compute(true);
			}
		);
	}

	protected getType(): string {
		return "DButtonColor";
	}
}
