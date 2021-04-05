/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogSelect } from "../d-theme-dark-dialog-select";
import { DThemeDarkDialogSelectList } from "../d-theme-dark-dialog-select-list";
import { DThemeDarkDialogSelectListItem } from "../d-theme-dark-dialog-select-list-item";

export const loadThemeDarkDialogSelect = (): void => {
	DThemeDark.set( "DDialogSelect", DThemeDarkDialogSelect );
	DThemeDark.set( "DDialogSelectList", DThemeDarkDialogSelectList );
	DThemeDark.set( "DDialogSelectListItem", DThemeDarkDialogSelectListItem );
};
