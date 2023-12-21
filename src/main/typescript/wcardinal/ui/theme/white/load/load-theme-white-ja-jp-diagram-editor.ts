/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDiagramCanvasEditor } from "../d-theme-white-diagram-canvas-editor";
import { DThemeWhiteJaJpDiagramEditor } from "../d-theme-white-ja-jp-diagram-editor";
import { loadThemeWhiteJaJpShapePointsFormatter } from "./load-theme-white-ja-jp-shape-points-formatter";
import { loadThemeWhiteShape } from "./load-theme-white-shape";
import { loadThemeWhiteShapeActionValue } from "./load-theme-white-shape-action-value";

export const loadThemeWhiteJaJpDiagramEditor = (): void => {
	DThemeWhite.set("DDiagramEditor", DThemeWhiteJaJpDiagramEditor);
	DThemeWhite.set("DDiagramCanvasEditor", DThemeWhiteDiagramCanvasEditor);
	loadThemeWhiteShapeActionValue();
	loadThemeWhiteJaJpShapePointsFormatter();
	loadThemeWhiteShape();
};
