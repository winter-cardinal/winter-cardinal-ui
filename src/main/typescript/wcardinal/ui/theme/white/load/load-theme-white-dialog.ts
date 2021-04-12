/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialog } from "../d-theme-white-dialog";

export const loadThemeWhiteDialog = (): void => {
	DThemeWhite.set("DDialog", DThemeWhiteDialog);
};
