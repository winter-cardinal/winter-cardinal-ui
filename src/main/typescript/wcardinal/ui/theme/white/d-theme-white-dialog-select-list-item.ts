/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogSelecListItem } from "../../d-dialog-select-list-item";
import { DThemeWhiteListItem } from "./d-theme-white-list-item";
import { DThemeWhiteListItems } from "./d-theme-white-list-items";

export class DThemeWhiteDialogSelectListItem
	extends DThemeWhiteListItem
	implements DThemeDialogSelecListItem {
	protected newStyle(): DThemeWhiteListItems {
		return new DThemeWhiteListItems(null, false, true);
	}

	getCornerMask(): number {
		return DCornerMask.NONE;
	}
}
