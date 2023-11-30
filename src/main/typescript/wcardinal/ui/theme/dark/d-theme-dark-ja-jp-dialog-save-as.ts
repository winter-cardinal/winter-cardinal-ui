/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDarkDialogSaveAs } from "./d-theme-dark-dialog-save-as";

export class DThemeDarkJaJpDialogSaveAs extends DThemeDarkDialogSaveAs {
	override getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "保存",
				cancel: null
			}
		};
	}
}
