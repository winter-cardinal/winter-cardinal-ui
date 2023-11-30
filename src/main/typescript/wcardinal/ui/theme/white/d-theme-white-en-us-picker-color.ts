/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DColorType } from "../../d-color-type";
import { DThemeWhitePickerColor } from "./d-theme-white-picker-color";

export class DThemeWhiteEnUsPickerColor extends DThemeWhitePickerColor {
	override toColorTypeLabel(type: DColorType): string {
		switch (type) {
			case DColorType.STANDARD:
				return "Standard";
			case DColorType.CUSTOM:
				return "Custom";
		}
	}
}
