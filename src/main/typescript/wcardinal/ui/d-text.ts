/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";

export interface DTextOptions<
	VALUE = unknown,
	THEME extends DThemeText<VALUE> = DThemeText<VALUE>
> extends DTextBaseOptions<VALUE, THEME> {

}

export interface DThemeText<VALUE> extends DThemeTextBase<VALUE> {

}

export class DText<
	VALUE = unknown,
	THEME extends DThemeText<VALUE> = DThemeText<VALUE>,
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
