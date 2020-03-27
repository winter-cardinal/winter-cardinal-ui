/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableHeader } from "../../d-table-header";
import { DThemeDarkTableRow } from "./d-theme-dark-table-row";

export class DThemeDarkTableHeader extends DThemeDarkTableRow implements DThemeTableHeader {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		} else {
			return 0x4f4f4f;
		}
	}

	getBorderColor( state: DBaseState ): number | null {
		return 0x525252;
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
