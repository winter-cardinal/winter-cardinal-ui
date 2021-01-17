/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DPickerDates } from "../../d-picker-dates";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DTableBodyCellDate, DThemeTableBodyCellDate } from "../../d-table-body-cell-date";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

const formatter = ( value: Date ): string => {
	return DPickerDates.format( value );
};

export class DThemeDarkTableBodyCellDate extends DThemeDarkButton<Date> implements DThemeTableBodyCellDate {
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
		return DThemeDarkTableBodyCells.getColor( state);
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

	getTextFormatter(): ( value: Date, caller: DTableBodyCellDate ) => string {
		return formatter;
	}

	newTextValue(): DStateAwareOrValueMightBe<Date> {
		return new Date();
	}
}
