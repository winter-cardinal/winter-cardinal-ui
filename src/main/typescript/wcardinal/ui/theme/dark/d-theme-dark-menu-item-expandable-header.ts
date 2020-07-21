/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeMenuItemExpandableHeader } from "../../d-menu-item-expandable-header";
import { DThemeDarkExpandables } from "./d-theme-dark-expandables";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";

DThemeDarkExpandables.init();

export class DThemeDarkMenuItemExpandableHeader extends DThemeDarkListItem implements DThemeMenuItemExpandableHeader {
	getPaddingLeft(): number {
		return this.getPaddingRight();
	}

	getPaddingRight(): number {
		return 26;
	}

	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		if( state.inActive ) {
			return DThemeDarkExpandables.getImageOpened();
		}
		return DThemeDarkExpandables.getImageClosed();
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageMarginHorizontal(): number {
		return 7;
	}
}
