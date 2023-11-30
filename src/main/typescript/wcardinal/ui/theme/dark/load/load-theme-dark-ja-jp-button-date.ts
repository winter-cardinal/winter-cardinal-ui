/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonDate } from "../d-theme-dark-button-date";
import { loadThemeDarkJaJpDialogDate } from "./load-theme-dark-ja-jp-dialog-date";

export const loadThemeDarkJaJpButtonDate = (): void => {
	DThemeDark.set("DButtonDate", DThemeDarkButtonDate);
	loadThemeDarkJaJpDialogDate();
};
