/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignVertical } from "../../d-align-vertical";
import { DBaseState } from "../../d-base-state";
import { DThemePaginationDotsButton } from "../../d-pagination-Dots-button";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";

export class DThemeWhitePaginationDotsButton
			extends DThemeWhiteButtonAmbient implements DThemePaginationDotsButton {

	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getWidth() {
		return 30;
	}

	getHeight() {
		return 30;
	}

	newTextValue(): any {
		return "...";
	}

	getTextAlignVertical(): DAlignVertical {
		return DAlignVertical.MIDDLE;
	}
}
