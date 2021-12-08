/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogSelect } from "../../d-dialog-select";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";

export class DThemeWhiteDialogSelect<VALUE>
	extends DThemeWhiteDialogCommand
	implements DThemeDialogSelect<VALUE>
{
	getWidth(): DCoordinateSize {
		return 480;
	}

	getOk(): string | null {
		return null;
	}

	getCancel(): string | null {
		return null;
	}

	getInputMarginVertical(): number {
		return 0;
	}

	getInputMarginHorizontal(): number {
		return 32;
	}
}
