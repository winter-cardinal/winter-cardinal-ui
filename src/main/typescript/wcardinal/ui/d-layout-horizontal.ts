/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DLayout, DLayoutOptions, DThemeLayout } from "./d-layout";

export interface DLayoutHorizontalOptions<THEME extends DThemeLayoutHorizontal> extends DLayoutOptions<THEME> {

}

export interface DThemeLayoutHorizontal extends DThemeLayout {

}

export class DLayoutHorizontal<
	THEME extends DThemeLayoutHorizontal = DThemeLayoutHorizontal,
	OPTIONS extends DLayoutHorizontalOptions<THEME> = DLayoutHorizontalOptions<THEME>
> extends DLayout<THEME, OPTIONS> {
	protected getType(): string {
		return "DLayoutHorizontal";
	}
}
