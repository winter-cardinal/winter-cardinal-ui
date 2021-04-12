/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSliderTrack, DSliderTrackOptions, DThemeSliderTrack } from "./d-slider-track";

export interface DSliderTrackVerticalOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrackVertical<VALUE> = DThemeSliderTrackVertical<VALUE>
> extends DSliderTrackOptions<VALUE, THEME> {}

export interface DThemeSliderTrackVertical<VALUE = unknown> extends DThemeSliderTrack<VALUE> {}

export class DSliderTrackVertical<
	VALUE = unknown,
	THEME extends DThemeSliderTrackVertical<VALUE> = DThemeSliderTrackVertical<VALUE>,
	OPTIONS extends DSliderTrackVerticalOptions<VALUE, THEME> = DSliderTrackVerticalOptions<
		VALUE,
		THEME
	>
> extends DSliderTrack<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DSliderTrackVertical";
	}
}
