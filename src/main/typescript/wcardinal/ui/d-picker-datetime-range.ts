/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DPickerDatetimeRangeOptions<THEME extends DThemePickerDatetimeRange>
	extends DBaseOptions<THEME> {}

export interface DThemePickerDatetimeRange extends DThemeBase {}

export class DPickerDatetimeRange<
	THEME extends DThemePickerDatetimeRange = DThemePickerDatetimeRange,
	OPTIONS extends DPickerDatetimeRangeOptions<THEME> = DPickerDatetimeRangeOptions<THEME>
> extends DBase<THEME, OPTIONS> {}
