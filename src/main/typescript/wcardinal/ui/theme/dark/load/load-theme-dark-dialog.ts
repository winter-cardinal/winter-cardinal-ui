/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialog } from "../d-theme-dark-dialog";

export const loadThemeDarkDialog = (): void => {
	DThemeDark.set("DDialog", DThemeDarkDialog);
};
