/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkScrollBar } from "../theme/dark/d-theme-dark-scroll-bar";
import { DThemeDarkScrollBarThumb } from "../theme/dark/d-theme-dark-scroll-bar-thumb";

export const loadThemeDarkScrollBar = () => {
	DThemeDark.set( "DScrollBar", DThemeDarkScrollBar );
	DThemeDark.set( "DScrollBarThumb", DThemeDarkScrollBarThumb );
};
