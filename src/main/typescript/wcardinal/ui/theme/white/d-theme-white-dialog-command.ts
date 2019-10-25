/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "../../d-coordinate";
import { DThemeDialogCommand } from "../../d-dialog-command";
import { DThemeWhiteDialog } from "./d-theme-white-dialog";

export class DThemeWhiteDialogCommand extends DThemeWhiteDialog implements DThemeDialogCommand {
	getOk(): string | null {
		return "OK";
	}

	getCancel(): string | null {
		return "Cacnel";
	}

	getLayoutX(): DCoordinate {
		return "padding";
	}

	getLayoutY(): DCoordinate {
		return "padding";
	}

	getLayoutWidth(): DCoordinate {
		return "padding";
	}

	getLayoutHeight(): DCoordinate {
		return "auto";
	}
}
