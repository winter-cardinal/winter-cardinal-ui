/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderLabel } from "../../d-slider-label";
import { DThemeDarkTextBase } from "./d-theme-dark-text-base";

export class DThemeDarkSliderLabel<VALUE = unknown>
	extends DThemeDarkTextBase<VALUE>
	implements DThemeSliderLabel<VALUE>
{
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
}
