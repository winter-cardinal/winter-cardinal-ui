/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePaginationPage } from "../../d-pagination-page";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";

export class DThemeDarkPaginationPage
	extends DThemeDarkImageBase<number>
	implements DThemePaginationPage
{
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeDarkConstants.HIGHLIGHT_COLOR;
	}

	getColor(state: DBaseStateSet): number {
		return DThemeDarkConstants.ACTIVE_COLOR;
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
