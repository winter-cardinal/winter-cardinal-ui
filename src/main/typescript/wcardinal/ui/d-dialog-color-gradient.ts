/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerColorGradient, DPickerColorGradientOptions } from "./d-picker-color-gradient";
import { DPickerColorGradientData } from "./d-picker-color-gradient-data";
import { DPickerColorGradientRecent } from "./d-picker-color-gradient-recent";

export interface DDialogColorGradientOptions<
	THEME extends DThemeDialogColorGradient = DThemeDialogColorGradient
> extends DDialogCommandOptions<THEME> {
	picker?: DPickerColorGradientOptions;
}

export interface DThemeDialogColorGradient extends DThemeDialogCommand {

}

export class DDialogColorGradient<
	THEME extends DThemeDialogColorGradient = DThemeDialogColorGradient,
	OPTIONS extends DDialogColorGradientOptions<THEME> = DDialogColorGradientOptions<THEME>
> extends DDialogCommand<THEME, OPTIONS> {
	protected _picker!: DPickerColorGradient;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		super.onInit( layout, options );

		const picker = new DPickerColorGradient( options && options.picker );
		this._picker = picker;
		layout.addChild( picker );

		this.on( "ok", (): void => {
			const data = picker.data;
			const recent = picker.recent;
			if( ! recent.contains( data ) ) {
				recent.add( data.toObject() );
			}
		});
	}

	get data(): DPickerColorGradientData {
		return this._picker.data;
	}

	get recent(): DPickerColorGradientRecent {
		return this._picker.recent;
	}

	get picker(): DPickerColorGradient {
		return this._picker;
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		this._picker.onKeyDown( e );
		return super.onKeyDown( e );
	}

	protected getType(): string {
		return "DDialogColorGradient";
	}
}
