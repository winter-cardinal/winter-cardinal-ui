/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyCellInputTreeInput } from "../../d-table-body-cell-input-tree-input";
import { DThemeDarkInputText } from "./d-theme-dark-input-text";

export class DThemeDarkTableBodyCellInputTreeInput extends DThemeDarkInputText
	implements DThemeTableBodyCellInputTreeInput {

	getHeight(): DCoordinateSize {
		return "100%";
	}

	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getOutlineColor( state: DBaseState ): number | null {
		return null;
	}

	getPaddingLeft(): number {
		return 0;
	}
}
