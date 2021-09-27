/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogConfirm } from "../../d-dialog-confirm";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";

export class DThemeDarkDialogConfirm
	extends DThemeDarkDialogCommand
	implements DThemeDialogConfirm
{
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
