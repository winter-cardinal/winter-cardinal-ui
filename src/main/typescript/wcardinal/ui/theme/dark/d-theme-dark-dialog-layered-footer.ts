/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogLayeredFooter } from "../../d-dialog-layered-footer";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";

export class DThemeDarkDialogLayeredFooter
	extends DThemeDarkLayoutHorizontal
	implements DThemeDialogLayeredFooter
{
	getButtonOk(): string | null {
		return "OK";
	}

	getButtonCancel(): string | null {
		return "Cancel";
	}

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
