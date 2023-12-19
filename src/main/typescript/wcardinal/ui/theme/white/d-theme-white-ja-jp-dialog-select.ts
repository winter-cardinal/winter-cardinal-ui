/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhiteDialogSelect } from "./d-theme-white-dialog-select";

export class DThemeWhiteJaJpDialogSelect<VALUE> extends DThemeWhiteDialogSelect<VALUE> {
	override getDismissLabel(): string {
		return "なし";
	}

	override getCategoryDismissLabel(): string {
		return "全て";
	}
}
