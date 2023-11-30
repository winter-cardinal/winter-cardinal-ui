/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDialogMessage } from "../../d-dialog-message";
import { DThemeDarkDialogConfirm } from "./d-theme-dark-dialog-confirm";

export abstract class DThemeDarkDialogMessage
	extends DThemeDarkDialogConfirm
	implements DThemeDialogMessage
{
	abstract getFooter(): DDialogLayeredFooterOptions | undefined | null;
}
