/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteSlider extends DThemeWhiteBase implements DThemeWhiteSlider {

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}

}
