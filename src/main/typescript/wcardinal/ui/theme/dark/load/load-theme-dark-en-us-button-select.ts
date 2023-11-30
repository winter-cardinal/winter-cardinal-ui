/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonSelect } from "../d-theme-dark-button-select";
import { loadThemeDarkEnUsDialogSelect } from "./load-theme-dark-en-us-dialog-select";

export const loadThemeDarkEnUsButtonSelect = (): void => {
	DThemeDark.set("DButtonSelect", DThemeDarkButtonSelect);
	loadThemeDarkEnUsDialogSelect();
};
