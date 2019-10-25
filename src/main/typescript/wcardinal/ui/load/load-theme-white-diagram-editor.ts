/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDiagramCanvasEditor } from "../theme/white/d-theme-white-diagram-canvas-editor";
import { DThemeWhiteDiagramEditor } from "../theme/white/d-theme-white-diagram-editor";

export const loadThemeWhiteDiagramEditor = () => {
	DThemeWhite.set( "DDiagramEditor", DThemeWhiteDiagramEditor );
	DThemeWhite.set( "DDiagramCanvasEditor", DThemeWhiteDiagramCanvasEditor );
};
