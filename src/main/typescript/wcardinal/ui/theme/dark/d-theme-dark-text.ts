/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDarkTextBase } from "./d-theme-dark-text-base";

export class DThemeDarkText extends DThemeDarkTextBase {
	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}
}
