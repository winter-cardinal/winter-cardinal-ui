/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderValue } from "../../d-slider-value";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkTextBase } from "./d-theme-dark-text-base";

export class DThemeDarkSliderValue extends DThemeDarkTextBase implements DThemeSliderValue {
	getX(): DCoordinatePosition {
		return "CENTER";
	}

	getY(): DCoordinatePosition {
		return "CENTER";
	}

	getWidth(): DCoordinateSize {
		return "AUTO";
	}

	getHeight(): DCoordinateSize {
		return 20;
	}

	getBackgroundColor( state: DBaseState ): number | null {
		if ( DBaseStates.isDisabled( state ) ) {
			return 0x646464;
		}
		return DThemeDarkConstants.HIGHLIGHT_COLOR;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getColor( state: DBaseState ): number {
		return 0x000000;
	}

	getAlpha( state: DBaseState ): number {
		if ( DBaseStates.isDisabled( state ) ) {
			return 0.38;
		}
		return 1;
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
