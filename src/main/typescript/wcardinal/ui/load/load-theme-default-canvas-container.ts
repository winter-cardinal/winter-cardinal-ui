/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultCanvas } from "../theme/default/d-theme-default-canvas";
import { DThemeDefaultCanvasContainer } from "../theme/default/d-theme-default-canvas-container";

export const loadThemeDefaultCanvasContainer = () => {
	DThemeDefault.set( "DCanvasContainer", DThemeDefaultCanvasContainer );
	DThemeDefault.set( "DCanvas", DThemeDefaultCanvas );
};
