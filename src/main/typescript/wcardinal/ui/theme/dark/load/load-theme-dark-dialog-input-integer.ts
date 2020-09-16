/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogInputInteger } from "../d-theme-dark-dialog-input-integer";

export const loadThemeDarkDialogInputInteger = () => {
	DThemeDark.set( "DDialogInputInteger", DThemeDarkDialogInputInteger );
};
