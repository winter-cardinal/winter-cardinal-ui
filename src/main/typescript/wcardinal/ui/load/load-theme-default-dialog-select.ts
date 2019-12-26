/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogSelect } from "../theme/white/d-theme-white-dialog-select";
import { DThemeWhiteDialogSelectList } from "../theme/white/d-theme-white-dialog-select-list";
import { DThemeWhiteDialogSelectListItem } from "../theme/white/d-theme-white-dialog-select-list-item";

export const loadThemeWhiteDialogSelect = () => {
	DThemeWhite.set( "DDialogSelect", DThemeWhiteDialogSelect );
	DThemeWhite.set( "DDialogSelectList", DThemeWhiteDialogSelectList );
	DThemeWhite.set( "DDialogSelectListItem", DThemeWhiteDialogSelectListItem );
};
