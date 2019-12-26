/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultContent } from "../theme/default/d-theme-default-content";
import { DThemeDefaultPane } from "../theme/default/d-theme-default-pane";
import { loadThemeDefaultScrollBar } from "./load-theme-default-scroll-bar";

export const loadThemeDefaultPane = () => {
	DThemeDefault.set( "DPane", DThemeDefaultPane );
	DThemeDefault.set( "DContent", DThemeDefaultContent );
	loadThemeDefaultScrollBar();
};
