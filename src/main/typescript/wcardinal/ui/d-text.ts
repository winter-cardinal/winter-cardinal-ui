/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";

export interface DTextOptions<
	VALUE = unknown,
	THEME extends DThemeText = DThemeText
> extends DTextBaseOptions<VALUE, THEME> {

}

export interface DThemeText extends DThemeTextBase {

}

export class DText<
	VALUE = unknown,
	THEME extends DThemeText = DThemeText,
	OPTIONS extends DTextOptions<VALUE, THEME> = DTextOptions<VALUE, THEME>
> extends DTextBase<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
		this.state.isFocusable = false;
	}

	protected getType(): string {
		return "DText";
	}
}
