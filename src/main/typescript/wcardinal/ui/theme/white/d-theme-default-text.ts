/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteTextBase } from "./d-theme-default-text-base";

export class DThemeWhiteText extends DThemeWhiteTextBase {
	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}
}
