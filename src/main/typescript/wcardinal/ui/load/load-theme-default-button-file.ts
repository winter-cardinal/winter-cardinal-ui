/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButtonFile } from "../theme/white/d-theme-white-button-file";

export const loadThemeWhiteButtonFile = () => {
	DThemeWhite.set( "DButtonFile", DThemeWhiteButtonFile );
};
