/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeChartSelectionShape } from "../../d-chart-selection-shape";
import { EShape } from "../../shape/e-shape";
import { EShapeBar } from "../../shape/variant/e-shape-bar";
import { EShapeBarPosition } from "../../shape/variant/e-shape-bar-position";

export class DThemeDarkChartSelectionGridline implements DThemeChartSelectionShape {
	isEnabled( state: DBaseState ): boolean {
		return true;
	}

	newShape( state: DBaseState ): EShape {
		const result = new EShapeBar( EShapeBarPosition.TOP );
		result.stroke.alpha = 0.5;
		return result;
	}
}
