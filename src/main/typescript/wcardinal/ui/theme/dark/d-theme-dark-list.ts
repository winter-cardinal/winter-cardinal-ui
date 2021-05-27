/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkListItems } from "./d-theme-dark-list-items";
import { DThemeDarkPane } from "./d-theme-dark-pane";

export class DThemeDarkList extends DThemeDarkPane {
	protected _style: DThemeDarkListItems;

	constructor() {
		super();
		this._style = new DThemeDarkListItems(null, true, false);
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	}

	getBorderAlign(state: DBaseStateSet): number {
		return 1;
	}

	getItemHeight(): number {
		return this._style.getHeight();
	}
}
