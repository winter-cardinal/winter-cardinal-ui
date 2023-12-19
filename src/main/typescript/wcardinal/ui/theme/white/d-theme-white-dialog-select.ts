/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDialogSelect } from "../../d-dialog-select";
import { DThemeWhiteDialogLayered } from "./d-theme-white-dialog-layered";

export abstract class DThemeWhiteDialogSelect<VALUE>
	extends DThemeWhiteDialogLayered
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

	isDismissable(): boolean {
		return false;
	}

	abstract getDismissLabel(): string;

	isCategoryDismissable(): boolean {
		return true;
	}

	abstract getCategoryDismissLabel(): string;
}
