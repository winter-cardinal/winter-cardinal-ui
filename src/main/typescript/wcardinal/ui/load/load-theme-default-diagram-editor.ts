/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDiagramCanvasEditor } from "../theme/default/d-theme-default-diagram-canvas-editor";
import { DThemeWhiteDiagramEditor } from "../theme/default/d-theme-default-diagram-editor";
import { loadThemeWhiteShapeActionValue } from "./load-theme-default-shape-action-value";

export const loadThemeWhiteDiagramEditor = () => {
	DThemeWhite.set( "DDiagramEditor", DThemeWhiteDiagramEditor );
	DThemeWhite.set( "DDiagramCanvasEditor", DThemeWhiteDiagramCanvasEditor );
	loadThemeWhiteShapeActionValue();
};
