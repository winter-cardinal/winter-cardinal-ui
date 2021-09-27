/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeMenuItemExpandableHeader } from "../../d-menu-item-expandable-header";
import { DThemeWhiteExpandables } from "./d-theme-white-expandables";
import { DThemeWhiteMenuItemBase } from "./d-theme-white-menu-item-base";

DThemeWhiteExpandables.init();

export class DThemeWhiteMenuItemExpandableHeader
	extends DThemeWhiteMenuItemBase
	implements DThemeMenuItemExpandableHeader
{
	getPaddingLeft(): number {
		return this.getPaddingRight();
	}

	getPaddingRight(): number {
		return 26;
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		if (state.inActive) {
			return DThemeWhiteExpandables.getImageOpened();
		}
		return DThemeWhiteExpandables.getImageClosed();
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageMarginHorizontal(): number {
		return 7;
	}
}
