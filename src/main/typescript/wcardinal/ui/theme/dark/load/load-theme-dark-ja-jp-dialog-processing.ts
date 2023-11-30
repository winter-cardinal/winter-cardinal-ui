/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogProcessingMessage } from "../d-theme-dark-dialog-processing-message";
import { DThemeDarkJaJpDialogProcessing } from "../d-theme-dark-ja-jp-dialog-processing";

export const loadThemeDarkJaJpDialogProcessing = (): void => {
	DThemeDark.set("DDialogProcessing", DThemeDarkJaJpDialogProcessing);
	DThemeDark.set("DDialogProcessingMessage", DThemeDarkDialogProcessingMessage);
};
