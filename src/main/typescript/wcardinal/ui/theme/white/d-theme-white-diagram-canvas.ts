/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../..";
import { DThemeDiagramCanvas } from "../../d-diagram-canvas";
import { DThemeWhiteDiagramCanvasBase } from "./d-theme-white-diagram-canvas-base";

export class DThemeWhiteDiagramCanvas
	extends DThemeWhiteDiagramCanvasBase
	implements DThemeDiagramCanvas
{
	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}
}
