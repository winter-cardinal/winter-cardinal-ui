/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { EShape } from "../../shape/e-shape";
import { EShapeCircle } from "../../shape/variant/e-shape-circle";
import { DThemeDarkChartSelectionShape } from "./d-theme-dark-chart-selection-shape";

export class DThemeDarkChartSelectionMarker extends DThemeDarkChartSelectionShape {
	override isEnabled(state: DBaseStateSet): boolean {
		return state.isActive;
	}

	override newShape(state: DBaseStateSet): EShape {
		const result = new EShapeCircle();
		result.size.set(14, 14);
		return result;
	}
}
