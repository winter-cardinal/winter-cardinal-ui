/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonSelect } from "../d-theme-dark-button-select";
import { loadThemeDarkJaJpDialogSelect } from "./load-theme-dark-ja-jp-dialog-select";

export const loadThemeDarkJaJpButtonSelect = (): void => {
	DThemeDark.set("DButtonSelect", DThemeDarkButtonSelect);
	loadThemeDarkJaJpDialogSelect();
};
