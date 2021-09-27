/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogDatetime } from "../../d-dialog-datetime";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";

export class DThemeDarkDialogDatetime
	extends DThemeDarkDialogCommand
	implements DThemeDialogDatetime
{
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
