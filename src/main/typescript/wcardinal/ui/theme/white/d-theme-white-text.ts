/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";

export class DThemeWhiteText<VALUE> extends DThemeWhiteTextBase<VALUE> {
	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}
}
