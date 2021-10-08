/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInput, DInputOptions, DThemeInput } from "./d-input";
import {
	UtilInputInput,
	UtilInputInputOptions,
	UtilThemeInputInput
} from "./util/util-input-input";

export interface DInputInputOptions<
	VALUE = unknown,
	THEME extends DThemeInputInput<VALUE> = DThemeInputInput<VALUE>
> extends DInputOptions<VALUE, HTMLInputElement, THEME>,
		UtilInputInputOptions<VALUE> {}

export interface DThemeInputInput<VALUE>
	extends DThemeInput<VALUE, HTMLInputElement>,
		UtilThemeInputInput<VALUE> {}

export abstract class DInputInput<
	VALUE = unknown,
	THEME extends DThemeInputInput<VALUE> = DThemeInputInput<VALUE>,
	OPTIONS extends DInputInputOptions<VALUE, THEME> = DInputInputOptions<VALUE, THEME>,
	UTIL extends UtilInputInput<VALUE> = UtilInputInput<VALUE>
> extends DInput<VALUE, HTMLInputElement, THEME, OPTIONS, UTIL> {
	protected getType(): string {
		return "DInputInput";
	}
}
