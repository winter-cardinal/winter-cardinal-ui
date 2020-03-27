/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramCanvasEditor } from "../../d-diagram-canvas-editor";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkDiagramCanvasBase } from "./d-theme-dark-diagram-canvas-base";

export class DThemeDarkDiagramCanvasEditor extends DThemeDarkDiagramCanvasBase implements DThemeDiagramCanvasEditor {
	getBackgroundBase(): number | null {
		return DThemeDarkConstants.BACKGROUND_COLOR;
	}
}
