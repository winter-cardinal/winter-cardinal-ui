/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DScrollBar, DScrollBarOptions, DThemeScrollBar } from "./d-scroll-bar";
import { DScrollBarThumb, DScrollBarThumbOptions } from "./d-scroll-bar-thumb";
import { DScrollBarThumbVertical } from "./d-scroll-bar-thumb-vertical";

export class DScrollBarVertical<
	THEME extends DThemeScrollBar = DThemeScrollBar,
	OPTIONS extends DScrollBarOptions<THEME> = DScrollBarOptions<THEME>
> extends DScrollBar<THEME, OPTIONS> {
	constructor(options?: OPTIONS) {
		super(options);
		this._thumb.on("regionmove", (y: number): void => {
			this.onThumbRegionMove(y);
		});
	}

	protected onThumbRegionMove(y: number): void {
		const height = this.height;
		if (0 < height) {
			const size = this._end - this._start;
			const newStart = Math.min(1 - size, Math.max(0, y / height));
			if (this._start !== newStart) {
				this.emit("regionmove", newStart, this);
			}
		}
	}

	protected onDownThis(e: InteractionEvent): void {
		super.onDownThis(e);

		const height = this.height;
		if (0 < height) {
			const size = this._end - this._start;
			const position = e.data.getLocalPosition(this);
			const newStart = Math.min(1 - size, Math.max(0, position.y / height - size * 0.5));
			if (this._start !== newStart) {
				this.emit("regionmove", newStart, this);
			}
		}
	}

	protected newThumb(options?: DScrollBarThumbOptions): DScrollBarThumb {
		return new DScrollBarThumbVertical(options);
	}

	protected updateThumb(width: number, height: number): void {
		const thumb = this._thumb;
		const thumbMinimumLength = Math.min(height * 0.5, thumb.getMinimumLength());
		const space = height - thumbMinimumLength;
		const barStart = space * this._start;
		const barLength = space * this._end + thumbMinimumLength - barStart;

		thumb.position.set(0, barStart);
		thumb.resize(width, barLength);
	}
}
