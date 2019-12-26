/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogSelect } from "../theme/default/d-theme-default-dialog-select";
import { DThemeWhiteDialogSelectList } from "../theme/default/d-theme-default-dialog-select-list";
import { DThemeWhiteDialogSelectListItem } from "../theme/default/d-theme-default-dialog-select-list-item";

export const loadThemeWhiteDialogSelect = () => {
	DThemeWhite.set( "DDialogSelect", DThemeWhiteDialogSelect );
	DThemeWhite.set( "DDialogSelectList", DThemeWhiteDialogSelectList );
	DThemeWhite.set( "DDialogSelectListItem", DThemeWhiteDialogSelectListItem );
};
