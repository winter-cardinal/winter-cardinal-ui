/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonTime } from "../d-theme-white-button-time";
import { loadThemeWhiteEnUsDialogTime } from "./load-theme-white-en-us-dialog-time";

export const loadThemeWhiteEnUsButtonTime = (): void => {
	DThemeWhite.set("DButtonTime", DThemeWhiteButtonTime);
	loadThemeWhiteEnUsDialogTime();
};
