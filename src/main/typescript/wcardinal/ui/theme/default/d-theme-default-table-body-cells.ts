/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeDefaultConfigurations } from "../d-theme-default-configurations";
import { DThemeDefaultConstants } from "./d-theme-default-constants";
import { DThemeDefaultFont } from "./d-theme-default-font";

export class DThemeDefaultTableBodyCells {

	static getBackgroundColor( state: DBaseState ): number | null {
		const dThemeConfiguration = DThemeDefaultConfigurations.getInstance();
		if( DBaseStates.isInvalid( state ) ) {
			return dThemeConfiguration.getTableBodyCellsInvalidBackgroundColor();
		} else if( state & DBaseState.ACTIVE_IN ) {
			return dThemeConfiguration.getTableBodyCellsActiveBackgroundColor();
		} else {
			return dThemeConfiguration.getTableBodyCellsBackgroundColor();
		}
	}

	static getBackgroundAlpha( state: DBaseState ): number {
		if( ! DBaseStates.isDisabled( state ) ) {
			if( DBaseStates.isPressed( state ) || DBaseStates.isFocused( state ) ) {
				return DThemeDefaultConstants.HIGHLIGHT_ALPHA;
			}
		}
		return 0;
	}

	static getBorderColor( state: DBaseState ): number | null {
		const dThemeConfiguration = DThemeDefaultConfigurations.getInstance();
		return dThemeConfiguration.getTableBodyCellsBorderColor();
	}

	static getBorderAlign( state: DBaseState ): number {
		return 0.5;
	}

	static getBorderMask( state: DBaseState ): DBorderMask {
		return DBorderMask.TOP_BOTTOM;
	}

	static getColor( state: DBaseState ): number {
		return DThemeDefaultFont.getColor( state );
	}

	static getAlpha( state: DBaseState ): number {
		if( ! DBaseStates.isDisabled( state ) ) {
			return DThemeDefaultFont.getAlpha( state );
		}
		return 0;
	}

	static getImageTintColor( state: DBaseState ): number | null {
		const dThemeConfiguration = DThemeDefaultConfigurations.getInstance();
		if( DBaseStates.isDisabled( state ) || DBaseStates.isReadOnly( state ) || ! DBaseStates.isActive( state ) ) {
			if( DBaseStates.isFocused( state ) ) {
				return dThemeConfiguration.getTableBodyCellsFocusedImageTintColor();
			} else {
				return dThemeConfiguration.getTableBodyCellsDisabledImageTintColor();
			}
		} else {
			return dThemeConfiguration.getTableBodyCellsImageTintColor();
		}
	}

	static getOutlineAlign( state: DBaseState ): number {
		return -2;
	}

	static getHeight(): DCoordinateSize {
		return "padding";
	}

	static getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}
