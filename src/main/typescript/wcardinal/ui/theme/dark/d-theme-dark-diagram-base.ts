/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramBase } from "../../d-diagram-base";
import { DThemeDarkCanvasContainer } from "./d-theme-dark-canvas-container";

export class DThemeDarkDiagramBase extends DThemeDarkCanvasContainer implements DThemeDiagramBase {
	getBackgroundAmbient(): boolean {
		return true;
	}
}
