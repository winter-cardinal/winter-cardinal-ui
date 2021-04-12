/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputAndLabel, DInputAndLabelOptions, DThemeInputAndLabel } from "./d-input-and-label";
import { DInputText, DInputTextOptions, DThemeInputText } from "./d-input-text";

export interface DInputTextAndLabelOptions<THEME extends DThemeInputAndLabel = DThemeInputAndLabel>
	extends DInputAndLabelOptions<DInputTextOptions, THEME> {}

export class DInputTextAndLabel<
	THEME extends DThemeInputAndLabel = DThemeInputAndLabel,
	OPTIONS extends DInputTextAndLabelOptions<THEME> = DInputTextAndLabelOptions<THEME>
> extends DInputAndLabel<DInputText, DInputTextOptions, THEME, OPTIONS> {
	protected createInput(options?: DInputTextOptions<DThemeInputText>): DInputText {
		return new DInputText(options);
	}
}
