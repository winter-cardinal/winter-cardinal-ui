/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefaultDialogConfirmMessage } from "./d-theme-default-dialog-confirm-message";

export class DThemeDefaultDialogProcessingMessage extends DThemeDefaultDialogConfirmMessage {
	getHeight(): number {
		return 90;
	}
}
