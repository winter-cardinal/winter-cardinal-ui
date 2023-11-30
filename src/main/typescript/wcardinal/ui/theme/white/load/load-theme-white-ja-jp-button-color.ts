/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonColor } from "../d-theme-white-button-color";
import { loadThemeWhiteJaJpDialogColor } from "./load-theme-white-ja-jp-dialog-color";

export const loadThemeWhiteJaJpButtonColor = (): void => {
	DThemeWhite.set("DButtonColor", DThemeWhiteButtonColor);
	loadThemeWhiteJaJpDialogColor();
};
