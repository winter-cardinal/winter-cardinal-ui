/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderTrackOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrack<VALUE> = DThemeSliderTrack<VALUE>
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderTrack<VALUE = unknown> extends DThemeButton<VALUE> {

}

export class DSliderTrack<
	VALUE = unknown,
	THEME extends DThemeSliderTrack<VALUE> = DThemeSliderTrack<VALUE>,
	OPTIONS extends DSliderTrackOptions<VALUE, THEME> = DSliderTrackOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DSliderTrack";
	}
}
