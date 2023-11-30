/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonSelect } from "../d-theme-white-button-select";
import { loadThemeWhiteJaJpDialogSelect } from "./load-theme-white-ja-jp-dialog-select";

export const loadThemeWhiteJaJpButtonSelect = (): void => {
	DThemeWhite.set("DButtonSelect", DThemeWhiteButtonSelect);
	loadThemeWhiteJaJpDialogSelect();
};
