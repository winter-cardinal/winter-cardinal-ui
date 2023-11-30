/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkDialogSelect } from "./d-theme-dark-dialog-select";

export class DThemeDarkJaJpDialogSelect<VALUE> extends DThemeDarkDialogSelect<VALUE> {
	override getCategoryDismissLabel(): string {
		return "全て";
	}
}
