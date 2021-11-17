/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeText } from "../../d-text";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";

export class DThemeWhiteText<VALUE = unknown>
	extends DThemeWhiteTextBase<VALUE>
	implements DThemeText<VALUE>
{
	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}
}
