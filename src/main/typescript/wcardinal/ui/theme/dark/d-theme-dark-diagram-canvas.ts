/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeDiagramCanvas } from "../../d-diagram-canvas";
import { DThemeDarkDiagramCanvasBase } from "./d-theme-dark-diagram-canvas-base";

export class DThemeDarkDiagramCanvas
	extends DThemeDarkDiagramCanvasBase
	implements DThemeDiagramCanvas
{
	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}
}
