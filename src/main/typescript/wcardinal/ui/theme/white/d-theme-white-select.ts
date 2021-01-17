/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItem } from "../../d-menu-item";
import { DThemeSelect } from "../../d-select";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { isString } from "../../util/is-string";
import { DThemeWhiteDropdownBase } from "./d-theme-white-dropdown-base";

const formatter = <VALUE>( value: DMenuItem<VALUE> | null ): string => {
	if( value ) {
		const text = value.text;
		if( isString( text ) ) {
			return text;
		} else if( text != null ) {
			const computed = text( value.state );
			if( computed != null ) {
				return computed;
			}
		}
	}
	return "";
};

export class DThemeWhiteSelect<VALUE> extends DThemeWhiteDropdownBase<DMenuItem<VALUE> | null> implements DThemeSelect<VALUE> {
	getTextFormatter(): ( value: DMenuItem<VALUE> | null, caller: any ) => string {
		return formatter;
	}

	newTextValue(): DStateAwareOrValueMightBe<DMenuItem<any> | null> {
		return null;
	}
}
