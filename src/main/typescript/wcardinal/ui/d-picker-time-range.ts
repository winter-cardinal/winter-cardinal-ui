/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DPickerTimeRangeOptions<THEME extends DThemePickerTimeRange> extends DBaseOptions<THEME> {

}

export interface DThemePickerTimeRange extends DThemeBase {

}

export class DPickerTimeRange<
	THEME extends DThemePickerTimeRange = DThemePickerTimeRange,
	OPTIONS extends DPickerTimeRangeOptions<THEME> = DPickerTimeRangeOptions<THEME>
> extends DBase<THEME, OPTIONS> {

}
