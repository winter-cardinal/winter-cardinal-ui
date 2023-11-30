/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogSelectList } from "../d-theme-dark-dialog-select-list";
import { DThemeDarkDialogSelectListItem } from "../d-theme-dark-dialog-select-list-item";
import { DThemeDarkJaJpDialogSelect } from "../d-theme-dark-ja-jp-dialog-select";

export const loadThemeDarkJaJpDialogSelect = (): void => {
	DThemeDark.set("DDialogSelect", DThemeDarkJaJpDialogSelect);
	DThemeDark.set("DDialogSelectList", DThemeDarkDialogSelectList);
	DThemeDark.set("DDialogSelectListItem", DThemeDarkDialogSelectListItem);
};
