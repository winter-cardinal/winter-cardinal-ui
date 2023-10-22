/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellInputTextArea } from "../../d-table-body-cell-input-text-area";
import { DThemeDarkInputTextArea } from "./d-theme-dark-input-text-area";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

export class DThemeDarkTableBodyCellInputTextArea
	extends DThemeDarkInputTextArea
	implements DThemeTableBodyCellInputTextArea
{
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeDarkTableBodyCells.getBackgroundColor(state);
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return DThemeDarkTableBodyCells.getBorderColor(state);
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

	getHeight(): DCoordinateSize {
		return DThemeDarkTableBodyCells.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeDarkTableBodyCells.getCornerMask();
	}
}
