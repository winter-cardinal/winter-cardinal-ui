/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyCellInputTree } from "../../d-table-body-cell-input-tree";
import { DThemeWhiteBase } from "./d-theme-white-base";
import { DThemeWhiteTableBodyCellTrees } from "./d-theme-white-table-body-cell-trees";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

DThemeWhiteTableBodyCellTrees.init();

export class DThemeWhiteTableBodyCellInputTree extends DThemeWhiteBase
	implements DThemeTableBodyCellInputTree {

	getHeight(): DCoordinateSize {
		return DThemeWhiteTableBodyCells.getHeight();
	}

	getBackgroundColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getLevelPadding( level: number ): number {
		return 24 + level * 20;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}
}
