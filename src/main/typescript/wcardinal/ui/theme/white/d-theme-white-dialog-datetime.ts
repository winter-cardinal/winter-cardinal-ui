/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "../../d-coordinate";
import { DThemeDialogDatetime } from "../../d-dialog-datetime";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";

export class DThemeWhiteDialogDatetime extends DThemeWhiteDialogCommand implements DThemeDialogDatetime {
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
