/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent } from "pixi.js";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDate, DDialogDateOptions } from "./d-dialog-date";
import { DOnOptions } from "./d-on-options";

/**
 * {@link DButtonDate} events.
 */
export interface DButtonDateEvents<EMITTER> extends DButtonEvents<Date, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newValue a newly selected value
	 * @param oldValue a previously selected value
	 * @param emitter an emitter
	 */
	change(newValue: Date, oldValue: Date, emitter: EMITTER): void;
}

/**
 * {@link DButtonDate} "on" options.
 */
export interface DButtonDateOnOptions<EMITTER>
	extends Partial<DButtonDateEvents<EMITTER>>,
		DOnOptions {}

/**
 * {@link DButtonDate} options.
 */
export interface DButtonDateOptions<
	THEME extends DThemeButtonDate = DThemeButtonDate,
	EMITTER = any
> extends DButtonOptions<Date, THEME, EMITTER> {
	dialog?: DDialogDateOptions;
	on?: DButtonDateOnOptions<EMITTER>;
}

/**
 * {@link DButtonDate} theme.
 */
export interface DThemeButtonDate extends DThemeButton<Date> {}

export class DButtonDate<
	THEME extends DThemeButtonDate = DThemeButtonDate,
	OPTIONS extends DButtonDateOptions<THEME> = DButtonDateOptions<THEME>
> extends DButton<Date, THEME, OPTIONS> {
	protected static DIALOG?: DDialogDate;
	protected _dialog?: DDialogDate;

	protected onActivate(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		super.onActivate(e);
		const value = this.text.computed?.getTime() ?? Date.now();
		const dialog = this.dialog;
		dialog.current = new Date(value);
		dialog.new = new Date(value);
		dialog.page = new Date(value);
		dialog.open(this).then((): void => {
			this.onValueChange(dialog.new, dialog.current);
		});
	}

	protected onValueChange(newValue: Date, oldValue: Date): void {
		this.text = new Date(newValue.getTime());
		this.emit("change", newValue, oldValue, this);
	}

	get dialog(): DDialogDate {
		let dialog = this._dialog;
		if (dialog == null) {
			const options = this._options?.dialog;
			if (options) {
				dialog = this.newDialog(options);
			} else {
				if (DButtonDate.DIALOG == null) {
					DButtonDate.DIALOG = this.newDialog({
						mode: "MENU",
						sticky: true
					});
				}
				dialog = DButtonDate.DIALOG;
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	protected newDialog(options?: DDialogDateOptions): DDialogDate {
		return new DDialogDate(options);
	}

	get value(): Date {
		return this.text.computed ?? new Date();
	}

	set value(value: Date) {
		const computed = this.text.computed;
		if (computed === undefined || computed.getTime() !== value.getTime()) {
			this.text = value;
		}
	}

	protected getType(): string {
		return "DButtonDate";
	}
}
