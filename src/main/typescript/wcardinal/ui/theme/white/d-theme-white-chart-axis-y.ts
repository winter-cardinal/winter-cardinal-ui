/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisPosition } from "../../d-chart-axis";
import { EShapeTextDirection } from "../../shape/e-shape-text-direction";
import { DThemeWhiteChartAxisBase } from "./d-theme-white-chart-axis-base";

export class DThemeWhiteChartAxisY extends DThemeWhiteChartAxisBase {
	getPosition(): DChartAxisPosition {
		return DChartAxisPosition.LEFT;
	}

	getLabelDirection(): EShapeTextDirection {
		return EShapeTextDirection.BOTTOM_TO_TOP;
	}
}
