/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDarkDialogConfirm } from "./d-theme-dark-dialog-confirm";

export class DThemeDarkDialogConfirmDelete extends DThemeDarkDialogConfirm {
	getMessage(): DStateAwareOrValue<string> {
		return "Are you sure you want to delete this data?";
	}
}
