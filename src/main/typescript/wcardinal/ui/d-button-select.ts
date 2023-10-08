/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogOpener } from "./d-dialog";
import { DDialogSelect, DDialogSelectOptions } from "./d-dialog-select";
import { DOnOptions } from "./d-on-options";

/**
 * A dialog to select values.
 */
export interface DButtonSelectDialog<VALUE> {
	readonly value: VALUE | null;
	open(opener?: DDialogOpener): Promise<unknown>;
}

/**
 * A function to retrieve a selected value from a dialog.
 */
export type DButtonSelectGetter<VALUE, DIALOG> = (dialog: DIALOG) => VALUE | null;

/**
 * A function to set a selecte value to a dialog.
 * Called before opening a dialog.
 */
export type DButtonSelectSetter<VALUE, DIALOG> = (dialog: DIALOG, value: VALUE | null) => void;

/**
 * {@link DButtonSelect} events.
 */
export interface DButtonSelectEvents<VALUE, EMITTER> extends DButtonEvents<VALUE, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newValue a newly selected value
	 * @param oldValue a previously selected value
	 * @param emitter an emitter
	 */
	change(newValue: VALUE | null, oldValue: VALUE | null, emitter: EMITTER): void;
}

/**
 * {@link DButtonSelect} "on" options.
 */
export interface DButtonSelectOnOptions<VALUE, EMITTER>
	extends Partial<DButtonSelectEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DButtonSelect} options.
 */
export interface DButtonSelectOptions<
	VALUE = unknown,
	DIALOG_VALUE = unknown,
	DIALOG_CATEGORY_ID = unknown,
	DIALOG extends DButtonSelectDialog<DIALOG_VALUE> = DButtonSelectDialog<DIALOG_VALUE>,
	THEME extends DThemeButtonSelect<VALUE> = DThemeButtonSelect<VALUE>,
	EMITTER = any
> extends DButtonOptions<VALUE | null, THEME, EMITTER> {
	/**
	 * A function to retrieve a selected value from a dialog.
	 */
	getter?: DButtonSelectGetter<VALUE, DIALOG>;

	/**
	 * A function to set a selected value to a dialog.
	 * Called before opening a dialog.
	 */
	setter?: DButtonSelectSetter<VALUE, DIALOG>;

	/**
	 * A dialog to select values.
	 */
	dialog?: DDialogSelectOptions<DIALOG_VALUE, DIALOG_CATEGORY_ID> | DIALOG;

	on?: DButtonSelectOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DButtonSelect} theme.
 */
export interface DThemeButtonSelect<VALUE = unknown> extends DThemeButton<VALUE | null> {}

const defaultGetter = (dialog: DButtonSelectDialog<any>): any => {
	// Assumes the dialog.value is VALUE.
	return dialog.value;
};

const defaultSetter = (): void => {
	// DO NOTHING
};

export class DButtonSelect<
	VALUE = unknown,
	DIALOG_VALUE = unknown,
	DIALOG_CATEGORY_ID = unknown,
	DIALOG extends DButtonSelectDialog<DIALOG_VALUE> = DButtonSelectDialog<DIALOG_VALUE>,
	THEME extends DThemeButtonSelect<VALUE> = DThemeButtonSelect<VALUE>,
	OPTIONS extends DButtonSelectOptions<
		VALUE,
		DIALOG_VALUE,
		DIALOG_CATEGORY_ID,
		DIALOG,
		THEME
	> = DButtonSelectOptions<VALUE, DIALOG_VALUE, DIALOG_CATEGORY_ID, DIALOG, THEME>
> extends DButton<VALUE | null, THEME, OPTIONS> {
	protected _dialog?: DIALOG;
	protected _dialogGetter: DButtonSelectGetter<VALUE, DIALOG>;
	protected _dialogSetter: DButtonSelectSetter<VALUE, DIALOG>;

	constructor(options?: OPTIONS) {
		super(options);
		this._dialogGetter = options?.getter ?? defaultGetter;
		this._dialogSetter = options?.setter ?? defaultSetter;
	}

	protected onActivate(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		super.onActivate(e);
		const dialog = this.dialog;
		const oldValue = this._textValueComputed ?? null;
		this._dialogSetter(dialog, oldValue);
		dialog.open(this).then((): void => {
			const newValue = this._dialogGetter(dialog);
			if (newValue !== oldValue) {
				this.text = newValue;
				this.emit("change", newValue, oldValue, this);
			}
		});
	}

	get dialog(): DIALOG {
		let dialog = this._dialog;
		if (dialog == null) {
			const options = this._options?.dialog;
			if (options && "open" in options) {
				dialog = options;
			} else {
				// Assumes DIALOG === DDialogSelect<DIALOG_VALUE, DIALOG_CATEGORY_ID>.
				dialog = new DDialogSelect<DIALOG_VALUE, DIALOG_CATEGORY_ID>(
					options
				) as any as DIALOG;
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	get value(): VALUE | null {
		return this._textValueComputed ?? null;
	}

	set value(value: VALUE | null) {
		this.text = value;
	}

	protected getType(): string {
		return "DButtonSelect";
	}
}
