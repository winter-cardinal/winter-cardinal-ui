/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonColorGradient } from "../d-theme-white-button-color-gradient";
import { loadThemeWhiteJaJpDialogColorGradient } from "./load-theme-white-ja-jp-dialog-color-gradient";

export const loadThemeWhiteJaJpButtonColorGradient = (): void => {
	DThemeWhite.set("DButtonColorGradient", DThemeWhiteButtonColorGradient);
	loadThemeWhiteJaJpDialogColorGradient();
};
