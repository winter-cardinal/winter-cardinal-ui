/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderTrackSelectedOptions<
	VALUE = unknown,
	THEME extends DThemeSliderTrackSelected = DThemeSliderTrackSelected
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderTrackSelected extends DThemeButton {

}

export class DSliderTrackSelected<
	VALUE = unknown,
	THEME extends DThemeSliderTrackSelected = DThemeSliderTrackSelected,
	OPTIONS extends DSliderTrackSelectedOptions<VALUE, THEME> = DSliderTrackSelectedOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderTrackSelected";
	}
}
