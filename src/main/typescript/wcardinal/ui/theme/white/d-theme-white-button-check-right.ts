/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeButtonCheckRight } from "../../d-button-check-right";
import { DThemeWhiteButtonCheck } from "./d-theme-white-button-check";

export class DThemeWhiteButtonCheckRight<VALUE = unknown>
	extends DThemeWhiteButtonCheck<VALUE>
	implements DThemeButtonCheckRight<VALUE>
{
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
