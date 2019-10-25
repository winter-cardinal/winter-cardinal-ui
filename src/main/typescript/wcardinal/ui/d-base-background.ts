/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBackgroundStateAware } from "./d-background";
import { DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DStateAware } from "./d-state-aware";
import { utilIsFunction } from "./util/util-is-function";

type Callback = () => void;

export class DBaseBackground implements DBackgroundStateAware {
	protected _theme: DThemeBase;
	protected _color?: DStateAware<number | null | undefined> | number | null;
	protected _alpha?: DStateAware<number | undefined> | number;
	protected _callback: Callback | undefined;

	constructor( theme: DThemeBase, options?: DBaseOptions<any>, callback?: Callback ) {
		this._theme = theme;
		this._callback = callback;
		if( options != null && options.background != null ) {
			const background = options.background;
			this._color = background.color;
			this._alpha = background.alpha;
		}
	}

	getTheme(): DThemeBase {
		return this._theme;
	}

	setTheme( theme: DThemeBase ): void {
		this._theme = theme;
	}

	getColor( state: DBaseState ): number | null {
		const color = this._color;
		if( color !== undefined ) {
			if( utilIsFunction( color ) ) {
				const result = color( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return color;
			}
		}
		return this._theme.getBackgroundColor( state );
	}

	get color(): DStateAware<number | null | undefined> | number | null | undefined {
		return this._color;
	}

	set color( color: DStateAware<number | null | undefined> | number | null | undefined ) {
		if( this._color !== color ) {
			this._color = color;
			this.onChange();
		}
	}

	getAlpha( state: DBaseState ): number {
		const alpha = this._alpha;
		if( alpha !== undefined ) {
			if( utilIsFunction( alpha ) ) {
				const result = alpha( state );
				if( result !== undefined ) {
					return result;
				}
			} else {
				return alpha;
			}
		}
		return this._theme.getBackgroundAlpha( state );
	}

	get alpha(): DStateAware<number | undefined> | number | undefined {
		return this._alpha;
	}

	set alpha( alpha: DStateAware<number | undefined> | number | undefined ) {
		if( this._alpha !== alpha ) {
			this._alpha = alpha;
			this.onChange();
		}
	}

	protected onChange(): void {
		const callback = this._callback;
		if( callback != null ) {
			callback();
		}
	}
}
