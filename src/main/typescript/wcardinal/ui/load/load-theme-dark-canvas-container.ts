/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkCanvas } from "../theme/dark/d-theme-dark-canvas";
import { DThemeDarkCanvasContainer } from "../theme/dark/d-theme-dark-canvas-container";

export const loadThemeDarkCanvasContainer = () => {
	DThemeDark.set( "DCanvasContainer", DThemeDarkCanvasContainer );
	DThemeDark.set( "DCanvas", DThemeDarkCanvas );
};
