/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultInputInteger } from "../theme/default/d-theme-default-input-integer";

export const loadThemeDefaultInputInteger = () => {
	DThemeDefault.set( "DInputInteger", DThemeDefaultInputInteger );
};
