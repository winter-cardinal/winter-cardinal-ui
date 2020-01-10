/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeChartSelectionShape } from "../../d-chart-selection-shape";
import { EShape } from "../../shape/e-shape";
import { EShapeCircle } from "../../shape/variant/e-shape-circle";

export class DThemeWhiteChartSelectionMarker implements DThemeChartSelectionShape {
	isEnabled( state: DBaseState ): boolean {
		return false;
	}

	newShape( state: DBaseState ): EShape {
		const result = new EShapeCircle();
		if( DBaseStates.isHovered( state ) ) {
			result.size.set( 14, 14 );
		} else {
			result.size.set( 20, 20 );
		}
		return result;
	}
}
