/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeInputLabel } from "../../d-input-label";
import { DThemeWhiteText } from "./d-theme-default-text";

export class DThemeWhiteInputLabel extends DThemeWhiteText implements DThemeInputLabel {
	getTextAlignHorizontal() {
		return DAlignHorizontal.RIGHT;
	}

	getWidth(): DCoordinateSize {
		return 60;
	}

	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}
}
