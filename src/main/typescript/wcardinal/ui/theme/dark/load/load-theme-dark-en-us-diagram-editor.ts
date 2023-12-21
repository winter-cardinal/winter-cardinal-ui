/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDiagramCanvasEditor } from "../d-theme-dark-diagram-canvas-editor";
import { DThemeDarkEnUsDiagramEditor } from "../d-theme-dark-en-us-diagram-editor";
import { loadThemeDarkEnUsShapePointsFormatter } from "./load-theme-dark-en-us-shape-points-formatter";
import { loadThemeDarkShape } from "./load-theme-dark-shape";
import { loadThemeDarkShapeActionValue } from "./load-theme-dark-shape-action-value";

export const loadThemeDarkEnUsDiagramEditor = (): void => {
	DThemeDark.set("DDiagramEditor", DThemeDarkEnUsDiagramEditor);
	DThemeDark.set("DDiagramCanvasEditor", DThemeDarkDiagramCanvasEditor);
	loadThemeDarkShapeActionValue();
	loadThemeDarkEnUsShapePointsFormatter();
	loadThemeDarkShape();
};
