/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonTime } from "../d-theme-dark-button-time";
import { loadThemeDarkEnUsDialogTime } from "./load-theme-dark-en-us-dialog-time";

export const loadThemeDarkEnUsButtonTime = (): void => {
	DThemeDark.set("DButtonTime", DThemeDarkButtonTime);
	loadThemeDarkEnUsDialogTime();
};
