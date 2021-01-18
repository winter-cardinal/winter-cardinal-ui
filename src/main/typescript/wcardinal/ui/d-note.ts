/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DText, DTextOptions, DThemeText } from "./d-text";

export interface DNoteOptions<
	VALUE = unknown,
	THEME extends DThemeNote<VALUE> = DThemeNote<VALUE>
> extends DTextOptions<VALUE, THEME> {

}

export interface DThemeNote<VALUE = unknown> extends DThemeText<VALUE> {

}

export class DNote<
	VALUE = unknown,
	THEME extends DThemeNote<VALUE> = DThemeNote<VALUE>,
	OPTIONS extends DNoteOptions<VALUE, THEME> = DNoteOptions<VALUE, THEME>
> extends DText<VALUE, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
		this.visible = false;
	}

	protected getType(): string {
		return "DNote";
	}
}
