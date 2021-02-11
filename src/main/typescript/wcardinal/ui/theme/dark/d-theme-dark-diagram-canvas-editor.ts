/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramCanvasEditor } from "../../d-diagram-canvas-editor";
import { EShapePointsStyle } from "../../shape/e-shape-points-style";
import { DThemeDarkDiagramCanvasBase } from "./d-theme-dark-diagram-canvas-base";

export class DThemeDarkDiagramCanvasEditor extends DThemeDarkDiagramCanvasBase implements DThemeDiagramCanvasEditor {
	isAmbient(): boolean {
		return false;
	}

	getSnapGridMajorInterval(): number {
		return 10;
	}

	getSnapGridMajorColor(): number {
		return 0x1e87f0;
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
		return 2;
	}

	getSnapGridMinorStyle(): EShapePointsStyle {
		return this.getSnapGridMajorStyle();
	}

	getSnapTargetColor(): number {
		return 0xf36f27;
	}

	getSnapTargetAlpha(): number {
		return this.getSnapGridMajorAlpha();
	}

	getSnapTargetWidth(): number {
		return this.getSnapGridMajorWidth();
	}

	getSnapTargetStyle(): EShapePointsStyle {
		return this.getSnapGridMajorStyle();
	}
}
