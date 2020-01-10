/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogSelect } from "../../d-dialog-select";
import { DThemeDarkDialog } from "./d-theme-dark-dialog";

export class DThemeDarkDialogSelect extends DThemeDarkDialog implements DThemeDialogSelect {
	getNoteNoItemsText(): string {
		return "No Items";
	}

	getNoteSearchingText(): string {
		return "Searching...";
	}
}
