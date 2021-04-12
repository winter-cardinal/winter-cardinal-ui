/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDropdownBase, DDropdownBaseOptions, DThemeDropdownBase } from "./d-dropdown-base";

/**
 * Dropdown options.
 */
export interface DDropdownOptions<VALUE = unknown, THEME extends DThemeDropdown = DThemeDropdown>
	extends DDropdownBaseOptions<VALUE, string, THEME> {}

/**
 * A dropdown theme.
 */
export interface DThemeDropdown extends DThemeDropdownBase<string> {}

export class DDropdown<
	VALUE = unknown,
	THEME extends DThemeDropdown = DThemeDropdown,
	OPTIONS extends DDropdownOptions<VALUE, THEME> = DDropdownOptions<VALUE, THEME>
> extends DDropdownBase<VALUE, string, THEME, OPTIONS> {
	protected getType(): string {
		return "DDropdown";
	}
}
