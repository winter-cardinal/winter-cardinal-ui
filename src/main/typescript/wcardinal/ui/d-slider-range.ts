/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderBarChosen } from './d-slider-bar-chosen';
import { DSliderBar } from './d-slider-bar';
import { DSliderButton } from './d-slider-button';
import { DSliderValue } from "./d-slider-value";

export interface DSliderRangeOptions<THEME extends DThemeSliderRange> extends DBaseOptions<THEME> {

}

export interface DThemeSliderRange extends DThemeBase {

}

// RATIO to calculate slider value from min, max values. 
// Default ratio is zero mean default slider value is zero
const DEFAULT_RATIO = 0;
// this is space beetween slider value and slider button
const VERTICAL_PIXEL_BALANCE = 2;

export class DSliderRange<
	THEME extends DThemeSliderRange = DThemeSliderRange,
	OPTIONS extends DSliderRangeOptions<THEME> = DSliderRangeOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _sliderBar?: DSliderBar;
	protected _sliderButton?: DSliderButton;
	protected _sliderBarChosen?: DSliderBarChosen;
	protected _sliderValue?: DSliderValue;
	protected _sliderBarWidth!: number;
	protected _sliderButtonWidth!: number;
	protected _offset?: number;
	protected _yOffset?: number;
	protected _ratioValue?: number;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._ratioValue = DEFAULT_RATIO;

		this._sliderValue = new DSliderValue({
			y: 0
		});
		this._sliderValue.text = this._sliderValue.value;
		this._sliderBar = new DSliderBar();
		this._sliderButton = new DSliderButton({
			x: 0,
			y: this._sliderValue.height + VERTICAL_PIXEL_BALANCE
		});
		this._sliderBarChosen = new DSliderBarChosen();
		this._sliderBarChosen.width = 0;

		// calculate y-offset to determine y-coordinate of slider bar
		this._yOffset = this._sliderValue.height + VERTICAL_PIXEL_BALANCE + this._sliderButton.height / 2 - this._sliderBar.height / 2;
		this._sliderBar.y = this._yOffset;
		this._sliderBarChosen.y = this._yOffset;

		this._sliderBarWidth = Number(this._sliderBar.theme.getWidth());
		this._sliderButtonWidth = Number(this._sliderButton.theme.getWidth());

		// this is offset beetween x-coordinate of slider value and slider button
		this._offset = this._sliderValue.width / 2 - this._sliderButton.width / 2;
		this._sliderValue.x = this._sliderButton.x - this._offset;

		this.addChild(this._sliderBar);
		this.addChild(this._sliderBarChosen);
		this.addChild(this._sliderButton);
		this.addChild(this._sliderValue);
		
	}
	get sliderButton() : DSliderButton | null {
		if (this._sliderButton) {
			return this._sliderButton;
		}
		return null;
	}
	get sliderBar() : DSliderBar | null {
		if (this._sliderBar) {
			return this._sliderBar;
		}
		return null;
	}
	get sliderBarChosen() : DSliderBarChosen | null {
		if (this._sliderBarChosen) {
			return this._sliderBarChosen;
		}
		return null;
	}
	get yOffset(): number{
		if (this._yOffset) {
			return this._yOffset;
		}
		return 0;
	}
	protected getType(): string {
		return "DSliderRange";
	}


}
