/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DSliderTrackSelected, DSliderTrackSelectedOptions, DThemeSliderTrackSelected
} from "./d-slider-track-selected";

export interface DSliderTrackSelectedVerticalOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrackSelectedVertical = DThemeSliderTrackSelectedVertical
> extends DSliderTrackSelectedOptions<VALUE, THEME> {

}

export interface DThemeSliderTrackSelectedVertical extends DThemeSliderTrackSelected {

}

export class DSliderTrackSelectedVertical<
	VALUE = unknown,
	THEME extends DThemeSliderTrackSelectedVertical = DThemeSliderTrackSelectedVertical,
	OPTIONS extends DSliderTrackSelectedVerticalOptions<VALUE, THEME> = DSliderTrackSelectedVerticalOptions<VALUE, THEME>
> extends DSliderTrackSelected<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderTrackSelectedVertical";
	}
}
