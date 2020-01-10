/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogInputText } from "../theme/dark/d-theme-dark-dialog-input-text";

export const loadThemeDarkDialogInputText = () => {
	DThemeDark.set( "DDialogInputText", DThemeDarkDialogInputText );
};
