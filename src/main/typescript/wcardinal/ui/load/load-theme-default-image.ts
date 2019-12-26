/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteImage } from "../theme/default/d-theme-default-image";

export const loadThemeWhiteImage = () => {
	DThemeWhite.set( "DImage", DThemeWhiteImage );
};
