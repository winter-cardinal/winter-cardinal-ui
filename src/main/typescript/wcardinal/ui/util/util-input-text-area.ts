/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	UtilInput,
	UtilInputOperation,
	UtilInputOptions,
	UtilInputTarget,
	UtilThemeInput
} from "./util-input";
import { UtilKeyboardEvent } from "./util-keyboard-event";

export interface UtilInputTextAreaTarget extends UtilInputTarget {}

export interface UtilInputTextAreaOperation
	extends UtilInputOperation<string, HTMLTextAreaElement> {}

export interface UtilInputTextAreaOptions extends UtilInputOptions<string, HTMLTextAreaElement> {}

export interface UtilThemeInputTextArea extends UtilThemeInput<string, HTMLTextAreaElement> {}

export class UtilInputTextArea<
	TARGET extends UtilInputTextAreaTarget = UtilInputTextAreaTarget,
	OPERATION extends UtilInputTextAreaOperation = UtilInputTextAreaOperation,
	THEME extends UtilThemeInputTextArea = UtilThemeInputTextArea,
	OPTIONS extends UtilInputTextAreaOptions = UtilInputTextAreaOptions
> extends UtilInput<string, HTMLTextAreaElement, TARGET, OPERATION, THEME, OPTIONS> {
	protected onElementAttached(
		element: HTMLTextAreaElement,
		before?: HTMLDivElement | null,
		after?: HTMLDivElement | null
	): void {
		element.addEventListener("keydown", this._onInputKeyDownBound);
		super.onElementAttached(element, before, after);
	}

	protected onElementDetached(
		element: HTMLTextAreaElement,
		before?: HTMLDivElement | null,
		after?: HTMLDivElement | null
	): void {
		element.removeEventListener("keydown", this._onInputKeyDownBound);
		super.onElementDetached(element, before, after);
	}

	protected onInputKeyDown(e: KeyboardEvent): void {
		if (UtilKeyboardEvent.isOkKey(e)) {
			this._operation.onEnter();
		}
	}
}
