/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogCommand } from "../../d-dialog-command";
import { DThemeDarkDialog } from "./d-theme-dark-dialog";

export class DThemeDarkDialogCommand extends DThemeDarkDialog implements DThemeDialogCommand {
	getOk(): string | null {
		return "OK";
	}

	getCancel(): string | null {
		return "Cancel";
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
