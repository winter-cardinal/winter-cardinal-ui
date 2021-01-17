/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";

export interface DImageOptions<
	VALUE = unknown,
	THEME extends DThemeImage<VALUE> = DThemeImage<VALUE>
> extends DImageBaseOptions<VALUE, THEME> {

}

export interface DThemeImage<VALUE> extends DThemeImageBase<VALUE> {

}

export class DImage<
	VALUE = unknown,
	THEME extends DThemeImage<VALUE> = DThemeImage<VALUE>,
	OPTIONS extends DImageOptions<VALUE, THEME> = DImageOptions<VALUE, THEME>
> extends DImageBase<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DImage";
	}
}
