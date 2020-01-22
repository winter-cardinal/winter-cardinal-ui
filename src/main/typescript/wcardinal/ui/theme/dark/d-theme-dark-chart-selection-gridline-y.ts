/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { EShape } from "../../shape/e-shape";
import { EShapeDefaults } from "../../shape/e-shape-defaults";
import { EShapePointsStyle } from "../../shape/e-shape-points-style";
import { EShapeBar } from "../../shape/variant/e-shape-bar";
import { EShapeBarPosition } from "../../shape/variant/e-shape-bar-position";
import { DThemeDarkChartSelectionGridline } from "./d-theme-dark-chart-selection-gridline";

export class DThemeDarkChartSelectionGridlineY extends DThemeDarkChartSelectionGridline {
	newShape( state: DBaseState ): EShape {
		const result = new EShapeBar( EShapeBarPosition.LEFT, -1, EShapeDefaults.STROKE_WIDTH, EShapePointsStyle.NONE );
		result.stroke.alpha = 0.5;
		return result;
	}
}
