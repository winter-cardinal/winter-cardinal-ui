/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogInputText } from "../../d-dialog-input-text";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";

export class DThemeDarkDialogInputText extends DThemeDarkDialogCommand implements DThemeDialogInputText {
	getLabel(): string {
		return "";
	}

	getLabelWidth(): number {
		return 60;
	}
}
