/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DDialogConfirmMessage, DDialogConfirmMessageOptions, DThemeDialogConfirmMessage
} from "./d-dialog-confirm-message";

export class DDialogProcessingMessage<
	THEME extends DThemeDialogConfirmMessage = DThemeDialogConfirmMessage,
	OPTIONS extends DDialogConfirmMessageOptions<THEME> = DDialogConfirmMessageOptions<THEME>
> extends DDialogConfirmMessage<THEME, OPTIONS> {
	protected getType(): string {
		return "DDialogProcessingMessage";
	}
}
