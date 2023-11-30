/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogLayered } from "../d-theme-dark-dialog-layered";
import { DThemeDarkDialogLayeredContent } from "../d-theme-dark-dialog-layered-content";
import { DThemeDarkDialogLayeredHeader } from "../d-theme-dark-dialog-layered-header";
import { DThemeDarkDialogLayeredHeaderButtonClose } from "../d-theme-dark-dialog-layered-header-button-close";
import { DThemeDarkDialogLayeredHeaderSeparator } from "../d-theme-dark-dialog-layered-header-separator";
import { DThemeDarkEnUsDialogLayeredFooter } from "../d-theme-dark-en-us-dialog-layered-footer";

export const loadThemeDarkEnUsDialogLayered = (): void => {
	DThemeDark.set("DDialogLayeredContent", DThemeDarkDialogLayeredContent);
	DThemeDark.set("DDialogLayeredFooter", DThemeDarkEnUsDialogLayeredFooter);
	DThemeDark.set("DDialogLayeredHeaderButtonClose", DThemeDarkDialogLayeredHeaderButtonClose);
	DThemeDark.set("DDialogLayeredHeaderSeparator", DThemeDarkDialogLayeredHeaderSeparator);
	DThemeDark.set("DDialogLayeredHeader", DThemeDarkDialogLayeredHeader);
	DThemeDark.set("DDialogLayered", DThemeDarkDialogLayered);
};
