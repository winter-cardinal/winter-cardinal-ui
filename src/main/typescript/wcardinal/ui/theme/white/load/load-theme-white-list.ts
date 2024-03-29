/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteList } from "../d-theme-white-list";
import { DThemeWhiteListItem } from "../d-theme-white-list-item";
import { DThemeWhiteListItemAmbient } from "../d-theme-white-list-item-ambient";

export const loadThemeWhiteList = (): void => {
	DThemeWhite.set("DListItemAmbient", DThemeWhiteListItemAmbient);
	DThemeWhite.set("DListItem", DThemeWhiteListItem);
	DThemeWhite.set("DList", DThemeWhiteList);
};
