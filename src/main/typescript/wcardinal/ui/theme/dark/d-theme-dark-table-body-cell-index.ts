/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DTableBodyCellIndex, DThemeTableBodyCellIndex } from "../../d-table-body-cell-index";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

const formatter = ( index: unknown ): string => {
	return String( Number( index ) + 1 );
};

export class DThemeDarkTableBodyCellIndex extends DThemeDarkImageBase implements DThemeTableBodyCellIndex {
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
