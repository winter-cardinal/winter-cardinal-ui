/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputNumber, DInputNumberOptions, DThemeInputNumber } from "./d-input-number";

export interface DInputIntegerOptions<
	THEME extends DThemeInputInteger = DThemeInputInteger
> extends DInputNumberOptions<THEME> {

}

export interface DThemeInputInteger extends DThemeInputNumber {
}

export class DInputInteger<
	THEME extends DThemeInputInteger = DThemeInputInteger,
	OPTIONS extends DInputIntegerOptions<THEME> = DInputIntegerOptions<THEME>
> extends DInputNumber<THEME, OPTIONS> {
	protected getType(): string {
		return "DInputInteger";
	}
}
