/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";

export interface DImageOptions<
	VALUE = unknown,
	THEME extends DThemeImage = DThemeImage
> extends DImageBaseOptions<VALUE, THEME> {

}

export interface DThemeImage extends DThemeImageBase {

}

export class DImage<
	VALUE = unknown,
	THEME extends DThemeImage = DThemeImage,
	OPTIONS extends DImageOptions<VALUE, THEME> = DImageOptions<VALUE, THEME>
> extends DImageBase<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DImage";
	}
}
