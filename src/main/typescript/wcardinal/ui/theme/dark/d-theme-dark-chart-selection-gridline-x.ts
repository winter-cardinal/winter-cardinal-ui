/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { EShape } from "../../shape/e-shape";
import { EShapeStrokeStyle } from "../../shape/e-shape-stroke-style";
import { EShapeBar } from "../../shape/variant/e-shape-bar";
import { EShapeBarPosition } from "../../shape/variant/e-shape-bar-position";
import { DThemeDarkChartSelectionShape } from "./d-theme-dark-chart-selection-shape";

export class DThemeDarkChartSelectionGridlineX extends DThemeDarkChartSelectionShape {
	override isEnabled(state: DBaseStateSet): boolean {
		return state.isHovered;
	}

	override newShape(state: DBaseStateSet): EShape {
		const result = new EShapeBar();
		result.points.position = EShapeBarPosition.TOP;
		result.stroke.style = EShapeStrokeStyle.DASHED;
		return result;
	}
}
