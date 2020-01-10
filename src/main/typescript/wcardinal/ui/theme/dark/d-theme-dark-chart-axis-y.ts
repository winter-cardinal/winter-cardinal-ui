/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisPosition } from "../../d-chart-axis";
import { EShapeTextDirection } from "../../shape/e-shape-text-direction";
import { DThemeDarkChartAxisBase } from "./d-theme-dark-chart-axis-base";

export class DThemeDarkChartAxisY extends DThemeDarkChartAxisBase {
	getPosition(): DChartAxisPosition {
		return DChartAxisPosition.LEFT;
	}

	getLabelDirection(): EShapeTextDirection {
		return EShapeTextDirection.BOTTOM_TO_TOP;
	}
}
