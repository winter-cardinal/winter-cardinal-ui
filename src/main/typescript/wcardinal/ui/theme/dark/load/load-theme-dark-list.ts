/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkList } from "../d-theme-dark-list";
import { DThemeDarkListItem } from "../d-theme-dark-list-item";
import { DThemeDarkListItemAmbient } from "../d-theme-dark-list-item-ambient";

export const loadThemeDarkList = (): void => {
	DThemeDark.set("DListItemAmbient", DThemeDarkListItemAmbient);
	DThemeDark.set("DListItem", DThemeDarkListItem);
	DThemeDark.set("DList", DThemeDarkList);
};
