/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderBar } from './d-slider-bar';
import { DSliderButton } from './d-slider-button';

export interface DSliderRangeOptions<THEME extends DThemeSliderRange> extends DBaseOptions<THEME> {

}

export interface DThemeSliderRange extends DThemeBase {

}

export class DSliderRange<
	THEME extends DThemeSliderRange = DThemeSliderRange,
	OPTIONS extends DSliderRangeOptions<THEME> = DSliderRangeOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _sliderBar?: DSliderBar;
	protected _sliderButton?: DSliderButton;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._sliderBar = new DSliderBar();
		this._sliderButton = new DSliderButton({
			x: "CENTER",
		});

		this.addChild(this._sliderBar);
		this.addChild(this._sliderButton);
	}
	protected getType(): string {
		return "DSliderRange";
	}


}
