/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkDiagramEditor } from "./d-theme-dark-diagram-editor";

export class DThemeDarkEnUsDiagramEditor extends DThemeDarkDiagramEditor {
	override getBaseLayerLabel(): string {
		return "Base Layer";
	}
}
