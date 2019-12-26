/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeInputAndLabel } from "../../d-input-and-label";
import { DThemeDefaultLayoutHorizontal } from "./d-theme-default-layout-horizontal";

export class DThemeDefaultInputAndLabel extends DThemeDefaultLayoutHorizontal implements DThemeInputAndLabel {
	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}
}
