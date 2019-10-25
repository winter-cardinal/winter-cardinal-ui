/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAware } from "../../d-state-aware";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";

export class DThemeWhiteDialogConfirmDelete extends DThemeWhiteDialogConfirm {
	getMessage(): DStateAware<string> | string {
		return "Are you sure you want to delete this data?";
	}
}
