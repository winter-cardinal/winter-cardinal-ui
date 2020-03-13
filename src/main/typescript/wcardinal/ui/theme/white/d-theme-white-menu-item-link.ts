/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeMenuItemLink } from "../../d-menu-item-link";
import { DMenuItemLinkState } from "../../d-menu-item-link-state";
import { DThemeWhiteLinks } from "./d-theme-white-links";
import { DThemeWhiteMenuItemText } from "./d-theme-white-menu-item-text";

DThemeWhiteLinks.init();

export class DThemeWhiteMenuItemLink extends DThemeWhiteMenuItemText implements DThemeMenuItemLink {
	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( state & DMenuItemLinkState.NEW_WINDOW ) {
			return DThemeWhiteLinks.getImageSource( state );
		}
		return null;
	}

	getImageTintAlpha( state: DBaseState ): number {
		if( state & DBaseState.HOVERED ) {
			return super.getImageTintAlpha( state );
		}
		return 0;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId> {
		return DThemeWhiteLinks.getLinkMenuOptions();
	}
}
