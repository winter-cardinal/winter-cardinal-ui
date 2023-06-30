/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DColorAndAlpha } from "../../d-color-and-alpha";
import { DThemeColorRecent } from "../../d-color-recent";

export class DThemeWhiteColorRecent implements DThemeColorRecent {
	getCapacity(): number {
		return 10;
	}

	newColors(): DColorAndAlpha[] {
		return [];
	}
}
