/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogInput } from "../../d-dialog-input";
import { DThemeWhiteDialogLayered } from "./d-theme-white-dialog-layered";

export class DThemeWhiteDialogInput extends DThemeWhiteDialogLayered implements DThemeDialogInput {
	getLabel(): string {
		return "";
	}

	getInputMargin(): number {
		return 32;
	}
}
