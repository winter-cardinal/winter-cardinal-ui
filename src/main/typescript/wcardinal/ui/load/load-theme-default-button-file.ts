/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonFile } from "../theme/default/d-theme-default-button-file";

export const loadThemeWhiteButtonFile = () => {
	DThemeWhite.set( "DButtonFile", DThemeWhiteButtonFile );
};
