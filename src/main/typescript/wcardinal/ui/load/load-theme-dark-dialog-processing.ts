/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogProcessing } from "../theme/dark/d-theme-dark-dialog-processing";
import { DThemeDarkDialogProcessingMessage } from "../theme/dark/d-theme-dark-dialog-processing-message";

export const loadThemeDarkDialogProcessing = () => {
	DThemeDark.set( "DDialogProcessing", DThemeDarkDialogProcessing );
	DThemeDark.set( "DDialogProcessingMessage", DThemeDarkDialogProcessingMessage );
};
