/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinate } from "../../d-coordinate";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteContent extends DThemeWhiteBase {
	getWidth(): DCoordinate {
		return "100%";
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
