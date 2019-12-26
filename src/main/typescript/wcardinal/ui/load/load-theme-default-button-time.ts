/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButtonTime } from "../theme/white/d-theme-white-button-time";
import { loadThemeWhiteDialogTime } from "./load-theme-white-dialog-time";

export const loadThemeWhiteButtonTime = () => {
	DThemeWhite.set( "DButtonTime", DThemeWhiteButtonTime );
	loadThemeWhiteDialogTime();
};
