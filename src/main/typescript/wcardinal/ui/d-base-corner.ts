/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseOptions, DThemeBase } from "./d-base";
import { DCorner } from "./d-corner";
import { DCornerMask } from "./d-corner-mask";
import { isNumber } from "./util/is-number";
import { toEnum } from "./util/to-enum";

export class DBaseCorner implements DCorner {
	protected _theme: DThemeBase;
	protected _radius?: number;
	protected _mask?: DCornerMask;
	protected _callback?: () => void;

	constructor(theme: DThemeBase, options?: DBaseOptions<any>, callback?: () => void) {
		this._theme = theme;
		this._callback = callback;
		const corner = options?.corner;
		if (corner) {
			if (isNumber(corner)) {
				this._radius = corner;
				this._mask = undefined;
			} else {
				this._radius = corner.radius;
				this._mask = toEnum(corner.mask, DCornerMask);
			}
		}
	}

	getTheme(): DThemeBase {
		return this._theme;
	}

	setTheme(theme: DThemeBase): void {
		this._theme = theme;
	}

	getRadius(): number {
		return this._radius ?? this._theme.getCornerRadius();
	}

	get radius(): number | undefined {
		return this._radius;
	}

	set radius(radius: number | undefined) {
		if (this._radius !== radius) {
			this._radius = radius;
			const callback = this._callback;
			if (callback != null) {
				callback();
			}
		}
	}

	getMask(): DCornerMask {
		return this._mask ?? this._theme.getCornerMask();
	}

	get mask(): DCornerMask | undefined {
		return this._mask;
	}

	set mask(mask: DCornerMask | undefined) {
		if (this._mask !== mask) {
			this._mask = mask;
			const callback = this._callback;
			if (callback != null) {
				callback();
			}
		}
	}

	set(radius?: number, mask?: DCornerMask): void {
		let isChanged = false;

		if (this._radius !== radius) {
			this._radius = radius;
			isChanged = true;
		}

		if (this._mask !== mask) {
			this._mask = mask;
			isChanged = true;
		}

		const callback = this._callback;
		if (isChanged && callback != null) {
			callback();
		}
	}
}
