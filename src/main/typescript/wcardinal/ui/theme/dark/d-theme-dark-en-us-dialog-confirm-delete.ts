/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDarkEnUsDialogConfirm } from "./d-theme-dark-en-us-dialog-confirm";

export class DThemeDarkEnUsDialogConfirmDelete extends DThemeDarkEnUsDialogConfirm {
	override getMessage(): DStateAwareOrValue<string> {
		return "Are you sure you want to delete this data?";
	}
}
