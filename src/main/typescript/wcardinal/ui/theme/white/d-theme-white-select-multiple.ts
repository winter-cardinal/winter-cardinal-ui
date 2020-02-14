/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DMenuItem } from "../../d-menu-item";
import { DThemeSelectMultiple } from "../../d-select-multiple";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { isString } from "../../util/is-string";
import { DThemeWhiteDropdownBase } from "./d-theme-white-dropdown-base";

const formatter = ( values: Array<DMenuItem<any>> ): string => {
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

export class DThemeWhiteSelectMultiple extends DThemeWhiteDropdownBase<Array<DMenuItem<any>>>
	implements DThemeSelectMultiple {

	newTextValue(): DStateAwareOrValueMightBe<Array<DMenuItem<any>>> {
		return [];
	}

	getTextValue( state: DBaseState ): Array<DMenuItem<any>> {
		return [];
	}

	getTextFormatter(): ( value: any, caller: any ) => string {
		return formatter;
	}
}
