/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPickerDatetimeButtonNextOptions<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeButtonNext<VALUE> = DThemePickerDatetimeButtonNext<VALUE>
> extends DButtonAmbientOptions<VALUE, THEME> {

}

export interface DThemePickerDatetimeButtonNext<VALUE> extends DThemeButtonAmbient<VALUE> {

}

export class DPickerDatetimeButtonNext<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeButtonNext<VALUE> = DThemePickerDatetimeButtonNext<VALUE>,
	OPTIONS extends DPickerDatetimeButtonNextOptions<VALUE, THEME> = DPickerDatetimeButtonNextOptions<VALUE, THEME>
> extends DButtonAmbient<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DPickerDatetimeButtonNext";
	}
}
