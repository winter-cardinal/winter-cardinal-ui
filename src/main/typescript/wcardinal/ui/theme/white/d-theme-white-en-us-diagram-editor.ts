/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhiteDiagramEditor } from "./d-theme-white-diagram-editor";

export class DThemeWhiteEnUsDiagramEditor extends DThemeWhiteDiagramEditor {
	override getBaseLayerLabel(): string {
		return "Base Layer";
	}
}
