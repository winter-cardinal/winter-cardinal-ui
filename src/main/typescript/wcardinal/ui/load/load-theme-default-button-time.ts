/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonTime } from "../theme/default/d-theme-default-button-time";
import { loadThemeDefaultDialogTime } from "./load-theme-default-dialog-time";

export const loadThemeDefaultButtonTime = () => {
	DThemeDefault.set( "DButtonTime", DThemeDefaultButtonTime );
	loadThemeDefaultDialogTime();
};
