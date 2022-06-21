/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogLayered } from "../d-theme-dark-dialog-layered";
import { DThemeDarkDialogLayeredContent } from "../d-theme-dark-dialog-layered-content";
import { DThemeDarkDialogLayeredFooter } from "../d-theme-dark-dialog-layered-footer";
import { DThemeDarkDialogLayeredHeader } from "../d-theme-dark-dialog-layered-header";
import { DThemeDarkDialogLayeredHeaderButtonClose } from "../d-theme-dark-dialog-layered-header-button-close";

export const loadThemeDarkDialogLayered = (): void => {
	DThemeDark.set("DDialogLayeredContent", DThemeDarkDialogLayeredContent);
	DThemeDark.set("DDialogLayeredFooter", DThemeDarkDialogLayeredFooter);
	DThemeDark.set("DDialogLayeredHeaderButtonClose", DThemeDarkDialogLayeredHeaderButtonClose);
	DThemeDark.set("DDialogLayeredHeader", DThemeDarkDialogLayeredHeader);
	DThemeDark.set("DDialogLayered", DThemeDarkDialogLayered);
};
