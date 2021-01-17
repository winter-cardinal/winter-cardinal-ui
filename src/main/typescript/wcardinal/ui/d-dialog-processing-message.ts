/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DDialogConfirmMessage, DDialogConfirmMessageOptions, DThemeDialogConfirmMessage
} from "./d-dialog-confirm-message";

export class DDialogProcessingMessage<
	VALUE = unknown,
	THEME extends DThemeDialogConfirmMessage<VALUE> = DThemeDialogConfirmMessage<VALUE>,
	OPTIONS extends DDialogConfirmMessageOptions<VALUE, THEME> = DDialogConfirmMessageOptions<VALUE, THEME>
> extends DDialogConfirmMessage<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DDialogProcessingMessage";
	}
}
