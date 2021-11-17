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
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";
import { DThemeWhiteListItems } from "./d-theme-white-list-items";

export class DThemeWhiteListItem extends DThemeWhiteImageBase<string> implements DThemeListItem {
	protected _style: DThemeWhiteListItems;

	constructor() {
		super();
		this._style = this.newStyle();
	}

	protected newStyle(): DThemeWhiteListItems {
		return new DThemeWhiteListItems(null, true, false);
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

	getCursor(state: DBaseStateSet): string {
		return this._style.getCursor(state);
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

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isDisabled = true;
	}
}
