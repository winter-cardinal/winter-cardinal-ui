/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DText, DTextOptions, DThemeText } from "./d-text";

export interface DInputLabelOptions<
	VALUE = unknown,
	THEME extends DThemeText<VALUE> = DThemeText<VALUE>
> extends DTextOptions<VALUE, THEME> {

}

export interface DThemeInputLabel<VALUE> extends DThemeText<VALUE> {

}

export class DInputLabel<
	VALUE = unknown,
	THEME extends DThemeInputLabel<VALUE> = DThemeInputLabel<VALUE>,
	OPTIONS extends DInputLabelOptions<VALUE, THEME> = DInputLabelOptions<VALUE, THEME>
> extends DText<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DInputLabel";
	}
}
