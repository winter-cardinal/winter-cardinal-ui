/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogSelect } from "../../d-dialog-select";
import { DThemeDefaultDialog } from "./d-theme-default-dialog";

export class DThemeDefaultDialogSelect extends DThemeDefaultDialog implements DThemeDialogSelect {
	getNoteNoItemsText(): string {
		return "No Items";
	}

	getNoteSearchingText(): string {
		return "Searching...";
	}
}
