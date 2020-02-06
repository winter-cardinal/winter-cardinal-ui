/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderTrackOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrack = DThemeSliderTrack
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderTrack extends DThemeButton {

}

export class DSliderTrack<
	VALUE = unknown,
	THEME extends DThemeSliderTrack = DThemeSliderTrack,
	OPTIONS extends DSliderTrackOptions<VALUE, THEME> = DSliderTrackOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderTrack";
	}
}
