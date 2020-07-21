/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeCanvas } from "../../d-canvas";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkCanvas extends DThemeDarkBase implements DThemeCanvas {
	getBackgroundColor(): number | null {
		return 0x484848;
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
