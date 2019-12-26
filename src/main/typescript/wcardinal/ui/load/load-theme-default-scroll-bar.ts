/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultScrollBar } from "../theme/default/d-theme-default-scroll-bar";
import { DThemeDefaultScrollBarThumb } from "../theme/default/d-theme-default-scroll-bar-thumb";

export const loadThemeDefaultScrollBar = () => {
	DThemeDefault.set( "DScrollBar", DThemeDefaultScrollBar );
	DThemeDefault.set( "DScrollBarThumb", DThemeDefaultScrollBarThumb );
};
