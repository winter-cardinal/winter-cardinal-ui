/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
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

	getBackgroundColor( state: DBaseStateSet ): number | null {
		return DThemeWhiteTableBodyCells.getBackgroundColor( state );
	}

	getBackgroundAlpha( state: DBaseStateSet ): number {
		return DThemeWhiteTableBodyCells.getBackgroundAlpha( state );
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return DThemeWhiteTableBodyCells.getBorderColor( state );
	}

	getBorderAlign( state: DBaseStateSet ): number {
		return DThemeWhiteTableBodyCells.getBorderAlign( state );
	}

	getBorderMask( state: DBaseStateSet ): DBorderMask {
		return DThemeWhiteTableBodyCells.getBorderMask( state );
	}

	getColor( state: DBaseStateSet ): number {
		return DThemeWhiteTableBodyCells.getColor( state );
	}

	getAlpha( state: DBaseStateSet ): number {
		return DThemeWhiteTableBodyCells.getAlpha( state );
	}

	getHeight(): DCoordinateSize {
		return DThemeWhiteTableBodyCells.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeWhiteTableBodyCells.getCornerMask();
	}

	getOutlineColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled ) {
			return null;
		}
		return super.getOutlineColor( state );
	}

	getOutlineAlign( state: DBaseStateSet ): number {
		return DThemeWhiteTableBodyCells.getOutlineAlign( state );
	}
}
