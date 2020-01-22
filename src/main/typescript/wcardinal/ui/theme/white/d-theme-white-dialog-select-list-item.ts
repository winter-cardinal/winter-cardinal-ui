/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogSelecListItem } from "../../d-dialog-select-list-item";
import { DThemeWhiteFont } from "./d-theme-white-font";
import { DThemeWhiteListItem } from "./d-theme-white-list-item";

export class DThemeWhiteDialogSelectListItem extends DThemeWhiteListItem implements DThemeDialogSelecListItem {
	getBackgroundColor( state: DBaseState ): number | null {
		return super.getBackgroundColor( state & ~DBaseState.ACTIVE );
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return super.getBackgroundAlpha( state & ~DBaseState.ACTIVE );
	}

	getColor( state: DBaseState ): number {
		return DThemeWhiteFont.getColor( state );
	}

	getCornerMask(): number {
		return DCornerMask.NONE;
	}
}
