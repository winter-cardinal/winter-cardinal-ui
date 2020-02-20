/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogInputText } from "../../d-dialog-input-text";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";

export class DThemeWhiteDialogInputText extends DThemeWhiteDialogCommand implements DThemeDialogInputText {
	getLabel(): string {
		return "";
	}

	getLabelWidth(): number {
		return 60;
	}
}
