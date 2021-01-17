/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogConfirmMessage } from "../../d-dialog-confirm-message";
import { DThemeWhiteImage } from "./d-theme-white-image";

export class DThemeWhiteDialogConfirmMessage<VALUE> extends DThemeWhiteImage<VALUE> implements DThemeDialogConfirmMessage<VALUE> {
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
