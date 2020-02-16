/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeBase } from "./d-base";
import { DPadding } from "./d-padding";

export interface DBasePaddingAdjuster {
	left: number;
	top: number;
	right: number;
	bottom: number;
}

export class DBasePaddingAdjustable implements DPadding {
	protected _target: DPadding;
	protected _adjuster: DBasePaddingAdjuster;

	constructor( target: DPadding ) {
		this._target = target;
		this._adjuster = {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		};
	}

	get adjuster(): DBasePaddingAdjuster {
		return this._adjuster;
	}

	getTheme(): DThemeBase {
		return this._target.getTheme();
	}

	setTheme( theme: DThemeBase ): void {
		this._target.setTheme( theme );
	}

	getLeft(): number {
		return this._target.getLeft() + this._adjuster.left;
	}

	get left(): number | undefined {
		return this._target.left;
	}

	set left( left: number | undefined ) {
		this._target.left = left;
	}

	getTop(): number {
		return this._target.getTop() + this._adjuster.top;
	}

	get top(): number | undefined {
		return this._target.top;
	}

	set top( top: number | undefined ) {
		this._target.top = top;
	}

	getRight(): number {
		return this._target.getRight() + this._adjuster.right;
	}

	get right(): number | undefined {
		return this._target.right;
	}

	set right( right: number | undefined ) {
		this._target.right = right;
	}

	getBottom(): number {
		return this._target.getBottom() + this._adjuster.bottom;
	}

	get bottom(): number | undefined {
		return this._target.bottom;
	}

	set bottom( bottom: number | undefined ) {
		this._target.bottom = bottom;
	}

	set( padding: number ): void;
	set( topAndBottom: number, leftAndRight: number ): void;
	set( top: number, leftAndRight: number, bottom: number ): void;
	set( top: number, right: number, bottom: number, left: number ): void;
	set( top: number, right?: number, bottom?: number, left?: number ) {
		this._target.set( top, right!, bottom!, left! );
	}
}
