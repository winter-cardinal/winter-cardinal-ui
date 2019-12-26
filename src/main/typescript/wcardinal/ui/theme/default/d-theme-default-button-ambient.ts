/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeButtonAmbient } from "../../d-button-ambient";
import { DThemeDefaultButtonBase } from "./d-theme-default-button-base";
import { DThemeDefaultConstants } from "./d-theme-default-constants";

export class DThemeDefaultButtonAmbient extends DThemeDefaultButtonBase implements DThemeButtonAmbient {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isActive( state ) ) {
			return this.dThemeConfiguration.getButtonAmbientActiveBackgroundColor();
		} else {
			return this.dThemeConfiguration.getButtonAmbientBackgroundColor();
		}
	}

	getBackgroundAlpha( state: DBaseState ): number {
		if( ! DBaseStates.isDisabled( state ) ) {
			if( DBaseStates.isActive( state ) ) {
				return 1.0;
			} else if( DBaseStates.isPressed( state ) ) {
				return DThemeDefaultConstants.WEAK_HIGHLIGHT_ALPHA * 2;
			} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
				return DThemeDefaultConstants.WEAK_HIGHLIGHT_ALPHA;
			}
		}
		return 0;
	}

	getBorderColor( state: DBaseState ): number | null {
		return this.dThemeConfiguration.getButtonAmbientBorderColor();
	}
}
