/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DSliderOptions<THEME extends DThemeSlider> extends DBaseOptions<THEME> {

}

export interface DThemeSlider extends DThemeBase {

}

export class DSlider<
	THEME extends DThemeSlider = DThemeSlider,
	OPTIONS extends DSliderOptions<THEME> = DSliderOptions<THEME>
> extends DBase<THEME, OPTIONS> {

}
