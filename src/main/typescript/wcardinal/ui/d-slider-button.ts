/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderButtonOptions<
	VALUE = unknown,
	THEME extends DThemeSliderButton = DThemeSliderButton
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderButton extends DThemeButton {

}

export class DSliderButton<
	VALUE = unknown,
	THEME extends DThemeSliderButton = DThemeSliderButton,
	OPTIONS extends DSliderButtonOptions<VALUE, THEME> = DSliderButtonOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
    protected init( options?: OPTIONS ) {
		super.init( options );
    }
    protected getType(): string {
		return "DSliderButton";
    }
}