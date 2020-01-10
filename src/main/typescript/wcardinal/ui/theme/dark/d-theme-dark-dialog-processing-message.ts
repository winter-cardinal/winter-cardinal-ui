/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkDialogConfirmMessage } from "./d-theme-dark-dialog-confirm-message";

export class DThemeDarkDialogProcessingMessage extends DThemeDarkDialogConfirmMessage {
	getHeight(): number {
		return 90;
	}
}
