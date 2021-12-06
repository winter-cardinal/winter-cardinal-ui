/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogSelect } from "../../d-dialog-select";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";

export class DThemeDarkDialogSelect<VALUE>
	extends DThemeDarkDialogCommand
	implements DThemeDialogSelect<VALUE>
{
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
