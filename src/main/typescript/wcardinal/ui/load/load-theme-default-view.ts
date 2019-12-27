/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultView } from "../theme/default/d-theme-default-view";

export const loadThemeDefaultView = () => {
	DThemeDefault.set( "DView", DThemeDefaultView );
};
