/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogInputReal } from "../d-theme-white-dialog-input-real";

export const loadThemeWhiteDialogInputReal = () => {
	DThemeWhite.set( "DDialogInputReal", DThemeWhiteDialogInputReal );
};
