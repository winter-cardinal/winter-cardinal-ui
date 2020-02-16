/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellInputTree } from "../../d-table-body-cell-input-tree";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";
import { DThemeWhiteTableBodyCellTrees } from "./d-theme-white-table-body-cell-trees";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

DThemeWhiteTableBodyCellTrees.init();

export class DThemeWhiteTableBodyCellInputTree extends DThemeWhiteLayoutHorizontal
	implements DThemeTableBodyCellInputTree {

	getLevelPadding( level: number ): number {
		return 24 + level * 20;
	}

	getMargin(): number {
		return 0;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
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

	getHeight(): DCoordinateSize {
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
