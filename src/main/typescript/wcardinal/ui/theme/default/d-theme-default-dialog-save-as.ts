/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogSaveAs } from "../../d-dialog-save-as";
import { DThemeDefaultDialogInputText } from "./d-theme-default-dialog-input-text";

export class DThemeDefaultDialogSaveAs extends DThemeDefaultDialogInputText implements DThemeDialogSaveAs {
	getOk(): string {
		return "Save";
	}
}
