/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDialogSelectBase } from "../../d-dialog-select-base";
import { DThemeDarkDialogLayered } from "./d-theme-dark-dialog-layered";

export class DThemeDarkDialogSelect<VALUE>
	extends DThemeDarkDialogLayered
	implements DThemeDialogSelectBase<VALUE>
{
	getWidth(): DCoordinateSize {
		return 480;
	}

	getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return null;
	}

	getInputMargin(): number {
		return 32;
	}
}
