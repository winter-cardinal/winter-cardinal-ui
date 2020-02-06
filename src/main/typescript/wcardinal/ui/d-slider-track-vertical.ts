/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSliderTrack, DSliderTrackOptions, DThemeSliderTrack } from "./d-slider-track";

export interface DSliderTrackVerticalOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrackVertical = DThemeSliderTrackVertical
> extends DSliderTrackOptions<VALUE, THEME> {

}

export interface DThemeSliderTrackVertical extends DThemeSliderTrack {

}

export class DSliderTrackVertical<
	VALUE = unknown,
	THEME extends DThemeSliderTrackVertical = DThemeSliderTrackVertical,
	OPTIONS extends DSliderTrackVerticalOptions<VALUE, THEME> = DSliderTrackVerticalOptions<VALUE, THEME>
> extends DSliderTrack<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderTrackVertical";
	}
}
