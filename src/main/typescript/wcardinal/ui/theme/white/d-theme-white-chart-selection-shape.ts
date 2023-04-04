/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeChartSelectionShape } from "../../d-chart-selection-shape";
import { EShape } from "../../shape/e-shape";

export abstract class DThemeWhiteChartSelectionShape implements DThemeChartSelectionShape {
	abstract isEnabled(state: DBaseStateSet): boolean;
	abstract newShape(state: DBaseStateSet): EShape;
}
