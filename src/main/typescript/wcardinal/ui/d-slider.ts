/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderRange } from './d-slider-range';

export interface DSliderOptions<THEME extends DThemeSlider> extends DBaseOptions<THEME> {

}

export interface DThemeSlider extends DThemeBase {

}

export class DSlider<
	THEME extends DThemeSlider = DThemeSlider,
	OPTIONS extends DSliderOptions<THEME> = DSliderOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _sliderRange?: DSliderRange;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._sliderRange = new DSliderRange({
			y: 0
		});
		this.addChild(this._sliderRange);
	}
	protected getType(): string {
		return "DSlider";
	}

}
