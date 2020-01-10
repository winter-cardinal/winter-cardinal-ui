/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogSelect } from "../theme/dark/d-theme-dark-dialog-select";
import { DThemeDarkDialogSelectList } from "../theme/dark/d-theme-dark-dialog-select-list";
import { DThemeDarkDialogSelectListItem } from "../theme/dark/d-theme-dark-dialog-select-list-item";

export const loadThemeDarkDialogSelect = () => {
	DThemeDark.set( "DDialogSelect", DThemeDarkDialogSelect );
	DThemeDark.set( "DDialogSelectList", DThemeDarkDialogSelectList );
	DThemeDark.set( "DDialogSelectListItem", DThemeDarkDialogSelectListItem );
};
