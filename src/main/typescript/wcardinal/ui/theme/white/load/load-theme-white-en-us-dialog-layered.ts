/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogLayered } from "../d-theme-white-dialog-layered";
import { DThemeWhiteDialogLayeredContent } from "../d-theme-white-dialog-layered-content";
import { DThemeWhiteDialogLayeredHeader } from "../d-theme-white-dialog-layered-header";
import { DThemeWhiteDialogLayeredHeaderButtonClose } from "../d-theme-white-dialog-layered-header-button-close";
import { DThemeWhiteDialogLayeredHeaderSeparator } from "../d-theme-white-dialog-layered-header-separator";
import { DThemeWhiteEnUsDialogLayeredFooter } from "../d-theme-white-en-us-dialog-layered-footer";

export const loadThemeWhiteEnUsDialogLayered = (): void => {
	DThemeWhite.set("DDialogLayeredContent", DThemeWhiteDialogLayeredContent);
	DThemeWhite.set("DDialogLayeredFooter", DThemeWhiteEnUsDialogLayeredFooter);
	DThemeWhite.set("DDialogLayeredHeaderButtonClose", DThemeWhiteDialogLayeredHeaderButtonClose);
	DThemeWhite.set("DDialogLayeredHeaderSeparator", DThemeWhiteDialogLayeredHeaderSeparator);
	DThemeWhite.set("DDialogLayeredHeader", DThemeWhiteDialogLayeredHeader);
	DThemeWhite.set("DDialogLayered", DThemeWhiteDialogLayered);
};
