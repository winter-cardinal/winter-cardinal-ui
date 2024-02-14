/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, Texture } from "pixi.js";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DColorGradient } from "./d-color-gradient";
import { DColorGradientObservable } from "./d-color-gradient-observable";
import { DDialogColorGradient, DDialogColorGradientOptions } from "./d-dialog-color-gradient";
import { DOnOptions } from "./d-on-options";
import { DPickerColorGradientView } from "./d-picker-color-gradient-view";

/**
 * {@link DButtonColorGradient} events.
 */
export interface DButtonColorGradientEvents<EMITTER>
	extends DButtonEvents<DColorGradientObservable, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newValue a newly selected value
	 * @param oldValue a previously selected value
	 * @param emitter an emitter
	 */
	change(
		newValue: DColorGradientObservable,
		oldValue: DColorGradientObservable,
		emitter: EMITTER
	): void;
}

/**
 * {@link DButtonColorGradient} "on" options.
 */
export interface DButtonColorGradientOnOptions<EMITTER>
	extends Partial<DButtonColorGradientEvents<EMITTER>>,
		DOnOptions {}

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
	getCheckerColors(): [number, number];
}

export class DButtonColorGradient<
	THEME extends DThemeButtonColorGradient = DThemeButtonColorGradient,
	OPTIONS extends DButtonColorGradientOptions<THEME> = DButtonColorGradientOptions<THEME>
> extends DButton<DColorGradientObservable, THEME, OPTIONS> {
	protected static DIALOG?: DDialogColorGradient;
	protected _dialog?: DDialogColorGradient;
	protected _view?: DPickerColorGradientView;

	protected init(options?: OPTIONS): void {
		super.init(options);

		const source = options?.image?.source;
		if (source === undefined) {
			const theme = this.theme;
			const texture = theme.getViewBaseTexture();
			if (texture instanceof Texture) {
				const checkers = theme.getCheckerColors();
				const view = DPickerColorGradientView.from(1, 10, checkers, texture);
				this._view = view;
				view.setRectangle(0, 0, 0, texture.width, texture.height);
				view.setData(0, this.text.computed!);
				view.update();
				this.image = view;
			}
		}
	}

	protected onActivate(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		super.onActivate(e);
		const computed = this.text.computed;
		const dialog = this.dialog;
		if (computed != null) {
			dialog.value.fromObject(computed);
		}
		dialog.open(this).then((newValue): void => {
			this.onValueChange(newValue, this.toClone(computed));
		});
	}

	protected toClone(value?: DColorGradient): DColorGradient {
		const result = new DColorGradientObservable();
		if (value != null) {
			result.fromObject(value);
		}
		return result;
	}

	protected onValueChange(newValue: DColorGradient, oldValue: DColorGradient): void {
		const computed = this.text.computed;
		if (computed != null) {
			computed.fromObject(newValue);
		}
		const view = this._view;
		if (view != null) {
			view.update();
		}
		this.text.compute(true);
		this.emit("change", newValue, oldValue, this);
	}

	get dialog(): DDialogColorGradient {
		let dialog = this._dialog;
		if (dialog == null) {
			const options = this._options?.dialog;
			if (options) {
				dialog = this.newDialog(options);
			} else {
				if (DButtonColorGradient.DIALOG == null) {
					DButtonColorGradient.DIALOG = this.newDialog({
						mode: "MENU",
						sticky: true
					});
				}
				dialog = DButtonColorGradient.DIALOG;
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	protected newDialog(options?: DDialogColorGradientOptions): DDialogColorGradient {
		return new DDialogColorGradient(options);
	}

	get value(): DColorGradientObservable {
		return this.text.computed!;
	}

	protected getType(): string {
		return "DButtonColorGradient";
	}
}
