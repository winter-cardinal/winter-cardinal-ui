/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderRange } from './d-slider-range';
import { DSliderMin } from './d-slider-min';
import { DSliderMax } from './d-slider-max';

export interface DSliderOptions<THEME extends DThemeSlider> extends DBaseOptions<THEME> {

}

export interface DThemeSlider extends DThemeBase {

}

const HORIZONTAL_PIXEL_BALANCE = 2;

export class DSlider<
	THEME extends DThemeSlider = DThemeSlider,
	OPTIONS extends DSliderOptions<THEME> = DSliderOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _minRange?: DSliderMin;
	protected _sliderRange?: DSliderRange;
	protected _maxRange?: DSliderMax;

	protected init( options?: OPTIONS ) {
		super.init( options );

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
		
		this.addChild(this._minRange);
		this.addChild(this._sliderRange);
		this.addChild(this._maxRange);
	}
	protected getType(): string {
		return "DSlider";
	}

}
