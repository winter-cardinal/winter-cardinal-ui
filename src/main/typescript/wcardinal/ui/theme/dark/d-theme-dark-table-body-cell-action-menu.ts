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
import { DThemeDarkDropdown } from "./d-theme-dark-dropdown";
import { DThemeDarkTableBodyCellActions } from "./d-theme-dark-table-body-cell-actions";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

DThemeDarkTableBodyCellActions.init();

export class DThemeDarkTableBodyCellActionMenu extends DThemeDarkDropdown
	implements DThemeTableBodyCellActionMenu {

	getBackgroundColor( state: DBaseState ): number | null {
		return DThemeDarkTableBodyCells.getBackgroundColor( state );
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return DThemeDarkTableBodyCells.getBackgroundAlpha( state );
	}

	getBorderColor( state: DBaseState ): number | null {
		return DThemeDarkTableBodyCells.getBorderColor( state );
	}

	getBorderAlign( state: DBaseState ): number {
		return DThemeDarkTableBodyCells.getBorderAlign( state );
	}

	getBorderMask( state: DBaseState ): DBorderMask {
		return DThemeDarkTableBodyCells.getBorderMask( state );
	}

	getColor( state: DBaseState ): number {
		return DThemeDarkTableBodyCells.getColor( state );
	}

	getAlpha( state: DBaseState ): number {
		return DThemeDarkTableBodyCells.getAlpha( state );
	}

	getHeight(): DCoordinateSize {
		return DThemeDarkTableBodyCells.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeDarkTableBodyCells.getCornerMask();
	}

	getSecondaryImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return null;
	}

	getImageTintColor( state: DBaseState ): number | null {
		return DThemeDarkTableBodyCellActions.getImageTintColor( state );
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeDarkTableBodyCellActions.getImageSource( state );
	}
}
