/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonAmbient } from "../theme/default/d-theme-default-button-ambient";

export const loadThemeDefaultButtonAmbient = () => {
	DThemeDefault.set( "DButtonAmbient", DThemeDefaultButtonAmbient );
};
