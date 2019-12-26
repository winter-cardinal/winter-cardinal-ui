/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultBase } from "../theme/default/d-theme-default-base";

export const loadThemeDefaultBase = () => {
	DThemeDefault.set( "DBase", DThemeDefaultBase );
};
