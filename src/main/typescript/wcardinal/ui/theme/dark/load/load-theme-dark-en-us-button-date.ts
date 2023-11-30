/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonDate } from "../d-theme-dark-button-date";
import { loadThemeDarkEnUsDialogDate } from "./load-theme-dark-en-us-dialog-date";

export const loadThemeDarkEnUsButtonDate = (): void => {
	DThemeDark.set("DButtonDate", DThemeDarkButtonDate);
	loadThemeDarkEnUsDialogDate();
};
