/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDarkDialogMessage } from "./d-theme-dark-dialog-message";

export class DThemeDarkJaJpDialogMessage extends DThemeDarkDialogMessage {
	override getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "OK",
				cancel: null
			}
		};
	}
}
