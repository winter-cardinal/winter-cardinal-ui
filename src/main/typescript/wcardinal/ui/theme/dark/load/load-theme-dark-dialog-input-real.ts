/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogInputReal } from "../d-theme-dark-dialog-input-real";

export const loadThemeDarkDialogInputReal = (): void => {
	DThemeDark.set( "DDialogInputReal", DThemeDarkDialogInputReal );
};
