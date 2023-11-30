/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonTime } from "../d-theme-dark-button-time";
import { loadThemeDarkJaJpDialogTime } from "./load-theme-dark-ja-jp-dialog-time";

export const loadThemeDarkJaJpButtonTime = (): void => {
	DThemeDark.set("DButtonTime", DThemeDarkButtonTime);
	loadThemeDarkJaJpDialogTime();
};
