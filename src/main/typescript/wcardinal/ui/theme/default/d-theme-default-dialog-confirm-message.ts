/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogConfirmMessage } from "../../d-dialog-confirm-message";
import { DThemeDefaultImage } from "./d-theme-default-image";

export class DThemeDefaultDialogConfirmMessage extends DThemeDefaultImage implements DThemeDialogConfirmMessage {
	getWidth(): DCoordinateSize {
		return "padding";
	}

	getHeight(): number {
		return 200;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}
}
