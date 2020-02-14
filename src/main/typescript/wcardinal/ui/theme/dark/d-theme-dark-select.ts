/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DMenuItem } from "../../d-menu-item";
import { DThemeSelect } from "../../d-select";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { isString } from "../../util/is-string";
import { DThemeDarkDropdownBase } from "./d-theme-dark-dropdown-base";

const formatter = ( value: DMenuItem<any> | null ): string => {
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

export class DThemeDarkSelect extends DThemeDarkDropdownBase<DMenuItem<any> | null> implements DThemeSelect {
	newTextValue(): DStateAwareOrValueMightBe<DMenuItem<any> | null> {
		return null;
	}

	getTextValue( state: DBaseState ): DMenuItem<any> | null {
		return null;
	}

	getTextFormatter(): ( value: any, caller: any ) => string {
		return formatter;
	}
}
