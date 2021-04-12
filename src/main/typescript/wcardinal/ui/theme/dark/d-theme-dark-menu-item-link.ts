/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DBaseStateSet } from "../../d-base-state-set";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeMenuItemLink } from "../../d-menu-item-link";
import { DThemeDarkLinks } from "./d-theme-dark-links";
import { DThemeDarkMenuItemText } from "./d-theme-dark-menu-item-text";

DThemeDarkLinks.init();

export class DThemeDarkMenuItemLink extends DThemeDarkMenuItemText implements DThemeMenuItemLink {
	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		if (state.is(DBaseState.NEW_WINDOW)) {
			return DThemeDarkLinks.getImageSource(state);
		}
		return null;
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		if (state.isHovered) {
			return super.getImageTintAlpha(state);
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
		return DThemeDarkLinks.getLinkMenuOptions();
	}
}
