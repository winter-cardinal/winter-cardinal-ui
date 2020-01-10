/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDiagramCanvasEditor } from "../theme/dark/d-theme-dark-diagram-canvas-editor";
import { DThemeDarkDiagramEditor } from "../theme/dark/d-theme-dark-diagram-editor";
import { loadThemeDarkShapeActionValue } from "./load-theme-dark-shape-action-value";

export const loadThemeDarkDiagramEditor = () => {
	DThemeDark.set( "DDiagramEditor", DThemeDarkDiagramEditor );
	DThemeDark.set( "DDiagramCanvasEditor", DThemeDarkDiagramCanvasEditor );
	loadThemeDarkShapeActionValue();
};
