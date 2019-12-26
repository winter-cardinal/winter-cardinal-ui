/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeDefaultButtonBase } from "./d-theme-default-button-base";

export class DThemeDefaultButtonDanger extends DThemeDefaultButtonBase {

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.dThemeConfiguration.getButtonDangerDisabledBackgroundColor();
		} else if( DBaseStates.isPressed( state ) || DBaseStates.isActive( state ) ) {
			return this.dThemeConfiguration.getButtonDangerPressedBackgroundColor();
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.dThemeConfiguration.getButtonDangerFocusedBackgroundColor();
		} else {
			return this.dThemeConfiguration.getButtonDangerBackgroundColor();
		}
	}

	getBorderColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.dThemeConfiguration.getButtonDangerDisabledBorderColor();
		} else {
			return this.dThemeConfiguration.getButtonDangerBorderColor();
		}
	}

	getColor( state: DBaseState ): number {
		if( DBaseStates.isDisabled( state ) ) {
			return super.getColor( state );
		} else {
			return this.dThemeConfiguration.getButtonDangerColor();
		}
	}
}
