/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItem } from "../../d-menu-item";
import { DThemeSelectMultiple } from "../../d-select-multiple";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { isString } from "../../util/is-string";
import { DThemeWhiteDropdownBase } from "./d-theme-white-dropdown-base";

const formatter = <VALUE>(items: Array<DMenuItem<VALUE>> | null): string => {
	if (items) {
		let result = "";
		let delimiter = "";
		for (let i = 0, imax = items.length; i < imax; ++i) {
			const item = items[i];
			const value = item.text.value;
			if (isString(value)) {
				result += delimiter + value;
				delimiter = ", ";
			} else if (value != null) {
				const computed = value(item.state);
				if (computed != null) {
					result += delimiter + computed;
					delimiter = ", ";
				}
			}
		}
		return result;
	}
	return "";
};

export class DThemeWhiteSelectMultiple<VALUE = unknown>
	extends DThemeWhiteDropdownBase<Array<DMenuItem<VALUE>>>
	implements DThemeSelectMultiple<VALUE>
{
	getTextFormatter(): (value: Array<DMenuItem<VALUE>>, caller: any) => string {
		return formatter;
	}

	newTextValue(): DStateAwareOrValueMightBe<Array<DMenuItem<VALUE>>> {
		return [];
	}
}
