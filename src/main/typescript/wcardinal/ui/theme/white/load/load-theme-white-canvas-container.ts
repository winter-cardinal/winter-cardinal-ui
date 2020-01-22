/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteCanvas } from "../d-theme-white-canvas";
import { DThemeWhiteCanvasContainer } from "../d-theme-white-canvas-container";

export const loadThemeWhiteCanvasContainer = () => {
	DThemeWhite.set( "DCanvasContainer", DThemeWhiteCanvasContainer );
	DThemeWhite.set( "DCanvas", DThemeWhiteCanvas );
};
