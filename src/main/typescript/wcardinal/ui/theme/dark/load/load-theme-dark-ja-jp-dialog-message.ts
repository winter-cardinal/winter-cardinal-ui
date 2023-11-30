/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkJaJpDialogMessage } from "../d-theme-dark-ja-jp-dialog-message";

export const loadThemeDarkJaJpDialogMessage = (): void => {
	DThemeDark.set("DDialogMessage", DThemeDarkJaJpDialogMessage);
};
