/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DScrollBar, DScrollBarOptions } from "./d-scroll-bar";
import { DScrollBarThumb, DScrollBarThumbOptions } from "./d-scroll-bar-thumb";
import { DScrollBarThumbVertocal } from "./d-scroll-bar-thumb-vertical";
import { UtilPointerEvent } from "./util/util-pointer-event";

export class DScrollBarVertical extends DScrollBar {
	protected init(options?: DScrollBarOptions): void {
		super.init(options);

		this.on(UtilPointerEvent.down, (e: InteractionEvent): void => {
			if (e.target === this) {
				const height = this.height;
				if (0 < height) {
					const size = this._end - this._start;
					const position = e.data.getLocalPosition(this);
					const newStart = Math.min(
						1 - size,
						Math.max(0, position.y / height - size * 0.5)
					);
					if (this._start !== newStart) {
						this.emit("regionmove", newStart, this);
					}
				}
				e.stopPropagation();
			}
		});

		this._thumb.on("regionmove", (y: number): void => {
			const height = this.height;
			if (0 < height) {
				const size = this._end - this._start;
				const newStart = Math.min(1 - size, Math.max(0, y / height));
				if (this._start !== newStart) {
					this.emit("regionmove", newStart, this);
				}
			}
		});
	}

	protected createThumb(options?: DScrollBarThumbOptions): DScrollBarThumb {
		return new DScrollBarThumbVertocal(options);
	}

	onRegionChange(): void {
		const thumb = this._thumb;
		const width = this.width;
		const height = this.height;
		const thumbMinimumLength = Math.min(height * 0.5, thumb.getMinimumLength());
		const space = height - thumbMinimumLength;
		const barStart = space * this._start;
		const barLength = space * this._end + thumbMinimumLength - barStart;

		thumb.position.set(0, barStart);
		thumb.resize(width, barLength);

		super.onRegionChange();
	}
}
