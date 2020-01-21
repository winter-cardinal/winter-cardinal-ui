/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkContent } from "../d-theme-dark-content";
import { DThemeDarkPane } from "../d-theme-dark-pane";
import { loadThemeDarkScrollBar } from "./load-theme-dark-scroll-bar";

export const loadThemeDarkPane = () => {
	DThemeDark.set( "DPane", DThemeDarkPane );
	DThemeDark.set( "DContent", DThemeDarkContent );
	loadThemeDarkScrollBar();
};
