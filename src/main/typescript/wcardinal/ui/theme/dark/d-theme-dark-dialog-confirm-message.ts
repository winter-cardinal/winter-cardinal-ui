/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogConfirmMessage } from "../../d-dialog-confirm-message";
import { DThemeDarkImage } from "./d-theme-dark-image";

export class DThemeDarkDialogConfirmMessage<VALUE> extends DThemeDarkImage<VALUE> implements DThemeDialogConfirmMessage<VALUE> {
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
