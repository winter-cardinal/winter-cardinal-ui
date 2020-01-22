/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDiagramCanvasEditor } from "../d-theme-white-diagram-canvas-editor";
import { DThemeWhiteDiagramEditor } from "../d-theme-white-diagram-editor";
import { loadThemeWhiteShapeActionValue } from "./load-theme-white-shape-action-value";

export const loadThemeWhiteDiagramEditor = () => {
	DThemeWhite.set( "DDiagramEditor", DThemeWhiteDiagramEditor );
	DThemeWhite.set( "DDiagramCanvasEditor", DThemeWhiteDiagramCanvasEditor );
	loadThemeWhiteShapeActionValue();
};
