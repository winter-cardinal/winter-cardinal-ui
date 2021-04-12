/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogSaveAs } from "../../d-dialog-save-as";
import { DThemeDarkDialogInputText } from "./d-theme-dark-dialog-input-text";

export class DThemeDarkDialogSaveAs
	extends DThemeDarkDialogInputText
	implements DThemeDialogSaveAs {
	getOk(): string {
		return "Save";
	}
}
