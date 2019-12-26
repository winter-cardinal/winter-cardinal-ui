/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonTime } from "../theme/default/d-theme-default-button-time";
import { loadThemeWhiteDialogTime } from "./load-theme-default-dialog-time";

export const loadThemeWhiteButtonTime = () => {
	DThemeWhite.set( "DButtonTime", DThemeWhiteButtonTime );
	loadThemeWhiteDialogTime();
};
