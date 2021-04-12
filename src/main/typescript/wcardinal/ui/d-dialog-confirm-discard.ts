/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogConfirm, DDialogConfirmOptions, DThemeDialogConfirm } from "./d-dialog-confirm";

export interface DDialogConfirmDiscardOptions<THEME extends DThemeDialogConfirm>
	extends DDialogConfirmOptions<THEME> {}

export interface DThemeDialogConfirmDiscard extends DThemeDialogConfirm {}

export class DDialogConfirmDiscard<
	THEME extends DThemeDialogConfirm = DThemeDialogConfirm,
	OPTIONS extends DDialogConfirmDiscardOptions<THEME> = DDialogConfirmDiscardOptions<THEME>
> extends DDialogConfirm<THEME, OPTIONS> {
	protected getType(): string {
		return "DDialogConfirmDiscard";
	}
}
