/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DText, DTextOptions, DThemeText } from "./d-text";

export interface DPickerDatetimeLabelOptions<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeLabel = DThemePickerDatetimeLabel
> extends DTextOptions<VALUE, THEME> {

}

export interface DThemePickerDatetimeLabel extends DThemeText {

}

export class DPickerDatetimeLabel<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeLabel = DThemePickerDatetimeLabel,
	OPTIONS extends DPickerDatetimeLabelOptions<VALUE, THEME> = DPickerDatetimeLabelOptions<VALUE, THEME>
> extends DText<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DPickerDatetimeLabel";
	}
}
