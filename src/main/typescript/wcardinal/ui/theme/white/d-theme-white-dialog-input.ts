/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogInput } from "../../d-dialog-input";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";

export class DThemeWhiteDialogInput extends DThemeWhiteDialogCommand implements DThemeDialogInput {
	getLabel(): string {
		return "";
	}

	getMarginVertical(): number {
		return 0;
	}

	getMarginHorizontal(): number {
		return 32;
	}
}
