/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBackgroundStateAware } from "./d-background";
import { DBaseOptions, DThemeBase } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { isFunction } from "./util/is-function";

type Callback = () => void;

export class DBaseBackground implements DBackgroundStateAware {
	protected _theme: DThemeBase;
	protected _color?: DStateAwareOrValueMightBe<number | null>;
	protected _alpha?: DStateAwareOrValueMightBe<number>;
	protected _callback: Callback | undefined;

	constructor(theme: DThemeBase, options?: DBaseOptions<any>, callback?: Callback) {
		this._theme = theme;
		this._callback = callback;
		const background = options?.background;
		if (background) {
			this._color = background.color;
			this._alpha = background.alpha;
		}
	}

	getTheme(): DThemeBase {
		return this._theme;
	}

	setTheme(theme: DThemeBase): void {
		this._theme = theme;
	}

	getColor(state: DBaseStateSet): number | null {
		const color = this._color;
		if (color !== undefined) {
			if (isFunction(color)) {
				const result = color(state);
				if (result !== undefined) {
					return result;
				}
			} else {
				return color;
			}
		}
		return this._theme.getBackgroundColor(state);
	}

	get color(): DStateAwareOrValueMightBe<number | null> {
		return this._color;
	}

	set color(color: DStateAwareOrValueMightBe<number | null>) {
		if (this._color !== color) {
			this._color = color;
			this.onChange();
		}
	}

	getAlpha(state: DBaseStateSet): number {
		const alpha = this._alpha;
		if (alpha !== undefined) {
			if (isFunction(alpha)) {
				const result = alpha(state);
				if (result !== undefined) {
					return result;
				}
			} else {
				return alpha;
			}
		}
		return this._theme.getBackgroundAlpha(state);
	}

	get alpha(): DStateAwareOrValueMightBe<number> {
		return this._alpha;
	}

	set alpha(alpha: DStateAwareOrValueMightBe<number>) {
		if (this._alpha !== alpha) {
			this._alpha = alpha;
			this.onChange();
		}
	}

	protected onChange(): void {
		const callback = this._callback;
		if (callback != null) {
			callback();
		}
	}
}
