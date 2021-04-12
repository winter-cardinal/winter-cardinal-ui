/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeButtonRadioRight } from "../../d-button-radio-right";
import { DThemeWhiteButtonRadio } from "./d-theme-white-button-radio";

export class DThemeWhiteButtonRadioRight<VALUE = unknown>
	extends DThemeWhiteButtonRadio<VALUE>
	implements DThemeButtonRadioRight<VALUE> {
	getImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getImageMarginHorizontal(): number {
		return 0;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}
}
