/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeScrollBarThumb } from "../../d-scroll-bar-thumb";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDefaultBase } from "./d-theme-default-base";
import { DThemeDefaultConstants } from "./d-theme-default-constants";

export class DThemeDefaultScrollBarThumb extends DThemeDefaultBase implements DThemeScrollBarThumb {
	COLOR = UtilRgb.darken( DThemeDefaultConstants.WEAK_HIGHLIGHT_COLOR, 0.25 );

	getBackgroundColor( state: DBaseState ): number {
		if( DBaseStates.isHovered( state ) || DBaseStates.isDragging( state ) ) {
			return DThemeDefaultConstants.HIGHLIGHT_COLOR;
		} else {
			return this.COLOR;
		}
	}

	getBackgroundAlpha( state: DBaseState ): number {
		if( DBaseStates.isHovered( state ) || DBaseStates.isDragging( state ) ) {
			return 1.0;
		} else {
			return DThemeDefaultConstants.WEAK_HIGHLIGHT_ALPHA;
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
