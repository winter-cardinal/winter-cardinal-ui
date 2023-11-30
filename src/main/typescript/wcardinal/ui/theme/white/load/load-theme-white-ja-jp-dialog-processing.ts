/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogProcessingMessage } from "../d-theme-white-dialog-processing-message";
import { DThemeWhiteJaJpDialogProcessing } from "../d-theme-white-ja-jp-dialog-processing";

export const loadThemeWhiteJaJpDialogProcessing = (): void => {
	DThemeWhite.set("DDialogProcessing", DThemeWhiteJaJpDialogProcessing);
	DThemeWhite.set("DDialogProcessingMessage", DThemeWhiteDialogProcessingMessage);
};
