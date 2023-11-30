/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonColorGradient } from "../d-theme-white-button-color-gradient";
import { loadThemeWhiteEnUsDialogColorGradient } from "./load-theme-white-en-us-dialog-color-gradient";

export const loadThemeWhiteEnUsButtonColorGradient = (): void => {
	DThemeWhite.set("DButtonColorGradient", DThemeWhiteButtonColorGradient);
	loadThemeWhiteEnUsDialogColorGradient();
};
