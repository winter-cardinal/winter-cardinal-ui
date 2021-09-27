/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeInputLabel } from "../../d-input-label";
import { DThemeDarkText } from "./d-theme-dark-text";

export class DThemeDarkInputLabel<VALUE = unknown>
	extends DThemeDarkText<VALUE>
	implements DThemeInputLabel<VALUE>
{
	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getWidth(): DCoordinateSize {
		return 60;
	}

	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}
}
