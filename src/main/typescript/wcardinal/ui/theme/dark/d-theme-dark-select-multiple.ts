/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSelectMultipleFormatter, DThemeSelectMultiple } from "../../d-select-multiple";
import { DThemeDarkDropdown } from "./d-theme-dark-dropdown";

const formatter = ( values: unknown[], texts: Array<string | null> ): string => {
	return texts.join(", ");
};

export class DThemeDarkSelectMultiple extends DThemeDarkDropdown implements DThemeSelectMultiple {
	getFormatter(): DSelectMultipleFormatter<unknown> {
		return formatter;
	}
}
