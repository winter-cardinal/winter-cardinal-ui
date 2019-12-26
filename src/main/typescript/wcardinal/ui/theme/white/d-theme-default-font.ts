/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DFontStyle, DFontVariant, DFontWeight, DThemeFont } from "../../d-font";

export class DThemeWhiteFont implements DThemeFont {
	getFontFamilly() {
		return `ProximaNova,-apple-system,Meiryo,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`;
	}

	getFontSize(): number {
		return 14;
	}

	getColor( state: DBaseState ): number {
		return DThemeWhiteFont.getColor( state );
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

	getAlpha( state: DBaseState ): number {
		return DThemeWhiteFont.getAlpha( state );
	}

	getLineHeight(): number {
		return 30;
	}

	static getColor( state: DBaseState ): number {
		return 0x5f5f5f;
	}

	static getAlpha( state: DBaseState ): number {
		if( DBaseStates.isDisabled( state ) ) {
			return 0.5;
		} else {
			return 1.0;
		}
	}
}
