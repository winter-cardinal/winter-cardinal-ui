/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeListItemAmbient } from "../../d-list-item-ambient";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";
import { DThemeDarkListItems } from "./d-theme-dark-list-items";

export class DThemeDarkListItemAmbient extends DThemeDarkListItem implements DThemeListItemAmbient {
	protected newStyle(): DThemeDarkListItems {
		return new DThemeDarkListItems(null, false, true);
	}
}
