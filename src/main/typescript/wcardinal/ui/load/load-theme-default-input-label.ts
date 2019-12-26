/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultInputLabel } from "../theme/default/d-theme-default-input-label";

export const loadThemeDefaultInputLabel = () => {
	DThemeDefault.set( "DInputLabel", DThemeDefaultInputLabel );
};
