/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderBarVerticalOptions<
	VALUE = unknown,
	THEME extends DThemeSliderBarVertical = DThemeSliderBarVertical
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderBarVertical extends DThemeButton {

}

export class DSliderBarVertical<
	VALUE = unknown,
	THEME extends DThemeSliderBarVertical = DThemeSliderBarVertical,
	OPTIONS extends DSliderBarVerticalOptions<VALUE, THEME> = DSliderBarVerticalOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderBarVertical";
	}
}
