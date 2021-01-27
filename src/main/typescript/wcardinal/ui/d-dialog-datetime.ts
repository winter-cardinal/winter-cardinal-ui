/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerDatetime, DPickerDatetimeOptions } from "./d-picker-datetime";

export interface DDialogDatetimeOptions<
	THEME extends DThemeDialogDatetime = DThemeDialogDatetime
> extends DDialogCommandOptions<Date, THEME> {
	picker?: DPickerDatetimeOptions;
}

export interface DThemeDialogDatetime extends DThemeDialogCommand {

}

export class DDialogDatetime<
	THEME extends DThemeDialogDatetime = DThemeDialogDatetime,
	OPTIONS extends DDialogDatetimeOptions<THEME> = DDialogDatetimeOptions<THEME>
> extends DDialogCommand<Date, THEME, OPTIONS> {
	protected _picker?: DPickerDatetime;

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

	get picker(): DPickerDatetime {
		let result = this._picker;
		if( result == null ) {
			result = new DPickerDatetime( this._options?.picker );
			this._picker = result;
		}
		return result;
	}

	protected getResolvedValue(): Date | PromiseLike<Date> {
		return this.picker.new;
	}

	protected getType(): string {
		return "DDialogDatetime";
	}
}
