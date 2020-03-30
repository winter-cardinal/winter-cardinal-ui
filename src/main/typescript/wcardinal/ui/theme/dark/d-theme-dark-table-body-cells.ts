/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DTableCellState } from "../../d-table-cell-state";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkFont } from "./d-theme-dark-font";

export class DThemeDarkTableBodyCells {
	static readonly IMAGE_TINT_COLOR_FOCUSED = UtilRgb.brighten( DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, 0.1 );
	static readonly BACKGROUND_COLOR_EVEN = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	static readonly BACKGROUND_COLOR_ODD = UtilRgb.brighten( DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.02 );
	static readonly WEAK_STRONG_HIGHLIGHT_COLOR = UtilRgb.brighten(
		DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD, 0.05
	);
	static readonly BORDER_COLOR = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;

	static getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			if( state & DTableCellState.FROZEN ) {
				return ( state & DTableCellState.EVEN ) ?
					this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
			} else {
				return null;
			}
		} else if( DBaseStates.isInvalid( state ) ) {
			return DThemeDarkConstants.INVALID_BLENDED_ON_BOARD;
		} else if( state & DBaseState.ACTIVE_IN ) {
			return DThemeDarkConstants.HIGHLIGHT_BLENDED_ON_BOARD;
		} else if( DBaseStates.isFocused( state ) && DBaseStates.isHovered( state ) ) {
			return this.WEAK_STRONG_HIGHLIGHT_COLOR;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
		} else {
			if( state & DTableCellState.FROZEN ) {
				return ( state & DTableCellState.EVEN ) ?
					this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
			} else {
				return null;
			}
		}
	}

	static getBackgroundAlpha( state: DBaseState ): number {
		return 1;
	}

	static getBorderColor( state: DBaseState ): number | null {
		return this.BORDER_COLOR;
	}

	static getBorderAlign( state: DBaseState ): number {
		return 0;
	}

	static getBorderMask( state: DBaseState ): DBorderMask {
		if( state & DTableCellState.END ) {
			return DBorderMask.ALL;
		} else {
			return DBorderMask.NOT_RIGHT;
		}
	}

	static getColor( state: DBaseState ): number {
		return DThemeDarkFont.getColor( state );
	}

	static getAlpha( state: DBaseState ): number {
		if( ! DBaseStates.isDisabled( state ) ) {
			return DThemeDarkFont.getAlpha( state );
		}
		return 0;
	}

	static getImageTintColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) || DBaseStates.isReadOnly( state ) || ! DBaseStates.isActive( state ) ) {
			if( DBaseStates.isFocused( state ) ) {
				return this.IMAGE_TINT_COLOR_FOCUSED;
			}
			return 0x646464;
		} else {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
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
