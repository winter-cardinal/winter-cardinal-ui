/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogInputBoolean } from "../d-theme-white-dialog-input-boolean";

export const loadThemeWhiteDialogInputBoolean = (): void => {
	DThemeWhite.set("DDialogInputBoolean", DThemeWhiteDialogInputBoolean);
};
