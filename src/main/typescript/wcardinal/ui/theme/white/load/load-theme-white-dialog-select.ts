/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogSelect } from "../d-theme-white-dialog-select";
import { DThemeWhiteDialogSelectList } from "../d-theme-white-dialog-select-list";
import { DThemeWhiteDialogSelectListItem } from "../d-theme-white-dialog-select-list-item";

export const loadThemeWhiteDialogSelect = (): void => {
	DThemeWhite.set( "DDialogSelect", DThemeWhiteDialogSelect );
	DThemeWhite.set( "DDialogSelectList", DThemeWhiteDialogSelectList );
	DThemeWhite.set( "DDialogSelectListItem", DThemeWhiteDialogSelectListItem );
};
