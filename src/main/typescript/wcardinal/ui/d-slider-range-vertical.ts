/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DSliderRange, DSliderRangeOptions, DThemeSliderRange } from "./d-slider-range";
import { DSliderThumb } from "./d-slider-thumb";
import { DSliderTrack } from "./d-slider-track";
import { DSliderTrackSelected } from "./d-slider-track-selected";
import { DSliderTrackSelectedVertical } from "./d-slider-track-selected-vertical";
import { DSliderTrackVertical } from "./d-slider-track-vertical";
import { DSliderValue } from "./d-slider-value";

export interface DSliderRangeVerticalOptions<
	THEME extends DThemeSliderRangeVertical = DThemeSliderRangeVertical,
> extends DSliderRangeOptions<THEME> {

}

export interface DThemeSliderRangeVertical extends DThemeSliderRange {

}

// this is space beetween slider value and slider button
const VERTICAL_PIXEL_BALANCE = 2;

export class DSliderRangeVertical<
	THEME extends DThemeSliderRangeVertical = DThemeSliderRangeVertical,
	OPTIONS extends DSliderRangeVerticalOptions<THEME> = DSliderRangeVerticalOptions<THEME>
> extends DSliderRange<THEME, OPTIONS> {

	protected createTrack(): DSliderTrack {
		return new DSliderTrackVertical();
	}

	protected createValue(): DSliderValue {
		return new DSliderValue({
			x: "CENTER"
		});
	}

	protected createThumb(): DSliderThumb {
		return new DSliderThumb({
			x: "CENTER"
		});
	}

	protected createTrackSelected(): DSliderTrackSelected {
		return new DSliderTrackSelectedVertical();
	}

	protected updateCoordinate(): void {
		this._yOffset = VERTICAL_PIXEL_BALANCE + this._value.height;
		this._track.y = this._yOffset;
		this._thumb.y = this.height - this._thumb.height;
		this._trackSelected.y = this._thumb.y;
		this._trackSelected.height = this.height - this._trackSelected.y;
		this._value.y = this._thumb.y - this._yOffset;

		this._trackHeight = this._track.theme.getHeight();
		this._thumbHeight = this._thumb.theme.getHeight();
	}

	protected onPick( global: Point ) {
		const point = new Point(0, 0);
		this.toLocal( global, undefined, point );
		const y = Math.max( this._yOffset, Math.min( this.height, point.y ) );
		if (y < (this._thumbHeight / 2 + this._yOffset)) {
			this._thumb.y = this._yOffset;
		} else if (y > (this.height - this._thumbHeight / 2)) {
			this._thumb.y = this.height - this._thumbHeight;
		} else {
			this._thumb.y = y - this._thumbHeight / 2;
		}
		this._ratioValue = (this.height - y) / this._track.height;
		this._trackSelected.y = this._thumb.y;
		this._trackSelected.height = this.height - this._trackSelected.y;
		this._value.y = this._thumb.y - this._yOffset;
	}

	updateThumb(min: number, max: number, value: number) {
		this._ratioValue = (value - min) / (max - min);
		const y = this.height - this._ratioValue * this._trackHeight;
		if (y > (this.height - this._thumbHeight / 2)) {
			this._thumb.y = this._trackHeight - this._thumbHeight;
		} else {
			this._thumb.y = y;
		}
		this._trackSelected.y = this._thumb.y;
		this._trackSelected.height = this.height - this._trackSelected.y;
		this._value.y = this._thumb.y - this._yOffset;
		this._value.value = value;
		this._value.text = String(value);
	}

	protected getType(): string {
		return "DSliderRangeVertical";
	}
}
