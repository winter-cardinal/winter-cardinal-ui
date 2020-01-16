/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkImage } from "../theme/dark/d-theme-dark-image";

export const loadThemeDarkImage = () => {
	DThemeDark.set( "DImage", DThemeDarkImage );
};
