/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogInput } from "../../d-dialog-input";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";

export class DThemeDarkDialogInput extends DThemeDarkDialogCommand implements DThemeDialogInput {
	getLabel(): string {
		return "";
	}

	getMarginVertical(): number {
		return 0;
	}

	getMarginHorizontal(): number {
		return 32;
	}
}
