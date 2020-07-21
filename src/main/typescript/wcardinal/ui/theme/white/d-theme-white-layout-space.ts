/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutClearType } from "../../d-layout-clear-type";
import { DThemeLayoutSpace } from "../../d-layout-space";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteLayoutSpace extends DThemeWhiteBase implements DThemeLayoutSpace {
	getBackgroundColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getWidth(): DCoordinateSize {
		return 0;
	}

	getHeight(): DCoordinateSize {
		return 0;
	}

	getClearType(): DLayoutClearType {
		return DLayoutClearType.BOTH;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}
}
