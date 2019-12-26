/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDefaultDialogConfirm } from "./d-theme-default-dialog-confirm";

export class DThemeDefaultDialogConfirmDelete extends DThemeDefaultDialogConfirm {
	getMessage(): DStateAwareOrValue<string> {
		return "Are you sure you want to delete this data?";
	}
}
