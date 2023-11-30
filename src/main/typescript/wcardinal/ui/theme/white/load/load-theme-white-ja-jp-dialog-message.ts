/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteJaJpDialogMessage } from "../d-theme-white-ja-jp-dialog-message";

export const loadThemeWhiteJaJpDialogMessage = (): void => {
	DThemeWhite.set("DDialogMessage", DThemeWhiteJaJpDialogMessage);
};
