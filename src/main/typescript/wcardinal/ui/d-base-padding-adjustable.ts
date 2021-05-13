/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeBase } from "./d-base";
import { DBasePadding } from "./d-base-padding";
import { DPadding } from "./d-padding";

export interface DBasePaddingAdjuster {
	left: number;
	top: number;
	right: number;
	bottom: number;
}

export class DBasePaddingAdjustable implements DPadding {
	protected _target: DPadding;
	protected _top: number;
	protected _right: number;
	protected _bottom: number;
	protected _left: number;
	protected _callback?: () => void;

	constructor(target: DPadding) {
		this._target = target;
		this._top = 0;
		this._right = 0;
		this._bottom = 0;
		this._left = 0;
		if (target instanceof DBasePadding) {
			this._callback = target.getCallback();
		}
	}

	getTheme(): DThemeBase {
		return this._target.getTheme();
	}

	setTheme(theme: DThemeBase): void {
		this._target.setTheme(theme);
	}

	getLeft(): number {
		return this._target.getLeft() + this._left;
	}

	adjLeft(left: number): void {
		if (this._left !== left) {
			this._left = left;
			const callback = this._callback;
			if (callback) {
				callback();
			}
		}
	}

	get left(): number | undefined {
		return this._target.left;
	}

	set left(left: number | undefined) {
		this._target.left = left;
	}

	getTop(): number {
		return this._target.getTop() + this._top;
	}

	adjTop(top: number): void {
		if (this._top !== top) {
			this._top = top;
			const callback = this._callback;
			if (callback) {
				callback();
			}
		}
	}

	get top(): number | undefined {
		return this._target.top;
	}

	set top(top: number | undefined) {
		this._target.top = top;
	}

	getRight(): number {
		return this._target.getRight() + this._right;
	}

	adjRight(right: number): void {
		if (this._right !== right) {
			this._right = right;
			const callback = this._callback;
			if (callback) {
				callback();
			}
		}
	}

	get right(): number | undefined {
		return this._target.right;
	}

	set right(right: number | undefined) {
		this._target.right = right;
	}

	getBottom(): number {
		return this._target.getBottom() + this._bottom;
	}

	adjBottom(bottom: number): void {
		if (this._bottom !== bottom) {
			this._bottom = bottom;
			const callback = this._callback;
			if (callback) {
				callback();
			}
		}
	}

	get bottom(): number | undefined {
		return this._target.bottom;
	}

	set bottom(bottom: number | undefined) {
		this._target.bottom = bottom;
	}

	set(padding: number): void;
	set(topAndBottom: number, leftAndRight: number): void;
	set(top: number, leftAndRight: number, bottom: number): void;
	set(top: number, right: number, bottom: number, left: number): void;
	set(top: number, right?: number, bottom?: number, left?: number): void {
		const target = this._target;
		if (right == null) {
			target.set(top);
		} else if (bottom == null) {
			target.set(top, right);
		} else if (left == null) {
			target.set(top, right, bottom);
		} else {
			target.set(top, right, bottom, left);
		}
	}
}
