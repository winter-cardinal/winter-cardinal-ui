/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DPickerDates } from "../../d-picker-dates";
import { DTableBodyCellDate, DThemeTableBodyCellDate } from "../../d-table-body-cell-date";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

const formatter = ( value: Date ): string => {
	return DPickerDates.format( value );
};

export class DThemeDarkTableBodyCellDate extends DThemeDarkButton implements DThemeTableBodyCellDate {
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
		return DThemeDarkTableBodyCells.getColor( state);
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
