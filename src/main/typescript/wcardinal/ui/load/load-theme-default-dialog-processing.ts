/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogProcessing } from "../theme/default/d-theme-default-dialog-processing";
import { DThemeWhiteDialogProcessingMessage } from "../theme/default/d-theme-default-dialog-processing-message";

export const loadThemeWhiteDialogProcessing = () => {
	DThemeWhite.set( "DDialogProcessing", DThemeWhiteDialogProcessing );
	DThemeWhite.set( "DDialogProcessingMessage", DThemeWhiteDialogProcessingMessage );
};
