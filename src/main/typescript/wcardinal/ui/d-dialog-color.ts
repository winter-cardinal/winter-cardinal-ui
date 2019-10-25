/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DColorAndAlpha } from "./d-color";
import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerColor, DPickerColorOptions } from "./d-picker-color";
import { DPickerColorRecent } from "./d-picker-color-recent";

export interface DDialogColorOptions<
	THEME extends DThemeDialogColor = DThemeDialogColor
> extends DDialogCommandOptions<THEME> {
	picker?: DPickerColorOptions;
}

export interface DThemeDialogColor extends DThemeDialogCommand {

}

export class DDialogColor<
	THEME extends DThemeDialogColor = DThemeDialogColor,
	OPTIONS extends DDialogColorOptions<THEME> = DDialogColorOptions<THEME>
> extends DDialogCommand<THEME, OPTIONS> {
	protected _picker!: DPickerColor;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		super.onInit( layout, options );

		const picker = new DPickerColor( options && options.picker );
		this._picker = picker;
		layout.addChild( picker );

		this.on( "ok", (): void => {
			const recent = picker.recent;
			if( ! recent.contains( picker.new ) ) {
				recent.add( picker.new );
			}
		});
	}

	get current(): DColorAndAlpha {
		return this._picker.current;
	}

	get new(): DColorAndAlpha {
		return this._picker.new;
	}

	get recent(): DPickerColorRecent {
		return this._picker.recent;
	}

	get picker(): DPickerColor {
		return this._picker;
	}

	protected getType(): string {
		return "DDialogColor";
	}
}
