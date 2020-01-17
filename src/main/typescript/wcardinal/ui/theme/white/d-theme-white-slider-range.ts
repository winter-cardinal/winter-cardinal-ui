/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeWhiteBase } from "./d-theme-white-base";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";

export class DThemeWhiteSliderRange extends DThemeWhiteBase implements DThemeWhiteSliderRange {
	
    getHeight(): DCoordinateSize {
		return 33;
	}

	getWidth(): DCoordinateSize {
		return 300;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}

	getX(): DCoordinatePosition {
		return "CENTER";
	}

	getPadding() {
		return 0;
	}

	getPaddingLeft(): number {
		return 0;
	}

	getPaddingRight(): number {
		return 0;
	}

	getPaddingTop(): number {
		return 0;
	}

	getPaddingBottom(): number {
		return 0;
	}

	getMargin(): number {
		return 0;
	}

	getMarginLeft(): number {
		return 0;
	}

	getMarginRight(): number {
		return 0;
	}

	getMarginTop(): number {
		return 0;
	}

	getMarginBottom(): number {
		return 0;
	}

	getBorderAlpha( state: DBaseState ): number {
		return 0;
	}

	getBorderWidth( state: DBaseState ): number {
		return 0;
	}

	getBorderAlign( state: DBaseState ): number {
		return 0;
	}
	
	getOutlineAlpha( state: DBaseState ): number {
		return 0;
	}

	getOutlineWidth( state: DBaseState ): number {
		return 0;
	}

	getOutlineOffset( state: DBaseState ): number {
		return 0;
	}

	getOutlineAlign( state: DBaseState ): number {
		return 0;
	}
}
