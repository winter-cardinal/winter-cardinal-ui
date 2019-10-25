/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border";
import { DCoordinate } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DTableBodyCellIndex, DThemeTableBodyCellIndex } from "../../d-table-body-cell-index";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

const formatter = ( index: unknown ): string => {
	return String( Number( index ) + 1 );
};

export class DThemeWhiteTableBodyCellIndex extends DThemeWhiteImageBase implements DThemeTableBodyCellIndex {
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

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getTextFormatter(): ( value: number, caller: DTableBodyCellIndex ) => string {
		return formatter;
	}

	getTextValue( state: DBaseState ): number {
		return 0;
	}

	newTextValue(): number {
		return 0;
	}
}
