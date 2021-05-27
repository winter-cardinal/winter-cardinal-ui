/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteListItems } from "./d-theme-white-list-items";
import { DThemeWhitePane } from "./d-theme-white-pane";

export class DThemeWhiteList extends DThemeWhitePane {
	protected _style: DThemeWhiteListItems;

	constructor() {
		super();
		this._style = new DThemeWhiteListItems(null, true, false);
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
	}

	getBorderAlign(state: DBaseStateSet): number {
		return 1;
	}

	getItemHeight(): number {
		return this._style.getHeight();
	}
}
