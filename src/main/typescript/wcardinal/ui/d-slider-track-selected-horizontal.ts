/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DSliderTrackSelected, DSliderTrackSelectedOptions, DThemeSliderTrackSelected
} from "./d-slider-track-selected";

export interface DSliderTrackSelectedHorizontalOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrackSelectedHorizontal = DThemeSliderTrackSelectedHorizontal
> extends DSliderTrackSelectedOptions<VALUE, THEME> {

}

export interface DThemeSliderTrackSelectedHorizontal extends DThemeSliderTrackSelected {

}

export class DSliderTrackSelectedHorizontal<
	VALUE = unknown,
	THEME extends DThemeSliderTrackSelectedHorizontal = DThemeSliderTrackSelectedHorizontal,
	OPTIONS extends DSliderTrackSelectedHorizontalOptions<VALUE, THEME>
	= DSliderTrackSelectedHorizontalOptions<VALUE, THEME>
> extends DSliderTrackSelected<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderTrackSelectedHorizontal";
	}
}
