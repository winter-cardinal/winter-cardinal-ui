/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonDatetime } from "../theme/default/d-theme-default-button-datetime";
import { loadThemeDefaultDialogDatetime } from "./load-theme-default-dialog-datetime";

export const loadThemeDefaultButtonDatetime = () => {
	DThemeDefault.set( "DButtonDatetime", DThemeDefaultButtonDatetime );
	loadThemeDefaultDialogDatetime();
};
