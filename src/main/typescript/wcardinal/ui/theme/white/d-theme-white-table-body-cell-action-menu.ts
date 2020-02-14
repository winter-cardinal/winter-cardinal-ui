/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellActionMenu } from "../../d-table-body-cell-action-menu";
import { DThemeWhiteDropdown } from "./d-theme-white-dropdown";
import { DThemeWhiteTableBodyCellActions } from "./d-theme-white-table-body-cell-actions";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

DThemeWhiteTableBodyCellActions.init();

export class DThemeWhiteTableBodyCellActionMenu extends DThemeWhiteDropdown
	implements DThemeTableBodyCellActionMenu {

	getBackgroundColor( state: DBaseState ): number | null {
		return DThemeWhiteTableBodyCells.getBackgroundColor( state );
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return DThemeWhiteTableBodyCells.getBackgroundAlpha( state );
	}

	getBorderColor( state: DBaseState ): number | null {
		return DThemeWhiteTableBodyCells.getBorderColor( state );
	}

	getBorderAlign( state: DBaseState ): number {
		return DThemeWhiteTableBodyCells.getBorderAlign( state );
	}

	getBorderMask( state: DBaseState ): DBorderMask {
		return DThemeWhiteTableBodyCells.getBorderMask( state );
	}

	getColor( state: DBaseState ): number {
		return DThemeWhiteTableBodyCells.getColor( state );
	}

	getAlpha( state: DBaseState ): number {
		return DThemeWhiteTableBodyCells.getAlpha( state );
	}

	getHeight(): DCoordinateSize {
		return DThemeWhiteTableBodyCells.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeWhiteTableBodyCells.getCornerMask();
	}

	getSecondaryImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return null;
	}

	getImageTintColor( state: DBaseState ): number | null {
		return DThemeWhiteTableBodyCellActions.getImageTintColor( state );
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeWhiteTableBodyCellActions.getImageSource( state );
	}
}
