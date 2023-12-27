/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogLayeredHeaderSeparator } from "../../d-dialog-layered-header-separator";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";

const y = (p: number): number => {
	return p - 1;
};

const width = (p: number): number => {
	return p - 16;
};

export class DThemeWhiteDialogLayeredHeaderSeparator
	extends DThemeWhiteImageBase<string>
	implements DThemeDialogLayeredHeaderSeparator
{
	getX(): DCoordinatePosition {
		return 8;
	}

	getY(): DCoordinatePosition {
		return y;
	}

	getWidth(): DCoordinateSize {
		return width;
	}

	getHeight(): DCoordinateSize {
		return 1;
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeWhiteConstants.BORDER_COLOR;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.NONE;
	}

	newState(state: DBaseStateSet): void {
		state.isFocusable = false;
	}
}
