/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultInputReal } from "../theme/default/d-theme-default-input-real";

export const loadThemeDefaultInputReal = () => {
	DThemeDefault.set( "DInputReal", DThemeDefaultInputReal );
};
