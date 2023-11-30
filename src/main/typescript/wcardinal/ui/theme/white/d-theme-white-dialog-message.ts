/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDialogMessage } from "../../d-dialog-message";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";

export abstract class DThemeWhiteDialogMessage
	extends DThemeWhiteDialogConfirm
	implements DThemeDialogMessage
{
	abstract getFooter(): DDialogLayeredFooterOptions | undefined | null;
}
