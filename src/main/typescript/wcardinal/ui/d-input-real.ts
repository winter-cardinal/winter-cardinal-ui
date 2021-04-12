/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputNumber, DInputNumberOptions, DThemeInputNumber } from "./d-input-number";

export interface DInputRealOptions<THEME extends DThemeInputReal = DThemeInputReal>
	extends DInputNumberOptions<THEME> {}

export interface DThemeInputReal extends DThemeInputNumber {}

export class DInputReal<
	THEME extends DThemeInputReal = DThemeInputReal,
	OPTIONS extends DInputRealOptions<THEME> = DInputRealOptions<THEME>
> extends DInputNumber<THEME, OPTIONS> {
	protected getType(): string {
		return "DInputReal";
	}
}
