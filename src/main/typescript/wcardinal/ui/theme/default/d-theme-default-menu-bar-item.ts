/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeMenuBarItem } from "../../d-menu-bar-item";
import { DThemeDefaultButton } from "./d-theme-default-button";

export class DThemeDefaultMenuBarItem extends DThemeDefaultButton implements DThemeMenuBarItem {

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.dThemeConfiguration.getMenuBarItemDisabledBackgroundColor();
		} else if( DBaseStates.isActive( state ) ) {
			return this.dThemeConfiguration.getMenuBarItemActiveBackgroundColor();
		} else if( DBaseStates.isPressed( state ) ) {
			return this.dThemeConfiguration.getMenuBarItemPressedBackgroundColor();
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.dThemeConfiguration.getMenuBarItemFocusedBackgroundColor();
		} else {
			return this.dThemeConfiguration.getMenuBarItemBackgroundColor();
		}
	}

	getBorderColor(): number | null {
		return this.dThemeConfiguration.getMenuBarItemBorderColor();
	}

	getWidth(): DCoordinateSize {
		return "auto";
	}

	getHeight(): DCoordinateSize {
		return "100%";
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}
}
