/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseOptions, DThemeBase } from "./d-base";
import { DPadding } from "./d-padding";
import { isNumber } from "./util/is-number";

type Callback = () => void;

export class DBasePadding implements DPadding {
	protected _theme: DThemeBase;
	protected _left?: number;
	protected _top?: number;
	protected _right?: number;
	protected _bottom?: number;
	protected _callback: Callback | undefined;

	constructor( theme: DThemeBase, options?: DBaseOptions<any>, callback?: () => void ) {
		this._theme = theme;
		this._callback = callback;

		if( options != null && options.padding != null ) {
			const padding = options.padding;
			if( isNumber( padding ) ) {
				this._left = padding;
				this._top = padding;
				this._right = padding;
				this._bottom = padding;
			} else {
				this._left = padding.left;
				this._top = padding.top;
				this._right = padding.right;
				this._bottom = padding.bottom;
			}
		}
	}

	getTheme(): DThemeBase {
		return this._theme;
	}

	setTheme( theme: DThemeBase ): void {
		this._theme = theme;
	}

	getLeft(): number {
		const left = this._left;
		return left !== undefined ? left : this._theme.getPaddingLeft();
	}

	get left(): number | undefined {
		return this._left;
	}

	set left( left: number | undefined ) {
		if( this._left !== left ) {
			this._left = left;
			if( this._callback != null ) {
				this._callback();
			}
		}
	}

	getTop(): number {
		const top = this._top;
		return top !== undefined ? top : this._theme.getPaddingTop();
	}

	get top(): number | undefined {
		return this._top;
	}

	set top( top: number | undefined ) {
		if( this._top !== top ) {
			this._top = top;
			if( this._callback != null ) {
				this._callback();
			}
		}
	}

	getRight(): number {
		const right = this._right;
		return right !== undefined ? right : this._theme.getPaddingRight();
	}

	get right(): number | undefined {
		return this._right;
	}

	set right( right: number | undefined ) {
		if( this._right !== right ) {
			this._right = right;
			if( this._callback != null ) {
				this._callback();
			}
		}
	}

	getBottom(): number {
		const bottom = this._bottom;
		return bottom !== undefined ? bottom : this._theme.getPaddingBottom();
	}

	get bottom(): number | undefined {
		return this._bottom;
	}

	set bottom( bottom: number | undefined ) {
		if( this._bottom !== bottom ) {
			this._bottom = bottom;
			if( this._callback != null ) {
				this._callback();
			}
		}
	}

	set( padding: number ): void;
	set( topAndBottom: number, leftAndRight: number ): void;
	set( top: number, leftAndRight: number, bottom: number ): void;
	set( top: number, right: number, bottom: number, left: number ): void;
	set( top: number, right?: number, bottom?: number, left?: number ) {
		if( right == null ) {
			this.top = top;
			this.right = top;
			this.bottom = top;
			this.left = top;
		} else if( bottom == null ) {
			this.top = top;
			this.right = right;
			this.bottom = top;
			this.left = right;
		} else if( left == null ) {
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
		if( this._callback != null ) {
			this._callback();
		}
	}
}
