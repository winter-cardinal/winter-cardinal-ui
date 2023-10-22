/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellInputTextArea } from "../../d-table-body-cell-input-text-area";
import { DThemeWhiteInputTextArea } from "./d-theme-white-input-text-area";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

export class DThemeWhiteTableBodyCellInputTextArea
	extends DThemeWhiteInputTextArea
	implements DThemeTableBodyCellInputTextArea
{
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTableBodyCells.getBackgroundColor(state);
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTableBodyCells.getBorderColor(state);
	}

	getBorderMask(state: DBaseStateSet): DBorderMask {
		return DThemeWhiteTableBodyCells.getBorderMask(state);
	}

	getColor(state: DBaseStateSet): number {
		return DThemeWhiteTableBodyCells.getColor(state);
	}

	getAlpha(state: DBaseStateSet): number {
		return DThemeWhiteTableBodyCells.getAlpha(state);
	}

	getHeight(): DCoordinateSize {
		return DThemeWhiteTableBodyCells.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeWhiteTableBodyCells.getCornerMask();
	}
}
