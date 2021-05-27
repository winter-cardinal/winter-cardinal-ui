/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeListItem } from "../../d-list-item";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkImage } from "./d-theme-dark-image";
import { DThemeDarkListItems } from "./d-theme-dark-list-items";

export class DThemeDarkListItem extends DThemeDarkImage<string> implements DThemeListItem {
	protected _style: DThemeDarkListItems;

	constructor() {
		super();
		this._style = this.newStyle();
	}

	protected newStyle(): DThemeDarkListItems {
		return new DThemeDarkListItems(null, true, false);
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return this._style.getBackgroundColor(state);
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return this._style.getBackgroundAlpha(state);
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return this._style.getBorderColor(state);
	}

	getBorderAlign(state: DBaseStateSet): number {
		return this._style.getBorderAlign(state);
	}

	getBorderMask(state: DBaseStateSet): DBorderMask {
		return this._style.getBorderMask(state);
	}

	getColor(state: DBaseStateSet): number {
		return this._style.getColor(state);
	}

	getAlpha(state: DBaseStateSet): number {
		return this._style.getAlpha(state);
	}

	getHeight(): DCoordinateSize {
		return this._style.getHeight();
	}

	getCornerMask(): DCornerMask {
		return this._style.getCornerMask();
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return this._style.getImageTintColor(state);
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	newTextValue(): DStateAwareOrValueMightBe<string> {
		return undefined;
	}

	getWidth(): DCoordinateSize {
		return "padding";
	}
}
