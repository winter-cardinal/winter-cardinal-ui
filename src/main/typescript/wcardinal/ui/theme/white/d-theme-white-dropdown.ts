/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDropdown } from "../../d-dropdown";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteDropdownBase } from "./d-theme-white-dropdown-base";

export class DThemeWhiteDropdown extends DThemeWhiteDropdownBase<string> implements DThemeDropdown {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "";
	}
}
