/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderBarChosenOptions<
	VALUE = unknown,
	THEME extends DThemeSliderBarChosen = DThemeSliderBarChosen
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderBarChosen extends DThemeButton {

}

export class DSliderBarChosen<
	VALUE = unknown,
	THEME extends DThemeSliderBarChosen = DThemeSliderBarChosen,
	OPTIONS extends DSliderBarChosenOptions<VALUE, THEME> = DSliderBarChosenOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
    protected init( options?: OPTIONS ) {
		super.init( options );
    }
    protected getType(): string {
		return "DSliderBarChosen";
    }
}
