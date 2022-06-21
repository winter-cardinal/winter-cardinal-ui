/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogInput } from "../../d-dialog-input";
import { DThemeDarkDialogLayered } from "./d-theme-dark-dialog-layered";

export class DThemeDarkDialogInput extends DThemeDarkDialogLayered implements DThemeDialogInput {
	getLabel(): string {
		return "";
	}

	getInputMargin(): number {
		return 32;
	}
}
