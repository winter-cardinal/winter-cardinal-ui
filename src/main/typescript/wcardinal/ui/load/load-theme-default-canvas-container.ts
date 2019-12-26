/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteCanvas } from "../theme/default/d-theme-default-canvas";
import { DThemeWhiteCanvasContainer } from "../theme/default/d-theme-default-canvas-container";

export const loadThemeWhiteCanvasContainer = () => {
	DThemeWhite.set( "DCanvasContainer", DThemeWhiteCanvasContainer );
	DThemeWhite.set( "DCanvas", DThemeWhiteCanvas );
};
