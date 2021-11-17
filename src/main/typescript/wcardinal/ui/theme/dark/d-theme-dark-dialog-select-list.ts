/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogSelecList } from "../../d-dialog-select-list";
import { DThemeDarkList } from "./d-theme-dark-list";

export class DThemeDarkDialogSelectList extends DThemeDarkList implements DThemeDialogSelecList {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getHeight(): DCoordinateSize {
		return 250;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}
}
