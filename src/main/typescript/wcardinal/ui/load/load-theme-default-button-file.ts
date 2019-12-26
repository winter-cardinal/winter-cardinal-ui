/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonFile } from "../theme/default/d-theme-default-button-file";

export const loadThemeDefaultButtonFile = () => {
	DThemeDefault.set( "DButtonFile", DThemeDefaultButtonFile );
};
