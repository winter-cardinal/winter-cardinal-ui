/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCornerMask } from "../../d-corner";
import { DThemeDialogSelecListItem } from "../../d-dialog-select-list-item";
import { DThemeDarkFont } from "./d-theme-dark-font";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";

export class DThemeDarkDialogSelectListItem extends DThemeDarkListItem implements DThemeDialogSelecListItem {
	getBackgroundColor( state: DBaseState ): number | null {
		return super.getBackgroundColor( state & ~DBaseState.ACTIVE );
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return super.getBackgroundAlpha( state & ~DBaseState.ACTIVE );
	}

	getColor( state: DBaseState ): number {
		return DThemeDarkFont.getColor( state );
	}

	getCornerMask(): number {
		return DCornerMask.NONE;
	}
}
