/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTreeItemText } from "../../d-Tree-item-text";
import { DThemeWhiteImage } from "./d-theme-white-image";

export class DThemeWhiteTreeItemText extends DThemeWhiteImage implements DThemeTreeItemText {

	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	getPaddingLeft(): number {
		return 0;
	}

	getPaddingRight(): number {
		return 0;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}

	getImageTintColor( state: DBaseState ): number | null {
		return null;
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return null;
	}

	getImageWidth(): number | null {
		return 20;
	}

	getImageHeight(): number | null {
		return 20;
	}
}
