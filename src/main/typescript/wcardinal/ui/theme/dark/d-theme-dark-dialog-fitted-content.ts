/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogFittedContent } from "../../d-dialog-fitted-content";
import { DThemeDarkDialogLayeredContent } from "./d-theme-dark-dialog-layered-content";

export class DThemeDarkDialogFittedContent
	extends DThemeDarkDialogLayeredContent
	implements DThemeDialogFittedContent
{
	getWidth(): DCoordinateSize {
		return "auto";
	}
}
