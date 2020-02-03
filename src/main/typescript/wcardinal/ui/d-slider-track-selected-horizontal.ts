/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderTrackSelectedHorizontalOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrackSelectedHorizontal = DThemeSliderTrackSelectedHorizontal
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderTrackSelectedHorizontal extends DThemeButton {

}

export class DSliderTrackSelectedHorizontal<
	VALUE = unknown,
	THEME extends DThemeSliderTrackSelectedHorizontal = DThemeSliderTrackSelectedHorizontal,
	OPTIONS extends DSliderTrackSelectedHorizontalOptions<VALUE, THEME>
	= DSliderTrackSelectedHorizontalOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderTrackSelectedHorizontal";
	}
}
