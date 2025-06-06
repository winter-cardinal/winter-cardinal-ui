/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeDiagramCanvasEditor } from "../../d-diagram-canvas-editor";
import { DDiagramCanvasEditorSnapGridSize } from "../../d-diagram-canvas-editor-snap";
import { EShapeStrokeStyle } from "../../shape/e-shape-stroke-style";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteDiagramCanvasBase } from "./d-theme-white-diagram-canvas-base";

const toGridScale = (scale: number): number => {
	if (scale <= 0 || 1 <= scale) {
		return 1;
	}
	let s = 1 / scale;
	s = s | (s >> 1);
	s = s | (s >> 2);
	s = s | (s >> 4);
	s = s | (s >> 8);
	s = s | (s >> 16);
	s = s | (s >> 32);
	return s - (s >> 1);
};

const toGridSize = (grid: number, width: number, height: number, scale: number): number => {
	const canvas = Math.max(width, height);
	if (0 < grid) {
		grid *= toGridScale(scale);
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

export class DThemeWhiteDiagramCanvasEditor
	extends DThemeWhiteDiagramCanvasBase
	implements DThemeDiagramCanvasEditor
{
	override isAmbient(): boolean {
		return false;
	}

	override getLocalBoundsLimit(): number {
		return 1000;
	}

	override getOutlineColor(state: DBaseStateSet): number | null {
		return null;
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
		return Math.max(1, 2 / (window.devicePixelRatio ?? 1));
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
		return DThemeWhiteConstants.HIGHLIGHT_COLOR;
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
