/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeDialogSelecList } from "../../d-dialog-select-list";
import { DThemeDefaultList } from "./d-theme-default-list";

export class DThemeDefaultDialogSelectList extends DThemeDefaultList implements DThemeDialogSelecList {
	getBackgroundColor(): number | null {
		return this.dThemeConfiguration.getDialogSelectListBackgroundColor();
	}

	getBorderColor(): number | null {
		return this.dThemeConfiguration.getDialogSelectListBorderColor();
	}

	getHeight(): DCoordinateSize {
		return 250;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}
