/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogInputText } from "../d-theme-dark-dialog-input-text";

export const loadThemeDarkDialogInputText = (): void => {
	DThemeDark.set("DDialogInputText", DThemeDarkDialogInputText);
};
