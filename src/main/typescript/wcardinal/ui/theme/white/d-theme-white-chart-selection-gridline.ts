/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeChartSelectionShape } from "../../d-chart-selection-shape";
import { EShape } from "../../shape/e-shape";
import { EShapeDefaults } from "../../shape/e-shape-defaults";
import { EShapePointsStyle } from "../../shape/e-shape-points";
import { EShapeBar } from "../../shape/variant/e-shape-bar";
import { EShapeBarPosition } from "../../shape/variant/e-shape-bar-position";

export class DThemeWhiteChartSelectionGridline implements DThemeChartSelectionShape {
	isEnabled( state: DBaseState ): boolean {
		return true;
	}

	newShape( state: DBaseState ): EShape {
		const result = new EShapeBar( EShapeBarPosition.TOP, -1, EShapeDefaults.STROKE_WIDTH, EShapePointsStyle.NONE );
		result.stroke.alpha = 0.25;
		return result;
	}
}
