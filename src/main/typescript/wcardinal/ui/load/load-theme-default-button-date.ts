/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonDate } from "../theme/default/d-theme-default-button-date";
import { loadThemeDefaultDialogDate } from "./load-theme-default-dialog-date";

export const loadThemeDefaultButtonDate = () => {
	DThemeDefault.set( "DButtonDate", DThemeDefaultButtonDate );
	loadThemeDefaultDialogDate();
};
