/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogProcessing } from "../theme/white/d-theme-white-dialog-processing";
import { DThemeWhiteDialogProcessingMessage } from "../theme/white/d-theme-white-dialog-processing-message";

export const loadThemeWhiteDialogProcessing = () => {
	DThemeWhite.set( "DDialogProcessing", DThemeWhiteDialogProcessing );
	DThemeWhite.set( "DDialogProcessingMessage", DThemeWhiteDialogProcessingMessage );
};
