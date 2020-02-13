/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSelectMultipleFormatter, DThemeSelectMultiple } from "../../d-select-multiple";
import { DThemeDarkSelectBase } from "./d-theme-dark-select-base";

const formatter = ( values: unknown[], texts: Array<string | null> ): string => {
	return texts.join(", ");
};

export class DThemeDarkSelectMultiple extends DThemeDarkSelectBase implements DThemeSelectMultiple {
	getFormatter(): DSelectMultipleFormatter<unknown> {
		return formatter;
	}
}
