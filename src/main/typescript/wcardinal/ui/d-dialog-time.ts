/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerTime, DPickerTimeOptions } from "./d-picker-time";

export interface DDialogTimeOptions<THEME extends DThemeDialogTime = DThemeDialogTime>
	extends DDialogCommandOptions<Date, THEME> {
	picker?: DPickerTimeOptions;
}

export interface DThemeDialogTime extends DThemeDialogCommand {}

export class DDialogTime<
	THEME extends DThemeDialogTime = DThemeDialogTime,
	OPTIONS extends DDialogTimeOptions<THEME> = DDialogTimeOptions<THEME>
> extends DDialogCommand<Date, THEME, OPTIONS> {
	protected _picker?: DPickerTime;

	protected onInit(layout: DLayoutVertical, options?: OPTIONS): void {
		super.onInit(layout, options);
		layout.addChild(this.picker);
	}

	get current(): Date {
		return this.picker.current;
	}

	set current(dateCurrent: Date) {
		this.picker.current = dateCurrent;
	}

	get new(): Date {
		return this.picker.new;
	}

	set new(dateNew: Date) {
		this.picker.new = dateNew;
	}

	get picker(): DPickerTime {
		let result = this._picker;
		if (result == null) {
			result = new DPickerTime(this._options?.picker);
			this._picker = result;
		}
		return result;
	}

	protected getResolvedValue(): Date | PromiseLike<Date> {
		return this.picker.new;
	}

	protected getType(): string {
		return "DDialogTime";
	}
}
