/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDiagramCanvasEditor } from "../d-theme-dark-diagram-canvas-editor";
import { DThemeDarkJaJpDiagramEditor } from "../d-theme-dark-ja-jp-diagram-editor";
import { loadThemeDarkJaJpShapePointsFormatter } from "./load-theme-dark-ja-jp-shape-points-formatter";
import { loadThemeDarkShape } from "./load-theme-dark-shape";
import { loadThemeDarkShapeActionValue } from "./load-theme-dark-shape-action-value";

export const loadThemeDarkJaJpDiagramEditor = (): void => {
	DThemeDark.set("DDiagramEditor", DThemeDarkJaJpDiagramEditor);
	DThemeDark.set("DDiagramCanvasEditor", DThemeDarkDiagramCanvasEditor);
	loadThemeDarkShapeActionValue();
	loadThemeDarkJaJpShapePointsFormatter();
	loadThemeDarkShape();
};
