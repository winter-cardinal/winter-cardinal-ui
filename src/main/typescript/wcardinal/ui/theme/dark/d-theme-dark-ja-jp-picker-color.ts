/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DColorType } from "../../d-color-type";
import { DThemeDarkPickerColor } from "./d-theme-dark-picker-color";

export class DThemeDarkJaJpPickerColor extends DThemeDarkPickerColor {
	override toColorTypeLabel(type: DColorType): string {
		switch (type) {
			case DColorType.STANDARD:
				return "標準";
			case DColorType.CUSTOM:
				return "カスタム";
		}
	}
}
