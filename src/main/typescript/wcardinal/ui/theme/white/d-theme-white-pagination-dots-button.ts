/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemePaginationDotsButton } from "../../d-pagination-dots-button";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";

export class DThemeWhitePaginationDotsButton
			extends DThemeWhiteButtonAmbient implements DThemePaginationDotsButton {

	getBackgroundColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return null;
	}

	newTextValue(): any {
		return "...";
	}

}
