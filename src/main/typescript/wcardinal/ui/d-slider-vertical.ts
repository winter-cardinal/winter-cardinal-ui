/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DSlider, DSliderOptions, DThemeSlider } from "./d-slider";
import { DSliderSize } from "./d-slider-size";
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

	protected newTrack(): DSliderTrack {
		return new DSliderTrackVertical();
	}

	protected newTrackSelected(): DSliderTrack {
		return new DSliderTrackVertical();
	}

	protected assertSize( options: OPTIONS ): void {
		if( options ) {
			if( options.height ) {
				this.setHeight( options.height );
			} else if( options.size ) {
				switch( options.size ) {
					case DSliderSize.LARGE:
						this.setHeight( 472 );
						break;
					case DSliderSize.SMALL:
						this.setHeight( 172 );
						break;
					default:
						this.setHeight( this.theme.getHeight() );
						break;
				}
			} else {
				this.setHeight( this.theme.getHeight() );
			}
		} else {
			this.setHeight( this.theme.getHeight() );
		}

		this.track.setHeight( this.height - this._value.height - VERTICAL_PIXEL_BALANCE );
		this.trackSelected.setHeight( this.track.height - VERTICAL_PIXEL_BALANCE );
	}

	protected updateCoordinates(): void {
		this._yOffset = VERTICAL_PIXEL_BALANCE + this._value.height;
		this._track.y = this._yOffset;
		this._thumb.y = this.height - this._thumb.height;
		this._trackSelected.y = this._thumb.y;
		this._trackSelected.height = this.height - this._trackSelected.y;
		this._value.y = this._thumb.y - this._yOffset;

		this._min.x = 0 - this._min.width;
		this._min.y = this.height - this._min.height;
		this._max.x = 0 - this._max.width;
		this._max.y = this.yOffset;

		this._value.setX( "CENTER" );
		this._thumb.setX( "CENTER" );
	}

	protected onPick( global: Point ) {
		const point = new Point( 0, 0 );
		this.toLocal( global, undefined, point );
		const y = Math.max( this._yOffset, Math.min( this.height, point.y ) );
		this._thumb.y = this.toThumbCoordinate( y );
		this._ratioValue = ( this.height - y ) / this._track.height;
		this._trackSelected.y = this._thumb.y;
		this._trackSelected.height = this.height - this._trackSelected.y;
		this._value.y = this._thumb.y - this._yOffset;
		this.updateValue( this._min.value, this._max.value );
	}

	protected updateThumb( min: number, max: number, value: number ) {
		this._ratioValue = ( value - min ) / ( max - min );
		const y = this.height - this._ratioValue * this._track.height;
		this._thumb.y = this.toThumbCoordinate( y );
		this._trackSelected.y = this._thumb.y;
		this._trackSelected.height = this.height - this._trackSelected.y;
		this._value.y = this._thumb.y - this._yOffset;
		this._value.value = value;
		this._value.text = value;
	}

	protected toThumbCoordinate( y: number ): number {
		if ( y < ( this._thumb.height / 2 + this._yOffset ) ) {
			return this._yOffset;
		} else if ( y > ( this.height - this.thumb.height / 2 ) ) {
			return this.height - this.thumb.height;
		} else {
			return y - this.thumb.height / 2;
		}
	}

	protected getType(): string {
		return "DSliderVertical";
	}
}
