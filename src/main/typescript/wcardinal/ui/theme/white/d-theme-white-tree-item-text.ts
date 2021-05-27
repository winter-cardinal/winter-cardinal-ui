/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeTreeItemText } from "../../d-tree-item-text";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";
import { DThemeWhiteTreeItems } from "./d-theme-white-tree-items";

export class DThemeWhiteTreeItemText
	extends DThemeWhiteImageBase<string>
	implements DThemeTreeItemText {
	protected _style: DThemeWhiteTreeItems;

	constructor() {
		super();
		this._style = this.newStyle();
	}

	protected newStyle(): DThemeWhiteTreeItems {
		return new DThemeWhiteTreeItems(null, true, false);
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

	getLevelPadding(level: number): number {
		return 24 + level * 20 - this.getPaddingLeft();
	}
}
