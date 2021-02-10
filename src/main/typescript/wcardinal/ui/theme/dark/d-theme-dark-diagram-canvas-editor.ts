/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramCanvasEditor } from "../../d-diagram-canvas-editor";
import { EShapePointsStyle } from "../../shape/e-shape-points-style";
import { DThemeDarkDiagramCanvasBase } from "./d-theme-dark-diagram-canvas-base";

export class DThemeDarkDiagramCanvasEditor extends DThemeDarkDiagramCanvasBase implements DThemeDiagramCanvasEditor {
	getBackgroundAmbient(): boolean {
		return false;
	}

	getSnapperGridMajorInterval(): number {
		return 10;
	}

	getSnapperGridMajorColor(): number {
		return 0x1e87f0;
	}

	getSnapperGridMajorAlpha(): number {
		return 0.5;
	}

	getSnapperGridMajorWidth(): number {
		return 2;
	}

	getSnapperGridMajorStyle(): EShapePointsStyle {
		return EShapePointsStyle.DASHED |
			EShapePointsStyle.NON_EXPANDING_WIDTH |
			EShapePointsStyle.NON_SHRINKING_WIDTH |
			EShapePointsStyle.NON_SCALING_DOT_AND_DASH;
	}

	getSnapperGridMinorColor(): number {
		return this.getSnapperGridMajorColor();
	}

	getSnapperGridMinorAlpha(): number {
		return 0.125;
	}

	getSnapperGridMinorWidth(): number {
		return 2;
	}

	getSnapperGridMinorStyle(): EShapePointsStyle {
		return this.getSnapperGridMajorStyle();
	}

	getSnapperTargetColor(): number {
		return 0xf36f27;
	}

	getSnapperTargetAlpha(): number {
		return this.getSnapperGridMajorAlpha();
	}

	getSnapperTargetWidth(): number {
		return this.getSnapperGridMajorWidth();
	}

	getSnapperTargetStyle(): EShapePointsStyle {
		return this.getSnapperGridMajorStyle();
	}
}
