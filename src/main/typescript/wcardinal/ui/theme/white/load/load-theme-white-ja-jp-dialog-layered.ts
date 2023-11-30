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
import { DThemeWhiteJaJpDialogLayeredFooter } from "../d-theme-white-ja-jp-dialog-layered-footer";

export const loadThemeWhiteJaJpDialogLayered = (): void => {
	DThemeWhite.set("DDialogLayeredContent", DThemeWhiteDialogLayeredContent);
	DThemeWhite.set("DDialogLayeredFooter", DThemeWhiteJaJpDialogLayeredFooter);
	DThemeWhite.set("DDialogLayeredHeaderButtonClose", DThemeWhiteDialogLayeredHeaderButtonClose);
	DThemeWhite.set("DDialogLayeredHeaderSeparator", DThemeWhiteDialogLayeredHeaderSeparator);
	DThemeWhite.set("DDialogLayeredHeader", DThemeWhiteDialogLayeredHeader);
	DThemeWhite.set("DDialogLayered", DThemeWhiteDialogLayered);
};
