/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogLayered } from "../d-theme-white-dialog-layered";
import { DThemeWhiteDialogLayeredContent } from "../d-theme-white-dialog-layered-content";
import { DThemeWhiteDialogLayeredFooter } from "../d-theme-white-dialog-layered-footer";
import { DThemeWhiteDialogLayeredHeader } from "../d-theme-white-dialog-layered-header";
import { DThemeWhiteDialogLayeredHeaderButtonClose } from "../d-theme-white-dialog-layered-header-button-close";

export const loadThemeWhiteDialogLayered = (): void => {
	DThemeWhite.set("DDialogLayeredContent", DThemeWhiteDialogLayeredContent);
	DThemeWhite.set("DDialogLayeredFooter", DThemeWhiteDialogLayeredFooter);
	DThemeWhite.set("DDialogLayeredHeaderButtonClose", DThemeWhiteDialogLayeredHeaderButtonClose);
	DThemeWhite.set("DDialogLayeredHeader", DThemeWhiteDialogLayeredHeader);
	DThemeWhite.set("DDialogLayered", DThemeWhiteDialogLayered);
};
