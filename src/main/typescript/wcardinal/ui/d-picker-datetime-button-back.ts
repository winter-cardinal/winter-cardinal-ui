/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPickerDatetimeButtonBackOptions<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeButtonBack = DThemePickerDatetimeButtonBack
> extends DButtonAmbientOptions<VALUE, THEME> {

}

export interface DThemePickerDatetimeButtonBack extends DThemeButtonAmbient {

}

export class DPickerDatetimeButtonBack<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeButtonBack = DThemePickerDatetimeButtonBack,
	OPTIONS extends DPickerDatetimeButtonBackOptions<VALUE, THEME> = DPickerDatetimeButtonBackOptions<VALUE, THEME>
> extends DButtonAmbient<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DPickerDatetimeButtonBack";
	}
}
