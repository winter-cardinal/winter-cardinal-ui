/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogColorGradient } from "../../d-dialog-color-gradient";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";

export class DThemeDarkDialogColorGradient
	extends DThemeDarkDialogCommand
	implements DThemeDialogColorGradient
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
