/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogInputText } from "../d-theme-white-dialog-input-text";

export const loadThemeWhiteDialogInputText = (): void => {
	DThemeWhite.set("DDialogInputText", DThemeWhiteDialogInputText);
};
