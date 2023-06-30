/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilRgb } from "../../util/util-rgb";
import { DThemeColorStandard } from "../../d-color-standard";

export class DThemeWhiteColorStandard implements DThemeColorStandard {
	newColors(): number[] {
		const result = [
			0x000000, 0x434343, 0x666666, 0x999999, 0xb7b7b7, 0xcccccc, 0xd9d9d9, 0xefefef,
			0xf3f3f3, 0xffffff, 0xc00000, 0xff0000, 0xffc000, 0xffff00, 0x92d050, 0x00b050,
			0x00b0f0, 0x0070c0, 0x002060, 0x7030a0
		];
		for (let i = 10; i < 20; ++i) {
			result.push(UtilRgb.brighten(result[i], 0.75));
		}
		for (let i = 10; i < 20; ++i) {
			result.push(UtilRgb.brighten(result[i], 0.45));
		}
		for (let i = 10; i < 20; ++i) {
			result.push(UtilRgb.brighten(result[i], 0.15));
		}
		for (let i = 10; i < 20; ++i) {
			result.push(UtilRgb.darken(result[i], 0.15));
		}
		for (let i = 10; i < 20; ++i) {
			result.push(UtilRgb.darken(result[i], 0.45));
		}
		for (let i = 10; i < 20; ++i) {
			result.push(UtilRgb.darken(result[i], 0.75));
		}
		return result;
	}
}
