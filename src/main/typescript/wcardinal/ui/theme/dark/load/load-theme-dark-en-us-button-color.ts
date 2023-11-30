/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonColor } from "../d-theme-dark-button-color";
import { loadThemeDarkEnUsDialogColor } from "./load-theme-dark-en-us-dialog-color";

export const loadThemeDarkEnUsButtonColor = (): void => {
	DThemeDark.set("DButtonColor", DThemeDarkButtonColor);
	loadThemeDarkEnUsDialogColor();
};
