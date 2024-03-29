/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeText } from "../../d-text";
import { DThemeDarkTextBase } from "./d-theme-dark-text-base";

export class DThemeDarkText<VALUE = unknown>
	extends DThemeDarkTextBase<VALUE>
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
