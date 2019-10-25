/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DText, DTextOptions, DThemeText } from "./d-text";

export interface DInputLabelOptions<
	VALUE = unknown,
	THEME extends DThemeText = DThemeText
> extends DTextOptions<VALUE, THEME> {

}

export interface DThemeInputLabel extends DThemeText {

}

export class DInputLabel<
	VALUE = unknown,
	THEME extends DThemeInputLabel = DThemeInputLabel,
	OPTIONS extends DInputLabelOptions<VALUE, THEME> = DInputLabelOptions<VALUE, THEME>
> extends DText<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DInputLabel";
	}
}
