/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSliderTrack, DSliderTrackOptions, DThemeSliderTrack } from "./d-slider-track";

export interface DSliderTrackHorizontalOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrackHorizontal = DThemeSliderTrackHorizontal
> extends DSliderTrackOptions<VALUE, THEME> {

}

export interface DThemeSliderTrackHorizontal extends DThemeSliderTrack {

}

export class DSliderTrackHorizontal<
	VALUE = unknown,
	THEME extends DThemeSliderTrackHorizontal = DThemeSliderTrackHorizontal,
	OPTIONS extends DSliderTrackHorizontalOptions<VALUE, THEME> = DSliderTrackHorizontalOptions<VALUE, THEME>
> extends DSliderTrack<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderTrackHorizontal";
	}
}
