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

	getPrecision(): number {
		return 0;
	}
}