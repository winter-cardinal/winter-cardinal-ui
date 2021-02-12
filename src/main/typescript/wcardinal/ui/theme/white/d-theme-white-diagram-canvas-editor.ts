/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramCanvasEditor } from "../../d-diagram-canvas-editor";
import { DDiagramCanvasEditorSnapGridSize } from "../../d-diagram-canvas-editor-snap";
import { EShapePointsStyle } from "../../shape/e-shape-points-style";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteDiagramCanvasBase } from "./d-theme-white-diagram-canvas-base";

const toGridSize = ( grid: number, width: number, height: number ): number => {
	const canvas = Math.max( width, height );
	if( 0 < grid ) {
		const minimum = canvas / 1000;
		for( let i = 0; i < 10 && grid < minimum; ++i ) {
			grid *= 10;
		}
		if( minimum <= grid ) {
			return grid;
		}
	}
	return canvas;
}

export class DThemeWhiteDiagramCanvasEditor extends DThemeWhiteDiagramCanvasBase implements DThemeDiagramCanvasEditor {
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
		return 2;
	}

	getSnapGridMajorStyle(): EShapePointsStyle {
		return EShapePointsStyle.DASHED |
			EShapePointsStyle.NON_EXPANDING_WIDTH |
			EShapePointsStyle.NON_SHRINKING_WIDTH |
			EShapePointsStyle.NON_SCALING_DOT_AND_DASH;
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

	getSnapGridMinorStyle(): EShapePointsStyle {
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

	getSnapTargetStyle(): EShapePointsStyle {
		return this.getSnapGridMajorStyle();
	}
}
