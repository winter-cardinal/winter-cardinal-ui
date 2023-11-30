/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonDatetime } from "../d-theme-dark-button-datetime";
import { loadThemeDarkJaJpDialogDatetime } from "./load-theme-dark-ja-jp-dialog-datetime";

export const loadThemeDarkJaJpButtonDatetime = (): void => {
	DThemeDark.set("DButtonDatetime", DThemeDarkButtonDatetime);
	loadThemeDarkJaJpDialogDatetime();
};
