/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPickerDatetimeButtonDateOptions<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeButtonDate = DThemePickerDatetimeButtonDate
> extends DButtonAmbientOptions<VALUE, THEME> {

}

export interface DThemePickerDatetimeButtonDate extends DThemeButtonAmbient {

}

export class DPickerDatetimeButtonDate<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeButtonDate = DThemePickerDatetimeButtonDate,
	OPTIONS extends DPickerDatetimeButtonDateOptions<VALUE, THEME> = DPickerDatetimeButtonDateOptions<VALUE, THEME>
> extends DButtonAmbient<VALUE, THEME, OPTIONS> {
	protected onToggleStart(): void {
		if( ! this.isActive() ) {
			this.setActive( true );
		}
	}

	protected onToggleEnd(): void {
		this.emit( this.isActive() ? "active" : "inactive", this );
	}

	protected getType(): string {
		return "DPickerDatetimeButtonDate";
	}
}
