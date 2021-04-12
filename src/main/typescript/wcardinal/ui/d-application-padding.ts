/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeBase } from "./d-base";
import { DPadding, DPaddingLike } from "./d-padding";
import { isNumber } from "./util/is-number";

export class DApplicationPadding implements DPadding {
	top: number;
	right: number;
	bottom: number;
	left: number;

	constructor(padding?: number | DPaddingLike) {
		if (isNumber(padding)) {
			this.top = padding;
			this.right = padding;
			this.bottom = padding;
			this.left = padding;
		} else if (padding != null) {
			this.top = padding.top ?? 6;
			this.right = padding.right ?? 6;
			this.bottom = padding.bottom ?? 6;
			this.left = padding.left ?? 6;
		} else {
			this.top = 6;
			this.right = 6;
			this.bottom = 6;
			this.left = 6;
		}
	}

	getTheme(): DThemeBase {
		throw new Error("Not supported");
	}

	setTheme(theme: DThemeBase): void {
		throw new Error("Not supported");
	}

	getTop(): number {
		return this.left;
	}

	getRight(): number {
		return this.right;
	}

	getBottom(): number {
		return this.bottom;
	}

	getLeft(): number {
		return this.left;
	}

	set(padding: number): void;
	set(topAndBottom: number, leftAndRight: number): void;
	set(top: number, leftAndRight: number, bottom: number): void;
	set(top: number, right?: number, bottom?: number, left?: number): void {
		if (right == null) {
			this.top = top;
			this.right = top;
			this.bottom = top;
			this.left = top;
		} else if (bottom == null) {
			this.top = top;
			this.right = right;
			this.bottom = top;
			this.left = right;
		} else if (left == null) {
			this.top = top;
			this.right = right;
			this.bottom = bottom;
			this.left = right;
		} else {
			this.top = top;
			this.right = right;
			this.bottom = bottom;
			this.left = left;
		}
	}
}
