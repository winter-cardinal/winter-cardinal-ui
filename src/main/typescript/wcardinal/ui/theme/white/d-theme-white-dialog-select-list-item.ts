/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogSelecListItem } from "../../d-dialog-select-list-item";
import { DDialogState } from "../../d-dialog-state";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteListItem } from "./d-theme-white-list-item";

export class DThemeWhiteDialogSelectListItem extends DThemeWhiteListItem implements DThemeDialogSelecListItem {
	protected getBackgroundColorActive( state: DBaseStateSet ): number | null {
		if( state.in( DDialogState.MODELESS ) )	{
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		}
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
	}

	protected getBackgroundAlphaActive( state: DBaseStateSet ): number {
		if( state.in( DDialogState.MODELESS ) )	{
			return 1.0;
		}
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
	}

	protected getColorActive( state: DBaseStateSet ): number {
		if( state.in( DDialogState.MODELESS ) )	{
			return DThemeWhiteConstants.ACTIVE_COLOR;
		}
		return DThemeWhiteConstants.COLOR;
	}

	getCornerMask(): number {
		return DCornerMask.NONE;
	}
}
