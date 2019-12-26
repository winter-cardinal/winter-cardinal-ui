/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeTableBodyCellCheck } from "../../d-table-body-cell-check";
import { DThemeDefaultButtonCheck } from "./d-theme-default-button-check";
import { DThemeDefaultTableBodyCells } from "./d-theme-default-table-body-cells";

export class DThemeDefaultTableBodyCellCheck extends DThemeDefaultButtonCheck implements DThemeTableBodyCellCheck {
	getBackgroundColor( state: DBaseState ): number | null {
		return DThemeDefaultTableBodyCells.getBackgroundColor( state );
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return DThemeDefaultTableBodyCells.getBackgroundAlpha( state );
	}

	getBorderColor( state: DBaseState ): number | null {
		return DThemeDefaultTableBodyCells.getBorderColor( state );
	}

	getBorderAlign( state: DBaseState ): number {
		return DThemeDefaultTableBodyCells.getBorderAlign( state );
	}

	getBorderMask( state: DBaseState ): DBorderMask {
		return DThemeDefaultTableBodyCells.getBorderMask( state );
	}

	getColor( state: DBaseState ): number {
		return DThemeDefaultTableBodyCells.getColor( state );
	}

	getAlpha( state: DBaseState ): number {
		return DThemeDefaultTableBodyCells.getAlpha( state );
	}

	getImageTintColor( state: DBaseState ): number | null {
		return DThemeDefaultTableBodyCells.getImageTintColor( state );
	}

	getHeight(): DCoordinateSize {
		return DThemeDefaultTableBodyCells.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeDefaultTableBodyCells.getCornerMask();
	}
}
