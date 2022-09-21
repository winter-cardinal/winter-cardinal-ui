/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeSlider } from "../../d-slider";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteSlider extends DThemeWhiteBase implements DThemeSlider {
	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}

	getOutlineColor(state: DBaseStateSet): number | null {
		return null;
	}
}
