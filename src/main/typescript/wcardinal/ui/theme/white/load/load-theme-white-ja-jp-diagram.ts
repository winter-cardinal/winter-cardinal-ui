/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDiagram } from "../d-theme-white-diagram";
import { DThemeWhiteDiagramCanvas } from "../d-theme-white-diagram-canvas";
import { loadThemeWhiteJaJpShapePointsFormatter } from "./load-theme-white-ja-jp-shape-points-formatter";
import { loadThemeWhiteShape } from "./load-theme-white-shape";

export const loadThemeWhiteJaJpDiagram = (): void => {
	DThemeWhite.set("DDiagram", DThemeWhiteDiagram);
	DThemeWhite.set("DDiagramCanvas", DThemeWhiteDiagramCanvas);
	loadThemeWhiteJaJpShapePointsFormatter();
	loadThemeWhiteShape();
};
