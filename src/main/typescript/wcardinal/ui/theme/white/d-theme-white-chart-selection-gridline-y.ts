/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { EShape } from "../../shape/e-shape";
import { EShapeBar } from "../../shape/variant/e-shape-bar";
import { EShapeBarPosition } from "../../shape/variant/e-shape-bar-position";
import { DThemeWhiteChartSelectionGridline } from "./d-theme-white-chart-selection-gridline";

export class DThemeWhiteChartSelectionGridlineY extends DThemeWhiteChartSelectionGridline {
	newShape( state: DBaseStateSet ): EShape {
		const result = new EShapeBar( EShapeBarPosition.LEFT );
		result.stroke.alpha = 0.5;
		return result;
	}
}
