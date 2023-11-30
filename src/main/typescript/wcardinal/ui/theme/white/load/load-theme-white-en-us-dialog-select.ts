/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogSelectList } from "../d-theme-white-dialog-select-list";
import { DThemeWhiteDialogSelectListItem } from "../d-theme-white-dialog-select-list-item";
import { DThemeWhiteEnUsDialogSelect } from "../d-theme-white-en-us-dialog-select";

export const loadThemeWhiteEnUsDialogSelect = (): void => {
	DThemeWhite.set("DDialogSelect", DThemeWhiteEnUsDialogSelect);
	DThemeWhite.set("DDialogSelectList", DThemeWhiteDialogSelectList);
	DThemeWhite.set("DDialogSelectListItem", DThemeWhiteDialogSelectListItem);
};
