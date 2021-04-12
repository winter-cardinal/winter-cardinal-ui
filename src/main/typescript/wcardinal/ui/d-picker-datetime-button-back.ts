/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPickerDatetimeButtonBackOptions<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeButtonBack<VALUE> = DThemePickerDatetimeButtonBack<VALUE>
> extends DButtonAmbientOptions<VALUE, THEME> {}

export interface DThemePickerDatetimeButtonBack<VALUE = unknown>
	extends DThemeButtonAmbient<VALUE> {}

export class DPickerDatetimeButtonBack<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeButtonBack<VALUE> = DThemePickerDatetimeButtonBack<VALUE>,
	OPTIONS extends DPickerDatetimeButtonBackOptions<
		VALUE,
		THEME
	> = DPickerDatetimeButtonBackOptions<VALUE, THEME>
> extends DButtonAmbient<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DPickerDatetimeButtonBack";
	}
}
