/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogInputText } from "../../d-dialog-input-text";
import { DThemeDarkDialog } from "./d-theme-dark-dialog";

export class DThemeDarkDialogInputText extends DThemeDarkDialog implements DThemeDialogInputText {
	getOk(): string {
		return "OK";
	}

	getCancel(): string {
		return "Cancel";
	}

	getLabel(): string {
		return "";
	}

	getLabelWidth(): number {
		return 60;
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}
}
