/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogLayeredFooter } from "../../d-dialog-layered-footer";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export abstract class DThemeWhiteDialogLayeredFooter
	extends DThemeWhiteLayoutHorizontal
	implements DThemeDialogLayeredFooter
{
	abstract getButtonOk(): string | null;

	abstract getButtonCancel(): string | null;

	isButtonSpaceLeftEnabled(): boolean {
		return true;
	}

	isButtonSpaceRightEnabled(): boolean {
		return true;
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
