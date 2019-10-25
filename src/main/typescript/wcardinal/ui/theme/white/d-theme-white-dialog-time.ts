/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "../../d-coordinate";
import { DThemeDialogTime } from "../../d-dialog-time";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";

export class DThemeWhiteDialogTime extends DThemeWhiteDialogCommand implements DThemeDialogTime {
	getWidth(): DCoordinate {
		return "auto";
	}

	getHeight(): DCoordinate {
		return "auto";
	}

	getLayoutWidth(): DCoordinate {
		return "auto";
	}

	getLayoutHeight(): DCoordinate {
		return "auto";
	}
}
