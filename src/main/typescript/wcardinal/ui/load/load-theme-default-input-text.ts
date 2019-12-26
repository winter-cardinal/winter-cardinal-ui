/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultInputText } from "../theme/default/d-theme-default-input-text";

export const loadThemeDefaultInputText = () => {
	DThemeDefault.set( "DInputText", DThemeDefaultInputText );
};
