/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerDate, DPickerDateOptions } from "./d-picker-date";

export interface DDialogDateOptions<
	THEME extends DThemeDialogDate = DThemeDialogDate
> extends DDialogCommandOptions<Date, THEME> {
	picker?: DPickerDateOptions;
}

export interface DThemeDialogDate extends DThemeDialogCommand {

}

export class DDialogDate<
	THEME extends DThemeDialogDate = DThemeDialogDate,
	OPTIONS extends DDialogDateOptions<THEME> = DDialogDateOptions<THEME>
> extends DDialogCommand<Date, THEME, OPTIONS> {
	protected _picker?: DPickerDate;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		super.onInit( layout, options );
		layout.addChild( this.picker );
	}

	get current(): Date {
		return this.picker.current;
	}

	set current( dateCurrent: Date ) {
		this.picker.current = dateCurrent;
	}

	get new(): Date {
		return this.picker.new;
	}

	set new( value: Date ) {
		this.picker.new = value;
	}

	get page(): Date {
		return this.picker.new;
	}

	set page( page: Date ) {
		this.picker.page = page;
	}

	get picker(): DPickerDate {
		let result = this._picker;
		if( result == null ) {
			result = new DPickerDate( this._options?.picker );
			this._picker = result;
		}
		return result;
	}

	protected getResolvedValue(): Date | PromiseLike<Date> {
		return this.picker.new;
	}

	protected getType(): string {
		return "DDialogDate";
	}
}
