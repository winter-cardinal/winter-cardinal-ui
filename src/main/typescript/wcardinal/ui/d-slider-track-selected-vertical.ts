/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderBarChosenVerticalOptions<
	VALUE = unknown,
	THEME extends DThemeSliderBarChosenVertical = DThemeSliderBarChosenVertical
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderBarChosenVertical extends DThemeButton {

}

export class DSliderBarChosenVertical<
	VALUE = unknown,
	THEME extends DThemeSliderBarChosenVertical = DThemeSliderBarChosenVertical,
	OPTIONS extends DSliderBarChosenVerticalOptions<VALUE, THEME> = DSliderBarChosenVerticalOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderBarChosenVertical";
	}
}
