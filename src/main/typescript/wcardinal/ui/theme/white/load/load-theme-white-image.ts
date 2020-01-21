/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteImage } from "../d-theme-white-image";

export const loadThemeWhiteImage = () => {
	DThemeWhite.set( "DImage", DThemeWhiteImage );
};
