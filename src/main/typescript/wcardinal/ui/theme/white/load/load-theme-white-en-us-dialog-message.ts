/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteEnUsDialogMessage } from "../d-theme-white-en-us-dialog-message";

export const loadThemeWhiteEnUsDialogMessage = (): void => {
	DThemeWhite.set("DDialogMessage", DThemeWhiteEnUsDialogMessage);
};
