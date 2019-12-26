/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialog } from "../theme/default/d-theme-default-dialog";

export const loadThemeDefaultDialog = () => {
	DThemeDefault.set( "DDialog", DThemeDefaultDialog );
};
