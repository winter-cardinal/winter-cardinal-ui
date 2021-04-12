/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogConfirm, DDialogConfirmOptions, DThemeDialogConfirm } from "./d-dialog-confirm";

export interface DDialogMessageOptions<THEME extends DThemeDialogMessage>
	extends DDialogConfirmOptions<THEME> {}

export interface DThemeDialogMessage extends DThemeDialogConfirm {}

export class DDialogMessage<
	THEME extends DThemeDialogMessage = DThemeDialogMessage,
	OPTIONS extends DDialogMessageOptions<THEME> = DDialogMessageOptions<THEME>
> extends DDialogConfirm<THEME, OPTIONS> {
	protected getType(): string {
		return "DDialogMessage";
	}
}
