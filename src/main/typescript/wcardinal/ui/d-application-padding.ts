/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeBase } from "./d-base";
import { DPadding } from "./d-padding";

export class DApplicationPadding implements DPadding {
	left: number;
	top: number;
	right: number;
	bottom: number;

	constructor( top: number, right: number, bottom: number, left: number ) {
		this.left = left;
		this.top = top;
		this.right = right;
		this.bottom = bottom;
	}

	getTheme(): DThemeBase {
		throw new Error( "Not supported" );
	}

	setTheme( theme: DThemeBase ): void {
		throw new Error( "Not supported" );
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

	set( padding: number ): void;
	set( topAndBottom: number, leftAndRight: number ): void;
	set( top: number, leftAndRight: number, bottom: number ): void;
	set( top: number, right?: number, bottom?: number, left?: number ): void {
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
	}
}
