/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DAlignWith } from "../../d-align-with";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeNote } from "../../d-note";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";

export class DThemeDarkNote extends DThemeDarkImageBase<string> implements DThemeNote {
	getWidth(): DCoordinateSize {
		return "100%";
	}

	getHeight(): DCoordinateSize {
		return "100%";
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.NONE;
	}

	getAlpha(): number {
		return 0.25;
	}

	getFontSize(): number {
		return 26;
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		return 0.1;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.TEXT;
	}

	getImageMarginHorizontal(): number {
		return super.getImageMarginHorizontal() - 5;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	getImageAlignVertical(): DAlignVertical {
		return DAlignVertical.MIDDLE;
	}
}
