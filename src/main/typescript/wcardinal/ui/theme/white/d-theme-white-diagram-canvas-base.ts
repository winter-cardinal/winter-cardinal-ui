/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramCanvasBase } from "../../d-diagram-canvas-base";
import { DThemeWhiteCanvas } from "./d-theme-white-canvas";

export class DThemeWhiteDiagramCanvasBase extends DThemeWhiteCanvas implements DThemeDiagramCanvasBase {
	isAmbient(): boolean {
		return true;
	}

	getBackgroundBase(): number | null {
		return 0xeeeeee;
	}
}
