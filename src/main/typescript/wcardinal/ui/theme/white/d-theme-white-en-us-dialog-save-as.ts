/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeWhiteDialogSaveAs } from "./d-theme-white-dialog-save-as";

export class DThemeWhiteEnUsDialogSaveAs extends DThemeWhiteDialogSaveAs {
	override getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "Save",
				cancel: null
			}
		};
	}
}
