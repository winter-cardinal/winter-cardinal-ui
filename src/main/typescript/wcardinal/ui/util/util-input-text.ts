/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilInput, UtilInputOperation, UtilInputOptions, UtilInputTarget, UtilThemeInput } from "./util-input";

export interface UtilInputTextTarget extends UtilInputTarget {

}

export interface UtilInputTextOperation extends UtilInputOperation<string> {

}

export interface UtilInputTextOptions extends UtilInputOptions<string> {

}

export interface UtilThemeInputText extends UtilThemeInput<string> {

}

export class UtilInputText<
	TARGET extends UtilInputTextTarget = UtilInputTextTarget,
	OPERATION extends UtilInputTextOperation = UtilInputTextOperation,
	THEME extends UtilThemeInputText = UtilThemeInputText,
	OPTIONS extends UtilInputTextOptions = UtilInputTextOptions
> extends UtilInput<string, TARGET, OPERATION, THEME, OPTIONS> {
	protected getInputType(): string {
		return "text";
	}
}
