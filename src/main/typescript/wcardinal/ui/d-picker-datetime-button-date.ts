/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPickerDatetimeButtonDateOptions<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeButtonDate<VALUE> = DThemePickerDatetimeButtonDate<VALUE>
> extends DButtonAmbientOptions<VALUE, THEME> {}

export interface DThemePickerDatetimeButtonDate<VALUE = unknown>
	extends DThemeButtonAmbient<VALUE> {}

export class DPickerDatetimeButtonDate<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeButtonDate<VALUE> = DThemePickerDatetimeButtonDate<VALUE>,
	OPTIONS extends DPickerDatetimeButtonDateOptions<
		VALUE,
		THEME
	> = DPickerDatetimeButtonDateOptions<VALUE, THEME>
> extends DButtonAmbient<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DPickerDatetimeButtonDate";
	}
}
