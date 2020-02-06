/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DSliderRange, DSliderRangeOptions, DThemeSliderRange } from "./d-slider-range";
import { DSliderThumb } from "./d-slider-thumb";
import { DSliderTrack } from "./d-slider-track";
import { DSliderTrackHorizontal } from "./d-slider-track-horizontal";
import { DSliderTrackSelected } from "./d-slider-track-selected";
import { DSliderTrackSelectedHorizontal } from "./d-slider-track-selected-horizontal";
import { DSliderValue } from "./d-slider-value";

export interface DSliderRangeHorizontalOptions<
THEME extends DThemeSliderRangeHorizontal> extends DSliderRangeOptions<THEME> {

}

export interface DThemeSliderRangeHorizontal extends DThemeSliderRange {

}

// this is space beetween slider value and slider button
const VERTICAL_PIXEL_BALANCE = 2;

export class DSliderRangeHorizontal<
	THEME extends DThemeSliderRangeHorizontal = DThemeSliderRangeHorizontal,
	OPTIONS extends DSliderRangeHorizontalOptions<THEME> = DSliderRangeHorizontalOptions<THEME>
> extends DSliderRange<THEME, OPTIONS> {

	protected createTrack(): DSliderTrack {
		return new DSliderTrackHorizontal();
	}

	protected createValue(): DSliderValue {
		return new DSliderValue({
			y: 0
		});
	}

	protected createThumb(): DSliderThumb {
		return new DSliderThumb({
			x: 0,
			y: this._value.height + VERTICAL_PIXEL_BALANCE
		});
	}

	protected createTrackSelected(): DSliderTrackSelected {
		return new DSliderTrackSelectedHorizontal();
	}

	protected updateCoordinate(): void {
		this._trackSelected.width = 0;

		// calculate y-offset to determine y-coordinate of slider bar
		this._yOffset = this._value.height + VERTICAL_PIXEL_BALANCE +
						this._thumb.height / 2 - this._track.height / 2;
		this._track.y = this._yOffset;
		this._trackSelected.y = this._yOffset;

		this._trackWidth = Number(this._track.theme.getWidth());
		this._thumbWidth = Number(this._thumb.theme.getWidth());

		// this is offset beetween x-coordinate of slider value and slider button
		this._offset = this._value.width / 2 - this._thumb.width / 2;
		this._value.x = this._thumb.x - this._offset;
	}

	protected onPick( global: Point ) {
		const point = new Point(0, 0);
		this.toLocal( global, undefined, point );
		const x = Math.max( 0, Math.min( this._trackWidth, point.x ) );
		if ( x < this._thumbWidth / 2 ) {
			this._thumb.x = 0;
		} else if (x > (this._trackWidth - this._thumbWidth / 2)) {
			this._thumb.x = this._trackWidth - this._thumbWidth;
		} else {
			this._thumb.x = x - this._thumbWidth / 2;
		}
		this._ratioValue = x / this._trackWidth;
		this._trackSelected.width = this._thumb.x;
		this._value.x = this._thumb.x - this._offset;
	}

	updateThumb(min: number, max: number, value: number) {
		this._ratioValue = (value - min) / (max - min);
		const x =  this._ratioValue * this._trackWidth;
		if (x > (this._trackWidth - this._thumbWidth / 2)) {
			this._thumb.x = this._trackWidth - this._thumbWidth;
		} else {
			this._thumb.x = x;
		}
		this._trackSelected.width = this._thumb.x;
		this._value.x = this._thumb.x - this._offset;
		this._value.value = value;
		this._value.text = String(value);
	}

	protected getType(): string {
		return "DSliderRangeHorizontal";
	}
}
