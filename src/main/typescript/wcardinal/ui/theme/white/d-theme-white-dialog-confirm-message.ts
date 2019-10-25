/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinate } from "../../d-coordinate";
import { DThemeDialogConfirmMessage } from "../../d-dialog-confirm-message";
import { DThemeWhiteImage } from "./d-theme-white-image";

export class DThemeWhiteDialogConfirmMessage extends DThemeWhiteImage implements DThemeDialogConfirmMessage {
	getWidth(): DCoordinate {
		return "padding";
	}

	getHeight(): number {
		return 200;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}
}
