/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseShadow } from "../../d-base";
import { DThemeDiagramBase } from "../../d-diagram-base";
import { DThemeDarkCanvasContainer } from "./d-theme-dark-canvas-container";

export class DThemeDarkDiagramBase extends DThemeDarkCanvasContainer implements DThemeDiagramBase {
	getCanvasBackgroundColor(): number {
		return 0x2e2e2e;
	}

	getCanvasBackgroundAlpha(): number {
		return 1.0;
	}

	isAmbient(): boolean {
		return true;
	}

	getCanvasShadow(): DBaseShadow | null {
		return "WEAK";
	}
}
