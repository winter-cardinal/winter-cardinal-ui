/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DTreeItemState } from "../../d-tree-item-state";
import { DThemeTreeItemToggleIcon } from "../../d-tree-item-toggle-icon";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteImage } from "./d-theme-white-image";

/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("menu_item_expandable_header_closed", 14, 14,
	`<g transform="scale(1, 0.7)">` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="6 16 10 10 6 4"></polyline>` +
	`</g>`
);

DThemeWhiteAtlas.add("menu_item_expandable_header_opened", 14, 14,
	`<g transform="scale(0.7, 1)">` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="16 6 10 10 4 6"></polyline>` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeWhiteTreeItemToggleIcon
	extends DThemeWhiteImage<string>
	implements DThemeTreeItemToggleIcon {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getWidth(): DCoordinateSize {
		return 14;
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

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		if (state.is(DTreeItemState.EXPANDED)) {
			return DThemeWhiteAtlas.mappings.menu_item_expandable_header_opened;
		} else if (state.is(DTreeItemState.COLLAPSED)) {
			return DThemeWhiteAtlas.mappings.menu_item_expandable_header_closed;
		} else {
			return null;
		}
	}
}
