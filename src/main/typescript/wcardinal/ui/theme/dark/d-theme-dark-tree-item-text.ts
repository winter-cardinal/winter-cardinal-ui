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
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";
import { DThemeDarkTreeItems } from "./d-theme-dark-tree-items";

export class DThemeDarkTreeItemText
	extends DThemeDarkImageBase<string>
	implements DThemeTreeItemText {
	getLevelPadding(level: number): number {
		return 24 + level * 20 - this.getPaddingLeft();
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeDarkTreeItems.getBackgroundColor(state);
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return DThemeDarkTreeItems.getBackgroundAlpha(state);
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return DThemeDarkTreeItems.getBorderColor(state);
	}

	getBorderAlign(state: DBaseStateSet): number {
		return DThemeDarkTreeItems.getBorderAlign(state);
	}

	getBorderMask(state: DBaseStateSet): DBorderMask {
		return DThemeDarkTreeItems.getBorderMask(state);
	}

	getColor(state: DBaseStateSet): number {
		return DThemeDarkTreeItems.getColor(state);
	}

	getAlpha(state: DBaseStateSet): number {
		return DThemeDarkTreeItems.getAlpha(state);
	}

	getWidth(): DCoordinateSize {
		return DThemeDarkTreeItems.getWidth();
	}

	getHeight(): DCoordinateSize {
		return DThemeDarkTreeItems.getHeight();
	}

	getCornerMask(): DCornerMask {
		return DThemeDarkTreeItems.getCornerMask();
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return DThemeDarkTreeItems.getImageTintColor(state);
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
