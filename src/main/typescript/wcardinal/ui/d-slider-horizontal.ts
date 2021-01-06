/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DSlider, DSliderOptions, DThemeSlider } from "./d-slider";
import { DSliderLabelOptions } from "./d-slider-label";
import { DSliderTrack } from "./d-slider-track";
import { DSliderTrackHorizontal } from "./d-slider-track-horizontal";
import { DSliderValueOptions } from "./d-slider-value";

export interface DSliderHorizontalOptions<THEME extends DThemeSliderHorizontal> extends DSliderOptions<THEME> {

}

export interface DThemeSliderHorizontal extends DThemeSlider {

}

export class DSliderHorizontal<
	THEME extends DThemeSliderHorizontal = DThemeSliderHorizontal,
	OPTIONS extends DSliderHorizontalOptions<THEME> = DSliderHorizontalOptions<THEME>
> extends DSlider<THEME, OPTIONS> {
	protected newTrack( options?: OPTIONS ): DSliderTrack {
		return new DSliderTrackHorizontal( options && options.track );
	}

	protected newTrackSelected( options?: OPTIONS ): DSliderTrack {
		return new DSliderTrackHorizontal( options && options.track );
	}

	protected toValueOptions( options?: DSliderValueOptions ): DSliderValueOptions {
		options = super.toValueOptions( options );
		if( options.y == null ) {
			options.y = ( p, s ) => p * 0.5 - s - this.getValueMargin();
		}
		return options;
	}

	protected toLabelMinOptions( options?: DSliderLabelOptions ): DSliderLabelOptions {
		options = super.toLabelMinOptions( options );
		if( options.x == null ) {
			options.x = ( p, s ) => -s * 0.5;
		}
		if( options.y == null ) {
			options.y = ( p, s ) => -s;
		}
		return options;
	}

	protected toLabelMaxOptions( options?: DSliderLabelOptions ): DSliderLabelOptions {
		options = super.toLabelMaxOptions( options );
		if( options.x == null ) {
			options.x = ( p, s ) => p - s * 0.5;
		}
		if( options.y == null ) {
			options.y = ( p, s ) => -s;
		}
		return options;
	}

	protected onPick( global: Point ): void {
		const point = new Point(0, 0);
		this.toLocal( global, undefined, point );
		const x = Math.max( 0, Math.min( this._track.width, point.x ) );
		this._ratioValue = x / this._track.width;
		this.moveThumbPosition( x );
	}

	protected onValuesChange(): void {
		const min = this._min.value;
		const max = this._max.value;
		const value = this._value.value;
		this._ratioValue = ( value - min ) / ( max - min );
		const x =  this._ratioValue * this._track.width;
		this.moveThumbPosition( x );
	}

	protected moveThumbPosition( x: number ): void {
		const thumb = this._thumb;
		thumb.x = x - thumb.width * 0.5;

		this._trackSelected.width = x;

		const value = this._value;
		value.x = x - value.width * 0.5;

		this.updateValue();
	}

	protected toThumbCoordinate( x: number ): number {
		return x - this._thumb.width * 0.5;
	}

	protected getType(): string {
		return "DSliderHorizontal";
	}
}
