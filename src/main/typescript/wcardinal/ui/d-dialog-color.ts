/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DColorAndAlpha } from "./d-color-and-alpha";
import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerColor, DPickerColorOptions } from "./d-picker-color";
import { DPickerColorRecent } from "./d-picker-color-recent";

export interface DDialogColorOptions<
	THEME extends DThemeDialogColor = DThemeDialogColor
> extends DDialogCommandOptions<DColorAndAlpha, THEME> {
	picker?: DPickerColorOptions;
}

export interface DThemeDialogColor extends DThemeDialogCommand {

}

export class DDialogColor<
	THEME extends DThemeDialogColor = DThemeDialogColor,
	OPTIONS extends DDialogColorOptions<THEME> = DDialogColorOptions<THEME>
> extends DDialogCommand<DColorAndAlpha, THEME, OPTIONS> {
	protected _picker?: DPickerColor;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ): void {
		super.onInit( layout, options );
		layout.addChild( this.picker );
	}

	protected onOk( value: DColorAndAlpha | PromiseLike<DColorAndAlpha> ): void {
		super.onOk( value );

		const picker = this.picker;
		const recent = picker.recent;
		if( ! recent.contains( picker.new ) ) {
			recent.add( picker.new );
		}
	}

	get current(): DColorAndAlpha {
		return this.picker.current;
	}

	get new(): DColorAndAlpha {
		return this.picker.new;
	}

	get recent(): DPickerColorRecent {
		return this.picker.recent;
	}

	get picker(): DPickerColor {
		let result = this._picker;
		if( result == null ) {
			result = new DPickerColor( this._options?.picker );
			this._picker = result;
		}
		return result;
	}

	protected getResolvedValue(): DColorAndAlpha | PromiseLike<DColorAndAlpha> {
		return this.picker.new;
	}

	protected getType(): string {
		return "DDialogColor";
	}
}
