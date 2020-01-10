/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogMessage } from "../theme/dark/d-theme-dark-dialog-message";

export const loadThemeDarkDialogMessage = () => {
	DThemeDark.set( "DDialogMessage", DThemeDarkDialogMessage );
};
