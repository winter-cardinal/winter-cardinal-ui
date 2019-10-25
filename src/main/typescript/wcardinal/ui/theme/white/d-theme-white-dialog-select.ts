/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogSelect } from "../../d-dialog-select";
import { DThemeWhiteDialog } from "./d-theme-white-dialog";

export class DThemeWhiteDialogSelect extends DThemeWhiteDialog implements DThemeDialogSelect {
	getNoteNoItemsText(): string {
		return "No Items";
	}

	getNoteSearchingText(): string {
		return "Searching...";
	}
}
