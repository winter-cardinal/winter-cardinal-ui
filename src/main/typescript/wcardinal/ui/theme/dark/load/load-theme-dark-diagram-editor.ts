/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDiagramCanvasEditor } from "../d-theme-dark-diagram-canvas-editor";
import { DThemeDarkDiagramEditor } from "../d-theme-dark-diagram-editor";
import { loadThemeDarkShape } from "./load-theme-dark-shape";
import { loadThemeDarkShapeActionValue } from "./load-theme-dark-shape-action-value";

export const loadThemeDarkDiagramEditor = () => {
	DThemeDark.set( "DDiagramEditor", DThemeDarkDiagramEditor );
	DThemeDark.set( "DDiagramCanvasEditor", DThemeDarkDiagramCanvasEditor );
	loadThemeDarkShapeActionValue();
	loadThemeDarkShape();
};
