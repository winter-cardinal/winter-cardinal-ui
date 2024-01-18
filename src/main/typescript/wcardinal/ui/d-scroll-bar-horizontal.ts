/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent } from "pixi.js";
import { DScrollBar, DScrollBarOptions, DThemeScrollBar } from "./d-scroll-bar";
import { DScrollBarThumb, DScrollBarThumbOptions } from "./d-scroll-bar-thumb";
import { DScrollBarThumbHorizontal } from "./d-scroll-bar-thumb-horizontal";

export class DScrollBarHorizontal<
	THEME extends DThemeScrollBar = DThemeScrollBar,
	OPTIONS extends DScrollBarOptions<THEME> = DScrollBarOptions<THEME>
> extends DScrollBar<THEME, OPTIONS> {
	constructor(options?: OPTIONS) {
		super(options);
		this._thumb.on("regionmove", (x: number): void => {
			this.onThumbRegionMove(x);
		});
	}

	protected onThumbRegionMove(x: number): void {
		const width = this.width;
		if (0 < width) {
			const size = this._end - this._start;
			const newStart = Math.min(1 - size, Math.max(0, x / width));
			if (this._start !== newStart) {
				this.emit("regionmove", newStart, this);
			}
		}
	}

	protected onDownThis(e: InteractionEvent): void {
		super.onDownThis(e);

		const width = this.width;
		if (0 < width) {
			const size = this._end - this._start;
			const position = e.data.getLocalPosition(this);
			const newStart = Math.min(1 - size, Math.max(0, position.x / width - size * 0.5));
			if (this._start !== newStart) {
				this.emit("regionmove", newStart, this);
			}
		}
	}

	protected newThumb(options?: DScrollBarThumbOptions): DScrollBarThumb {
		return new DScrollBarThumbHorizontal(options);
	}

	protected updateThumb(width: number, height: number): void {
		const thumb = this._thumb;
		const thumbMinimumLength = Math.min(width * 0.5, thumb.getMinimumLength());
		const space = width - thumbMinimumLength;
		const barStart = space * this._start;
		const barLength = space * this._end + thumbMinimumLength - barStart;

		thumb.position.set(barStart, 0);
		thumb.resize(barLength, height);
	}
}
