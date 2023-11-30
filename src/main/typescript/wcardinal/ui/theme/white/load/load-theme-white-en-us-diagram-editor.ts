/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDiagramCanvasEditor } from "../d-theme-white-diagram-canvas-editor";
import { DThemeWhiteEnUsDiagramEditor } from "../d-theme-white-en-us-diagram-editor";
import { loadThemeWhiteShape } from "./load-theme-white-shape";
import { loadThemeWhiteShapeActionValue } from "./load-theme-white-shape-action-value";

export const loadThemeWhiteEnUsDiagramEditor = (): void => {
	DThemeWhite.set("DDiagramEditor", DThemeWhiteEnUsDiagramEditor);
	DThemeWhite.set("DDiagramCanvasEditor", DThemeWhiteDiagramCanvasEditor);
	loadThemeWhiteShapeActionValue();
	loadThemeWhiteShape();
};
