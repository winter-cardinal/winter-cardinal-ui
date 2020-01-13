/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialog } from "../theme/dark/d-theme-dark-dialog";

export const loadThemeDarkDialog = () => {
	DThemeDark.set( "DDialog", DThemeDarkDialog );
};
