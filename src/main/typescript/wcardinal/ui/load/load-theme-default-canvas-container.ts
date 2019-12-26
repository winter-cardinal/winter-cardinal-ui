/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteCanvas } from "../theme/white/d-theme-white-canvas";
import { DThemeWhiteCanvasContainer } from "../theme/white/d-theme-white-canvas-container";

export const loadThemeWhiteCanvasContainer = () => {
	DThemeWhite.set( "DCanvasContainer", DThemeWhiteCanvasContainer );
	DThemeWhite.set( "DCanvas", DThemeWhiteCanvas );
};
