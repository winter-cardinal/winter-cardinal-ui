/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputAndLabel, DInputAndLabelOptions, DThemeInputAndLabel } from "./d-input-and-label";
import { DInputReal, DInputRealOptions, DThemeInputReal } from "./d-input-real";

export interface DInputRealAndLabelOptions<THEME extends DThemeInputAndLabel = DThemeInputAndLabel>
	extends DInputAndLabelOptions<DInputRealOptions, THEME> {}

export class DInputRealAndLabel<
	THEME extends DThemeInputAndLabel = DThemeInputAndLabel,
	OPTIONS extends DInputRealAndLabelOptions<THEME> = DInputRealAndLabelOptions<THEME>
> extends DInputAndLabel<DInputReal, DInputRealOptions, THEME, OPTIONS> {
	protected createInput(options?: DInputRealOptions<DThemeInputReal>): DInputReal {
		return new DInputReal(options);
	}
}
