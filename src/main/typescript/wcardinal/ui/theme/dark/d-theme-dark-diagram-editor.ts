/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramEditor } from "../../d-diagram-editor";
import { DThemeDarkDiagramBase } from "./d-theme-dark-diagram-base";

export class DThemeDarkDiagramEditor extends DThemeDarkDiagramBase implements DThemeDiagramEditor {
	isAmbient(): boolean {
		return false;
	}

	isThumbnailEnabled(): boolean {
		return false;
	}

	getThumbnailSize(): number {
		return 128;
	}
}
