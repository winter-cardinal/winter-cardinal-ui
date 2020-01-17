/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteSlider extends DThemeWhiteBase implements DThemeWhiteSlider {
	
    getHeight(): DCoordinateSize {
		return "auto";
	}
	
	getWidth(): DCoordinateSize {
		return "auto";
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}

}