/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";

export interface DSliderThumbOptions<
	VALUE = unknown,
	THEME extends DThemeSliderThumb<VALUE> = DThemeSliderThumb<VALUE>
> extends DButtonOptions<VALUE, THEME> {

}

export interface DThemeSliderThumb<VALUE> extends DThemeButton<VALUE> {

}

export class DSliderThumb<
	VALUE = unknown,
	THEME extends DThemeSliderThumb<VALUE> = DThemeSliderThumb<VALUE>,
	OPTIONS extends DSliderThumbOptions<VALUE, THEME> = DSliderThumbOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DSliderThumb";
	}
}
