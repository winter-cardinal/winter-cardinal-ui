/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogConfirm } from "../../d-dialog-confirm";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDefaultDialogCommand } from "./d-theme-default-dialog-command";

export class DThemeDefaultDialogConfirm extends DThemeDefaultDialogCommand implements DThemeDialogConfirm {
	getOk(): string | null {
		return "Yes";
	}

	getCancel(): string | null {
		return "No";
	}

	getMessage(): DStateAwareOrValue<string> {
		return "";
	}
}
