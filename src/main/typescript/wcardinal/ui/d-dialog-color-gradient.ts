/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DColorGradient } from "./d-color-gradient";
import { DColorGradientObservable } from "./d-color-gradient-observable";
import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerColorGradient, DPickerColorGradientOptions } from "./d-picker-color-gradient";
import { DPickerColorGradientRecent } from "./d-picker-color-gradient-recent";

export interface DDialogColorGradientOptions<
	THEME extends DThemeDialogColorGradient = DThemeDialogColorGradient
> extends DDialogCommandOptions<DColorGradient, THEME> {
	picker?: DPickerColorGradientOptions;
}

export interface DThemeDialogColorGradient extends DThemeDialogCommand {

}

export class DDialogColorGradient<
	THEME extends DThemeDialogColorGradient = DThemeDialogColorGradient,
	OPTIONS extends DDialogColorGradientOptions<THEME> = DDialogColorGradientOptions<THEME>
> extends DDialogCommand<DColorGradient, THEME, OPTIONS> {
	protected _picker?: DPickerColorGradient;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ): void {
		super.onInit( layout, options );
		layout.addChild( this.picker );
	}

	protected onOk( value: DColorGradient | PromiseLike<DColorGradient> ): void {
		super.onOk( value );

		const picker = this.picker;
		const data = picker.value;
		const recent = picker.recent;
		if( ! recent.contains( data ) ) {
			recent.add( data.toObject() );
		}
	}

	get value(): DColorGradientObservable {
		return this.picker.value;
	}

	get recent(): DPickerColorGradientRecent {
		return this.picker.recent;
	}

	get picker(): DPickerColorGradient {
		let result = this._picker;
		if( result == null ) {
			result = new DPickerColorGradient( this._options?.picker );
			this._picker = result;
		}
		return result;
	}

	protected getResolvedValue(): DColorGradient | PromiseLike<DColorGradient> {
		return this.picker.value;
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		this.picker.onKeyDown( e );
		return super.onKeyDown( e );
	}

	protected getType(): string {
		return "DDialogColorGradient";
	}
}
