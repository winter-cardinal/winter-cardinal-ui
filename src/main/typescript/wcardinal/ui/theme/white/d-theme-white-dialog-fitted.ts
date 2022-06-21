/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogFitted } from "../../d-dialog-fitted";
import { DThemeWhiteDialogLayered } from "./d-theme-white-dialog-layered";

export class DThemeWhiteDialogFitted
	extends DThemeWhiteDialogLayered
	implements DThemeDialogFitted
{
	getWidth(): DCoordinateSize {
		return "auto";
	}
}
