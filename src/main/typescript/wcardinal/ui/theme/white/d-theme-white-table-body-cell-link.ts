/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeLink } from "../../d-link";
import { DThemeTableBodyCellLink } from "../../d-table-body-cell-link";
import { DThemes } from "../d-themes";
import { DThemeWhiteTableBodyCellButton } from "./d-theme-white-table-body-cell-button";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

export class DThemeWhiteTableBodyCellLink
	extends DThemeWhiteTableBodyCellButton
	implements DThemeTableBodyCellLink
{
	protected _link: DThemeLink;

	constructor() {
		super();
		this._link = DThemes.getInstance().get("DLink");
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTableBodyCells.getImageTintColor(state, true);
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return this._link.getImageSource(state);
	}
}
