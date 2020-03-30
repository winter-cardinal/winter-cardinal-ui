/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableHeader } from "../../d-table-header";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteTableRow } from "./d-theme-white-table-row";

export class DThemeWhiteTableHeader extends DThemeWhiteTableRow implements DThemeTableHeader {
	BACKGROUND_COLOR = UtilRgb.darken( DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.02 );
	BORDER_COLOR = UtilRgb.darken( DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.055 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		} else {
			return this.BACKGROUND_COLOR;
		}
	}

	getBorderColor( state: DBaseState ): number | null {
		return this.BORDER_COLOR;
	}

	getBorderAlign( state: DBaseState ): number {
		return 0;
	}

	getBorderMask( state: DBaseState ): DBorderMask {
		return DBorderMask.NOT_BOTTOM;
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}

	getHeight(): DCoordinateSize {
		return 30;
	}
}
