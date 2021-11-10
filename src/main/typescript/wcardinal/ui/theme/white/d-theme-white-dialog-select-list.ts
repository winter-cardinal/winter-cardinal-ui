/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../..";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogSelecList } from "../../d-dialog-select-list";
import { DThemeWhiteList } from "./d-theme-white-list";

export class DThemeWhiteDialogSelectList extends DThemeWhiteList implements DThemeDialogSelecList {
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
}
