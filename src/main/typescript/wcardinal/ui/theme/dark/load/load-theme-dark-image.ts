/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkImage } from "../d-theme-dark-image";

export const loadThemeDarkImage = (): void => {
	DThemeDark.set( "DImage", DThemeDarkImage );
};
