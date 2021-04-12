/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogInputInteger } from "../d-theme-white-dialog-input-integer";

export const loadThemeWhiteDialogInputInteger = (): void => {
	DThemeWhite.set("DDialogInputInteger", DThemeWhiteDialogInputInteger);
};
