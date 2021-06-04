/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramCanvasEditor } from "../../d-diagram-canvas-editor";
import { DDiagramCanvasEditorSnapGridSize } from "../../d-diagram-canvas-editor-snap";
import { EShapeStrokeStyle } from "../../shape/e-shape-stroke-style";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkDiagramCanvasBase } from "./d-theme-dark-diagram-canvas-base";

const toGridSize = (grid: number, width: number, height: number): number => {
	const canvas = Math.max(width, height);
	if (0 < grid) {
		const minimum = canvas / 1000;
		for (let i = 0; i < 10 && grid < minimum; ++i) {
			grid *= 10;
		}
		if (minimum <= grid) {
			return grid;
		}
	}
	return canvas;
};

export class DThemeDarkDiagramCanvasEditor
	extends DThemeDarkDiagramCanvasBase
	implements DThemeDiagramCanvasEditor {
	isAmbient(): boolean {
		return false;
	}

	getSnapGridMajorInterval(): number {
		return 10;
	}

	getSnapGridMajorColor(): number {
		return 0x999999;
	}

	getSnapGridMajorAlpha(): number {
		return 0.5;
	}

	getSnapGridMajorWidth(): number {
		return 1.25;
	}

	getSnapGridMajorStyle(): EShapeStrokeStyle {
		return EShapeStrokeStyle.DASHED | EShapeStrokeStyle.NON_SCALING;
	}

	getSnapGridMinorColor(): number {
		return this.getSnapGridMajorColor();
	}

	getSnapGridMinorAlpha(): number {
		return 0.125;
	}

	getSnapGridMinorWidth(): number {
		return this.getSnapGridMajorWidth();
	}

	getSnapGridMinorStyle(): EShapeStrokeStyle {
		return this.getSnapGridMajorStyle();
	}

	getSnapGridSize(): DDiagramCanvasEditorSnapGridSize {
		return toGridSize;
	}

	getSnapTargetColor(): number {
		return DThemeDarkConstants.HIGHLIGHT_COLOR;
	}

	getSnapTargetAlpha(): number {
		return 1.0;
	}

	getSnapTargetWidth(): number {
		return this.getSnapGridMajorWidth();
	}

	getSnapTargetStyle(): EShapeStrokeStyle {
		return this.getSnapGridMajorStyle();
	}
}
