/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogProcessing } from "../theme/default/d-theme-default-dialog-processing";
import { DThemeDefaultDialogProcessingMessage } from "../theme/default/d-theme-default-dialog-processing-message";

export const loadThemeDefaultDialogProcessing = () => {
	DThemeDefault.set( "DDialogProcessing", DThemeDefaultDialogProcessing );
	DThemeDefault.set( "DDialogProcessingMessage", DThemeDefaultDialogProcessingMessage );
};
