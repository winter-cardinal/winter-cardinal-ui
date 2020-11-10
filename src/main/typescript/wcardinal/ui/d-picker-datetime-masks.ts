/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DThemes } from "./theme/d-themes";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";

export interface DPickerDatetimeMaskOptions {
	mask?: keyof typeof DPickerDatetimeMask | Array<keyof typeof DPickerDatetimeMask> | DPickerDatetimeMask;
}

export interface DPickerDatetimeMaskTheme {
	getMask(): DPickerDatetimeMask;
}

export class DPickerDatetimeMasks {
	static from( themeOrThemeName?: DPickerDatetimeMaskTheme | string, options?: DPickerDatetimeMaskOptions ): DPickerDatetimeMask {
		const mask = options?.mask;
		if( mask == null ) {
			if( isString( themeOrThemeName ) ) {
				const theme = DThemes.getInstance().get<DPickerDatetimeMaskTheme>( themeOrThemeName );
				if( theme != null ) {
					return theme.getMask();
				}
			} else if( themeOrThemeName != null ) {
				return themeOrThemeName.getMask();
			}
			return DPickerDatetimeMask.NONE;
		} else if( isString( mask ) ) {
			return DPickerDatetimeMask[ mask ];
		} else if( isNumber( mask ) ) {
			return mask;
		}
		let result = DPickerDatetimeMask.NONE;
		for( let i = 0, imax = mask.length; i < imax; ++i ) {
			result |= DPickerDatetimeMask[ mask[ i ] ];
		}
		return result;
	}
}
