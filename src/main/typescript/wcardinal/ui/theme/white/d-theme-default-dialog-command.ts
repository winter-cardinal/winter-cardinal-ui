/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogCommand } from "../../d-dialog-command";
import { DThemeWhiteDialog } from "./d-theme-default-dialog";

export class DThemeWhiteDialogCommand extends DThemeWhiteDialog implements DThemeDialogCommand {
	getOk(): string | null {
		return "OK";
	}

	getCancel(): string | null {
		return "Cacnel";
	}

	getLayoutX(): DCoordinatePosition {
		return "padding";
	}

	getLayoutY(): DCoordinatePosition {
		return "padding";
	}

	getLayoutWidth(): DCoordinateSize {
		return "padding";
	}

	getLayoutHeight(): DCoordinateSize {
		return "auto";
	}
}
