/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonTime } from "../d-theme-white-button-time";
import { loadThemeWhiteDialogTime } from "./load-theme-white-dialog-time";

export const loadThemeWhiteButtonTime = (): void => {
	DThemeWhite.set( "DButtonTime", DThemeWhiteButtonTime );
	loadThemeWhiteDialogTime();
};
