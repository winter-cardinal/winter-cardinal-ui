/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";

export class DThemeWhiteEnUsDialogConfirm extends DThemeWhiteDialogConfirm {
	override getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "Yes",
				cancel: "No"
			}
		};
	}
}
