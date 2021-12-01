/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeListItemAmbient } from "../../d-list-item-ambient";
import { DThemeWhiteListItem } from "./d-theme-white-list-item";
import { DThemeWhiteListItems } from "./d-theme-white-list-items";

export class DThemeWhiteListItemAmbient
	extends DThemeWhiteListItem
	implements DThemeListItemAmbient
{
	protected newStyle(): DThemeWhiteListItems {
		return new DThemeWhiteListItems(null, false, true);
	}
}
