/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border";
import { DCoordinate } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DPickerDates } from "../../d-picker-dates";
import { DTableBodyCellDate, DThemeTableBodyCellDate } from "../../d-table-body-cell-date";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

const formatter = ( value: Date ): string => {
	return DPickerDates.format( value );
};

export class DThemeWhiteTableBodyCellDate extends DThemeWhiteButton implements DThemeTableBodyCellDate {
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
		return DThemeWhiteTableBodyCells.getColor( state);
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

	getTextFormatter(): ( value: Date, caller: DTableBodyCellDate ) => string {
		return formatter;
	}

	getTextValue( state: DBaseState ): Date {
		return new Date();
	}

	newTextValue(): Date {
		return new Date();
	}
}
