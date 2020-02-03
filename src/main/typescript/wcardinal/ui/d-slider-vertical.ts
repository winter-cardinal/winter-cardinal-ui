/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { SliderValues } from "./d-slider-horizontal";
import { DSliderMax } from "./d-slider-max";
import { DSliderMin } from "./d-slider-min";
import { DSliderRangeVertical } from "./d-slider-range-vertical";
import InteractionEvent = interaction.InteractionEvent;
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DSliderVerticalOptions<
	THEME extends DThemeSliderVertical = DThemeSliderVertical
> extends DBaseOptions<THEME> {

}

export interface DThemeSliderVertical extends DThemeBase {

}

export class DSliderVertical<
	THEME extends DThemeSliderVertical = DThemeSliderVertical,
	OPTIONS extends DSliderVerticalOptions<THEME> = DSliderVerticalOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _min!: DSliderMin;
	protected _range!: DSliderRangeVertical;
	protected _max!: DSliderMax;
	protected _onThumbMove!: ( e: InteractionEvent ) => void;
	protected _onThumbUp!: ( e: InteractionEvent ) => void;

	protected init( options?: OPTIONS ) {
		super.init( options );

		/* Init elements for slider */
		this._range = new DSliderRangeVertical({
			y: 0
		});
		this._min = new DSliderMin({
			x: 0
		});
		this._min.text = String(this._min.value);
		this._max = new DSliderMax({
			x: 0
		});
		this._max.text = String(this._max.value);
		// calculate x,y coordinate for slider elements
		this._range.x = this._min.width;
		this._min.y = this._range.height - this._min.height;
		this._max.y = this._range.Yoffset;
		this._range.updateValue(this._min.value, this._max.value);

		this.addChild(this._min);
		this.addChild(this._range);
		this.addChild(this._max);

		const track = this._range.track;
		const trackSelected = this._range.trackSelected;
		const thumb = this._range.thumb;
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
		return "DSliderVertical";
	}
}
