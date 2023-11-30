/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkEnUsDialogMessage } from "../d-theme-dark-en-us-dialog-message";

export const loadThemeDarkEnUsDialogMessage = (): void => {
	DThemeDark.set("DDialogMessage", DThemeDarkEnUsDialogMessage);
};
