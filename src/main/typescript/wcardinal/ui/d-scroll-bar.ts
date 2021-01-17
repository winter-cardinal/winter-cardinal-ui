/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DScrollBarThumb, DScrollBarThumbOptions } from "./d-scroll-bar-thumb";

export interface DScrollBarOptions extends DBaseOptions<DThemeScrollBar> {
	thumb?: DScrollBarThumbOptions;
}

export interface DThemeScrollBar extends DThemeBase {

}

export abstract class DScrollBar extends DBase<DThemeScrollBar, DScrollBarOptions> {
	protected _start!: number;
	protected _end!: number;
	protected _thumb!: DScrollBarThumb;

	protected init( options?: DScrollBarOptions ): void {
		super.init( options );

		this._start = 0;
		this._end = 1;
		const thumb = this._thumb = this.createThumb( options?.thumb );
		this.addChild( thumb );
		this.state.isFocusable = false;
	}

	get thumb(): DScrollBarThumb {
		return this._thumb;
	}

	protected abstract createThumb( options?: DScrollBarThumbOptions ): DScrollBarThumb;

	protected getType(): string {
		return "DScrollBar";
	}

	setRegion( start: number, end: number, size: number ): void {
		if( size < 1 ) {
			start = 0;
			end = 1;
		} else {
			start = Math.max( 0, Math.min( 1, start / size ) );
			end = Math.max( start, Math.min( 1, end / size ) );
		}
		if( this._start !== start || this._end !== end ) {
			this._start = start;
			this._end = end;
			this.onRegionChange();
		}
	}

	isRegionVisible(): boolean {
		return 0 < this._start || this._end < 1;
	}

	onResize( newWidth: number, newHeight: number, oldWidth: number, oldHeight: number ): void {
		super.onResize( newWidth, newHeight, oldWidth, oldHeight );
		this.onRegionChange();
	}

	onRegionChange(): void {
		// DO NOTHING
	}

	getRegionStart(): number {
		return this._start;
	}

	getRegionEnd(): number {
		return this._end;
	}
}
