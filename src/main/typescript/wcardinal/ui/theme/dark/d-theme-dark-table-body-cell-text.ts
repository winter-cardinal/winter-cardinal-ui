/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeTableBodyCellText } from "../../d-table-body-cell-text";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

export class DThemeDarkTableBodyCellText extends DThemeDarkImageBase<unknown> implements DThemeTableBodyCellText {
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

	getImageTintColor( state: DBaseStateSet ): number | null {
		return DThemeDarkTableBodyCells.getImageTintColor( state );
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	newTextValue(): DStateAwareOrValueMightBe<unknown> {
		return undefined;
	}
}
