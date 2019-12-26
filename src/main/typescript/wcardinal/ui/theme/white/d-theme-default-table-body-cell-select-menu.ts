/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeTableBodyCellSelectMenu } from "../../d-table-body-cell-select-menu";
import { DThemeWhiteSelect } from "./d-theme-default-select";
import { DThemeWhiteTableBodyCells } from "./d-theme-default-table-body-cells";

export class DThemeWhiteTableBodyCellSelectMenu extends DThemeWhiteSelect
	implements DThemeTableBodyCellSelectMenu {

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

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return null;
	}
}
