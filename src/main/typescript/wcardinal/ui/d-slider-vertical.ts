/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSlider, DSliderOptions, DThemeSlider } from "./d-slider";
import { DSliderMax } from "./d-slider-max";
import { DSliderMin } from "./d-slider-min";
import { DSliderRange } from "./d-slider-range";
import { DSliderRangeVertical } from "./d-slider-range-vertical";

export interface DSliderVerticalOptions<
	THEME extends DThemeSliderVertical = DThemeSliderVertical
> extends DSliderOptions<THEME> {

}

export interface DThemeSliderVertical extends DThemeSlider {

}

export class DSliderVertical<
	THEME extends DThemeSliderVertical = DThemeSliderVertical,
	OPTIONS extends DSliderVerticalOptions<THEME> = DSliderVerticalOptions<THEME>
> extends DSlider<THEME, OPTIONS> {

	protected createRange(): DSliderRange {
		return new DSliderRangeVertical({
			y: 0
		});
	}

	protected createMax(): DSliderMax {
		return new DSliderMax({
			x: 0
		});
	}

	protected createMin(): DSliderMin {
		return new DSliderMin({
			x: 0
		});
	}

	protected updateCoordinate(): void {
		this._min.y = this._range.height - this._min.height;
		this._range.x = this._min.width;
		this._max.y = this._range.yOffset;
	}

	protected getType(): string {
		return "DSliderVertical";
	}
}
