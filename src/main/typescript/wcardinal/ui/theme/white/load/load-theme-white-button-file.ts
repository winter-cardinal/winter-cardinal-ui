/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonFile } from "../d-theme-white-button-file";

export const loadThemeWhiteButtonFile = () => {
	DThemeWhite.set( "DButtonFile", DThemeWhiteButtonFile );
};
