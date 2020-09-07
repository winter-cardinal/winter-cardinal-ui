/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramCanvasEditor } from "../../d-diagram-canvas-editor";
import { DThemeDarkDiagramCanvasBase } from "./d-theme-dark-diagram-canvas-base";

export class DThemeDarkDiagramCanvasEditor extends DThemeDarkDiagramCanvasBase implements DThemeDiagramCanvasEditor {
	getBackgroundAmbient(): boolean {
		return false;
	}
}
