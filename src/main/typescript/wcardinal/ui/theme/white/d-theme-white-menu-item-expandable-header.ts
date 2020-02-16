/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeMenuItemExpandableHeader } from "../../d-menu-item-expandable-header";
import { DThemeWhiteExpandables } from "./d-theme-white-expandables";
import { DThemeWhiteListItem } from "./d-theme-white-list-item";

DThemeWhiteExpandables.init();

export class DThemeWhiteMenuItemExpandableHeader extends DThemeWhiteListItem implements DThemeMenuItemExpandableHeader {
	getPaddingLeft(): number {
		return this.getPaddingRight();
	}

	getPaddingRight(): number {
		return 26;
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( DBaseStates.isActiveIn( state ) ) {
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
