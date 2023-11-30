/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogLayeredFooter } from "../../d-dialog-layered-footer";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";

export abstract class DThemeDarkDialogLayeredFooter
	extends DThemeDarkLayoutHorizontal
	implements DThemeDialogLayeredFooter
{
	abstract getButtonOk(): string | null;

	abstract getButtonCancel(): string | null;

	getX(): DCoordinatePosition {
		return "padding";
	}

	getY(): DCoordinatePosition {
		return "padding";
	}

	getWidth(): DCoordinateSize {
		return "padding";
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}

	getPaddingTop(): number {
		return 0;
	}

	getPaddingRight(): number {
		return 16;
	}

	getPaddingBottom(): number {
		return 16;
	}

	getPaddingLeft(): number {
		return 16;
	}
}
