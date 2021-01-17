/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItem } from "../../d-menu-item";
import { DThemeSelectMultiple } from "../../d-select-multiple";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { isString } from "../../util/is-string";
import { DThemeDarkDropdownBase } from "./d-theme-dark-dropdown-base";

const formatter = <VALUE>( values: Array<DMenuItem<VALUE>> ): string => {
	if( values ) {
		let result = "";
		let delimiter = "";
		for( let i = 0, imax = values.length; i < imax; ++i ) {
			const value = values[ i ];
			const text = value.text;
			if( isString( text ) ) {
				result += delimiter + text;
				delimiter = ", ";
			} else if( text != null ) {
				const computed = text( value.state );
				if( computed != null ) {
					result += delimiter + computed;
					delimiter = ", ";
				}
			}
		}
		return result;
	}
	return "";
};

export class DThemeDarkSelectMultiple<VALUE> extends DThemeDarkDropdownBase<Array<DMenuItem<VALUE>>>
	implements DThemeSelectMultiple<VALUE> {

	getTextFormatter(): ( value: Array<DMenuItem<VALUE>>, caller: any ) => string {
		return formatter;
	}

	newTextValue(): DStateAwareOrValueMightBe<Array<DMenuItem<VALUE>>> {
		return [];
	}
}
