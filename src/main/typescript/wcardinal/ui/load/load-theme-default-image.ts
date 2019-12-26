/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultImage } from "../theme/default/d-theme-default-image";

export const loadThemeDefaultImage = () => {
	DThemeDefault.set( "DImage", DThemeDefaultImage );
};
