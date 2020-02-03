/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderThumbOptions<
	VALUE = unknown,
	THEME extends DThemeSliderThumb = DThemeSliderThumb
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderThumb extends DThemeButton {

}

export class DSliderThumb<
	VALUE = unknown,
	THEME extends DThemeSliderThumb = DThemeSliderThumb,
	OPTIONS extends DSliderThumbOptions<VALUE, THEME> = DSliderThumbOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DSliderThumb";
	}
}
