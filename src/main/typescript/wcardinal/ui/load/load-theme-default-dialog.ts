/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialog } from "../theme/white/d-theme-white-dialog";

export const loadThemeWhiteDialog = () => {
	DThemeWhite.set( "DDialog", DThemeWhiteDialog );
};
