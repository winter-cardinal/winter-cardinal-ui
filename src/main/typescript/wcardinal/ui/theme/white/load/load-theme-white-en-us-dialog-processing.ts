/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogProcessingMessage } from "../d-theme-white-dialog-processing-message";
import { DThemeWhiteEnUsDialogProcessing } from "../d-theme-white-en-us-dialog-processing";

export const loadThemeWhiteEnUsDialogProcessing = (): void => {
	DThemeWhite.set("DDialogProcessing", DThemeWhiteEnUsDialogProcessing);
	DThemeWhite.set("DDialogProcessingMessage", DThemeWhiteDialogProcessingMessage);
};
