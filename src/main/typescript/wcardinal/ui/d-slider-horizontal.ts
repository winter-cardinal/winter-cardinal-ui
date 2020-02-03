/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderMax } from "./d-slider-max";
import { DSliderMin } from "./d-slider-min";
import { DSliderRangeHorizontal } from "./d-slider-range-horizontal";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface SliderValues {
	min: number;
	max: number;
	value: number;
}

export interface DSliderHorizontalOptions<THEME extends DThemeSliderHorizontal> extends DBaseOptions<THEME> {

}

export interface DThemeSliderHorizontal extends DThemeBase {

}

// this is space beetween min, range and max elements
const HORIZONTAL_PIXEL_BALANCE = 2;

export class DSliderHorizontal<
	THEME extends DThemeSliderHorizontal = DThemeSliderHorizontal,
	OPTIONS extends DSliderHorizontalOptions<THEME> = DSliderHorizontalOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _min!: DSliderMin;
	protected _range!: DSliderRangeHorizontal;
	protected _max!: DSliderMax;
	protected _onThumbMove!: ( e: InteractionEvent ) => void;
	protected _onThumbUp!: ( e: InteractionEvent ) => void;

	protected init( options?: OPTIONS ) {
		super.init( options );

		/* Init elements for slider */

		this._range = new DSliderRangeHorizontal({
			y: 0
		});
		this._min = new DSliderMin({
			x: 0
		});
		this._min.text = String(this._min.value);
		this._max = new DSliderMax({});
		this._max.text = String(this._max.value);
		this._max.x = this._min.width + this._range.width + HORIZONTAL_PIXEL_BALANCE;

		const track = this._range.track;
		const trackSelected = this._range.trackSelected;
		const thumb = this._range.thumb;

		// calculate y-offset to determine y-coordinate of slider mix, max
		const yOffset = this._range.yOffset -	(this._min.height / 2 - track.height / 2);
		this._min.y = yOffset;
		this._max.y = yOffset;
		// calculate x-coordinate of slider max base on the widths of slier min, range
		this._max.x = this._min.width + this._range.width + HORIZONTAL_PIXEL_BALANCE;

		this.addChild(this._min);
		this.addChild(this._range);
		this.addChild(this._max);

		track.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			this.onTrackDown( e );
		});
		trackSelected.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			this.onTrackSelectedDown( e );
		});
		thumb.on(UtilPointerEvent.down, ( e: InteractionEvent ) => {
			this.onThumbDown( e );
		});
		this._onThumbMove = ( e: InteractionEvent ): void => {
			this.onThumbMove();
		};
		this._onThumbUp = ( e: InteractionEvent ): void => {
			this.onThumbUp( e );
		};

	}
	protected onTrackDown(e: InteractionEvent ): void {
		this._range.updateValue(this._min.value, this._max.value);
	}
	protected onTrackSelectedDown(e: InteractionEvent ): void {
		this._range.updateValue(this._min.value, this._max.value);
	}
	protected onThumbDown(e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.move, this._onThumbMove );
			stage.on( UtilPointerEvent.up, this._onThumbUp );
		}
	}
	protected onThumbUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.move, this._onThumbMove );
			stage.off( UtilPointerEvent.up, this._onThumbUp );
		}
	}
	protected onThumbMove(): void {
		this._range.updateValue(this._min.value, this._max.value);
	}
	setValues(values: SliderValues) {
		if (this.isValuesValid(values)) {
			this._min.value = values.min;
			this._min.text = String(this._min.value);
			this._max.value = values.max;
			this._max.text = String(this._max.value);
			this._range.updateThumb(values.min, values.max, values.value);
		}
	}
	getValues(): SliderValues {
		return {
			min: this._min.value,
			max: this._max.value,
			value: this._range.value
		};
	}
	isValuesValid(values: SliderValues): boolean {
		if (values.max < values.min) {
			return false;
		}
		if (values.value < values.min || values.max < values.value) {
			return false;
		}
		return true;
	}
	protected getType(): string {

		return "DSliderHorizontal";

	}

}
