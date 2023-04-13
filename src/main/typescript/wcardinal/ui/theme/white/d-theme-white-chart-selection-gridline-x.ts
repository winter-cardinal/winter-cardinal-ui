/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { EShape } from "../../shape/e-shape";
import { EShapeStrokeStyle } from "../../shape/e-shape-stroke-style";
import { EShapeBar } from "../../shape/variant/e-shape-bar";
import { EShapeBarPosition } from "../../shape/variant/e-shape-bar-position";
import { DThemeWhiteChartSelectionShape } from "./d-theme-white-chart-selection-shape";

export class DThemeWhiteChartSelectionGridlineX extends DThemeWhiteChartSelectionShape {
	isEnabled(state: DBaseStateSet): boolean {
		return state.isHovered;
	}

	newShape(state: DBaseStateSet): EShape {
		const result = new EShapeBar();
		result.points.position = EShapeBarPosition.TOP;
		result.stroke.style = EShapeStrokeStyle.DASHED;
		result.stroke.alpha = 0.75;
		return result;
	}
}
