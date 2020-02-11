/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderLabel } from "../../d-slider-label";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";

export class DThemeWhiteSliderLabel extends DThemeWhiteTextBase implements DThemeSliderLabel {

	getHeight(): DCoordinateSize {
		return 15;
	}

	getWidth(): DCoordinateSize {
		return 30;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getTextAlignVertical(): DAlignVertical {
		return DAlignVertical.MIDDLE;
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
