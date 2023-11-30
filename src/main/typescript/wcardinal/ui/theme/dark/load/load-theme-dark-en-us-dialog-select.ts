/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogSelectList } from "../d-theme-dark-dialog-select-list";
import { DThemeDarkDialogSelectListItem } from "../d-theme-dark-dialog-select-list-item";
import { DThemeDarkEnUsDialogSelect } from "../d-theme-dark-en-us-dialog-select";

export const loadThemeDarkEnUsDialogSelect = (): void => {
	DThemeDark.set("DDialogSelect", DThemeDarkEnUsDialogSelect);
	DThemeDark.set("DDialogSelectList", DThemeDarkDialogSelectList);
	DThemeDark.set("DDialogSelectListItem", DThemeDarkDialogSelectListItem);
};
