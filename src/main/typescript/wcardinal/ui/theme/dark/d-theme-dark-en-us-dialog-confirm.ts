/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDarkDialogConfirm } from "./d-theme-dark-dialog-confirm";

export class DThemeDarkEnUsDialogConfirm extends DThemeDarkDialogConfirm {
	override getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "Yes",
				cancel: "No"
			}
		};
	}
}
