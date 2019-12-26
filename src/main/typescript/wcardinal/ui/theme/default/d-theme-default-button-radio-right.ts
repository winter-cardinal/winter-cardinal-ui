/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeButtonRadioRight } from "../../d-button-radio-right";
import { DThemeDefaultButtonRadio } from "./d-theme-default-button-radio";

export class DThemeDefaultButtonRadioRight extends DThemeDefaultButtonRadio implements DThemeButtonRadioRight {
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
