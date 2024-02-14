/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItem } from "../../d-menu-item";
import { DThemeSelect } from "../../d-select";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { isString } from "../../util/is-string";
import { DThemeDarkDropdownBase } from "./d-theme-dark-dropdown-base";

const formatter = <VALUE>(item: DMenuItem<VALUE> | null): string => {
	if (item) {
		const value = item.text.value;
		if (isString(value)) {
			return value;
		} else if (value != null) {
			const computed = value(item.state);
			if (computed != null) {
				return computed;
			}
		}
	}
	return "";
};

export class DThemeDarkSelect<VALUE = unknown>
	extends DThemeDarkDropdownBase<DMenuItem<VALUE> | null>
	implements DThemeSelect<VALUE>
{
	getTextFormatter(): (value: DMenuItem<VALUE> | null, caller: any) => string {
		return formatter;
	}

	newTextValue(): DStateAwareOrValueMightBe<DMenuItem<any> | null> {
		return null;
	}
}
