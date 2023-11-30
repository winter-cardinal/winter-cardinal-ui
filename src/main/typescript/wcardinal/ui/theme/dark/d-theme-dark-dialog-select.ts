/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDialogSelect } from "../../d-dialog-select";
import { DThemeDarkDialogLayered } from "./d-theme-dark-dialog-layered";

export abstract class DThemeDarkDialogSelect<VALUE>
	extends DThemeDarkDialogLayered
	implements DThemeDialogSelect<VALUE>
{
	getWidth(): DCoordinateSize {
		return 480;
	}

	getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return null;
	}

	getInputMargin(): number {
		return 19;
	}

	isCategoryDismissable(): boolean {
		return true;
	}

	abstract getCategoryDismissLabel(): string;
}
