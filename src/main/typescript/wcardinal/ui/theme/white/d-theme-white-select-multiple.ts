/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSelectMultipleFormatter, DThemeSelectMultiple } from "../../d-select-multiple";
import { DThemeWhiteDropdown } from "./d-theme-white-dropdown";

const formatter = ( values: unknown[], texts: Array<string | null> ): string => {
	return texts.join(", ");
};

export class DThemeWhiteSelectMultiple extends DThemeWhiteDropdown implements DThemeSelectMultiple {
	getFormatter(): DSelectMultipleFormatter<unknown> {
		return formatter;
	}
}
