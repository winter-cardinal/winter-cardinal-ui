/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderTrackSelectedVerticalOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrackSelectedVertical = DThemeSliderTrackSelectedVertical
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderTrackSelectedVertical extends DThemeButton {

}

export class DSliderTrackSelectedVertical<
	VALUE = unknown,
	THEME extends DThemeSliderTrackSelectedVertical = DThemeSliderTrackSelectedVertical,
	OPTIONS extends DSliderTrackSelectedVerticalOptions<VALUE, THEME> = DSliderTrackSelectedVerticalOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderTrackSelectedVertical";
	}
}
