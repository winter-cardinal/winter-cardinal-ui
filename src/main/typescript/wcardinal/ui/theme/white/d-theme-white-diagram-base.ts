/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseShadow } from "../../d-base";
import { DThemeDiagramBase } from "../../d-diagram-base";
import { DThemeWhiteCanvasContainer } from "./d-theme-white-canvas-container";

export class DThemeWhiteDiagramBase
	extends DThemeWhiteCanvasContainer
	implements DThemeDiagramBase
{
	getCanvasBackgroundColor(): number {
		return 0xffffff;
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
