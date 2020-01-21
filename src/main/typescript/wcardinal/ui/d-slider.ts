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
import { DSliderRange } from "./d-slider-range";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface SliderValues {
	min: number;
	max: number;
	value: number;
}

export interface DSliderOptions<THEME extends DThemeSlider> extends DBaseOptions<THEME> {

}

export interface DThemeSlider extends DThemeBase {

}

// this is space beetween min, range and max elements
const HORIZONTAL_PIXEL_BALANCE = 2;

export class DSlider<
	THEME extends DThemeSlider = DThemeSlider,
	OPTIONS extends DSliderOptions<THEME> = DSliderOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _minRange!: DSliderMin;
	protected _sliderRange!: DSliderRange;
	protected _maxRange!: DSliderMax;
	protected _onSliderButtonMove!: ( e: InteractionEvent ) => void;
	protected _onSliderButtonUp!: ( e: InteractionEvent ) => void;

	protected init( options?: OPTIONS ) {
		super.init( options );

		/* Init elements for slider */

		this._sliderRange = new DSliderRange({
			y: 0
		});
		this._minRange = new DSliderMin({
			x: 0
		});
		this._minRange.text = String(this._minRange.value);
		this._maxRange = new DSliderMax({});
		this._maxRange.text = String(this._maxRange.value);
		this._maxRange.x = this._minRange.width + this._sliderRange.width + HORIZONTAL_PIXEL_BALANCE;

		const sliderBar = this._sliderRange.sliderBar;
		const sliderBarChosen = this._sliderRange.sliderBarChosen;
		const sliderButton = this._sliderRange.sliderButton;

		// calculate y-offset to determine y-coordinate of slider mix, max
		const yOffset = this._sliderRange.yOffset -	(this._minRange.height / 2 - sliderBar.height / 2);
		this._minRange.y = yOffset;
		this._maxRange.y = yOffset;
		// calculate x-coordinate of slider max base on the widths of slier min, range
		this._maxRange.x = this._minRange.width + this._sliderRange.width + HORIZONTAL_PIXEL_BALANCE;

		this.addChild(this._minRange);
		this.addChild(this._sliderRange);
		this.addChild(this._maxRange);

		sliderBar.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			this.onsliderBarDown( e );
		});
		sliderBarChosen.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			this.onsliderBarChosenDown( e );
		});
		sliderButton.on(UtilPointerEvent.down, ( e: InteractionEvent ) => {
			this.onSliderButtonDown( e );
		});
		this._onSliderButtonMove = ( e: InteractionEvent ): void => {
			this.onSliderButtonMove();
		};
		this._onSliderButtonUp = ( e: InteractionEvent ): void => {
			this.onSliderButtonUp( e );
		};

	}
	protected onsliderBarDown(e: InteractionEvent ): void {
		this._sliderRange.updateSliderValue(this._minRange.value, this._maxRange.value);
	}
	protected onsliderBarChosenDown(e: InteractionEvent ): void {
		this._sliderRange.updateSliderValue(this._minRange.value, this._maxRange.value);
	}
	protected onSliderButtonDown(e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.move, this._onSliderButtonMove );
			stage.on( UtilPointerEvent.up, this._onSliderButtonUp );
		}
	}
	protected onSliderButtonUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.move, this._onSliderButtonMove );
			stage.off( UtilPointerEvent.up, this._onSliderButtonUp );
		}
	}
	protected onSliderButtonMove(): void {
		this._sliderRange.updateSliderValue(this._minRange.value, this._maxRange.value);
	}
	setSliderValues(sliderValues: SliderValues) {
		if (this.isSliderValuesValid(sliderValues)) {
			this._minRange.value = sliderValues.min;
			this._minRange.text = String(this._minRange.value);
			this._maxRange.value = sliderValues.max;
			this._maxRange.text = String(this._maxRange.value);
			this._sliderRange.updateSliderButton(sliderValues.min, sliderValues.max, sliderValues.value);
		}
	}
	getSliderValues(): SliderValues {
		return {
			min: this._minRange.value,
			max: this._maxRange.value,
			value: this._sliderRange.sliderValue
		};
	}
	isSliderValuesValid(sliderValues: SliderValues): boolean {
		if (sliderValues.max < sliderValues.min) {
			return false;
		}
		if (sliderValues.value < sliderValues.min || sliderValues.max < sliderValues.value) {
			return false;
		}
		return true;
	}
	protected getType(): string {

		return "DSlider";

	}

}
