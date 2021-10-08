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

export interface UtilInputInputTarget extends UtilInputTarget {}

export interface UtilInputInputOperation<VALUE>
	extends UtilInputOperation<VALUE, HTMLInputElement> {}

export interface UtilInputInputOptions<VALUE> extends UtilInputOptions<VALUE, HTMLInputElement> {}

export interface UtilThemeInputInput<VALUE> extends UtilThemeInput<VALUE, HTMLInputElement> {}

export class UtilInputInput<
	VALUE = unknown,
	TARGET extends UtilInputInputTarget = UtilInputInputTarget,
	OPERATION extends UtilInputInputOperation<VALUE> = UtilInputInputOperation<VALUE>,
	THEME extends UtilThemeInputInput<VALUE> = UtilThemeInputInput<VALUE>,
	OPTIONS extends UtilInputInputOptions<VALUE> = UtilInputInputOptions<VALUE>
> extends UtilInput<VALUE, HTMLInputElement, TARGET, OPERATION, THEME, OPTIONS> {
	protected onElementAttached(
		element: HTMLInputElement,
		before?: HTMLDivElement | null,
		after?: HTMLDivElement | null
	): void {
		element.addEventListener("keydown", this._onInputKeyDownBound);
		super.onElementAttached(element, before, after);
	}

	protected onElementDetached(
		element: HTMLInputElement,
		before?: HTMLDivElement | null,
		after?: HTMLDivElement | null
	): void {
		element.removeEventListener("keydown", this._onInputKeyDownBound);
		super.onElementDetached(element, before, after);
	}
}
