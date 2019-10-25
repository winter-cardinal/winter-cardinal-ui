/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "../../d-coordinate";
import { DThemeDialogColorGradient } from "../../d-dialog-color-gradient";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";

export class DThemeWhiteDialogColorGradient extends DThemeWhiteDialogCommand implements DThemeDialogColorGradient {
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
