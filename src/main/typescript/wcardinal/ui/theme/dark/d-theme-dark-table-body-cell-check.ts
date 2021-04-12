/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellCheck } from "../../d-table-body-cell-check";
import { DThemeDarkButtonCheck } from "./d-theme-dark-button-check";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

export class DThemeDarkTableBodyCellCheck
	extends DThemeDarkButtonCheck<boolean>
	implements DThemeTableBodyCellCheck {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeDarkTableBodyCells.getBackgroundColor(state);
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return DThemeDarkTableBodyCells.getBorderColor(state);
	}

	getBorderAlign(state: DBaseStateSet): number {
		return DThemeDarkTableBodyCells.getBorderAlign(state);
	}

	getBorderMask(state: DBaseStateSet): DBorderMask {
		return DThemeDarkTableBodyCells.getBorderMask(state);
	}

	getColor(state: DBaseStateSet): number {
		return DThemeDarkTableBodyCells.getColor(state);
	}

	getAlpha(state: DBaseStateSet): number {
		return DThemeDarkTableBodyCells.getAlpha(state);
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return DThemeDarkTableBodyCells.getImageTintColor(state);
	}

	getHeight(): DCoordinateSize {
		return DThemeDarkTableBodyCells.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeDarkTableBodyCells.getCornerMask();
	}
}
