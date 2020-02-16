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
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";
import { DThemeDarkTableBodyCellTrees } from "./d-theme-dark-table-body-cell-trees";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

DThemeDarkTableBodyCellTrees.init();

export class DThemeDarkTableBodyCellInputTree extends DThemeDarkLayoutHorizontal
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

	getOutlineColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		}
		return super.getOutlineColor( state );
	}

	getOutlineAlign( state: DBaseState ): number {
		return DThemeDarkTableBodyCells.getOutlineAlign( state );
	}
}
