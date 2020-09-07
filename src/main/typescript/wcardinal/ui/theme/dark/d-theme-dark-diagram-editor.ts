/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramEditor } from "../../d-diagram-editor";
import { DThemeDarkDiagramBase } from "./d-theme-dark-diagram-base";

export class DThemeDarkDiagramEditor extends DThemeDarkDiagramBase implements DThemeDiagramEditor {
	getBackgroundAmbient(): boolean {
		return false;
	}
}
