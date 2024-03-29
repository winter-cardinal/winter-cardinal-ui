/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBasePaddingAdjustable } from "./d-base-padding-adjustable";
import { DInputText, DInputTextOptions, DThemeInputText } from "./d-input-text";

export interface DTableBodyCellInputTreeInputOptions<
	THEME extends DThemeTableBodyCellInputTreeInput = DThemeTableBodyCellInputTreeInput
> extends DInputTextOptions<THEME> {}

export interface DThemeTableBodyCellInputTreeInput extends DThemeInputText {}

export class DTableBodyCellInputTreeInput<
	THEME extends DThemeTableBodyCellInputTreeInput = DThemeTableBodyCellInputTreeInput,
	OPTIONS extends
		DTableBodyCellInputTreeInputOptions<THEME> = DTableBodyCellInputTreeInputOptions<THEME>
> extends DInputText<THEME, OPTIONS> {
	protected _padding!: DBasePaddingAdjustable;

	protected override newPadding(
		theme: THEME,
		options?: OPTIONS,
		callback?: () => void
	): DBasePaddingAdjustable {
		return new DBasePaddingAdjustable(theme, options, callback);
	}

	get padding(): DBasePaddingAdjustable {
		return this._padding;
	}

	protected getType(): string {
		return "DTableBodyCellInputTreeInput";
	}
}
