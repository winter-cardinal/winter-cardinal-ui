/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogSelecListItem } from "../../d-dialog-select-list-item";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";
import { DThemeDarkListItems } from "./d-theme-dark-list-items";

export class DThemeDarkDialogSelectListItem
	extends DThemeDarkListItem
	implements DThemeDialogSelecListItem {
	protected newStyle(): DThemeDarkListItems {
		return new DThemeDarkListItems(null, false, true);
	}

	getCornerMask(): number {
		return DCornerMask.NONE;
	}
}
