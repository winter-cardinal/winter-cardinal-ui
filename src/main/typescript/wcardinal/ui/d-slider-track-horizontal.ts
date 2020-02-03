/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderTrackHorizontalOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrackHorizontal = DThemeSliderTrackHorizontal
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderTrackHorizontal extends DThemeButton {

}

export class DSliderTrackHorizontal<
	VALUE = unknown,
	THEME extends DThemeSliderTrackHorizontal = DThemeSliderTrackHorizontal,
	OPTIONS extends DSliderTrackHorizontalOptions<VALUE, THEME> = DSliderTrackHorizontalOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderTrackHorizontal";
	}
}
