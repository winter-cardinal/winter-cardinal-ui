/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogFitted } from "../d-theme-dark-dialog-fitted";
import { DThemeDarkDialogFittedContent } from "../d-theme-dark-dialog-fitted-content";

export const loadThemeDarkDialogFitted = (): void => {
	DThemeDark.set("DDialogFittedContent", DThemeDarkDialogFittedContent);
	DThemeDark.set("DDialogFitted", DThemeDarkDialogFitted);
};
