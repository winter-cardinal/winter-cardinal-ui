/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerTime, DPickerTimeOptions } from "./d-picker-time";

export interface DDialogTimeOptions<
	THEME extends DThemeDialogTime = DThemeDialogTime
> extends DDialogCommandOptions<THEME> {
	picker?: DPickerTimeOptions;
}

export interface DThemeDialogTime extends DThemeDialogCommand {

}

export class DDialogTime<
	THEME extends DThemeDialogTime = DThemeDialogTime,
	OPTIONS extends DDialogTimeOptions<THEME> = DDialogTimeOptions<THEME>
> extends DDialogCommand<THEME, OPTIONS> {
	protected _picker!: DPickerTime;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		super.onInit( layout, options );

		const picker = new DPickerTime( options && options.picker );
		this._picker = picker;
		layout.addChild( picker );
	}

	get current(): Date {
		return this._picker.current;
	}

	set current( dateCurrent: Date ) {
		this._picker.current = dateCurrent;
	}

	get new(): Date {
		return this._picker.new;
	}

	set new( dateNew: Date ) {
		this._picker.new = dateNew;
	}

	get picker(): DPickerTime {
		return this._picker;
	}

	protected getType(): string {
		return "DDialogTime";
	}
}
