/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeDialogSelecList } from "../../d-dialog-select-list";
import { DThemeDarkList } from "./d-theme-dark-list";

export class DThemeDarkDialogSelectList extends DThemeDarkList implements DThemeDialogSelecList {
	getBackgroundColor(): number | null {
		return null;
	}

	getBorderColor(): number | null {
		return null;
	}

	getHeight(): DCoordinateSize {
		return 250;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}
