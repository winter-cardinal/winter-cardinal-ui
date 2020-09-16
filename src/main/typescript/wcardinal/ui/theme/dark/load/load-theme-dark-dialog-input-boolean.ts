/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogInputBoolean } from "../d-theme-dark-dialog-input-boolean";

export const loadThemeDarkDialogInputBoolean = () => {
	DThemeDark.set( "DDialogInputBoolean", DThemeDarkDialogInputBoolean );
};
