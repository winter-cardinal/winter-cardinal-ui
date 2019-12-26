/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonCheckRight } from "../theme/default/d-theme-default-button-check-right";

export const loadThemeDefaultButtonCheckRight = () => {
	DThemeDefault.set( "DButtonCheckRight", DThemeDefaultButtonCheckRight );
};
