/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeLink } from "../../d-link";
import { DThemeMenuItemLink } from "../../d-menu-item-link";
import { DThemes } from "../d-themes";
import { DThemeWhiteMenuItemText } from "./d-theme-white-menu-item-text";

export class DThemeWhiteMenuItemLink extends DThemeWhiteMenuItemText implements DThemeMenuItemLink {
	protected _link: DThemeLink;

	constructor() {
		super();
		this._link = DThemes.getInstance().get("DLink");
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		if (state.is(DBaseState.NEW_WINDOW)) {
			return this._link.getImageSource(state);
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
}
