/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogConfirmMessage } from "../../d-dialog-confirm-message";
import { DThemeDarkImage } from "./d-theme-dark-image";

export class DThemeDarkDialogConfirmMessage extends DThemeDarkImage implements DThemeDialogConfirmMessage {
	getWidth(): DCoordinateSize {
		return "padding";
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}
}
