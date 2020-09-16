/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerDate, DPickerDateOptions } from "./d-picker-date";

export interface DDialogDateOptions<
	THEME extends DThemeDialogDate = DThemeDialogDate
> extends DDialogCommandOptions<THEME> {
	picker?: DPickerDateOptions;
}

export interface DThemeDialogDate extends DThemeDialogCommand {

}

export class DDialogDate<
	THEME extends DThemeDialogDate = DThemeDialogDate,
	OPTIONS extends DDialogDateOptions<THEME> = DDialogDateOptions<THEME>
> extends DDialogCommand<Date, THEME, OPTIONS> {
	protected _picker!: DPickerDate;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		super.onInit( layout, options );

		const picker = new DPickerDate( options && options.picker );
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

	get page(): Date {
		return this._picker.new;
	}

	set page( datePage: Date ) {
		this._picker.page = datePage;
	}

	get picker(): DPickerDate {
		return this._picker;
	}

	protected doResolve( resolve: ( value?: Date | PromiseLike<Date> ) => void ): void {
		resolve( this.new );
	}

	protected getType(): string {
		return "DDialogDate";
	}
}
