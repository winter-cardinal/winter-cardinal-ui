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
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkTableRow } from "./d-theme-dark-table-row";

export class DThemeDarkTableHeader extends DThemeDarkTableRow implements DThemeTableHeader {
	COLOR = UtilRgb.brighten( DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.02 );
	BORDER_COLOR = UtilRgb.darken( DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.05 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		} else {
			return this.COLOR;
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
