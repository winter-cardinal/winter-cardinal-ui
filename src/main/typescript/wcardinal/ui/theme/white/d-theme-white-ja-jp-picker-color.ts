/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DColorType } from "../../d-color-type";
import { DThemeWhitePickerColor } from "./d-theme-white-picker-color";

export class DThemeWhiteJaJpPickerColor extends DThemeWhitePickerColor {
	override toColorTypeLabel(type: DColorType): string {
		switch (type) {
			case DColorType.STANDARD:
				return "標準";
			case DColorType.CUSTOM:
				return "カスタム";
		}
	}
}
