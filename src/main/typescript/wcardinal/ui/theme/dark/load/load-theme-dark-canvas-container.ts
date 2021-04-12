/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkCanvas } from "../d-theme-dark-canvas";
import { DThemeDarkCanvasContainer } from "../d-theme-dark-canvas-container";

export const loadThemeDarkCanvasContainer = (): void => {
	DThemeDark.set("DCanvasContainer", DThemeDarkCanvasContainer);
	DThemeDark.set("DCanvas", DThemeDarkCanvas);
};
