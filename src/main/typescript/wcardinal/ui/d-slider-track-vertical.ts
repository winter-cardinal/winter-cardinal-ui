/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderTrackVerticalOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrackVertical = DThemeSliderTrackVertical
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderTrackVertical extends DThemeButton {

}

export class DSliderTrackVertical<
	VALUE = unknown,
	THEME extends DThemeSliderTrackVertical = DThemeSliderTrackVertical,
	OPTIONS extends DSliderTrackVerticalOptions<VALUE, THEME> = DSliderTrackVerticalOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderTrackVertical";
	}
}
