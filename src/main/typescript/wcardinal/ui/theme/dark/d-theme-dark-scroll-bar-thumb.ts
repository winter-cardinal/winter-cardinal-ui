/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeScrollBarThumb } from "../../d-scroll-bar-thumb";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkBase } from "./d-theme-dark-base";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkScrollBarThumb extends DThemeDarkBase implements DThemeScrollBarThumb {
	COLOR = UtilRgb.brighten( DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, 0.5 );

	getBackgroundColor( state: DBaseState ): number {
		if( DBaseStates.isHovered( state ) || DBaseStates.isDragging( state ) ) {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		} else {
			return this.COLOR;
		}
	}

	getBackgroundAlpha( state: DBaseState ): number {
		if( DBaseStates.isHovered( state ) || DBaseStates.isDragging( state ) ) {
			return 1.0;
		} else {
			return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
		}
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderAlpha( state: DBaseState ): number {
		return 0;
	}

	getBorderWidth( state: DBaseState ): number {
		return 1;
	}

	getWidth(): DCoordinateSize {
		return 13;
	}

	getHeight(): DCoordinateSize {
		return 13;
	}

	getMinimumSize(): number {
		return 16;
	}
}
