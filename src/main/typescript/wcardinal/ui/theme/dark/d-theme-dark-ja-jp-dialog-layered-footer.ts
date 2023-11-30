/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkDialogLayeredFooter } from "./d-theme-dark-dialog-layered-footer";

export class DThemeDarkJaJpDialogLayeredFooter extends DThemeDarkDialogLayeredFooter {
	override getButtonOk(): string | null {
		return "OK";
	}

	override getButtonCancel(): string | null {
		return "キャンセル";
	}
}
