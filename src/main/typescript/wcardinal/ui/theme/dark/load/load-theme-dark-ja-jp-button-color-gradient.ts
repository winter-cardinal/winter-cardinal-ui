/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonColorGradient } from "../d-theme-dark-button-color-gradient";
import { loadThemeDarkJaJpDialogColorGradient } from "./load-theme-dark-ja-jp-dialog-color-gradient";

export const loadThemeDarkJaJpButtonColorGradient = (): void => {
	DThemeDark.set("DButtonColorGradient", DThemeDarkButtonColorGradient);
	loadThemeDarkJaJpDialogColorGradient();
};
