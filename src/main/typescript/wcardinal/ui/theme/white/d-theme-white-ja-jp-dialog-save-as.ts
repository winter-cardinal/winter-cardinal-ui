/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeWhiteDialogSaveAs } from "./d-theme-white-dialog-save-as";

export class DThemeWhiteJaJpDialogSaveAs extends DThemeWhiteDialogSaveAs {
	override getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "保存",
				cancel: null
			}
		};
	}
}
