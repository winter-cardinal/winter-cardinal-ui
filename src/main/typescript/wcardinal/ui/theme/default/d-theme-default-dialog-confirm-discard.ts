/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDefaultDialogConfirm } from "./d-theme-default-dialog-confirm";

export class DThemeDefaultDialogConfirmDiscard extends DThemeDefaultDialogConfirm {
	getMessage(): DStateAwareOrValue<string> {
		return "Your changes have not been saved.\n" +
			"Do you want to discard the changes and continue?";
	}
}
