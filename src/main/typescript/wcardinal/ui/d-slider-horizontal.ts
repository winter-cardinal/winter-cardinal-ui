/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSlider, DSliderOptions, DThemeSlider } from "./d-slider";
import { DSliderMax } from "./d-slider-max";
import { DSliderMin } from "./d-slider-min";
import { DSliderRange } from "./d-slider-range";
import { DSliderRangeHorizontal } from "./d-slider-range-horizontal";

export interface DSliderHorizontalOptions<THEME extends DThemeSliderHorizontal> extends DSliderOptions<THEME> {

}

export interface DThemeSliderHorizontal extends DThemeSlider {

}

// this is space beetween min, range and max elements
const HORIZONTAL_PIXEL_BALANCE = 2;

export class DSliderHorizontal<
	THEME extends DThemeSliderHorizontal = DThemeSliderHorizontal,
	OPTIONS extends DSliderHorizontalOptions<THEME> = DSliderHorizontalOptions<THEME>
> extends DSlider<THEME, OPTIONS> {

	protected createRange(): DSliderRange {
		return new DSliderRangeHorizontal({
			y: 0
		});
	}

	protected createMax(): DSliderMax {
		return new DSliderMax({});
	}

	protected createMin(): DSliderMin {
		return new DSliderMin({
			x: 0
		});
	}

	protected updateCoordinate(): void {
		this._min.y = this._range.yOffset - (this._min.height / 2 - this._range.track.height / 2);
		this._max.x = this._min.width + this._range.width + HORIZONTAL_PIXEL_BALANCE;
		this._max.y = this._range.yOffset - (this._min.height / 2 - this._range.track.height / 2);
	}

	protected getType(): string {

		return "DSliderHorizontal";

	}

}
