/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteBase } from "./d-theme-default-base";

export class DThemeWhiteContent extends DThemeWhiteBase {
	getWidth(): DCoordinateSize {
		return "100%";
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
