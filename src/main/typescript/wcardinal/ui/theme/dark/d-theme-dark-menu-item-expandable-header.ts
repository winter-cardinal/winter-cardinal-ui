/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
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

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( DBaseStates.isActiveIn( state ) ) {
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
