/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogFittedContent } from "../../d-dialog-fitted-content";
import { DThemeWhiteDialogLayeredContent } from "./d-theme-white-dialog-layered-content";

export class DThemeWhiteDialogFittedContent
	extends DThemeWhiteDialogLayeredContent
	implements DThemeDialogFittedContent
{
	getWidth(): DCoordinateSize {
		return "auto";
	}
}
