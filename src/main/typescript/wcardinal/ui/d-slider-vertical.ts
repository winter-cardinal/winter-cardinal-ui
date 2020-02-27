/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DSlider, DSliderOptions, DThemeSlider } from "./d-slider";
import { DSliderTrack } from "./d-slider-track";
import { DSliderTrackVertical } from "./d-slider-track-vertical";

export interface DSliderVerticalOptions<
	THEME extends DThemeSliderVertical = DThemeSliderVertical
> extends DSliderOptions<THEME> {

}

export interface DThemeSliderVertical extends DThemeSlider {

}

// this is space beetween slider value and slider button
const VERTICAL_PIXEL_BALANCE = 2;

export class DSliderVertical<
	THEME extends DThemeSliderVertical = DThemeSliderVertical,
	OPTIONS extends DSliderVerticalOptions<THEME> = DSliderVerticalOptions<THEME>
> extends DSlider<THEME, OPTIONS> {

	protected newTrack( options?: OPTIONS ): DSliderTrack {
		return new DSliderTrackVertical( options && options.track );
	}

	protected newTrackSelected( options?: OPTIONS ): DSliderTrack {
		return new DSliderTrackVertical( options && options.track );
	}

	protected adjustSize(): void {
		this._track.setHeight( this.height - this._value.height - VERTICAL_PIXEL_BALANCE );
		this._trackSelected.setHeight( this._track.height - VERTICAL_PIXEL_BALANCE );
		this._trackSelected.setWidth( this._track.width );
	}

	protected updateCoordinates(): void {
		this._yOffset = VERTICAL_PIXEL_BALANCE + this._value.height;
		this._track.y = this._yOffset;
		this._thumb.y = this.height - this._thumb.height;

		const trackSelected = this._trackSelected;
		trackSelected.y = this._thumb.y;
		trackSelected.height = this.height - trackSelected.y;
		this._value.y = this._thumb.y - this._yOffset;

		const min = this._min;
		min.x = 0 - min.width;
		min.y = this.height - min.height;

		const max = this._max;
		max.x = 0 - max.width;
		max.y = this._yOffset;

		this._value.setX( "CENTER" );
		this._thumb.setX( "CENTER" );
	}

	protected onPick( global: Point ): void {
		const point = new Point( 0, 0 );
		this.toLocal( global, undefined, point );
		const y = Math.max( this._yOffset, Math.min( this.height, point.y ) );
		this._ratioValue = ( this.height - y ) / this._track.height;
		this.updateChildren( y );
	}

	protected updateThumb(): void {
		const min = this._min.value;
		const max = this._max.value;
		const value = this._value.value;
		this._ratioValue = ( value - min ) / ( max - min );
		const y = this.height - this._ratioValue * this._track.height;
		this.updateChildren( y );
	}

	protected updateChildren( y: number ): void {
		this._thumb.y = this.toThumbCoordinate( y );
		this._trackSelected.y = this._thumb.y;
		this._trackSelected.height = this.height - this._trackSelected.y;
		this._value.y = this._thumb.y - this._yOffset;
		this.updateValue();
	}

	protected toThumbCoordinate( y: number ): number {
		if ( y < ( this._thumb.height / 2 + this._yOffset ) ) {
			return this._yOffset;
		} else if ( y > ( this.height - this._thumb.height / 2 ) ) {
			return this.height - this._thumb.height;
		} else {
			return y - this._thumb.height / 2;
		}
	}

	protected getType(): string {
		return "DSliderVertical";
	}
}
