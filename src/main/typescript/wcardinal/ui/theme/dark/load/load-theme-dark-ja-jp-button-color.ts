/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonColor } from "../d-theme-dark-button-color";
import { loadThemeDarkJaJpDialogColor } from "./load-theme-dark-ja-jp-dialog-color";

export const loadThemeDarkJaJpButtonColor = (): void => {
	DThemeDark.set("DButtonColor", DThemeDarkButtonColor);
	loadThemeDarkJaJpDialogColor();
};
