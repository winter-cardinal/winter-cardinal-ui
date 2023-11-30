/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogProcessingMessage } from "../d-theme-dark-dialog-processing-message";
import { DThemeDarkEnUsDialogProcessing } from "../d-theme-dark-en-us-dialog-processing";

export const loadThemeDarkEnUsDialogProcessing = (): void => {
	DThemeDark.set("DDialogProcessing", DThemeDarkEnUsDialogProcessing);
	DThemeDark.set("DDialogProcessingMessage", DThemeDarkDialogProcessingMessage);
};
