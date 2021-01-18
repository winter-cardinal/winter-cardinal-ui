/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeTableBodyCellSelectPromise } from "../../d-table-body-cell-select-promise";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

export class DThemeDarkTableBodyCellSelectPromise<VALUE = unknown> extends DThemeDarkButton<VALUE | null>
	implements DThemeTableBodyCellSelectPromise<VALUE> {

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

	isSyncEnabled(): boolean {
		return true;
	}

	newTextValue(): DStateAwareOrValueMightBe<VALUE | null> {
		return null;
	}
}
