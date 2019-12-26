/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogDate } from "../../d-dialog-date";
import { DThemeDefaultDialogCommand } from "./d-theme-default-dialog-command";

export class DThemeDefaultDialogDate extends DThemeDefaultDialogCommand implements DThemeDialogDate {
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
