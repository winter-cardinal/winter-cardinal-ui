/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputAndLabel, DInputAndLabelOptions, DThemeInputAndLabel } from "./d-input-and-label";
import { DInputInteger, DInputIntegerOptions, DThemeInputInteger } from "./d-input-integer";

export interface DInputIntegerAndLabelOptions<
	THEME extends DThemeInputAndLabel = DThemeInputAndLabel
> extends DInputAndLabelOptions<DInputIntegerOptions, THEME> {}

export class DInputIntegerAndLabel<
	THEME extends DThemeInputAndLabel = DThemeInputAndLabel,
	OPTIONS extends DInputIntegerAndLabelOptions<THEME> = DInputIntegerAndLabelOptions<THEME>
> extends DInputAndLabel<DInputInteger, DInputIntegerOptions, THEME, OPTIONS> {
	protected createInput( options?: DInputIntegerOptions<DThemeInputInteger> ): DInputInteger {
		return new DInputInteger( options );
	}
}
