/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDefaultTextBase } from "./d-theme-default-text-base";

export class DThemeDefaultText extends DThemeDefaultTextBase {
	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}
}
