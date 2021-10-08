/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	UtilInputInput,
	UtilInputInputOperation,
	UtilInputInputOptions,
	UtilInputInputTarget,
	UtilThemeInputInput
} from "./util-input-input";

export interface UtilInputTextTarget extends UtilInputInputTarget {}

export interface UtilInputTextOperation extends UtilInputInputOperation<string> {}

export interface UtilInputTextOptions extends UtilInputInputOptions<string> {}

export interface UtilThemeInputText extends UtilThemeInputInput<string> {}

export class UtilInputText<
	TARGET extends UtilInputTextTarget = UtilInputTextTarget,
	OPERATION extends UtilInputTextOperation = UtilInputTextOperation,
	THEME extends UtilThemeInputText = UtilThemeInputText,
	OPTIONS extends UtilInputTextOptions = UtilInputTextOptions
> extends UtilInputInput<string, TARGET, OPERATION, THEME, OPTIONS> {
	protected onElementAttached(
		element: HTMLInputElement,
		before?: HTMLDivElement | null,
		after?: HTMLDivElement | null
	): void {
		element.type = "text";
		super.onElementAttached(element, before, after);
	}
}
