/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DPickerDatetimes } from "../../d-picker-datetimes";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import {
	DTableBodyCellDatetime,
	DThemeTableBodyCellDatetime
} from "../../d-table-body-cell-datetime";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

const formatter = (value: Date, caller: DTableBodyCellDatetime): string => {
	return DPickerDatetimes.format(value, caller.getDatetimeMask());
};

export class DThemeWhiteTableBodyCellDatetime
	extends DThemeWhiteButton<Date>
	implements DThemeTableBodyCellDatetime {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTableBodyCells.getBackgroundColor(state);
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTableBodyCells.getBorderColor(state);
	}

	getBorderAlign(state: DBaseStateSet): number {
		return DThemeWhiteTableBodyCells.getBorderAlign(state);
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

	getTextFormatter(): (value: Date, caller: DTableBodyCellDatetime) => string {
		return formatter;
	}

	newTextValue(): DStateAwareOrValueMightBe<Date> {
		return new Date();
	}
}
