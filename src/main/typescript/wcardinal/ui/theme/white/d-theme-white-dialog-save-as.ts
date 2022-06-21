/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDialogSaveAs } from "../../d-dialog-save-as";
import { DThemeWhiteDialogInputText } from "./d-theme-white-dialog-input-text";

export class DThemeWhiteDialogSaveAs
	extends DThemeWhiteDialogInputText
	implements DThemeDialogSaveAs
{
	getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "Save",
				cancel: null
			}
		};
	}
}
