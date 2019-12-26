/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisPosition } from "../../d-chart-axis";
import { EShapeTextDirection } from "../../shape/e-shape-text-direction";
import { DThemeDefaultChartAxisBase } from "./d-theme-default-chart-axis-base";

export class DThemeDefaultChartAxisY extends DThemeDefaultChartAxisBase {
	getPosition(): DChartAxisPosition {
		return DChartAxisPosition.LEFT;
	}

	getLabelDirection(): EShapeTextDirection {
		return EShapeTextDirection.BOTTOM_TO_TOP;
	}
}
