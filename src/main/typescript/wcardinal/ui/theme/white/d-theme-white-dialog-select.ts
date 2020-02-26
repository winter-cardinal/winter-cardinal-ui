/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogSelectItemTextFormatter, DThemeDialogSelect } from "../../d-dialog-select";
import { toLabel } from "../../util/to-label";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";

export class DThemeWhiteDialogSelect extends DThemeWhiteDialogCommand implements DThemeDialogSelect {
	getOk(): string | null {
		return null;
	}

	getCancel(): string | null {
		return null;
	}

	getItemTextFormatter(): DDialogSelectItemTextFormatter<any> {
		return toLabel;
	}

	getNoteNoItemsText(): string {
		return "No Items";
	}

	getNoteSearchingText(): string {
		return "Searching...";
	}
}
