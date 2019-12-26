/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeTableBodyCellInputText } from "../../d-table-body-cell-input-text";
import { DThemeDefaultInputText } from "./d-theme-default-input-text";
import { DThemeDefaultTableBodyCells } from "./d-theme-default-table-body-cells";

export class DThemeDefaultTableBodyCellInputText extends DThemeDefaultInputText
	implements DThemeTableBodyCellInputText {

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

	getOutlineColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.dThemeConfiguration.getTableBodyCellInputTextDisabledOutlineColor();
		}
		return super.getOutlineColor( state );
	}

	getOutlineAlign( state: DBaseState ): number {
		return DThemeDefaultTableBodyCells.getOutlineAlign( state );
	}
}
