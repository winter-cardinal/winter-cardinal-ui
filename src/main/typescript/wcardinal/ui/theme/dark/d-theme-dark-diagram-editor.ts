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

	getThumbnailSize(): number | null {
		return null;
	}

	isSnapEnabled(): boolean {
		return true;
	}

	isSnapGridVisible(): boolean {
		return true;
	}

	isSnapGridEnabled(): boolean {
		return true;
	}

	getSnapGridSize(): number {
		return 10;
	}

	isSnapTargetVisible(): boolean {
		return true;
	}

	isSnapTargetEnabled(): boolean {
		return true;
	}
}
