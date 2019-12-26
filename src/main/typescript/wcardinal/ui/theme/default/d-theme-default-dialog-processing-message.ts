/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhiteDialogConfirmMessage } from "./d-theme-default-dialog-confirm-message";

export class DThemeWhiteDialogProcessingMessage extends DThemeWhiteDialogConfirmMessage {
	getHeight(): number {
		return 90;
	}
}
