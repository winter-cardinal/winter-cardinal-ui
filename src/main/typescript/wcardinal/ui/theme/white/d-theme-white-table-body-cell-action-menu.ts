/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellActionMenu } from "../../d-table-body-cell-action-menu";
import { DThemeWhiteDropdown } from "./d-theme-white-dropdown";
import { DThemeWhiteTableBodyCellActions } from "./d-theme-white-table-body-cell-actions";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

DThemeWhiteTableBodyCellActions.init();

export class DThemeWhiteTableBodyCellActionMenu
	extends DThemeWhiteDropdown
	implements DThemeTableBodyCellActionMenu
{
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTableBodyCells.getBackgroundColor(state);
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTableBodyCells.getBorderColor(state);
	}

	getBorderAlign(state: DBaseStateSet): number {
		return DThemeWhiteTableBodyCells.getBorderAlign(state);
	}

	getBorderMask(state: DBaseStateSet): DBorderMask {
		return DThemeWhiteTableBodyCells.getBorderMask(state);
	}

	getColor(state: DBaseStateSet): number {
		return DThemeWhiteTableBodyCells.getColor(state);
	}

	getAlpha(state: DBaseStateSet): number {
		return DThemeWhiteTableBodyCells.getAlpha(state);
	}

	getHeight(): DCoordinateSize {
		return DThemeWhiteTableBodyCells.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeWhiteTableBodyCells.getCornerMask();
	}

	getSecondaryImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return null;
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTableBodyCellActions.getImageTintColor(state);
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteTableBodyCellActions.getImageSource(state);
	}
}
