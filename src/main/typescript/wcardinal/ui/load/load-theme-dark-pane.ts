/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkContent } from "../theme/dark/d-theme-dark-content";
import { DThemeDarkPane } from "../theme/dark/d-theme-dark-pane";
import { loadThemeDarkScrollBar } from "./load-theme-dark-scroll-bar";

export const loadThemeDarkPane = () => {
	DThemeDark.set( "DPane", DThemeDarkPane );
	DThemeDark.set( "DContent", DThemeDarkContent );
	loadThemeDarkScrollBar();
};
