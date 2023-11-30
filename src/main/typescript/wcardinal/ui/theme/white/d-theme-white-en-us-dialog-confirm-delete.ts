/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeWhiteEnUsDialogConfirm } from "./d-theme-white-en-us-dialog-confirm";

export class DThemeWhiteEnUsDialogConfirmDelete extends DThemeWhiteEnUsDialogConfirm {
	override getMessage(): DStateAwareOrValue<string> {
		return "Are you sure you want to delete this data?";
	}
}
