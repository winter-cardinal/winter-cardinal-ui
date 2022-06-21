/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogFitted } from "../d-theme-white-dialog-fitted";
import { DThemeWhiteDialogFittedContent } from "../d-theme-white-dialog-fitted-content";

export const loadThemeWhiteDialogFitted = (): void => {
	DThemeWhite.set("DDialogFittedContent", DThemeWhiteDialogFittedContent);
	DThemeWhite.set("DDialogFitted", DThemeWhiteDialogFitted);
};
