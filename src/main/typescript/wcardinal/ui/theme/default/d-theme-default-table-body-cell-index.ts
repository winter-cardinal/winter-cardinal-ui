/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DTableBodyCellIndex, DThemeTableBodyCellIndex } from "../../d-table-body-cell-index";
import { DThemeDefaultImageBase } from "./d-theme-default-image-base";
import { DThemeDefaultTableBodyCells } from "./d-theme-default-table-body-cells";

const formatter = ( index: unknown ): string => {
	return String( Number( index ) + 1 );
};

export class DThemeDefaultTableBodyCellIndex extends DThemeDefaultImageBase implements DThemeTableBodyCellIndex {
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

	getHeight(): DCoordinateSize {
		return DThemeDefaultTableBodyCells.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeDefaultTableBodyCells.getCornerMask();
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
