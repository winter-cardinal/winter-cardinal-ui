/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkDialogSelect } from "./d-theme-dark-dialog-select";

export class DThemeDarkEnUsDialogSelect<VALUE> extends DThemeDarkDialogSelect<VALUE> {
	override getCategoryDismissLabel(): string {
		return "All";
	}
}
