/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogMessage } from "../../d-dialog-message";
import { DThemeWhiteDialogConfirm } from "./d-theme-default-dialog-confirm";

export class DThemeWhiteDialogMessage extends DThemeWhiteDialogConfirm implements DThemeDialogMessage {
	getOk(): string | null {
		return "OK";
	}

	getCancel(): string | null {
		return null;
	}
}
