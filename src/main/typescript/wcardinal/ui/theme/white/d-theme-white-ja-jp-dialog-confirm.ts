/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";

export class DThemeWhiteJaJpDialogConfirm extends DThemeWhiteDialogConfirm {
	override getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "はい",
				cancel: "いいえ"
			}
		};
	}
}
