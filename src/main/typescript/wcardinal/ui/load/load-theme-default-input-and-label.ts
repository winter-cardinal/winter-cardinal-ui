/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultInputAndLabel } from "../theme/default/d-theme-default-input-and-label";

export const loadThemeDefaultInputAndLabel = () => {
	DThemeDefault.set( "DInputAndLabel", DThemeDefaultInputAndLabel );
};
