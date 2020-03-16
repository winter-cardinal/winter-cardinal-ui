/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemePaginationDotsButton } from "../../d-pagination-dots-button";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";

export class DThemeWhitePaginationDotsButton
			extends DThemeWhiteButtonAmbient implements DThemePaginationDotsButton {

	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	newTextValue(): any {
		return "...";
	}

}
