/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DFontStyle, DFontVariant, DFontWeight, DThemeFont } from "../../d-font";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkFont implements DThemeFont {
	getFontFamilly() {
		return `ProximaNova,-apple-system,Meiryo,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`;
	}

	getFontSize(): number {
		return 14;
	}

	getColor( state: DBaseStateSet ): number {
		return DThemeDarkConstants.COLOR;
	}

	getFontWeight(): DFontWeight {
		return "normal";
	}

	getFontStyle(): DFontStyle {
		return "normal";
	}

	getFontVariant(): DFontVariant {
		return "normal";
	}

	getAlpha( state: DBaseStateSet ): number {
		if( state.inDisabled ) {
			return 0.5;
		}
		return 1.0;
	}

	getLineHeight(): number {
		return 30;
	}
}
