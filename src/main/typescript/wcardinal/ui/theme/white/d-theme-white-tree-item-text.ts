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
	getLevelPadding(level: number): number {
		return 24 + level * 20 - this.getPaddingLeft();
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTreeItems.getBackgroundColor(state);
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return DThemeWhiteTreeItems.getBackgroundAlpha(state);
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTreeItems.getBorderColor(state);
	}

	getBorderAlign(state: DBaseStateSet): number {
		return DThemeWhiteTreeItems.getBorderAlign(state);
	}

	getBorderMask(state: DBaseStateSet): DBorderMask {
		return DThemeWhiteTreeItems.getBorderMask(state);
	}

	getColor(state: DBaseStateSet): number {
		return DThemeWhiteTreeItems.getColor(state);
	}

	getAlpha(state: DBaseStateSet): number {
		return DThemeWhiteTreeItems.getAlpha(state);
	}

	getWidth(): DCoordinateSize {
		return DThemeWhiteTreeItems.getWidth();
	}

	getHeight(): DCoordinateSize {
		return DThemeWhiteTreeItems.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeWhiteTreeItems.getCornerMask();
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTreeItems.getImageTintColor(state);
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
}
