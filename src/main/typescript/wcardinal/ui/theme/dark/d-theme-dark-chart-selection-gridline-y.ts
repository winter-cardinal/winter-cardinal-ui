/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { EShape } from "../../shape/e-shape";
import { EShapeBar } from "../../shape/variant/e-shape-bar";
import { EShapeBarPosition } from "../../shape/variant/e-shape-bar-position";
import { DThemeDarkChartSelectionGridline } from "./d-theme-dark-chart-selection-gridline";

export class DThemeDarkChartSelectionGridlineY extends DThemeDarkChartSelectionGridline {
	newShape( state: DBaseStateSet ): EShape {
		const result = new EShapeBar( EShapeBarPosition.LEFT );
		result.stroke.alpha = 0.5;
		return result;
	}
}
