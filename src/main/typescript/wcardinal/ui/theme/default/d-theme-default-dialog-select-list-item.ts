/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCornerMask } from "../../d-corner";
import { DThemeDialogSelecListItem } from "../../d-dialog-select-list-item";
import { DThemeDefaultFont } from "./d-theme-default-font";
import { DThemeDefaultListItem } from "./d-theme-default-list-item";

export class DThemeDefaultDialogSelectListItem extends DThemeDefaultListItem implements DThemeDialogSelecListItem {
	getBackgroundColor( state: DBaseState ): number | null {
		return super.getBackgroundColor( state & ~DBaseState.ACTIVE );
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return super.getBackgroundAlpha( state & ~DBaseState.ACTIVE );
	}

	getColor( state: DBaseState ): number {
		return DThemeDefaultFont.getColor( state );
	}

	getCornerMask(): number {
		return DCornerMask.NONE;
	}
}
