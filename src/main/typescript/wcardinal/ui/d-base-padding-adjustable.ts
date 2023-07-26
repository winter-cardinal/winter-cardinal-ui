/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseOptions, DThemeBase } from "./d-base";
import { DBasePadding } from "./d-base-padding";

export class DBasePaddingAdjustable extends DBasePadding {
	protected _atop: number;
	protected _aright: number;
	protected _abottom: number;
	protected _aleft: number;

	constructor(theme: DThemeBase, options?: DBaseOptions<any>, callback?: () => void) {
		super(theme, options, callback);
		this._atop = 0;
		this._aright = 0;
		this._abottom = 0;
		this._aleft = 0;
	}

	override getLeft(): number {
		return super.getLeft() + this._aleft;
	}

	adjLeft(aleft: number): void {
		if (this._aleft !== aleft) {
			this._aleft = aleft;
			const callback = this._callback;
			if (callback) {
				callback();
			}
		}
	}

	override getTop(): number {
		return super.getTop() + this._atop;
	}

	adjTop(atop: number): void {
		if (this._atop !== atop) {
			this._atop = atop;
			const callback = this._callback;
			if (callback) {
				callback();
			}
		}
	}

	override getRight(): number {
		return super.getRight() + this._aright;
	}

	adjRight(aright: number): void {
		if (this._aright !== aright) {
			this._aright = aright;
			const callback = this._callback;
			if (callback) {
				callback();
			}
		}
	}

	override getBottom(): number {
		return super.getBottom() + this._abottom;
	}

	adjBottom(abottom: number): void {
		if (this._abottom !== abottom) {
			this._abottom = abottom;
			const callback = this._callback;
			if (callback) {
				callback();
			}
		}
	}
}
