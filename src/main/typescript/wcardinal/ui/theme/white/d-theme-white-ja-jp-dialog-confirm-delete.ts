/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeWhiteJaJpDialogConfirm } from "./d-theme-white-ja-jp-dialog-confirm";

export class DThemeWhiteJaJpDialogConfirmDelete extends DThemeWhiteJaJpDialogConfirm {
	override getMessage(): DStateAwareOrValue<string> {
		return "このデータを削除しますか？";
	}
}
