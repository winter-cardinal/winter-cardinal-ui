/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DPickerDatetimes } from "../../d-picker-datetimes";
import { DTableBodyCellDatetime, DThemeTableBodyCellDatetime } from "../../d-table-body-cell-datetime";
import { DThemeDefaultButton } from "./d-theme-default-button";
import { DThemeDefaultTableBodyCells } from "./d-theme-default-table-body-cells";

const formatter = ( value: Date, caller: DTableBodyCellDatetime ): string => {
	return DPickerDatetimes.format( value, caller.getDatetimeMask() );
};

export class DThemeDefaultTableBodyCellDatetime extends DThemeDefaultButton implements DThemeTableBodyCellDatetime {
	getBackgroundColor( state: DBaseState ): number | null {
		return DThemeDefaultTableBodyCells.getBackgroundColor( state );
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return DThemeDefaultTableBodyCells.getBackgroundAlpha( state );
	}

	getBorderColor( state: DBaseState ): number | null {
		return DThemeDefaultTableBodyCells.getBorderColor( state );
	}

	getBorderAlign( state: DBaseState ): number {
		return DThemeDefaultTableBodyCells.getBorderAlign( state );
	}

	getBorderMask( state: DBaseState ): DBorderMask {
		return DThemeDefaultTableBodyCells.getBorderMask( state );
	}

	getColor( state: DBaseState ): number {
		return DThemeDefaultTableBodyCells.getColor( state );
	}

	getAlpha( state: DBaseState ): number {
		return DThemeDefaultTableBodyCells.getAlpha( state );
	}

	getHeight(): DCoordinateSize {
		return DThemeDefaultTableBodyCells.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeDefaultTableBodyCells.getCornerMask();
	}

	getTextFormatter(): ( value: Date, caller: DTableBodyCellDatetime ) => string {
		return formatter;
	}

	getTextValue( state: DBaseState ): Date {
		return new Date();
	}

	newTextValue(): Date {
		return new Date();
	}
}
