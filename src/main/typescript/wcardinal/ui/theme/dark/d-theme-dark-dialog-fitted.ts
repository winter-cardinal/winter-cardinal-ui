/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogFitted } from "../../d-dialog-fitted";
import { DThemeDarkDialogLayered } from "./d-theme-dark-dialog-layered";

export class DThemeDarkDialogFitted extends DThemeDarkDialogLayered implements DThemeDialogFitted {
	getWidth(): DCoordinateSize {
		return "auto";
	}
}
