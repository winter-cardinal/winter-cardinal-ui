/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DText, DTextOptions, DThemeText } from "./d-text";

export interface DPickerDatetimeLabelOptions<
	THEME extends DThemePickerDatetimeLabel = DThemePickerDatetimeLabel
> extends DTextOptions<Date, THEME> {}

export interface DThemePickerDatetimeLabel extends DThemeText<Date> {}

export class DPickerDatetimeLabel<
	THEME extends DThemePickerDatetimeLabel = DThemePickerDatetimeLabel,
	OPTIONS extends DPickerDatetimeLabelOptions<THEME> = DPickerDatetimeLabelOptions<THEME>
> extends DText<Date, THEME, OPTIONS> {
	protected getType(): string {
		return "DPickerDatetimeLabel";
	}
}
