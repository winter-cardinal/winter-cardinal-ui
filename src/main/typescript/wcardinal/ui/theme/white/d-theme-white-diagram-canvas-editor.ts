/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramCanvasEditor } from "../../d-diagram-canvas-editor";
import { DThemeWhiteDiagramCanvasBase } from "./d-theme-white-diagram-canvas-base";

export class DThemeWhiteDiagramCanvasEditor extends DThemeWhiteDiagramCanvasBase implements DThemeDiagramCanvasEditor {
	getBackgroundBase(): number | null {
		return 0xeeeeee;
	}
}
