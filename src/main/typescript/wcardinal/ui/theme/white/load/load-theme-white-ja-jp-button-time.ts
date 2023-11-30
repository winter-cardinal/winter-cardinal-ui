/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonTime } from "../d-theme-white-button-time";
import { loadThemeWhiteJaJpDialogTime } from "./load-theme-white-ja-jp-dialog-time";

export const loadThemeWhiteJaJpButtonTime = (): void => {
	DThemeWhite.set("DButtonTime", DThemeWhiteButtonTime);
	loadThemeWhiteJaJpDialogTime();
};
