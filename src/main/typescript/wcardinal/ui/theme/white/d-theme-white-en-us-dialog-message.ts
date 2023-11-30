/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeWhiteDialogMessage } from "./d-theme-white-dialog-message";

export class DThemeWhiteEnUsDialogMessage extends DThemeWhiteDialogMessage {
	override getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "OK",
				cancel: null
			}
		};
	}
}
