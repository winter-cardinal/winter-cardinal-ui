/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";

export class DThemeWhiteDialogConfirmDiscard extends DThemeWhiteDialogConfirm {
	getMessage(): DStateAwareOrValue<string> {
		return (
			"Your changes have not been saved.\n" +
			"Do you want to discard the changes and continue?"
		);
	}
}
