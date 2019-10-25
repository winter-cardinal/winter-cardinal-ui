/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DSliderRangeOptions<THEME extends DThemeSliderRange> extends DBaseOptions<THEME> {

}

export interface DThemeSliderRange extends DThemeBase {

}

export class DSliderRange<
	THEME extends DThemeSliderRange = DThemeSliderRange,
	OPTIONS extends DSliderRangeOptions<THEME> = DSliderRangeOptions<THEME>
> extends DBase<THEME, OPTIONS> {

}
