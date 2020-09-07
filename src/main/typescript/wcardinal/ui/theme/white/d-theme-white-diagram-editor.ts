/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramEditor } from "../../d-diagram-editor";
import { DThemeWhiteDiagramBase } from "./d-theme-white-diagram-base";

export class DThemeWhiteDiagramEditor extends DThemeWhiteDiagramBase implements DThemeDiagramEditor {
	getBackgroundAmbient(): boolean {
		return false;
	}
}
