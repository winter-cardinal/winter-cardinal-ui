/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePaginationPage } from "../../d-pagination-page";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";

export class DThemeWhitePaginationPage
	extends DThemeWhiteImageBase<number>
	implements DThemePaginationPage
{
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeWhiteConstants.HIGHLIGHT_COLOR;
	}

	getColor(state: DBaseStateSet): number {
		return DThemeWhiteConstants.ACTIVE_COLOR;
	}

	getWidth(): DCoordinateSize {
		return 30;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}

	getTextStyleClipping(): boolean {
		return false;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}
}
