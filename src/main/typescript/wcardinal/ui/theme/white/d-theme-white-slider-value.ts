/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderValue } from "../../d-slider-value";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";

export class DThemeWhiteSliderValue extends DThemeWhiteTextBase implements DThemeSliderValue {

	getBackgroundColor( state: DBaseState ): number | null {
		return 0x3399FF;
	}

	getBorderColor( state: DBaseState ): number | null {
		return 0x3399FF;
	}

	getColor( state: DBaseState ): number {
		return 0xFFFFFF;
	}

	getHeight(): DCoordinateSize {
		return 20;
	}

	getWidth(): DCoordinateSize {
		return 35;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getTextAlignVertical(): DAlignVertical {
		return DAlignVertical.TOP;
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

	getPrecision(): number {
		return 0;
	}
}
