/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInput, DInputOptions, DThemeInput } from "./d-input";
import {
	UtilInputTextArea,
	UtilInputTextAreaOptions,
	UtilThemeInputTextArea
} from "./util/util-input-text-area";

export interface DInputTextAreaOptions<THEME extends DThemeInputTextArea = DThemeInputTextArea>
	extends DInputOptions<string, HTMLTextAreaElement, THEME>,
		UtilInputTextAreaOptions {}

export interface DThemeInputTextArea
	extends DThemeInput<string, HTMLTextAreaElement>,
		UtilThemeInputTextArea {}

export class DInputTextArea<
	THEME extends DThemeInputTextArea = DThemeInputTextArea,
	OPTIONS extends DInputTextAreaOptions<THEME> = DInputTextAreaOptions<THEME>
> extends DInput<string, HTMLTextAreaElement, THEME, OPTIONS, UtilInputTextArea> {
	protected newUtil(): UtilInputTextArea {
		return new UtilInputTextArea(this, this.newOperation(), this.theme, this._options);
	}

	protected getType(): string {
		return "DInputTextArea";
	}
}
