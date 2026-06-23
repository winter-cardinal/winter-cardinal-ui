/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramCanvasBase } from "../../d-diagram-canvas-base";
import { DThemeDarkCanvas } from "./d-theme-dark-canvas";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkDiagramCanvasBase
	extends DThemeDarkCanvas
	implements DThemeDiagramCanvasBase
{
	isAmbient(): boolean {
		return true;
	}

	getBackgroundBase(): number | null {
		return DThemeDarkConstants.BACKGROUND_COLOR;
	}

	getLocalBoundsLimit(): number {
		return 0;
	}

	getAntialiasWeight(): number {
		return 1;
	}

	getAntialiasWeightLowerBound(): number {
		return 1e-5;
	}
}
