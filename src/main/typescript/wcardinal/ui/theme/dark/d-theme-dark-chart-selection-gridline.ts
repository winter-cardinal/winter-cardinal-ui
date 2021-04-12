/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeChartSelectionShape } from "../../d-chart-selection-shape";
import { EShape } from "../../shape/e-shape";
import { EShapeBar } from "../../shape/variant/e-shape-bar";
import { EShapeBarPosition } from "../../shape/variant/e-shape-bar-position";

export class DThemeDarkChartSelectionGridline implements DThemeChartSelectionShape {
	isEnabled(state: DBaseStateSet): boolean {
		return true;
	}

	newShape(state: DBaseStateSet): EShape {
		const result = new EShapeBar(EShapeBarPosition.TOP);
		result.stroke.alpha = 0.5;
		return result;
	}
}
