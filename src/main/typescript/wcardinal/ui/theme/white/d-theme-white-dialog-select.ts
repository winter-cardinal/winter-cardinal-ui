/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogSelect } from "../../d-dialog-select";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";

export class DThemeWhiteDialogSelect<VALUE>
	extends DThemeWhiteDialogCommand
	implements DThemeDialogSelect<VALUE>
{
	getOk(): string | null {
		return null;
	}

	getCancel(): string | null {
		return null;
	}

	getNoteNoItemsText(): string {
		return "No Items";
	}

	getNoteSearchingText(): string {
		return "Searching...";
	}
}
