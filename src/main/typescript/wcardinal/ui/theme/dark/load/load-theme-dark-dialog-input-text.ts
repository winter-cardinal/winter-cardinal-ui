/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogInputText } from "../d-theme-dark-dialog-input-text";

export const loadThemeDarkDialogInputText = () => {
	DThemeDark.set( "DDialogInputText", DThemeDarkDialogInputText );
};
