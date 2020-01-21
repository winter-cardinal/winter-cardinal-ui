/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderBarOptions<
	VALUE = unknown,
	THEME extends DThemeSliderBar = DThemeSliderBar
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderBar extends DThemeButton {

}

export class DSliderBar<
	VALUE = unknown,
	THEME extends DThemeSliderBar = DThemeSliderBar,
	OPTIONS extends DSliderBarOptions<VALUE, THEME> = DSliderBarOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderBar";
	}
}
