/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogSelectList } from "../d-theme-white-dialog-select-list";
import { DThemeWhiteDialogSelectListItem } from "../d-theme-white-dialog-select-list-item";
import { DThemeWhiteJaJpDialogSelect } from "../d-theme-white-ja-jp-dialog-select";

export const loadThemeWhiteJaJpDialogSelect = (): void => {
	DThemeWhite.set("DDialogSelect", DThemeWhiteJaJpDialogSelect);
	DThemeWhite.set("DDialogSelectList", DThemeWhiteDialogSelectList);
	DThemeWhite.set("DDialogSelectListItem", DThemeWhiteDialogSelectListItem);
};
