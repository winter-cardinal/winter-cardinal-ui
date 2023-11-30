/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDarkDialogConfirm } from "./d-theme-dark-dialog-confirm";

export abstract class DThemeDarkDialogConfirmDelete extends DThemeDarkDialogConfirm {
	abstract getMessage(): DStateAwareOrValue<string>;
}
