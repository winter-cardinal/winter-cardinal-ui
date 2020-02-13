/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSelectFormatter, DThemeSelect } from "../../d-select";
import { DThemeDarkDropdown } from "./d-theme-dark-dropdown";

const formatter = ( value: unknown, text: string | null ): string => {
	return text || "";
};

export class DThemeDarkSelect extends DThemeDarkDropdown implements DThemeSelect {
	getFormatter(): DSelectFormatter<unknown> {
		return formatter;
	}

	isSyncEnabled(): boolean {
		return true;
	}
}
