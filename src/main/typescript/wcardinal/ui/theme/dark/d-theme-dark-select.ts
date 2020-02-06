/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeSelect } from "../../d-select";
import { DThemeDarkDropdown } from "./d-theme-dark-dropdown";

export class DThemeDarkSelect extends DThemeDarkDropdown implements DThemeSelect {
	isSyncEnabled(): boolean {
		return true;
	}
}
