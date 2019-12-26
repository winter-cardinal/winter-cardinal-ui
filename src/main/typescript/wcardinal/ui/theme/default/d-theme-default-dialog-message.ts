/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogMessage } from "../../d-dialog-message";
import { DThemeDefaultDialogConfirm } from "./d-theme-default-dialog-confirm";

export class DThemeDefaultDialogMessage extends DThemeDefaultDialogConfirm implements DThemeDialogMessage {
	getOk(): string | null {
		return "OK";
	}

	getCancel(): string | null {
		return null;
	}
}
