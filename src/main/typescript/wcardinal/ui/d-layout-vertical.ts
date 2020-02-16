/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DLayout, DLayoutOptions, DThemeLayout } from "./d-layout";

export interface DLayoutVerticalOptions<THEME extends DThemeLayoutVertical> extends DLayoutOptions<THEME> {

}

export interface DThemeLayoutVertical extends DThemeLayout {

}

export class DLayoutVertical<
	THEME extends DThemeLayoutVertical = DThemeLayoutVertical,
	OPTIONS extends DLayoutVerticalOptions<THEME> = DLayoutVerticalOptions<THEME>
> extends DLayout<THEME, OPTIONS> {
	protected getType(): string {
		return "DLayoutVertical";
	}
}
