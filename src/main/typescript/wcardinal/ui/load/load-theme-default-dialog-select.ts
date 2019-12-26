/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogSelect } from "../theme/default/d-theme-default-dialog-select";
import { DThemeDefaultDialogSelectList } from "../theme/default/d-theme-default-dialog-select-list";
import { DThemeDefaultDialogSelectListItem } from "../theme/default/d-theme-default-dialog-select-list-item";

export const loadThemeDefaultDialogSelect = () => {
	DThemeDefault.set( "DDialogSelect", DThemeDefaultDialogSelect );
	DThemeDefault.set( "DDialogSelectList", DThemeDefaultDialogSelectList );
	DThemeDefault.set( "DDialogSelectListItem", DThemeDefaultDialogSelectListItem );
};
