/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "../../d-coordinate";
import { DThemeDialogDate } from "../../d-dialog-date";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";

export class DThemeWhiteDialogDate extends DThemeWhiteDialogCommand implements DThemeDialogDate {
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
