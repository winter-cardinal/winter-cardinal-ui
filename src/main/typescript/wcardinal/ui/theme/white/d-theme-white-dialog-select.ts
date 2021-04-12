/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DDialogSelectItemIsEqual,
	DDialogSelectItemToLabel,
	DThemeDialogSelect
} from "../../d-dialog-select";
import { toLabel } from "../../util/to-label";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";

const isEqual = () => {
	return false;
};

export class DThemeWhiteDialogSelect<VALUE>
	extends DThemeWhiteDialogCommand
	implements DThemeDialogSelect<VALUE> {
	getOk(): string | null {
		return null;
	}

	getCancel(): string | null {
		return null;
	}

	getItemToLabel(): DDialogSelectItemToLabel<VALUE> {
		return toLabel;
	}

	getItemIsEqual(): DDialogSelectItemIsEqual<VALUE> {
		return isEqual;
	}

	getNoteNoItemsText(): string {
		return "No Items";
	}

	getNoteSearchingText(): string {
		return "Searching...";
	}
}
