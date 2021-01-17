/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DTableBodyCellIndex, DThemeTableBodyCellIndex } from "../../d-table-body-cell-index";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

const formatter = ( index: unknown ): string => {
	return String( Number( index ) + 1 );
};

export class DThemeDarkTableBodyCellIndex extends DThemeDarkImageBase<number> implements DThemeTableBodyCellIndex {
	getBackgroundColor( state: DBaseStateSet ): number | null {
		return DThemeDarkTableBodyCells.getBackgroundColor( state );
	}

	getBackgroundAlpha( state: DBaseStateSet ): number {
		return DThemeDarkTableBodyCells.getBackgroundAlpha( state );
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return DThemeDarkTableBodyCells.getBorderColor( state );
	}

	getBorderAlign( state: DBaseStateSet ): number {
		return DThemeDarkTableBodyCells.getBorderAlign( state );
	}

	getBorderMask( state: DBaseStateSet ): DBorderMask {
		return DThemeDarkTableBodyCells.getBorderMask( state );
	}

	getColor( state: DBaseStateSet ): number {
		return DThemeDarkTableBodyCells.getColor( state );
	}

	getAlpha( state: DBaseStateSet ): number {
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

	newTextValue(): DStateAwareOrValueMightBe<number> {
		return 0;
	}
}
