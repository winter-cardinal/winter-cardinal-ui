/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhiteDialogLayeredFooter } from "./d-theme-white-dialog-layered-footer";

export class DThemeWhiteJaJpDialogLayeredFooter extends DThemeWhiteDialogLayeredFooter {
	override getButtonOk(): string | null {
		return "OK";
	}

	override getButtonCancel(): string | null {
		return "キャンセル";
	}
}
