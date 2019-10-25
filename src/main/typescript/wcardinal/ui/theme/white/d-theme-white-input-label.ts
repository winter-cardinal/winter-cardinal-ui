/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinate } from "../../d-coordinate";
import { DThemeInputLabel } from "../../d-input-label";
import { DThemeWhiteText } from "./d-theme-white-text";

export class DThemeWhiteInputLabel extends DThemeWhiteText implements DThemeInputLabel {
	getTextAlignHorizontal() {
		return DAlignHorizontal.RIGHT;
	}

	getWidth(): DCoordinate {
		return 60;
	}

	getHeight(): DCoordinate {
		return this.getLineHeight();
	}
}
