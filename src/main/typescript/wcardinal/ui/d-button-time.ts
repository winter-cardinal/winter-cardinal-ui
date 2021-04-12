/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogTime, DDialogTimeOptions } from "./d-dialog-time";
import { DDialogTimes } from "./d-dialog-times";
import { DOnOptions } from "./d-on-options";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimes } from "./d-picker-times";

/**
 * {@link DButtonTime} events.
 */
export interface DButtonTimeEvents<EMITTER> extends DButtonEvents<Date, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param emitter an emitter
	 */
	change(newValue: Date, oldValue: Date, emitter: EMITTER): void;
}

/**
 * {@link DButtonTime} "on" options.
 */
export interface DButtonTimeOnOptions<EMITTER>
	extends Partial<DButtonTimeEvents<EMITTER>>,
		DOnOptions {}

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
export interface DThemeButtonTime extends DThemeButton<Date> {}

export class DButtonTime<
	THEME extends DThemeButtonTime = DThemeButtonTime,
	OPTIONS extends DButtonTimeOptions<THEME> = DButtonTimeOptions<THEME>
> extends DButton<Date, THEME, OPTIONS> {
	protected _dialog?: DDialogTime;
	protected _datetimeMask?: DPickerDatetimeMask;

	protected onActivate(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		super.onActivate(e);
		const value = this._textValueComputed?.getTime() ?? Date.now();
		const dialog = this.dialog;
		dialog.current = new Date(value);
		dialog.new = new Date(value);
		dialog.open().then((): void => {
			const newValue = dialog.new;
			const oldValue = dialog.current;
			this.text = new Date(newValue.getTime());
			this.emit("change", newValue, oldValue, this);
		});
	}

	getDatetimeMask(): DPickerDatetimeMask {
		let result = this._datetimeMask;
		if (result == null) {
			result = DPickerTimes.toMask(this._options?.dialog?.picker);
			this._datetimeMask = result;
		}
		return result;
	}

	get dialog(): DDialogTime {
		let dialog = this._dialog;
		if (dialog == null) {
			const options = this._options?.dialog;
			if (options) {
				dialog = new DDialogTime(options);
			} else {
				dialog = DDialogTimes.getInstance();
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	get value(): Date {
		return this._textValueComputed ?? new Date();
	}

	set value(value: Date) {
		const textValueComputed = this._textValueComputed;
		if (textValueComputed === undefined || textValueComputed.getTime() !== value.getTime()) {
			this.text = value;
		}
	}

	protected getType(): string {
		return "DButtonTime";
	}
}
