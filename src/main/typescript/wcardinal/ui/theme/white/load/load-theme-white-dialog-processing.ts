/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogProcessing } from "../d-theme-white-dialog-processing";
import { DThemeWhiteDialogProcessingMessage } from "../d-theme-white-dialog-processing-message";

export const loadThemeWhiteDialogProcessing = (): void => {
	DThemeWhite.set( "DDialogProcessing", DThemeWhiteDialogProcessing );
	DThemeWhite.set( "DDialogProcessingMessage", DThemeWhiteDialogProcessingMessage );
};
