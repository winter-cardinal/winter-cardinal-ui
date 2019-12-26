/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogTime } from "../../d-dialog-time";
import { DThemeWhiteDialogCommand } from "./d-theme-default-dialog-command";

export class DThemeWhiteDialogTime extends DThemeWhiteDialogCommand implements DThemeDialogTime {
	getWidth(): DCoordinateSize {
		return "auto";
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}

	getLayoutWidth(): DCoordinateSize {
		return "auto";
	}

	getLayoutHeight(): DCoordinateSize {
		return "auto";
	}
}
