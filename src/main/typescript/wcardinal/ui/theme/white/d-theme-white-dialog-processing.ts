/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDialogProcessing } from "../../d-dialog-processing";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";

export abstract class DThemeWhiteDialogProcessing
	extends DThemeWhiteDialogConfirm
	implements DThemeDialogProcessing
{
	abstract getFooter(): DDialogLayeredFooterOptions | undefined | null;

	abstract getMessage(): DStateAwareOrValue<string>;

	getDoneDelay(): number {
		return 400;
	}

	getCloseDelay(): number | null {
		return 600;
	}
}
