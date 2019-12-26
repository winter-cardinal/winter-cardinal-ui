/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeCanvas } from "../../d-canvas";
import { DCornerMask } from "../../d-corner";
import { DThemeDefaultBase } from "./d-theme-default-base";

export class DThemeDefaultCanvas extends DThemeDefaultBase implements DThemeCanvas {
	getBackgroundColor() {
		return 0xffffff;
	}

	getBorderColor( state: DBaseState ) {
		return null;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
