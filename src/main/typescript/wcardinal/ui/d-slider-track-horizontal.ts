/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSliderTrack, DSliderTrackOptions, DThemeSliderTrack } from "./d-slider-track";

export interface DSliderTrackHorizontalOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrackHorizontal<VALUE> = DThemeSliderTrackHorizontal<VALUE>
> extends DSliderTrackOptions<VALUE, THEME> {

}

export interface DThemeSliderTrackHorizontal<VALUE = unknown> extends DThemeSliderTrack<VALUE> {

}

export class DSliderTrackHorizontal<
	VALUE = unknown,
	THEME extends DThemeSliderTrackHorizontal<VALUE> = DThemeSliderTrackHorizontal<VALUE>,
	OPTIONS extends DSliderTrackHorizontalOptions<VALUE, THEME> = DSliderTrackHorizontalOptions<VALUE, THEME>
> extends DSliderTrack<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DSliderTrackHorizontal";
	}
}
