/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border";
import { DCoordinate } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeTableBodyCellInputReal } from "../../d-table-body-cell-input-real";
import { DThemeWhiteInputReal } from "./d-theme-white-input-real";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

export class DThemeWhiteTableBodyCellInputReal extends DThemeWhiteInputReal
	implements DThemeTableBodyCellInputReal {

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

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

	getHeight(): DCoordinate {
		return DThemeWhiteTableBodyCells.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeWhiteTableBodyCells.getCornerMask();
	}

	getOutlineColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		}
		return super.getOutlineColor( state );
	}

	getOutlineAlign( state: DBaseState ): number {
		return DThemeWhiteTableBodyCells.getOutlineAlign( state );
	}
}
