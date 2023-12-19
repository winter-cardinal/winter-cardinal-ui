/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhiteDialogSelect } from "./d-theme-white-dialog-select";

export class DThemeWhiteEnUsDialogSelect<VALUE> extends DThemeWhiteDialogSelect<VALUE> {
	override getDismissLabel(): string {
		return "None";
	}

	override getCategoryDismissLabel(): string {
		return "All";
	}
}
