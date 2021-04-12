/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogMessage } from "../../d-dialog-message";
import { DThemeDarkDialogConfirm } from "./d-theme-dark-dialog-confirm";

export class DThemeDarkDialogMessage
	extends DThemeDarkDialogConfirm
	implements DThemeDialogMessage {
	getOk(): string | null {
		return "OK";
	}

	getCancel(): string | null {
		return null;
	}
}
