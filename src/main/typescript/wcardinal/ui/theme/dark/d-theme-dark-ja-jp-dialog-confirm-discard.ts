/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDarkJaJpDialogConfirm } from "./d-theme-dark-ja-jp-dialog-confirm";

export class DThemeDarkJaJpDialogConfirmDiscard extends DThemeDarkJaJpDialogConfirm {
	override getMessage(): DStateAwareOrValue<string> {
		return "保存されていない変更があります。\nこれらの変更を破棄し続行しますか？";
	}
}
