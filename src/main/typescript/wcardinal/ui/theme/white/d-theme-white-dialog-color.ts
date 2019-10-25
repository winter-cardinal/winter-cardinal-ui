/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "../../d-coordinate";
import { DThemeDialogColor } from "../../d-dialog-color";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";

export class DThemeWhiteDialogColor extends DThemeWhiteDialogCommand implements DThemeDialogColor {
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
