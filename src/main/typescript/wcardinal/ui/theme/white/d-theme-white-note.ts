/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCoordinate } from "../../d-coordinate";
import { DThemeNote } from "../../d-note";
import { DThemeWhiteText } from "./d-theme-white-text";

export class DThemeWhiteNote extends DThemeWhiteText implements DThemeNote {
	getWidth(): DCoordinate {
		return "100%";
	}

	getHeight(): DCoordinate {
		return "100%";
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.NONE;
	}
}
