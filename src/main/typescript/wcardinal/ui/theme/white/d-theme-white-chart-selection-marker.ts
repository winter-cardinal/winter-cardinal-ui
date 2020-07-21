/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeChartSelectionShape } from "../../d-chart-selection-shape";
import { EShape } from "../../shape/e-shape";
import { EShapeCircle } from "../../shape/variant/e-shape-circle";

export class DThemeWhiteChartSelectionMarker implements DThemeChartSelectionShape {
	isEnabled( state: DBaseStateSet ): boolean {
		return false;
	}

	newShape( state: DBaseStateSet ): EShape {
		const result = new EShapeCircle();
		if( state.isHovered ) {
			result.size.set( 14, 14 );
		} else {
			result.size.set( 20, 20 );
		}
		return result;
	}
}
