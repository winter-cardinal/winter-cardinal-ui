/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDarkDialog } from "./load-theme-dark-dialog";
import { loadThemeDarkDialogColor } from "./load-theme-dark-dialog-color";
import { loadThemeDarkDialogColorGradient } from "./load-theme-dark-dialog-color-gradient";
import { loadThemeDarkDialogCommand } from "./load-theme-dark-dialog-command";
import { loadThemeDarkDialogDate } from "./load-theme-dark-dialog-date";
import { loadThemeDarkDialogDatetime } from "./load-theme-dark-dialog-datetime";
import { loadThemeDarkDialogTime } from "./load-theme-dark-dialog-time";

export const loadThemeDarkDialogAll = () => {
	loadThemeDarkDialogColorGradient();
	loadThemeDarkDialogColor();
	loadThemeDarkDialogCommand();
	loadThemeDarkDialogDate();
	loadThemeDarkDialogDatetime();
	loadThemeDarkDialogTime();
	loadThemeDarkDialog();
};
