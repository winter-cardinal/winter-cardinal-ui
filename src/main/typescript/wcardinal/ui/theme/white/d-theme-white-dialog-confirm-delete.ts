/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";

export abstract class DThemeWhiteDialogConfirmDelete extends DThemeWhiteDialogConfirm {
	abstract getMessage(): DStateAwareOrValue<string>;
}
