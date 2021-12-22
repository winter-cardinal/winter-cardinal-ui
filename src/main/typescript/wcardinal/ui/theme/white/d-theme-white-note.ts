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
import { DFontWeight } from "../../d-font";
import { DThemeNote } from "../../d-note";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";

export class DThemeWhiteNote extends DThemeWhiteImageBase<string> implements DThemeNote {
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
		return 0.2;
	}

	getFontSize(): number {
		return 26;
	}

	getFontWeight(): DFontWeight {
		return "bold";
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		return 0.2;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.TEXT;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	getImageAlignVertical(): DAlignVertical {
		return DAlignVertical.MIDDLE;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}
}
