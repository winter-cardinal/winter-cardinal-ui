/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialog } from "../theme/default/d-theme-default-dialog";

export const loadThemeWhiteDialog = () => {
	DThemeWhite.set( "DDialog", DThemeWhiteDialog );
};
