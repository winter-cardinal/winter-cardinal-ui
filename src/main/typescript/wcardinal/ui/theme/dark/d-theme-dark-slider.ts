/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeSlider } from "../../d-slider";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkSlider extends DThemeDarkBase implements DThemeSlider {
	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}
}
