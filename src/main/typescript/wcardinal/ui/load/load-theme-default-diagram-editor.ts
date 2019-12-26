/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDiagramCanvasEditor } from "../theme/default/d-theme-default-diagram-canvas-editor";
import { DThemeDefaultDiagramEditor } from "../theme/default/d-theme-default-diagram-editor";
import { loadThemeDefaultShapeActionValue } from "./load-theme-default-shape-action-value";

export const loadThemeDefaultDiagramEditor = () => {
	DThemeDefault.set( "DDiagramEditor", DThemeDefaultDiagramEditor );
	DThemeDefault.set( "DDiagramCanvasEditor", DThemeDefaultDiagramCanvasEditor );
	loadThemeDefaultShapeActionValue();
};
