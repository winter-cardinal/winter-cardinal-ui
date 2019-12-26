/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeListItem } from "../../d-list-item";
import { DThemeDefaultConstants } from "./d-theme-default-constants";
import { DThemeDefaultImage } from "./d-theme-default-image";

export class DThemeDefaultListItem extends DThemeDefaultImage implements DThemeListItem {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.dThemeConfiguration.getListItemDisabledBackgroundColor();
		} else if( DBaseStates.isActive( state ) ) {
			return this.dThemeConfiguration.getListItemActiveBackgroundColor();
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.dThemeConfiguration.getListItemFocusedBackgroundColor();
		} else {
			return this.dThemeConfiguration.getListItemBackgroundColor();
		}
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return DThemeDefaultConstants.HIGHLIGHT_ALPHA;
	}

	getBorderColor( state: DBaseState ): number | null {
		return this.dThemeConfiguration.getListItemBorderColor();
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getWidth(): DCoordinateSize {
		return "padding";
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}
}
