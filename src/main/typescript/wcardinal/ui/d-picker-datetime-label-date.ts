/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DText, DTextOptions, DThemeText } from "./d-text";

export interface DPickerDatetimeLabelDateOptions<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeLabelDate = DThemePickerDatetimeLabelDate
> extends DTextOptions<VALUE, THEME> {

}

export interface DThemePickerDatetimeLabelDate extends DThemeText {

}

export class DPickerDatetimeLabelDate<
	VALUE = unknown,
	THEME extends DThemePickerDatetimeLabelDate = DThemePickerDatetimeLabelDate,
	OPTIONS extends DPickerDatetimeLabelDateOptions<VALUE, THEME> = DPickerDatetimeLabelDateOptions<VALUE, THEME>
> extends DText<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DPickerDatetimeLabelDate";
	}
}
